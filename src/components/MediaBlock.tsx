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
    <figure className="media-figure">
      <div
        className={`media-frame ${hasImage ? "has-image" : "media-placeholder"} relative overflow-hidden border fine-rule ${className}`}
        aria-label={media.alt[locale]}
        style={{ aspectRatio: "16 / 9", minHeight: 0 }}
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
      </div>
      <figcaption className="media-caption">
        <span>{label ?? media.caption?.[locale] ?? (locale === "en" ? "Production archive" : "Prodüksiyon arşivi")}</span>
        {media.credit ? (
          <span>
            {media.source ? (
              <a href={media.source} target="_blank" rel="noreferrer">
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
