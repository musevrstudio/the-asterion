import type { LocalizedText } from "./types";

export const site = {
  name: "THE ASTERION",
  editorialName: "The Asterion",
  url: "https://theasterion.com",
  email: "hello@theasterion.com",
  location: {
    en: "Istanbul, Turkiye - Working internationally",
    tr: "Istanbul, Turkiye - Uluslararası ölçekte çalışıyoruz",
  },
  descriptor: {
    en: "Story Development & Production House",
    tr: "Hikaye Geliştirme ve Prodüksiyon Stüdyosu",
  },
  statement: {
    en: "We develop stories into films, experiences and worlds.",
    tr: "Hikayeleri filmlere, deneyimlere ve dünyalara dönüştürüyoruz.",
  },
  support: {
    en: "Original stories, documentaries, films, museum experiences and visual worlds - from research and development to production.",
    tr: "Özgün hikayeler, belgeseller, filmler, müze deneyimleri ve görsel dünyalar; araştırma ve geliştirmeden prodüksiyona kadar.",
  },
  principle: {
    en: "Every medium begins with a story.",
    tr: "Her mecra bir hikayeyle başlar.",
  },
} satisfies Record<string, string | LocalizedText | { en: string; tr: string }>;

export const metadataText = {
  en: {
    title: "The Asterion - Story Development & Production House",
    description:
      "The Asterion is an independent production house developing original stories, films, documentaries, museum experiences and visual worlds.",
  },
  tr: {
    title: "The Asterion - Hikaye Geliştirme ve Prodüksiyon Stüdyosu",
    description:
      "The Asterion; özgün hikayeler, filmler, belgeseller, müze deneyimleri ve görsel dünyalar geliştiren bağımsız bir prodüksiyon stüdyosudur.",
  },
};
