import type { LocalizedText } from "./types";

export type JournalEntry = {
  year: string;
  category: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  status?: LocalizedText;
};

export const journalIntro: LocalizedText = {
  en: "A chronological record of selected talks, screenings, exhibitions, production references and research notes connected to The Asterion's work.",
  tr: "The Asterion'un işleriyle ilişkili seçili konuşmalar, gösterimler, sergiler, prodüksiyon referansları ve araştırma notları için kronolojik bir kayıt.",
};

export const chronology: JournalEntry[] = [
  {
    year: "Ongoing",
    category: { en: "Original development", tr: "Özgün proje geliştirme" },
    title: { en: "NU.D38", tr: "NU.D38" },
    body: {
      en: "A long-term original project inspired by Nuri Demirağ's aviation enterprise and the early history of civil aircraft production in Turkiye.",
      tr: "Nuri Demirağ'ın havacılık girişiminden ve Türkiye'de sivil uçak üretiminin erken dönem tarihinden ilham alan uzun soluklu özgün proje.",
    },
  },
  {
    year: "2019",
    category: { en: "Museum experience", tr: "Müze deneyimi" },
    title: {
      en: "A Journey into the World of Osman Hamdi Bey",
      tr: "Osman Hamdi Bey'in Dünyasına Yolculuk",
    },
    body: {
      en: "An immersive museum experience developed with Pera Museum, preserved here as part of the studio's historical production record.",
      tr: "Pera Müzesi ile geliştirilen ve stüdyonun tarihsel prodüksiyon kaydının bir parçası olarak burada yer alan immersif müze deneyimi.",
    },
  },
  {
    year: "Archive",
    category: { en: "Artist production", tr: "Sanatçı prodüksiyonu" },
    title: { en: "Nowhere - Sinan Kuran", tr: "Nowhere - Sinan Kuran" },
    body: {
      en: "Visual and spatial production connected to Sinan Kuran's artistic universe, with expanded exhibition and credit details to follow after final confirmation.",
      tr: "Sinan Kuran'ın sanatsal evreniyle ilişkili görsel ve mekansal prodüksiyon; geniş sergi ve kredi bilgileri nihai teyidin ardından eklenecektir.",
    },
    status: { en: "Details to be confirmed", tr: "Detaylar teyit edilecek" },
  },
  {
    year: "Archive",
    category: { en: "Reference contexts", tr: "Referans bağlamları" },
    title: { en: "Selected institutional and brand references", tr: "Seçili kurum ve marka referansları" },
    body: {
      en: "Historical project contexts include Xsolla, Coca-Cola, Turkcell, Heydar Aliyev Center and selected museum, brand and cultural productions developed before The Asterion under Muse Studio.",
      tr: "Tarihsel proje bağlamları arasında Xsolla, Coca-Cola, Turkcell, Haydar Aliyev Merkezi ve The Asterion öncesinde Muse Studio bünyesinde geliştirilen seçili müze, marka ve kültür prodüksiyonları yer alır.",
    },
    status: { en: "Historical context", tr: "Tarihsel bağlam" },
  },
  {
    year: "Archive",
    category: { en: "City film", tr: "Kent filmi" },
    title: { en: "Beyond Istanbul", tr: "Beyond Istanbul" },
    body: {
      en: "A cinematic city work tracing Istanbul through architecture, waterways, transformation and collective memory.",
      tr: "İstanbul'u mimari, su yolları, dönüşüm ve kolektif hafıza üzerinden izleyen sinematik kent işi.",
    },
  },
  {
    year: "Archive",
    category: { en: "Spatial visual production", tr: "Mekansal görsel prodüksiyon" },
    title: { en: "Pirge - Chef's Slice", tr: "Pirge - Chef's Slice" },
    body: {
      en: "A large-scale visual production translating precision, movement and material culture into a spatial cinematic environment.",
      tr: "Hassasiyet, hareket ve malzeme kültürünü mekansal sinematik bir ortama taşıyan büyük ölçekli görsel prodüksiyon.",
    },
  },
];

export const futureNotes: JournalEntry[] = [
  {
    year: "Notes",
    category: { en: "Publishing", tr: "Yayın" },
    title: { en: "Essays and production notes", tr: "Denemeler ve prodüksiyon notları" },
    body: {
      en: "Longer writing on story development, archives, production design, cinema, museums and original worlds will be published here over time.",
      tr: "Hikaye geliştirme, arşivler, prodüksiyon tasarımı, sinema, müzeler ve özgün dünyalar üzerine daha uzun yazılar zamanla burada yayımlanacaktır.",
    },
  },
];
