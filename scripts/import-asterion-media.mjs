import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const ROOT = process.cwd();
const SOURCE_ROOT = process.env.ASTERION_SOURCE_DIR || "C:\\Users\\MUSE VR\\Desktop\\Asterion";
const manifestPath = path.join(ROOT, "src", "content", "media-imports.json");
const outputRoot = path.join(ROOT, "public", "media", "projects");

const selectedAssets = [
  {
    key: "beyond-istanbul.hero",
    project: "beyond-istanbul",
    input: "beyond_1.jpg",
    id: "beyond-istanbul-panorama",
    cropMode: "contain",
    aspectRatio: "16 / 9",
    focalPoint: { x: 50, y: 50 },
    alt: {
      en: "Panoramic visual from Beyond Istanbul.",
      tr: "Beyond Istanbul projesinden panoramik görsel.",
    },
    caption: {
      en: "Beyond Istanbul, principal project image.",
      tr: "Beyond Istanbul, ana proje görseli.",
    },
    approvalStatus: "approved",
    allowPanorama: true,
  },
  {
    key: "orta-blueskyer-nft.hero",
    project: "orta-blueskyer-nft",
    input: path.join("ORTA_NFT", "orta_blueskyert.jpg"),
    id: "orta-blueskyer-nft",
    cropMode: "cover",
    aspectRatio: "16 / 10",
    focalPoint: { x: 50, y: 46 },
    alt: {
      en: "Visual reference for ORTA's Blueskyer NFT.",
      tr: "ORTA Blueskyer NFT için görsel referans.",
    },
    caption: {
      en: "The Blueskyer NFT, historical project reference.",
      tr: "The Blueskyer NFT, tarihsel proje referansı.",
    },
    credit: "ORTA / historical project reference",
    source: "https://ortaanadolu.com/metadenimverse-of-orta/",
    approvalStatus: "pending",
  },
  {
    key: "water-reverie-app.hero",
    project: "water-reverie-app",
    input: path.join("WaterRevApp", "mobilhero_2.png"),
    id: "water-reverie-app-hero",
    cropMode: "cover",
    aspectRatio: "16 / 10",
    focalPoint: { x: 50, y: 48 },
    alt: {
      en: "Visual reference from the Water Reverie mobile application.",
      tr: "Water Reverie mobil uygulamasından görsel referans.",
    },
    caption: {
      en: "Water Reverie mobile application, selected interface visual.",
      tr: "Water Reverie mobil uygulaması, seçili arayüz görseli.",
    },
    approvalStatus: "pending",
  },
  {
    key: "water-reverie-vr.hero",
    project: "water-reverie-vr",
    input: path.join("Water_Reverie", "waterreveriehero.jpg"),
    id: "water-reverie-vr-hero",
    cropMode: "cover",
    aspectRatio: "16 / 10",
    focalPoint: { x: 50, y: 48 },
    alt: {
      en: "Visual reference from the Water Reverie VR film.",
      tr: "Water Reverie VR filminden görsel referans.",
    },
    caption: {
      en: "Water Reverie VR film, selected production visual.",
      tr: "Water Reverie VR filmi, seçili prodüksiyon görseli.",
    },
    approvalStatus: "pending",
  },
  {
    key: "osman-hamdi-bey.gallery.context",
    project: "osman-hamdi-bey",
    input: "OsmanHamdi3.PNG",
    id: "osman-hamdi-context-600",
    cropMode: "contain",
    aspectRatio: "4 / 3",
    focalPoint: { x: 50, y: 50 },
    alt: {
      en: "Contextual documentation image from the Osman Hamdi Bey museum experience.",
      tr: "Osman Hamdi Bey müze deneyiminden bağlamsal dokümantasyon görseli.",
    },
    caption: {
      en: "Contextual documentation image, preserved at 4:3 composition.",
      tr: "4:3 kompozisyonu korunmuş bağlamsal dokümantasyon görseli.",
    },
    approvalStatus: "pending",
    noHero: true,
  },
];

const derivatives = [
  { name: "thumb", width: 800, format: "webp", quality: 82 },
  { name: "content", width: 1400, format: "webp", quality: 84 },
  { name: "hero", width: 2400, format: "webp", quality: 86 },
  { name: "mobile", width: 1000, format: "webp", quality: 84 },
  { name: "og", width: 1200, height: 630, format: "jpg", quality: 86 },
];

async function readManifest() {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch {
    return {};
  }
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function publicPath(project, file) {
  return `/media/projects/${project}/${file}`;
}

async function writeDerivative(source, outputPath, asset, derivative) {
  let pipeline = sharp(source).rotate();
  if (derivative.height) {
    pipeline = pipeline.resize({
      width: derivative.width,
      height: derivative.height,
      fit: asset.cropMode === "contain" ? "contain" : "cover",
      background: { r: 9, g: 10, b: 12 },
      position: "attention",
      withoutEnlargement: true,
    });
  } else {
    pipeline = pipeline.resize({
      width: derivative.width,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (derivative.format === "jpg") {
    await pipeline.jpeg({ quality: derivative.quality, mozjpeg: true }).toFile(outputPath);
  } else {
    await pipeline.webp({ quality: derivative.quality, effort: 5 }).toFile(outputPath);
  }
}

async function importAsset(asset, manifest) {
  const source = path.join(SOURCE_ROOT, asset.input);
  if (!(await exists(source))) {
    console.log(`SKIP missing: ${source}`);
    return;
  }

  const sourceMetadata = await sharp(source).metadata();
  const width = sourceMetadata.width ?? 0;
  const height = sourceMetadata.height ?? 0;
  const isTooSmallForHero = !asset.noHero && !asset.allowPanorama && (width < 1200 || height < 600);
  if (isTooSmallForHero) {
    console.log(`SKIP ${asset.key}: ${width}x${height} is too small for principal media.`);
    return;
  }

  const outDir = path.join(outputRoot, asset.project);
  await mkdir(outDir, { recursive: true });

  const sources = {};
  for (const derivative of derivatives) {
    if (asset.noHero && derivative.name === "hero") continue;
    const extension = derivative.format === "jpg" ? "jpg" : "webp";
    const file = `${asset.id}-${derivative.name}.${extension}`;
    const outputPath = path.join(outDir, file);
    await writeDerivative(source, outputPath, asset, derivative);
    sources[derivative.name] = publicPath(asset.project, file);
    console.log(`IMPORTED ${asset.key} -> ${sources[derivative.name]}`);
  }

  manifest[asset.key] = {
    id: asset.id,
    type: "image",
    src: sources.hero ?? sources.content,
    mobileSrc: sources.mobile,
    ogSrc: sources.og,
    sources: {
      thumbnail: sources.thumb,
      content: sources.content,
      hero: sources.hero,
      mobile: sources.mobile,
      og: sources.og,
    },
    width,
    height,
    aspectRatio: asset.aspectRatio,
    cropMode: asset.cropMode,
    focalPoint: asset.focalPoint,
    desktopFocalPoint: asset.focalPoint,
    mobileFocalPoint: asset.mobileFocalPoint ?? asset.focalPoint,
    alt: asset.alt,
    caption: asset.caption,
    credit: asset.credit,
    source: asset.source,
    sourcePath: asset.input,
    approvalStatus: asset.approvalStatus,
  };
}

async function main() {
  console.log(`Using ASTERION_SOURCE_DIR=${SOURCE_ROOT}`);
  const manifest = await readManifest();
  for (const asset of selectedAssets) {
    await importAsset(asset, manifest);
  }
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Updated ${path.relative(ROOT, manifestPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
