import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, "src", "content", "media-imports.json");
const outputRoot = path.join(ROOT, "public", "media", "projects");

const HERO_MIN_WIDTH = 1800;
const HERO_MIN_HEIGHT = 1100;
const HERO_OUTPUT_WIDTH = 2400;
const GALLERY_MIN_WIDTH = 1200;
const GALLERY_MIN_HEIGHT = 800;
const GALLERY_OUTPUT_WIDTH = 1800;

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

function required(args, key) {
  if (!args[key]) {
    throw new Error(`Missing --${key}`);
  }
  return String(args[key]);
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function readManifest() {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch {
    return {};
  }
}

function mediaKey(project, slot) {
  return `${project}.${slot}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const project = slugify(required(args, "project"));
  const slot = slugify(required(args, "slot"));
  const input = path.resolve(required(args, "input"));
  const id = slugify(args.id ? String(args.id) : `${project}-${slot}`);
  const isHero = slot === "hero";
  const minWidth = isHero ? HERO_MIN_WIDTH : GALLERY_MIN_WIDTH;
  const minHeight = isHero ? HERO_MIN_HEIGHT : GALLERY_MIN_HEIGHT;
  const outputWidth = isHero ? HERO_OUTPUT_WIDTH : GALLERY_OUTPUT_WIDTH;

  await stat(input);

  const image = sharp(input);
  const sourceMetadata = await image.metadata();
  const sourceWidth = sourceMetadata.width ?? 0;
  const sourceHeight = sourceMetadata.height ?? 0;

  if (sourceWidth < minWidth || sourceHeight < minHeight) {
    throw new Error(
      `${input} is too small for ${slot}. Got ${sourceWidth}x${sourceHeight}; required at least ${minWidth}x${minHeight}.`
    );
  }

  const masterDir = path.join(outputRoot, project, "master");
  const generatedDir = path.join(outputRoot, project, "generated");
  await mkdir(masterDir, { recursive: true });
  await mkdir(generatedDir, { recursive: true });

  const masterName = `${id}-master.webp`;
  const masterPath = path.join(masterDir, masterName);
  const masterPublicPath = `/media/projects/${project}/master/${masterName}`;

  await sharp(input).rotate().webp({ quality: 94, effort: 5 }).toFile(masterPath);

  const outputName = `${id}.webp`;
  const outputPath = path.join(generatedDir, outputName);
  const publicPath = `/media/projects/${project}/generated/${outputName}`;

  const resized = sharp(masterPath).resize({
    width: outputWidth,
    withoutEnlargement: true,
  });

  await resized.webp({ quality: 84, effort: 5 }).toFile(outputPath);
  const outputMetadata = await sharp(outputPath).metadata();

  const manifest = await readManifest();
  manifest[mediaKey(project, slot)] = {
    id,
    type: "image",
    src: publicPath,
    width: outputMetadata.width,
    height: outputMetadata.height,
    aspectRatio: args.aspectRatio ? String(args.aspectRatio) : undefined,
    focalPoint: {
      x: Number(args.focalX ?? 50),
      y: Number(args.focalY ?? 50),
    },
    cropMode: args.cropMode === "contain" ? "contain" : "cover",
    alt: {
      en: required(args, "altEn"),
      tr: required(args, "altTr"),
    },
    caption: {
      en: String(args.captionEn ?? args.altEn),
      tr: String(args.captionTr ?? args.altTr),
    },
    credit: args.credit ? String(args.credit) : undefined,
    copyright: args.copyright ? String(args.copyright) : undefined,
    source: args.source ? String(args.source) : undefined,
    masterSrc: masterPublicPath,
    approvalStatus: args.approvalStatus === "approved" ? "approved" : "pending",
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(`Imported ${input}`);
  console.log(`Wrote ${publicPath}`);
  console.log(`Updated ${path.relative(ROOT, manifestPath)} -> ${mediaKey(project, slot)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
