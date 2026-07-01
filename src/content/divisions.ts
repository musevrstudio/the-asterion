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
      en: "Original intellectual properties and long-term story worlds.",
      tr: "Özgün fikri mülkiyetler ve uzun soluklu anlatı dünyaları.",
    },
  },
  pictures: {
    name: "The Asterion Pictures",
    label: { en: "Pictures", tr: "Pictures" },
    description: {
      en: "Film, documentary, artist film and cinematic production.",
      tr: "Film, belgesel, sanatçı filmi ve sinematik prodüksiyon.",
    },
  },
  experiences: {
    name: "The Asterion Experiences",
    label: { en: "Experiences", tr: "Deneyimler" },
    description: {
      en: "Museums, exhibitions, immersive environments and spatial storytelling.",
      tr: "Müzeler, sergiler, immersif ortamlar ve mekansal anlatı.",
    },
  },
  labs: {
    name: "The Asterion Labs",
    label: { en: "Labs", tr: "Labs" },
    description: {
      en: "Real-time production, prototypes, experimental visual systems and research.",
      tr: "Gerçek zamanlı prodüksiyon, prototipler, deneysel görsel sistemler ve araştırma.",
    },
  },
};
