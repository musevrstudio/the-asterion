import type { Locale } from "./types";

export type RouteKey =
  | "home"
  | "work"
  | "originals"
  | "production"
  | "studio"
  | "journal"
  | "contact";

export const routePaths: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "/en",
    work: "/en/work",
    originals: "/en/originals",
    production: "/en/production",
    studio: "/en/studio",
    journal: "/en/journal",
    contact: "/en/contact",
  },
  tr: {
    home: "/tr",
    work: "/tr/isler",
    originals: "/tr/ozgun-projeler",
    production: "/tr/produksiyon",
    studio: "/tr/studyo",
    journal: "/tr/notlar",
    contact: "/tr/iletisim",
  },
};

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "The Asterion",
    work: "Work",
    originals: "Originals",
    production: "Production",
    studio: "Studio",
    journal: "Journal",
    contact: "Contact",
  },
  tr: {
    home: "The Asterion",
    work: "İşler",
    originals: "Özgün Projeler",
    production: "Prodüksiyon",
    studio: "Stüdyo",
    journal: "Notlar",
    contact: "İletişim",
  },
};

export const navItems: RouteKey[] = [
  "work",
  "originals",
  "production",
  "studio",
  "journal",
  "contact",
];

export function projectPath(locale: Locale, slug: string) {
  return locale === "en" ? `/en/work/${slug}` : `/tr/isler/${slug}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "tr" : "en";
}
