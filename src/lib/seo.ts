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
    en: "Works | The Asterion",
    tr: "İşler | The Asterion",
  },
  originals: {
    en: "Originals | The Asterion",
    tr: "Özgün Projeler | The Asterion",
  },
  production: {
    en: "Practice | The Asterion",
    tr: "Pratik | The Asterion",
  },
  studio: {
    en: "About | The Asterion",
    tr: "Hakkında | The Asterion",
  },
  journal: {
    en: "Notes | The Asterion",
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
    en: "The Asterion is a cultural practice for research, authorship, memory, experience, Archive Wall systems, Asterion Presence and original worlds.",
    tr: "The Asterion; araştırma, yazarlık, hafıza, deneyim, Archive Wall sistemleri, Asterion Presence ve özgün dünyalar üzerine çalışan kültürel bir pratiktir.",
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
    en: "A practice spanning research, authorship, archive systems, cultural experience, Asterion Presence, spatial media and long-term world-building.",
    tr: "Araştırma, yazarlık, arşiv sistemleri, kültürel deneyim, Asterion Presence, mekansal medya ve uzun soluklu dünya kurma alanlarına yayılan pratik.",
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
