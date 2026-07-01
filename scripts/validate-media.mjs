import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, "src", "content", "media-imports.json");
const HERO_MIN_WIDTH = 1800;
const HERO_MIN_HEIGHT = 1100;

const manifest = JSON.parse((await readFile(manifestPath, "utf8")).replace(/^\uFEFF/, ""));
const errors = [];

for (const [key, media] of Object.entries(manifest)) {
  if (!media || media.type !== "image") continue;
  if (media.aspectRatio && media.aspectRatio !== "16 / 9") {
    errors.push(`${key} must use a 16 / 9 media window, got ${media.aspectRatio}.`);
  }
  if (!media.alt?.en?.trim() || !media.alt?.tr?.trim()) {
    errors.push(`${key} is missing English or Turkish alt text.`);
  }
  if (key.endsWith(".hero") && media.approvalStatus === "approved") {
    const isApprovedPanorama = media.cropMode === "contain" && (media.width ?? 0) >= HERO_MIN_WIDTH && (media.height ?? 0) >= 450;
    if (!isApprovedPanorama && ((media.width ?? 0) < HERO_MIN_WIDTH || (media.height ?? 0) < HERO_MIN_HEIGHT)) {
      errors.push(`${key} is approved for hero use but only ${media.width ?? 0}x${media.height ?? 0}.`);
    }
  }

  if (media.src?.startsWith("/")) {
    const publicFile = path.join(ROOT, "public", media.src);
    try {
      await readFile(publicFile);
    } catch {
      errors.push(`${key} points to missing public file: ${media.src}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Media manifest OK");
