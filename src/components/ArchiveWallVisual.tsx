"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";

type ArchiveWallVisualProps = {
  alt: string;
  locale: "en" | "tr";
  tags?: string[];
  showArchivePreview?: boolean;
};

type GlobePoint = {
  lat: number;
  lon: number;
};

const markers = [
  { key: "photographs", label: { en: "Photographs", tr: "Fotograflar" }, lat: 39, lon: -96 },
  { key: "letters", label: { en: "Letters", tr: "Mektuplar" }, lat: 50, lon: 14 },
  { key: "documents", label: { en: "Documents", tr: "Belgeler" }, lat: 38, lon: 36 },
  { key: "audio", label: { en: "Audio", tr: "Ses" }, lat: 22, lon: 78 },
  { key: "video", label: { en: "Video", tr: "Video" }, lat: -25, lon: 134 },
  { key: "metadata", label: { en: "Metadata", tr: "Metadata" }, lat: -16, lon: -58 },
  { key: "timeline", label: { en: "Timeline", tr: "Zaman" }, lat: 4, lon: 21 },
  { key: "collections", label: { en: "Collections", tr: "Koleksiyonlar" }, lat: 60, lon: 100 },
];

export function ArchiveWallVisual({ alt, locale, tags = [], showArchivePreview = false }: ArchiveWallVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const dragRef = useRef({ active: false, lastX: 0, velocity: 0 });
  const rotationRef = useRef({ x: -0.18, y: 0.2, targetX: -0.18, targetY: 0.2 });

  useEffect(() => {
    if (!canvasRef.current) return;
    const currentCanvas = canvasRef.current;

    const maybeContext = currentCanvas.getContext("2d", { alpha: true });
    if (!maybeContext) return;
    const context: CanvasRenderingContext2D = maybeContext;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    const start = performance.now();
    let canvasReady = false;

    function resize() {
      const rect = currentCanvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      currentCanvas.width = Math.floor(width * pixelRatio);
      currentCanvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function draw(now: number) {
      const elapsed = (now - start) / 1000;
      context.clearRect(0, 0, width, height);

      if (dragRef.current.active) {
        rotationRef.current.y += dragRef.current.velocity;
        dragRef.current.velocity *= 0.82;
      } else {
        rotationRef.current.y += dragRef.current.velocity;
        dragRef.current.velocity *= 0.94;
      }

      rotationRef.current.targetY = reduceMotion ? rotationRef.current.y : 0.18 + elapsed * 0.06 + pointerRef.current.x * 0.18;
      rotationRef.current.targetX = -0.1 + pointerRef.current.y * -0.1;
      rotationRef.current.x += (rotationRef.current.targetX - rotationRef.current.x) * 0.055;
      if (!dragRef.current.active && Math.abs(dragRef.current.velocity) < 0.002) {
        rotationRef.current.y += (rotationRef.current.targetY - rotationRef.current.y) * 0.018;
      }

      drawGlobe(context, width, height, rotationRef.current.x, rotationRef.current.y, elapsed, locale);
      if (!canvasReady) {
        currentCanvas.parentElement?.setAttribute("data-canvas-ready", "true");
        canvasReady = true;
      }

      if (!reduceMotion) {
        frameRef.current = requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    draw(performance.now());

    return () => {
      window.removeEventListener("resize", resize);
      currentCanvas.parentElement?.removeAttribute("data-canvas-ready");
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [locale]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    if (dragRef.current.active) {
      const delta = event.clientX - dragRef.current.lastX;
      dragRef.current.velocity = delta * 0.0072;
      rotationRef.current.y += dragRef.current.velocity;
      dragRef.current.lastX = event.clientX;
    }

    pointerRef.current = { x, y, active: true };
    event.currentTarget.style.setProperty("--archive-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--archive-y", y.toFixed(3));
    event.currentTarget.parentElement?.style.setProperty("--archive-x", x.toFixed(3));
    event.currentTarget.parentElement?.style.setProperty("--archive-y", y.toFixed(3));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragRef.current = { active: true, lastX: event.clientX, velocity: 0 };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    dragRef.current.active = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
    event.currentTarget.classList.remove("is-dragging");
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    dragRef.current.active = false;
    pointerRef.current = { x: 0, y: 0, active: false };
    event.currentTarget.style.setProperty("--archive-x", "0");
    event.currentTarget.style.setProperty("--archive-y", "0");
    event.currentTarget.parentElement?.style.setProperty("--archive-x", "0");
    event.currentTarget.parentElement?.style.setProperty("--archive-y", "0");
    event.currentTarget.classList.remove("is-dragging");
  }

  return (
    <div
      className="archive-wall-visual-stack"
      style={{ "--archive-x": "0", "--archive-y": "0" } as CSSProperties}
    >
      <div
        className="archive-memory-globe relative min-h-[20rem] overflow-hidden md:min-h-[34rem] lg:mt-0"
        style={{ aspectRatio: "16 / 9" }}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        role="img"
        aria-label={alt}
      >
        <svg className="archive-globe-static" viewBox="0 0 1000 560" aria-hidden="true">
          <g className="archive-globe-static-grid">
            {staticGlobeGridLines.map((line, index) => (
              <polyline key={index} points={line} vectorEffect="non-scaling-stroke" />
            ))}
          </g>
          <g className="archive-globe-static-points">
            {staticGlobePoints.map((point, index) => (
              <circle key={index} cx={point.x} cy={point.y} r={point.r} opacity={point.opacity} />
            ))}
          </g>
          <g className="archive-globe-static-markers">
            {staticGlobeMarkers
              .filter((marker) => marker.visible)
              .map((marker) => {
                const label = marker.label[locale];
                const labelWidth = Math.max(58, label.length * 6.2 + 18);

                return (
                  <g key={marker.key} transform={`translate(${marker.x} ${marker.y})`} opacity={marker.opacity}>
                    <circle className="archive-globe-static-marker-dot" cx="0" cy="0" r="4.5" />
                    <rect className="archive-globe-static-marker-label-bg" x="10" y="-13" width={labelWidth} height="22" />
                    <text className="archive-globe-static-marker-label" x="18" y="2">
                      {label}
                    </text>
                  </g>
                );
              })}
          </g>
        </svg>
        <canvas ref={canvasRef} className="archive-globe-canvas" aria-hidden="true" />
      </div>
      {showArchivePreview ? (
        <div className="archive-wall-preview-card">
          <Image
            src="/media/archive-wall.png"
            alt={alt}
            fill
            sizes="(min-width: 1024px) 24vw, 52vw"
            className="archive-wall-preview-image"
          />
        </div>
      ) : null}
      {tags.length > 0 ? (
        <div className="archive-wall-proof">
          {tags.map((tag, index) => (
            <div key={tag} className="archive-wall-proof-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function drawGlobe(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  rotationX: number,
  rotationY: number,
  elapsed: number,
  locale: "en" | "tr"
) {
  const centerX = width * 0.52;
  const centerY = height * 0.67;
  const radius = Math.min(width * 0.44, height * 0.62);

  context.save();
  context.globalCompositeOperation = "source-over";

  drawGrid(context, centerX, centerY, radius, rotationX, rotationY);
  drawPoints(context, centerX, centerY, radius, rotationX, rotationY);
  drawArcs(context, centerX, centerY, radius, rotationX, rotationY, elapsed);
  drawMarkers(context, centerX, centerY, radius, rotationX, rotationY, elapsed, locale, width > 620);

  context.restore();
}

function drawGrid(context: CanvasRenderingContext2D, cx: number, cy: number, radius: number, rotationX: number, rotationY: number) {
  context.lineWidth = 1;

  for (let lat = -60; lat <= 60; lat += 20) {
    drawProjectedLine(context, cx, cy, radius, rotationX, rotationY, range(-180, 180, 5).map((lon) => ({ lat, lon })));
  }

  for (let lon = -150; lon <= 180; lon += 30) {
    drawProjectedLine(context, cx, cy, radius, rotationX, rotationY, range(-70, 70, 4).map((lat) => ({ lat, lon })));
  }
}

function drawProjectedLine(
  context: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  rotationX: number,
  rotationY: number,
  coordinates: Array<{ lat: number; lon: number }>
) {
  let drawing = false;
  let previousAlpha = 0;

  for (const coordinate of coordinates) {
    const point = project(coordinate.lat, coordinate.lon, radius, rotationX, rotationY);
    const alpha = point.z < 0 ? 0.035 : 0.12;
    const x = cx + point.x;
    const y = cy + point.y;

    if (!drawing || Math.abs(alpha - previousAlpha) > 0.02) {
      if (drawing) context.stroke();
      context.beginPath();
      context.strokeStyle = `rgba(233, 229, 220, ${alpha})`;
      context.moveTo(x, y);
      drawing = true;
    } else {
      context.lineTo(x, y);
    }

    previousAlpha = alpha;
  }

  if (drawing) context.stroke();
}

function drawPoints(context: CanvasRenderingContext2D, cx: number, cy: number, radius: number, rotationX: number, rotationY: number) {
  for (const coordinate of archivePoints) {
    const point = project(coordinate.lat, coordinate.lon, radius, rotationX, rotationY);
    const depth = (point.z + 1) / 2;
    const size = 1.25;
    const alpha = point.z < 0 ? 0.05 + depth * 0.13 : 0.2 + depth * 0.55;

    context.fillStyle = `rgba(215, 255, 47, ${alpha})`;
    context.beginPath();
    context.arc(cx + point.x, cy + point.y, size, 0, Math.PI * 2);
    context.fill();
  }
}

function drawArcs(context: CanvasRenderingContext2D, cx: number, cy: number, radius: number, rotationX: number, rotationY: number, elapsed: number) {
  const pairs = [
    [markers[0], markers[2]],
    [markers[1], markers[4]],
    [markers[5], markers[3]],
  ] as const;

  for (const [from, to] of pairs) {
    const fromPoint = project(from.lat, from.lon, radius, rotationX, rotationY);
    const toPoint = project(to.lat, to.lon, radius, rotationX, rotationY);
    if (fromPoint.z <= -0.2 || toPoint.z <= -0.2) continue;

    const midX = (fromPoint.x + toPoint.x) / 2;
    const midY = (fromPoint.y + toPoint.y) / 2 - radius * 0.22;
    const pulse = 0.52 + Math.sin(elapsed * 1.4) * 0.18;

    context.strokeStyle = `rgba(215, 255, 47, ${pulse})`;
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(cx + fromPoint.x, cy + fromPoint.y);
    context.quadraticCurveTo(cx + midX, cy + midY, cx + toPoint.x, cy + toPoint.y);
    context.stroke();
  }
}

function drawMarkers(
  context: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  rotationX: number,
  rotationY: number,
  elapsed: number,
  locale: "en" | "tr",
  showLabels: boolean
) {
  for (let index = 0; index < markers.length; index += 1) {
    const marker = markers[index];
    const point = project(marker.lat, marker.lon, radius, rotationX, rotationY);
    if (point.z <= -0.1) continue;

    const depth = (point.z + 1) / 2;
    const x = cx + point.x;
    const y = cy + point.y;
    const ring = 4.6 + Math.sin(elapsed * 2 + index) * 0.9;

    context.strokeStyle = `rgba(215, 255, 47, ${0.28 + depth * 0.44})`;
    context.fillStyle = `rgba(215, 255, 47, ${0.2 + depth * 0.38})`;
    context.lineWidth = 1;
    context.beginPath();
    context.arc(x, y, ring, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(x, y, 2.3 + depth * 1.4, 0, Math.PI * 2);
    context.fill();

    if (showLabels && depth > 0.45) {
      const label = marker.label[locale];
      context.font = "11px Arial, Helvetica, sans-serif";
      const labelWidth = context.measureText(label).width + 16;
      const labelX = x + 9;
      const labelY = y - 9;

      context.fillStyle = "rgba(9, 10, 12, 0.62)";
      context.strokeStyle = "rgba(233, 229, 220, 0.18)";
      context.lineWidth = 1;
      context.beginPath();
      context.rect(labelX, labelY - 11, labelWidth, 22);
      context.fill();
      context.stroke();

      context.fillStyle = `rgba(244, 241, 234, ${0.58 + depth * 0.28})`;
      context.fillText(label, labelX + 8, labelY + 4);
    }
  }
}

function project(lat: number, lon: number, radius: number, rotationX: number, rotationY: number) {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180 + rotationY;
  const x = Math.cos(phi) * Math.cos(theta);
  let y = Math.sin(phi);
  let z = Math.cos(phi) * Math.sin(theta);

  const cosX = Math.cos(rotationX);
  const sinX = Math.sin(rotationX);
  const rotatedY = y * cosX - z * sinX;
  const rotatedZ = y * sinX + z * cosX;
  y = rotatedY;
  z = rotatedZ;

  const perspective = 0.72 + (z + 1) * 0.15;

  return {
    x: x * radius * perspective,
    y: y * radius * perspective,
    z,
  };
}

function createArchivePoints(): GlobePoint[] {
  const points: GlobePoint[] = [];

  for (let lat = -56; lat <= 76; lat += 1.9) {
    for (let lon = -178; lon <= 180; lon += 1.9) {
      if (isApproximateLand(lat, lon)) {
        points.push({
          lat,
          lon,
        });
      }
    }
  }

  return points;
}

function isApproximateLand(lat: number, lon: number) {
  const landShape = landBlobs.some((blob) => blobContains(lat, lon, blob));
  const oceanCut = oceanCuts.some((cut) => blobContains(lat, lon, cut));
  const edgeNoise = seededNoise(lat * 1.9, lon * 1.3);

  return landShape && !oceanCut && edgeNoise > -0.58;
}

function blobContains(lat: number, lon: number, blob: { lat: number; lon: number; rx: number; ry: number; wobble: number }) {
  const dx = circularDistance(lon, blob.lon) / blob.rx;
  const dy = (lat - blob.lat) / blob.ry;
  const angle = Math.atan2(dy, dx);
  const organicEdge =
    1 +
    Math.sin(angle * 3 + blob.lat * 0.11) * blob.wobble +
    Math.sin(angle * 5 + blob.lon * 0.07) * blob.wobble * 0.62 +
    seededNoise(lat * 0.8, lon * 0.8) * blob.wobble * 0.55;

  return dx * dx + dy * dy < organicEdge;
}

function circularDistance(a: number, b: number) {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}

function seededNoise(a: number, b: number) {
  const value = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return (value - Math.floor(value)) * 2 - 1;
}

function range(start: number, end: number, step: number) {
  const values: number[] = [];
  for (let value = start; value <= end; value += step) {
    values.push(value);
  }
  return values;
}

const landBlobs = [
  { lat: 55, lon: -118, rx: 39, ry: 20, wobble: 0.2 },
  { lat: 39, lon: -100, rx: 26, ry: 18, wobble: 0.18 },
  { lat: 18, lon: -91, rx: 11, ry: 10, wobble: 0.25 },
  { lat: 70, lon: -42, rx: 22, ry: 10, wobble: 0.2 },
  { lat: -18, lon: -61, rx: 18, ry: 35, wobble: 0.22 },
  { lat: 48, lon: 12, rx: 20, ry: 13, wobble: 0.2 },
  { lat: 3, lon: 20, rx: 30, ry: 35, wobble: 0.18 },
  { lat: 55, lon: 58, rx: 50, ry: 17, wobble: 0.16 },
  { lat: 34, lon: 92, rx: 48, ry: 24, wobble: 0.18 },
  { lat: 10, lon: 110, rx: 20, ry: 16, wobble: 0.23 },
  { lat: -25, lon: 134, rx: 18, ry: 12, wobble: 0.2 },
  { lat: -6, lon: 145, rx: 8, ry: 8, wobble: 0.24 },
  { lat: 38, lon: 140, rx: 8, ry: 10, wobble: 0.2 },
];

const oceanCuts = [
  { lat: 49, lon: -84, rx: 12, ry: 8, wobble: 0.15 },
  { lat: 30, lon: -86, rx: 11, ry: 8, wobble: 0.18 },
  { lat: 2, lon: -80, rx: 9, ry: 9, wobble: 0.2 },
  { lat: -8, lon: -79, rx: 7, ry: 12, wobble: 0.18 },
  { lat: 23, lon: 17, rx: 11, ry: 12, wobble: 0.16 },
  { lat: 27, lon: 47, rx: 11, ry: 13, wobble: 0.16 },
  { lat: 20, lon: 79, rx: 9, ry: 10, wobble: 0.18 },
  { lat: 42, lon: 105, rx: 15, ry: 12, wobble: 0.15 },
];

const archivePoints = createArchivePoints();

const staticGlobeCenter = { x: 500, y: 378 };
const staticGlobeRadius = 360;
const staticGlobeRotation = { x: -0.1, y: 0.18 };

const staticGlobeGridLines = [
  ...range(-60, 60, 20).map((lat) =>
    range(-180, 180, 5)
      .map((lon) => {
        const point = project(lat, lon, staticGlobeRadius, staticGlobeRotation.x, staticGlobeRotation.y);
        return `${(staticGlobeCenter.x + point.x).toFixed(1)},${(staticGlobeCenter.y + point.y).toFixed(1)}`;
      })
      .join(" ")
  ),
  ...range(-150, 180, 30).map((lon) =>
    range(-70, 70, 4)
      .map((lat) => {
        const point = project(lat, lon, staticGlobeRadius, staticGlobeRotation.x, staticGlobeRotation.y);
        return `${(staticGlobeCenter.x + point.x).toFixed(1)},${(staticGlobeCenter.y + point.y).toFixed(1)}`;
      })
      .join(" ")
  ),
];

const staticGlobePoints = archivePoints.map((coordinate) => {
  const point = project(coordinate.lat, coordinate.lon, staticGlobeRadius, staticGlobeRotation.x, staticGlobeRotation.y);
  const depth = (point.z + 1) / 2;

  return {
    x: Number((staticGlobeCenter.x + point.x).toFixed(1)),
    y: Number((staticGlobeCenter.y + point.y).toFixed(1)),
    r: point.z < 0 ? 0.9 : 1.16,
    opacity: Number((point.z < 0 ? 0.07 + depth * 0.1 : 0.24 + depth * 0.44).toFixed(3)),
  };
});

const staticGlobeMarkers = markers.map((marker) => {
  const point = project(marker.lat, marker.lon, staticGlobeRadius, staticGlobeRotation.x, staticGlobeRotation.y);
  const depth = (point.z + 1) / 2;

  return {
    ...marker,
    x: Number((staticGlobeCenter.x + point.x).toFixed(1)),
    y: Number((staticGlobeCenter.y + point.y).toFixed(1)),
    visible: point.z > -0.1,
    opacity: Number((0.38 + depth * 0.48).toFixed(3)),
  };
});
