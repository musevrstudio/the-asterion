import type { MediaItem } from "./types";
import mediaImports from "./media-imports.json";

const importedMedia = mediaImports as Record<string, MediaItem | undefined>;

function imported(key: string, fallback: MediaItem): MediaItem {
  return importedMedia[key] ?? fallback;
}

function importedGallery(key: string): MediaItem[] {
  const media = importedMedia[key];
  return media ? [media] : [];
}

const reservedProjectImage = {
  en: "Editorial media field reserved for approved project imagery.",
  tr: "Onaylı proje görselleri için ayrılmış editoryal medya alanı.",
};

export const projectMedia = {
  nud38: {
    hero: imported("nud38.hero", {
      id: "nud38-archive-flight",
      type: "image",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Turkiye-nin-ilk-yerli-ucagi-nu.d-38.jpg",
      aspectRatio: "16 / 9",
      cropMode: "cover",
      focalPoint: { x: 50, y: 42 },
      alt: {
        en: "Nu D.38 aircraft in flight, archival photograph.",
        tr: "Nu D.38 uçağını uçuş halinde gösteren arşiv fotoğrafı.",
      },
      caption: {
        en: "Archival reference image for NU.D38.",
        tr: "NU.D38 için arşiv referans görseli.",
      },
      credit: "Public domain archival image via Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Turkiye-nin-ilk-yerli-ucagi-nu.d-38.jpg",
      approvalStatus: "pending",
    }),
    gallery: [],
  },
  ortaBlueskyerNft: {
    hero: imported("orta-blueskyer-nft.hero", {
      id: "orta-blueskyer-nft-placeholder",
      type: "image",
      alt: reservedProjectImage,
      caption: reservedProjectImage,
      approvalStatus: "placeholder",
    }),
    gallery: [],
  },
  waterReverieApp: {
    hero: imported("water-reverie-app.hero", {
      id: "water-reverie-app-placeholder",
      type: "image",
      alt: reservedProjectImage,
      caption: reservedProjectImage,
      approvalStatus: "placeholder",
    }),
    gallery: [],
  },
  waterReverieVr: {
    hero: imported("water-reverie-vr.hero", {
      id: "water-reverie-vr-placeholder",
      type: "image",
      alt: reservedProjectImage,
      caption: reservedProjectImage,
      approvalStatus: "placeholder",
    }),
    gallery: [],
  },
  osmanHamdiBey: {
    hero: imported("osman-hamdi-bey.hero", {
      id: "osman-hamdi-bey-tortoise-trainer",
      type: "image",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg?width=1600",
      aspectRatio: "16 / 9",
      cropMode: "cover",
      focalPoint: { x: 52, y: 38 },
      alt: {
        en: "Detail from Osman Hamdi Bey's The Tortoise Trainer.",
        tr: "Osman Hamdi Bey'in Kaplumbağa Terbiyecisi eserinden detay.",
      },
      caption: {
        en: "Public-domain artwork reference used until approved project documentation is added.",
        tr: "Onaylı proje dokümantasyonu eklenene kadar kullanılan kamu malı eser referansı.",
      },
      credit: "Public domain artwork reproduction via Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg",
      approvalStatus: "pending",
    }),
    gallery: importedGallery("osman-hamdi-bey.gallery.context"),
  },
  beyondIstanbul: {
    hero: imported("beyond-istanbul.hero", {
      id: "beyond-istanbul-city-reference",
      type: "image",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%2C_Turkey_%28Unsplash_D7zGOhMJBys%29.jpg?width=1800",
      aspectRatio: "16 / 9",
      cropMode: "cover",
      focalPoint: { x: 50, y: 48 },
      alt: {
        en: "Istanbul city view used as editorial atmosphere for Beyond Istanbul.",
        tr: "Beyond Istanbul için editoryal atmosfer olarak kullanılan İstanbul kent görünümü.",
      },
      caption: {
        en: "Temporary city reference image.",
        tr: "Geçici kent referans görseli.",
      },
      credit: "CC0 image by Petar Petkovski via Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Istanbul,_Turkey_(Unsplash_D7zGOhMJBys).jpg",
      approvalStatus: "pending",
    }),
    gallery: [],
  },
  chefsSlice: {
    hero: imported("chefs-slice.hero", {
      id: "chefs-slice-placeholder",
      type: "image",
      alt: reservedProjectImage,
      caption: reservedProjectImage,
      approvalStatus: "placeholder",
    }),
    gallery: [],
  },
  nowhere: {
    hero: imported("nowhere.hero", {
      id: "nowhere-placeholder",
      type: "image",
      alt: reservedProjectImage,
      caption: reservedProjectImage,
      approvalStatus: "placeholder",
    }),
    gallery: [],
  },
} satisfies Record<
  string,
  {
    hero: MediaItem;
    gallery: MediaItem[];
  }
>;

export function placeholderMedia(id: string): MediaItem {
  return {
    id,
    type: "image",
    alt: reservedProjectImage,
    caption: reservedProjectImage,
    approvalStatus: "placeholder",
  };
}
