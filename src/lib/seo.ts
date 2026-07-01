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
    en: "Production | The Asterion",
    tr: "Prodüksiyon | The Asterion",
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
};

export function pageMetadata(locale: Locale, routeKey: RouteKey): Metadata {
  const otherLocale = locale === "en" ? "tr" : "en";

  return {
    title: pageTitles[routeKey][locale],
    description: metadataText[locale].description,
    alternates: {
      canonical: `${site.url}${routePaths[locale][routeKey]}`,
      languages: {
        [locale]: `${site.url}${routePaths[locale][routeKey]}`,
        [otherLocale]: `${site.url}${routePaths[otherLocale][routeKey]}`,
      },
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
    },
  };
}
