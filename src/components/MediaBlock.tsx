import type { MediaItem, Locale } from "@/content/types";
import type { CSSProperties } from "react";

type MediaBlockProps = {
  media: MediaItem;
  locale: Locale;
  label?: string;
  className?: string;
};

export function MediaBlock({ media, locale, label, className = "" }: MediaBlockProps) {
  const hasImage = media.type === "image" && Boolean(media.src);
  const objectFit = media.cropMode === "contain" ? "contain" : "cover";
  const desktopFocalPoint = media.desktopFocalPoint ?? media.focalPoint;
  const mobileFocalPoint = media.mobileFocalPoint ?? media.focalPoint;
  const objectPosition = desktopFocalPoint ? `${desktopFocalPoint.x}% ${desktopFocalPoint.y}%` : "50% 50%";
  const mobileObjectPosition = mobileFocalPoint ? `${mobileFocalPoint.x}% ${mobileFocalPoint.y}%` : objectPosition;

  return (
    <figure
      className={`media-frame ${hasImage ? "has-image" : "media-placeholder"} relative min-h-72 overflow-hidden border fine-rule ${className}`}
      aria-label={media.alt[locale]}
      style={media.aspectRatio ? { aspectRatio: media.aspectRatio } : undefined}
    >
      {hasImage ? (
        <picture>
          {media.mobileSrc ? <source srcSet={media.mobileSrc} media="(max-width: 640px)" /> : null}
          <img
            src={media.src}
            alt={media.alt[locale]}
            className="media-image"
            loading="lazy"
            style={{ objectFit, objectPosition, "--mobile-object-position": mobileObjectPosition } as CSSProperties}
          />
        </picture>
      ) : null}
      <div className="media-sheen absolute inset-0" />
      <figcaption className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-xs uppercase tracking-[0.22em] text-[#f4f1ea]">
        <span>{label ?? media.caption?.[locale] ?? (locale === "en" ? "Production archive" : "Prodüksiyon arşivi")}</span>
        {media.credit ? (
          <span className="max-w-[22rem] text-right normal-case tracking-normal text-[#a7a39b]">
            {media.source ? (
              <a href={media.source} target="_blank" rel="noreferrer" className="underline decoration-[#d7ff2f] underline-offset-4">
                {media.credit}
              </a>
            ) : (
              media.credit
            )}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
