import type { Project } from "./types";

const missingAlt = {
  en: "Editorial media field reserved for approved project imagery.",
  tr: "Onaylı proje görselleri için ayrılmış editoryal medya alanı.",
};

export const projects: Project[] = [
  {
    slug: "nud38",
    title: "NU.D38",
    division: "originals",
    status: "ongoing",
    featured: true,
    categories: [
      { en: "Original IP", tr: "Özgün Proje" },
      { en: "Historical Aviation", tr: "Tarihsel Havacılık" },
      { en: "Immersive Experience", tr: "Immersif Deneyim" },
      { en: "Documentary Research", tr: "Belgesel Araştırması" },
    ],
    formats: [
      { en: "Historical research", tr: "Tarihsel araştırma" },
      { en: "Experience prototype", tr: "Deneyim prototipi" },
      { en: "Immersive flight experience", tr: "Immersif uçuş deneyimi" },
      { en: "Documentary development", tr: "Belgesel geliştirme" },
      { en: "Cinematic development", tr: "Sinematik geliştirme" },
      { en: "Interactive story research", tr: "Etkileşimli anlatı araştırması" },
    ],
    summary: {
      en: "NU.D38 is a long-term cultural and cinematic project inspired by Nuri Demirağ's aviation enterprise and the early history of civil aircraft production in Türkiye.",
      tr: "NU.D38, Nuri Demirağ'ın havacılık girişiminden ve Türkiye'de sivil uçak üretiminin erken dönem tarihinden ilham alan uzun soluklu bir kültür ve sinema projesidir.",
    },
    context: {
      en: "The project revisits a largely forgotten technological and entrepreneurial chapter through historical research, archival material, immersive flight, documentary development and cinematic storytelling.",
      tr: "Proje, büyük ölçüde unutulmuş bir teknoloji ve girişimcilik dönemini tarihsel araştırma, arşiv malzemeleri, immersif uçuş, belgesel geliştirme ve sinematik anlatı üzerinden yeniden ele alır.",
    },
    concept: {
      en: "Its first public form is an immersive flight experience. Beyond that, NU.D38 is being shaped as an original story universe for documentary, cinema, exhibition, publication and interactive formats.",
      tr: "Projenin ilk kamusal formu immersif bir uçuş deneyimidir. NU.D38 bunun ötesinde belgesel, sinema, sergi, yayın ve etkileşimli formatlara açılabilecek özgün bir anlatı evreni olarak geliştirilmektedir.",
    },
    externalUrl: "https://nud38.com",
    verificationNotes: [
      "Approved NU.D38 hero imagery and gallery assets are required for the final production archive.",
      "The current archival aircraft image is a public-domain Wikimedia reference.",
    ],
    scope: [
      { en: "Research", tr: "Araştırma" },
      { en: "Prototype development", tr: "Prototip geliştirme" },
      { en: "Immersive flight", tr: "Immersif uçuş" },
      { en: "Documentary and film development", tr: "Belgesel ve film geliştirme" },
    ],
    heroMedia: {
      kind: "image",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Turkiye-nin-ilk-yerli-ucagi-nu.d-38.jpg",
      alt: {
        en: "Nu D.38 aircraft in flight, archival photograph.",
        tr: "Nu D.38 uçağını uçuş halinde gösteren arşiv fotoğrafı.",
      },
      credit: {
        en: "Public domain archival image via Wikimedia Commons",
        tr: "Wikimedia Commons üzerinden kamu malı arşiv görseli",
      },
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Turkiye-nin-ilk-yerli-ucagi-nu.d-38.jpg",
    },
    gallery: [{ kind: "placeholder", alt: missingAlt, missingAsset: true }],
  },
  {
    slug: "osman-hamdi-bey",
    title: "A Journey into the World of Osman Hamdi Bey",
    displayTitle: {
      en: "A Journey into the World of Osman Hamdi Bey",
      tr: "Osman Hamdi Bey'in Dünyasına Yolculuk",
    },
    division: "experiences",
    status: "completed",
    featured: false,
    year: "2019",
    institution: "Pera Museum",
    categories: [
      { en: "Museum Experience", tr: "Müze Deneyimi" },
      { en: "Cultural Heritage", tr: "Kültürel Miras" },
      { en: "Immersive Storytelling", tr: "Immersif Anlatı" },
    ],
    summary: {
      en: "A museum experience exploring Osman Hamdi Bey's life, artistic world and intellectual legacy through spatial storytelling and interactive discovery.",
      tr: "Osman Hamdi Bey'in yaşamını, sanatsal dünyasını ve düşünsel mirasını mekansal anlatı ve etkileşimli keşif yoluyla ele alan müze deneyimi.",
    },
    context: {
      en: "Developed in collaboration with Pera Museum.",
      tr: "Pera Müzesi iş birliğiyle geliştirildi.",
    },
    legacyCredit: {
      en: "Originally developed under Muse Studio. Original institutional, collaborator and production credits are retained.",
      tr: "İlk olarak Muse Studio bünyesinde geliştirilmiştir. Özgün kurum, ortaklık ve prodüksiyon kredileri korunmaktadır.",
    },
    heroMedia: {
      kind: "image",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg?width=1600",
      alt: {
        en: "Detail from Osman Hamdi Bey's The Tortoise Trainer.",
        tr: "Osman Hamdi Bey'in Kaplumbağa Terbiyecisi eserinden detay.",
      },
      credit: {
        en: "Public domain artwork reproduction via Wikimedia Commons",
        tr: "Wikimedia Commons üzerinden kamu malı eser reprodüksiyonu",
      },
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Osman_Hamdi_Bey_-_The_Tortoise_Trainer_-_Google_Art_Project.jpg",
    },
    gallery: [{ kind: "placeholder", alt: missingAlt, missingAsset: true }],
  },
  {
    slug: "beyond-istanbul",
    title: "Beyond Istanbul",
    division: "pictures",
    status: "completed",
    featured: false,
    categories: [
      { en: "Film", tr: "Film" },
      { en: "Immersive Experience", tr: "Immersif Deneyim" },
      { en: "Urban Memory", tr: "Kentsel Hafıza" },
      { en: "Visual Research", tr: "Görsel Araştırma" },
    ],
    summary: {
      en: "A cinematic journey through Istanbul's architecture, waterways, transformations and collective memory.",
      tr: "İstanbul'un mimarisi, su yolları, dönüşümü ve kolektif hafızası üzerinden ilerleyen sinematik bir yolculuk.",
    },
    context: {
      en: "Beyond Istanbul approaches the city not as a fixed image, but as an evolving visual, architectural and historical organism.",
      tr: "Beyond Istanbul, kenti sabit bir görüntü olarak değil; değişen, katmanlanan ve yaşayan görsel-mimari bir organizma olarak ele alır.",
    },
    legacyCredit: {
      en: "Originally developed under Muse Studio.",
      tr: "İlk olarak Muse Studio bünyesinde geliştirilmiştir.",
    },
    verificationNotes: ["Dates, institutions and exhibition details must be confirmed before publishing."],
    heroMedia: {
      kind: "image",
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%2C_Turkey_%28Unsplash_D7zGOhMJBys%29.jpg?width=1800",
      alt: {
        en: "Istanbul city view used as editorial atmosphere for Beyond Istanbul.",
        tr: "Beyond Istanbul için editoryal atmosfer olarak kullanılan İstanbul kent görünümü.",
      },
      credit: {
        en: "CC0 image by Petar Petkovski via Wikimedia Commons",
        tr: "Wikimedia Commons üzerinden Petar Petkovski imzalı CC0 görsel",
      },
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Istanbul,_Turkey_(Unsplash_D7zGOhMJBys).jpg",
    },
    gallery: [{ kind: "placeholder", alt: missingAlt, missingAsset: true }],
  },
  {
    slug: "chefs-slice",
    title: "Pirge - Chef's Slice",
    division: "experiences",
    status: "completed",
    featured: false,
    client: "Pirge",
    categories: [
      { en: "Visual Production", tr: "Görsel Prodüksiyon" },
      { en: "Spatial Media", tr: "Mekansal Medya" },
      { en: "Motion Design", tr: "Hareketli Grafik" },
      { en: "Installation", tr: "Enstalasyon" },
      { en: "Brand Film", tr: "Marka Filmi" },
    ],
    summary: {
      en: "A large-scale visual production translating the precision, movement and material culture of professional knife-making into a spatial cinematic environment.",
      tr: "Profesyonel bıçak üretiminin hassasiyetini, hareketini ve malzeme kültürünü büyük ölçekli mekansal bir sinematik ortama taşıyan görsel prodüksiyon.",
    },
    production: {
      en: "Developed through motion design, three-dimensional animation and integrated LED systems, Chef's Slice translated an industrial product narrative into an architectural field of image and movement.",
      tr: "Hareketli grafik, üç boyutlu animasyon ve entegre LED sistemleriyle geliştirilen Chef's Slice, endüstriyel bir ürün anlatısını mimari bir görüntü ve hareket alanına taşıdı.",
    },
    scope: [
      { en: "Concept development", tr: "Konsept geliştirme" },
      { en: "Creative direction", tr: "Yaratıcı yönetim" },
      { en: "Motion design", tr: "Hareketli grafik" },
      { en: "3D animation", tr: "3D animasyon" },
      { en: "LED content production", tr: "LED içerik prodüksiyonu" },
      { en: "Spatial media integration", tr: "Mekansal medya entegrasyonu" },
    ],
    legacyCredit: {
      en: "Originally developed under Muse Studio.",
      tr: "İlk olarak Muse Studio bünyesinde geliştirilmiştir.",
    },
    heroMedia: { kind: "placeholder", alt: missingAlt, missingAsset: true },
    gallery: [{ kind: "placeholder", alt: missingAlt, missingAsset: true }],
  },
  {
    slug: "nowhere",
    title: "Nowhere - Sinan Kuran",
    division: "pictures",
    status: "completed",
    featured: false,
    artist: "Sinan Kuran",
    categories: [
      { en: "Artist Film", tr: "Sanatçı Filmi" },
      { en: "Visual Production", tr: "Görsel Prodüksiyon" },
      { en: "Exhibition Experience", tr: "Sergi Deneyimi" },
      { en: "Spatial Media", tr: "Mekansal Medya" },
    ],
    summary: {
      en: "A visual and spatial production developed around Sinan Kuran's artistic universe, carrying the atmosphere of the work into moving image and exhibition experience.",
      tr: "Sinan Kuran'ın sanatsal evreni çevresinde geliştirilen; eserin atmosferini hareketli görüntüye ve sergi deneyimine taşıyan görsel ve mekansal prodüksiyon.",
    },
    legacyCredit: {
      en: "Production developed under Muse Studio.",
      tr: "Prodüksiyon Muse Studio bünyesinde geliştirilmiştir.",
    },
    verificationNotes: [
      "Year requires confirmation.",
      "Exhibition title requires confirmation.",
      "Venue requires confirmation.",
      "Curator requires confirmation.",
      "Production scope requires confirmation.",
      "Film, photography and installation credits require confirmation.",
    ],
    heroMedia: { kind: "placeholder", alt: missingAlt, missingAsset: true },
    gallery: [{ kind: "placeholder", alt: missingAlt, missingAsset: true }],
  },
];

export const featuredProject = projects.find((project) => project.featured)!;
export const selectedProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
