import type { Locale } from "./types";

export type RouteKey =
  | "home"
  | "work"
  | "originals"
  | "production"
  | "studio"
  | "journal"
  | "privacy"
  | "contact";

export const routePaths: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "/en",
    work: "/en/work",
    originals: "/en/originals",
    production: "/en/capabilities",
    studio: "/en/studio",
    journal: "/en/journal",
    privacy: "/en/privacy",
    contact: "/en/contact",
  },
  tr: {
    home: "/tr",
    work: "/tr/isler",
    originals: "/tr/ozgun-projeler",
    production: "/tr/yetkinlikler",
    studio: "/tr/studyo",
    journal: "/tr/notlar",
    privacy: "/tr/gizlilik",
    contact: "/tr/iletisim",
  },
};

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: "The Asterion",
    work: "Works",
    originals: "Originals",
    production: "Practice",
    studio: "About",
    journal: "Notes",
    privacy: "Privacy",
    contact: "Contact",
  },
  tr: {
    home: "The Asterion",
    work: "İşler",
    originals: "Özgün Projeler",
    production: "Pratik",
    studio: "Hakkında",
    journal: "Notlar",
    privacy: "Gizlilik",
    contact: "İletişim",
  },
};

export const navItems: RouteKey[] = [
  "work",
  "originals",
  "production",
  "studio",
  "contact",
];

export const footerNavItems: RouteKey[] = [
  "work",
  "originals",
  "production",
  "studio",
  "journal",
  "contact",
  "privacy",
];

export function projectPath(locale: Locale, slug: string) {
  return locale === "en" ? `/en/work/${slug}` : `/tr/isler/${slug}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "tr" : "en";
}
