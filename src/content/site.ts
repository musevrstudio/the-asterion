import type { LocalizedText } from "./types";

export const site = {
  name: "THE ASTERION",
  editorialName: "The Asterion",
  url: "https://theasterion.com",
  email: "hello@theasterion.com",
  phone: "+90 532 390 20 00",
  location: {
    en: "Istanbul, Turkiye - working internationally",
    tr: "İstanbul, Türkiye - uluslararası ölçekte çalışır",
  },
  descriptor: {
    en: "Research, Authorship & Cultural Experience",
    tr: "Araştırma, Yazarlık ve Kültürel Deneyim",
  },
  statement: {
    en: "Original worlds, cultural memory and experience.",
    tr: "Özgün dünyalar, kültürel hafıza ve deneyim.",
  },
  support: {
    en: "The Asterion is a cultural practice working through research, authorship, archive, experience and long-term world-building. Production is one form this practice can take.",
    tr: "The Asterion; araştırma, yazarlık, arşiv, deneyim ve uzun soluklu dünya kurma üzerinden çalışan kültürel bir pratiktir. Prodüksiyon bu pratiğin alabileceği biçimlerden biridir.",
  },
  principle: {
    en: "Every form begins as a way of seeing.",
    tr: "Her biçim bir görme biçimiyle başlar.",
  },
} satisfies Record<string, string | LocalizedText | { en: string; tr: string }>;

export const metadataText = {
  en: {
    title: "The Asterion - Research, Authorship & Cultural Experience",
    description:
      "The Asterion is a cultural practice for research, authorship, memory, experience and original worlds.",
  },
  tr: {
    title: "The Asterion - Araştırma, Yazarlık ve Kültürel Deneyim",
    description:
      "The Asterion; araştırma, yazarlık, hafıza, deneyim ve özgün dünyalar üzerine çalışan kültürel bir pratiktir.",
  },
};
