import type { Metadata } from "next";
import { routePaths, type RouteKey, projectPath } from "@/content/navigation";
import { metadataText, site } from "@/content/site";
import type { Locale, Project } from "@/content/types";

const pageTitles: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: metadataText.en.title,
    tr: metadataText.tr.title,
  },
  work: {
    en: "Work | The Asterion",
    tr: "İşler | The Asterion",
  },
  originals: {
    en: "Originals | The Asterion",
    tr: "Özgün Projeler | The Asterion",
  },
  production: {
    en: "Capabilities | The Asterion",
    tr: "Yetkinlikler | The Asterion",
  },
  studio: {
    en: "Studio | The Asterion",
    tr: "Stüdyo | The Asterion",
  },
  journal: {
    en: "Journal | The Asterion",
    tr: "Notlar | The Asterion",
  },
  contact: {
    en: "Contact | The Asterion",
    tr: "İletişim | The Asterion",
  },
  privacy: {
    en: "Privacy | The Asterion",
    tr: "Gizlilik | The Asterion",
  },
};

const pageDescriptions: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: "The Asterion develops films, documentaries, museum experiences, interactive LED archive walls, archive digitization projects and visual worlds for cultural institutions and brands.",
    tr: "The Asterion; filmler, belgeseller, müze deneyimleri, interaktif LED arşiv duvarları, arşiv dijitalleştirme projeleri ve görsel dünyalar geliştirir.",
  },
  work: {
    en: metadataText.en.description,
    tr: metadataText.tr.description,
  },
  originals: {
    en: metadataText.en.description,
    tr: metadataText.tr.description,
  },
  production: {
    en: "Capabilities across story development, museum and exhibition narratives, archive digitization, Archive Wall experiences, spatial media and interactive LED wall production.",
    tr: "Hikaye geliştirme, müze ve sergi anlatıları, arşiv dijitalleştirme, Arşiv Duvarı deneyimleri, mekansal medya ve interaktif LED wall prodüksiyonu.",
  },
  studio: {
    en: metadataText.en.description,
    tr: metadataText.tr.description,
  },
  journal: {
    en: metadataText.en.description,
    tr: metadataText.tr.description,
  },
  contact: {
    en: metadataText.en.description,
    tr: metadataText.tr.description,
  },
  privacy: {
    en: metadataText.en.description,
    tr: metadataText.tr.description,
  },
};

export function pageMetadata(locale: Locale, routeKey: RouteKey): Metadata {
  const otherLocale = locale === "en" ? "tr" : "en";
  const description = pageDescriptions[routeKey][locale];

  return {
    title: pageTitles[routeKey][locale],
    description,
    alternates: {
      canonical: `${site.url}${routePaths[locale][routeKey]}`,
      languages: {
        "x-default": `${site.url}${routePaths.en[routeKey]}`,
        [locale]: `${site.url}${routePaths[locale][routeKey]}`,
        [otherLocale]: `${site.url}${routePaths[otherLocale][routeKey]}`,
      },
    },
    openGraph: {
      title: pageTitles[routeKey][locale],
      description,
      url: `${site.url}${routePaths[locale][routeKey]}`,
      siteName: "The Asterion",
      locale: locale === "en" ? "en_US" : "tr_TR",
      alternateLocale: locale === "en" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitles[routeKey][locale],
      description,
    },
  };
}

export function projectMetadata(locale: Locale, project: Project): Metadata {
  const otherLocale = locale === "en" ? "tr" : "en";

  return {
    title: `${project.title} | The Asterion`,
    description: project.summary[locale],
    alternates: {
      canonical: `${site.url}${projectPath(locale, project.slug)}`,
      languages: {
        "x-default": `${site.url}${projectPath("en", project.slug)}`,
        [locale]: `${site.url}${projectPath(locale, project.slug)}`,
        [otherLocale]: `${site.url}${projectPath(otherLocale, project.slug)}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.summary[locale],
      url: `${site.url}${projectPath(locale, project.slug)}`,
      siteName: "The Asterion",
      type: "article",
      images: project.heroMedia.ogSrc
        ? [
            {
              url: `${site.url}${project.heroMedia.ogSrc}`,
              width: 1200,
              height: 630,
              alt: project.heroMedia.alt[locale],
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary[locale],
      images: project.heroMedia.ogSrc ? [`${site.url}${project.heroMedia.ogSrc}`] : undefined,
    },
  };
}
