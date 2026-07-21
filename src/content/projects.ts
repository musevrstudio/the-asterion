import type { Project } from "./types";
import { placeholderMedia, projectMedia } from "./media";

const projectRecords: Project[] = [
  {
    slug: "nud38",
    title: "NU.D38",
    division: "originals",
    status: "ongoing",
    featured: true,
    categories: [
      { en: "Original World", tr: "Özgün Dünya" },
      { en: "Historical Aviation", tr: "Tarihsel Havacılık" },
      { en: "Immersive Experience", tr: "Immersif Deneyim" },
      { en: "Research Platform", tr: "Araştırma Platformu" },
    ],
    formats: [
      { en: "Historical research", tr: "Tarihsel araştırma" },
      { en: "Experience prototype", tr: "Deneyim prototipi" },
      { en: "Immersive flight experience", tr: "Immersif uçuş deneyimi" },
      { en: "Documentary research", tr: "Belgesel araştırması" },
      { en: "Cinematic development", tr: "Sinematik geliştirme" },
      { en: "Cultural IP development", tr: "Kültürel IP geliştirme" },
    ],
    summary: {
      en: "NU.D38 is an original world, research platform and evolving cultural IP inspired by Nuri Demirağ's aviation enterprise and the early history of civil aircraft production in Türkiye.",
      tr: "NU.D38, Nuri Demirağ'ın havacılık girişiminden ve Türkiye'de sivil uçak üretiminin erken dönem tarihinden ilham alan özgün dünya, araştırma platformu ve gelişen kültürel IP'dir.",
    },
    context: {
      en: "The work revisits a largely forgotten technological and entrepreneurial chapter through historical research, archival material, immersive flight, documentary inquiry and cinematic development.",
      tr: "Bu çalışma, büyük ölçüde unutulmuş bir teknoloji ve girişimcilik dönemini tarihsel araştırma, arşiv malzemeleri, immersif uçuş, belgesel araştırması ve sinematik geliştirme üzerinden yeniden ele alır.",
    },
    concept: {
      en: "Its first public form is an immersive flight experience. Beyond that, NU.D38 is being shaped as a long-term original world for documentary, cinema, exhibition, publication and interactive formats.",
      tr: "İlk kamusal formu immersif bir uçuş deneyimidir. NU.D38 bunun ötesinde belgesel, sinema, sergi, yayın ve etkileşimli formatlara açılabilecek uzun soluklu bir özgün dünya olarak geliştirilmektedir.",
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
    heroMedia: projectMedia.nud38.hero,
    gallery: projectMedia.nud38.gallery.length ? projectMedia.nud38.gallery : [placeholderMedia("nud38-gallery-placeholder")],
  },
  {
    slug: "orta-blueskyer-nft",
    title: "The Blueskyer NFT - ORTA",
    displayTitle: {
      en: "The Blueskyer NFT - ORTA",
      tr: "The Blueskyer NFT - ORTA",
    },
    division: "labs",
    status: "completed",
    featured: false,
    client: "ORTA",
    categories: [
      { en: "Digital Collectible", tr: "Dijital Koleksiyon" },
      { en: "Visual World-Building", tr: "Görsel Dünya Kurma" },
      { en: "Cultural Technology", tr: "Kültürel Teknoloji" },
    ],
    summary: {
      en: "A historical project reference connected to ORTA's MetaDENIMverse and The Blueskyer NFT, developed around regenerative denim, digital culture and a speculative visual world.",
      tr: "ORTA'nın MetaDENIMverse ve The Blueskyer NFT projesiyle ilişkili; rejeneratif denim, dijital kültür ve spekülatif bir görsel dünya etrafında gelişen tarihsel proje referansı.",
    },
    context: {
      en: "ORTA's official project page describes The Blueskyer NFT as part of the MetaDENIMverse of ORTA and presents it as a regenerative denim NFT project.",
      tr: "ORTA'nın resmi proje sayfası, The Blueskyer NFT'yi MetaDENIMverse of ORTA kapsamında konumlandırır ve rejeneratif denim odağında bir NFT projesi olarak sunar.",
    },
    legacyCredit: {
      en: "Historical project reference. Additional production credits require final publication approval.",
      tr: "Tarihsel proje referansı. Ek prodüksiyon kredileri yayın öncesinde nihai onay gerektirir.",
    },
    externalUrl: "https://ortaanadolu.com/metadenimverse-of-orta/",
    verificationNotes: [
      "Official ORTA page confirms the MetaDENIMverse of ORTA context and The Blueskyer NFT project.",
      "Final public wording for collaborator credit requires approval before expanded publication.",
      "Project date and detailed production scope require confirmation.",
    ],
    scope: [
      { en: "Visual world-building", tr: "Görsel dünya kurma" },
      { en: "Digital art production", tr: "Dijital sanat prodüksiyonu" },
      { en: "Cultural technology reference", tr: "Kültürel teknoloji referansı" },
    ],
    heroMedia: projectMedia.ortaBlueskyerNft.hero,
    gallery: projectMedia.ortaBlueskyerNft.gallery.length
      ? projectMedia.ortaBlueskyerNft.gallery
      : [placeholderMedia("orta-blueskyer-gallery-placeholder")],
  },
  {
    slug: "water-reverie-app",
    title: "Water Reverie - Mobile Application",
    displayTitle: {
      en: "Water Reverie - Mobile Application",
      tr: "Water Reverie - Mobil Uygulama",
    },
    division: "experiences",
    status: "archive",
    featured: false,
    categories: [
      { en: "Mobile Experience", tr: "Mobil Deneyim" },
      { en: "Interactive Media", tr: "İnteraktif Medya" },
      { en: "Cultural Experience", tr: "Kültürel Deneyim" },
    ],
    summary: {
      en: "A related mobile experience record from the Water Reverie project archive, presented here through selected interface and visual documentation.",
      tr: "Water Reverie proje arşivinden ilişkili bir mobil deneyim kaydı; seçili arayüz ve görsel dokümantasyon üzerinden sunulur.",
    },
    context: {
      en: "The mobile application and VR film are treated as related but distinct project records until final credits, dates and presentation details are confirmed.",
      tr: "Mobil uygulama ve VR film, nihai kredi, tarih ve sunum bilgileri teyit edilene kadar ilişkili fakat ayrı proje kayıtları olarak ele alınır.",
    },
    verificationNotes: [
      "Application credits, public presentation context, dates and release details require confirmation.",
      "Select additional screenshots only after publication approval.",
    ],
    scope: [
      { en: "Mobile interface", tr: "Mobil arayüz" },
      { en: "Interactive experience", tr: "İnteraktif deneyim" },
      { en: "Visual documentation", tr: "Görsel dokümantasyon" },
    ],
    heroMedia: projectMedia.waterReverieApp.hero,
    gallery: projectMedia.waterReverieApp.gallery.length
      ? projectMedia.waterReverieApp.gallery
      : [placeholderMedia("water-reverie-app-gallery-placeholder")],
  },
  {
    slug: "water-reverie-vr",
    title: "Water Reverie - VR Film",
    displayTitle: {
      en: "Water Reverie - VR Film",
      tr: "Water Reverie - VR Film",
    },
    division: "pictures",
    status: "archive",
    featured: false,
    categories: [
      { en: "VR Film", tr: "VR Film" },
      { en: "Immersive Cinema", tr: "Immersif Sinema" },
      { en: "Visual Production", tr: "Görsel Prodüksiyon" },
    ],
    summary: {
      en: "An immersive film experience from the Water Reverie archive, presented through selected production visuals.",
      tr: "Water Reverie arşivinden seçili prodüksiyon görselleriyle sunulan immersif film deneyimi.",
    },
    context: {
      en: "A concise archive record while final exhibition and credit details are reviewed.",
      tr: "Nihai sergi ve kredi bilgileri gözden geçirilirken tutulan kısa arşiv kaydı.",
    },
    verificationNotes: [
      "VR film credits, exhibition context, dates and installation details require confirmation.",
      "Review panoramic stills and video material before expanded publication.",
    ],
    scope: [
      { en: "VR film", tr: "VR film" },
      { en: "Immersive visual production", tr: "Immersif görsel prodüksiyon" },
      { en: "Archive review", tr: "Arşiv değerlendirmesi" },
    ],
    heroMedia: projectMedia.waterReverieVr.hero,
    gallery: projectMedia.waterReverieVr.gallery.length
      ? projectMedia.waterReverieVr.gallery
      : [placeholderMedia("water-reverie-vr-gallery-placeholder")],
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
      { en: "Immersive Experience", tr: "Immersif Anlatı" },
    ],
    summary: {
      en: "A museum experience exploring Osman Hamdi Bey's life, artistic world and intellectual legacy through spatial interpretation and interactive discovery.",
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
    heroMedia: projectMedia.osmanHamdiBey.hero,
    gallery: projectMedia.osmanHamdiBey.gallery.length
      ? projectMedia.osmanHamdiBey.gallery
      : [placeholderMedia("osman-hamdi-bey-gallery-placeholder")],
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
      en: "A cinematic city work tracing Istanbul through architecture, water and collective memory.",
      tr: "İstanbul'u mimari, su ve kolektif hafıza üzerinden izleyen sinematik kent işi.",
    },
    context: {
      en: "A visual study of the city as a layered and changing organism.",
      tr: "Kenti katmanlanan ve değişen bir organizma olarak ele alan görsel çalışma.",
    },
    legacyCredit: {
      en: "Originally developed under Muse Studio.",
      tr: "İlk olarak Muse Studio bünyesinde geliştirilmiştir.",
    },
    verificationNotes: ["Dates, institutions and exhibition details must be confirmed before publishing."],
    heroMedia: projectMedia.beyondIstanbul.hero,
    gallery: projectMedia.beyondIstanbul.gallery.length
      ? projectMedia.beyondIstanbul.gallery
      : [placeholderMedia("beyond-istanbul-gallery-placeholder")],
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
      en: "A spatial visual production shaped around precision, movement and professional knife-making.",
      tr: "Hassasiyet, hareket ve profesyonel bıçak üretimi etrafında şekillenen mekansal görsel prodüksiyon.",
    },
    production: {
      en: "Developed through motion design, 3D animation and spatial media integration.",
      tr: "Hareketli grafik, 3D animasyon ve mekansal medya entegrasyonuyla geliştirildi.",
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
    heroMedia: projectMedia.chefsSlice.hero,
    gallery: projectMedia.chefsSlice.gallery.length ? projectMedia.chefsSlice.gallery : [placeholderMedia("chefs-slice-gallery-placeholder")],
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
    heroMedia: projectMedia.nowhere.hero,
    gallery: projectMedia.nowhere.gallery.length ? projectMedia.nowhere.gallery : [placeholderMedia("nowhere-gallery-placeholder")],
  },
];

const projectOrder = [
  "nud38",
  "osman-hamdi-bey",
  "beyond-istanbul",
  "chefs-slice",
  "water-reverie-vr",
  "orta-blueskyer-nft",
  "nowhere",
];

export const projects = projectRecords
  .filter((project) => project.slug !== "water-reverie-app")
  .sort((first, second) => {
    const firstIndex = projectOrder.indexOf(first.slug);
    const secondIndex = projectOrder.indexOf(second.slug);
    return (firstIndex === -1 ? 999 : firstIndex) - (secondIndex === -1 ? 999 : secondIndex);
  });

export const featuredProject = projects.find((project) => project.featured)!;
export const selectedProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
