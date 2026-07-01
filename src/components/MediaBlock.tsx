import type { MediaItem, Locale } from "@/content/types";

type MediaBlockProps = {
  media: MediaItem;
  locale: Locale;
  label?: string;
  className?: string;
};

export function MediaBlock({ media, locale, label, className = "" }: MediaBlockProps) {
  return (
    <figure
      className={`media-frame ${
        media.kind === "image" && media.src ? "has-image" : "media-placeholder"
      } relative min-h-72 overflow-hidden border fine-rule ${className}`}
      aria-label={media.alt[locale]}
    >
      {media.kind === "image" && media.src ? (
        <img src={media.src} alt={media.alt[locale]} className="media-image" loading="lazy" />
      ) : null}
      <div className="media-sheen absolute inset-0" />
      <figcaption className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-xs uppercase tracking-[0.22em] text-[#f4f1ea]">
        <span>{label ?? (locale === "en" ? "Production archive" : "Prodüksiyon arşivi")}</span>
        {media.credit ? (
          <span className="max-w-[22rem] text-right normal-case tracking-normal text-[#a7a39b]">
            {media.sourceUrl ? (
              <a
                href={media.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#d7ff2f] underline-offset-4"
              >
                {media.credit[locale]}
              </a>
            ) : (
              media.credit[locale]
            )}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
