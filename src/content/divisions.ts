import type { LocalizedText, ProjectDivision } from "./types";

export const divisions: Record<
  ProjectDivision,
  {
    name: string;
    label: LocalizedText;
    description: LocalizedText;
  }
> = {
  originals: {
    name: "The Asterion Originals",
    label: { en: "Originals", tr: "Özgün Projeler" },
    description: {
      en: "Authored intellectual properties and long-form story worlds developed for multiple future forms.",
      tr: "Birden fazla biçime açılabilecek, yazarlıklı fikri mülkiyetler ve uzun soluklu anlatı dünyaları.",
    },
  },
  pictures: {
    name: "The Asterion Pictures",
    label: { en: "Pictures", tr: "Pictures" },
    description: {
      en: "Films, documentaries, artist films and cinematic productions shaped through research and direction.",
      tr: "Araştırma ve yönetim ekseninde geliştirilen filmler, belgeseller, sanatçı filmleri ve sinematik prodüksiyonlar.",
    },
  },
  experiences: {
    name: "The Asterion Experiences",
    label: { en: "Experiences", tr: "Deneyimler" },
    description: {
      en: "Museum experiences, exhibitions, spatial narratives and culturally grounded environments.",
      tr: "Müze deneyimleri, sergiler, mekansal anlatılar ve kültürel bağlamdan beslenen deneyim ortamları.",
    },
  },
  labs: {
    name: "The Asterion Labs",
    label: { en: "Labs", tr: "Labs" },
    description: {
      en: "Research, prototypes and visual systems that extend the production language of each project.",
      tr: "Her projenin üretim dilini genişleten araştırmalar, prototipler ve görsel sistemler.",
    },
  },
};
