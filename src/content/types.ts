export type Locale = "en" | "tr";

export type ProjectDivision =
  | "originals"
  | "pictures"
  | "experiences"
  | "labs";

export type ProjectStatus = "ongoing" | "completed" | "archive";

export type LocalizedText = {
  en: string;
  tr: string;
};

export type MediaItem = {
  id: string;
  type: "image" | "video" | "embed";
  src?: string;
  poster?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
  cropMode?: "cover" | "contain";
  alt: LocalizedText;
  caption?: LocalizedText;
  credit?: string;
  copyright?: string;
  source?: string;
  approvalStatus?: "approved" | "pending" | "placeholder";
};

export type CreditItem = {
  role: LocalizedText;
  name: string;
};

export type Project = {
  slug: string;
  title: string;
  displayTitle?: LocalizedText;
  division: ProjectDivision;
  status: ProjectStatus;
  featured: boolean;
  year?: string;
  artist?: string;
  client?: string;
  institution?: string;
  categories: LocalizedText[];
  formats?: LocalizedText[];
  summary: LocalizedText;
  context?: LocalizedText;
  concept?: LocalizedText;
  production?: LocalizedText;
  experience?: LocalizedText;
  legacyCredit?: LocalizedText;
  externalUrl?: string;
  verificationNotes?: string[];
  scope?: LocalizedText[];
  heroMedia: MediaItem;
  gallery: MediaItem[];
  credits?: CreditItem[];
};
