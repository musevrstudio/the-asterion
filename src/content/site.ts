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
    en: "Story Development & Production House",
    tr: "Hikaye Geliştirme ve Prodüksiyon Stüdyosu",
  },
  statement: {
    en: "Stories developed for cinema, culture and experience.",
    tr: "Sinema, kültür ve deneyim alanları için geliştirilen hikayeler.",
  },
  support: {
    en: "The Asterion develops original worlds, films, documentaries, museum experiences and visual productions from research and writing to direction and delivery.",
    tr: "The Asterion; özgün dünyaları, filmleri, belgeselleri, müze deneyimlerini ve görsel prodüksiyonları araştırma ve yazımdan yönetim ve üretime uzanan bütünlüklü bir süreçle geliştirir.",
  },
  principle: {
    en: "Every form begins with a story.",
    tr: "Her biçim bir hikayeyle başlar.",
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
