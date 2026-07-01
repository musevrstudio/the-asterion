import type { LocalizedText } from "./types";

export type JournalEntry = {
  year: string;
  category: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  status?: LocalizedText;
};

export const journalIntro: LocalizedText = {
  en: "Notes gathers public talks, screenings, exhibitions, references and production fragments around The Asterion's work. It is also the future home for longer essays and development notes.",
  tr: "Notlar; The Asterion'un işleri etrafındaki konuşmaları, gösterimleri, sergileri, referansları ve üretim parçalarını bir araya getirir. Zamanla daha uzun denemeler ve geliştirme notları için de kullanılacaktır.",
};

export const chronology: JournalEntry[] = [
  {
    year: "Ongoing",
    category: { en: "Original development", tr: "Özgün proje geliştirme" },
    title: { en: "NU.D38", tr: "NU.D38" },
    body: {
      en: "A long-term original project around Nuri Demirag's aviation enterprise, developed through research, immersive flight, documentary development and cinematic world-building.",
      tr: "Nuri Demirağ'ın havacılık girişimi etrafında araştırma, immersif uçuş, belgesel geliştirme ve sinematik dünya kurma üzerinden ilerleyen uzun soluklu özgün proje.",
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
      en: "An immersive museum experience developed with Pera Museum, carried as historical production context from Muse Studio.",
      tr: "Pera Müzesi ile geliştirilen ve Muse Studio döneminden tarihsel prodüksiyon bağlamı olarak taşınan immersif müze deneyimi.",
    },
  },
  {
    year: "Archive",
    category: { en: "Artist production", tr: "Sanatçı prodüksiyonu" },
    title: { en: "Nowhere - Sinan Kuran", tr: "Nowhere - Sinan Kuran" },
    body: {
      en: "Visual and spatial production connected to Sinan Kuran's artistic universe. Exhibition, venue, curator and credit details remain to be confirmed before expanded publication.",
      tr: "Sinan Kuran'ın sanatsal evreniyle ilişkili görsel ve mekansal prodüksiyon. Sergi, mekan, küratör ve kredi detayları geniş yayın öncesinde teyit edilecektir.",
    },
    status: { en: "Details to confirm", tr: "Detaylar teyit edilecek" },
  },
  {
    year: "Archive",
    category: { en: "Production reference", tr: "Prodüksiyon referansı" },
    title: { en: "Selected institutional and brand contexts", tr: "Seçili kurumsal ve marka bağlamları" },
    body: {
      en: "Historical project contexts include Xsolla, Coca-Cola, Turkcell, Heydar Aliyev Center and selected museum, brand and cultural productions developed before The Asterion under Muse Studio.",
      tr: "Tarihsel proje bağlamları arasında Xsolla, Coca-Cola, Turkcell, Haydar Aliyev Merkezi ve The Asterion öncesinde Muse Studio bünyesinde geliştirilen seçili müze, marka ve kültür prodüksiyonları yer alır.",
    },
    status: { en: "Reference context", tr: "Referans bağlamı" },
  },
  {
    year: "Archive",
    category: { en: "City film", tr: "Kent filmi" },
    title: { en: "Beyond Istanbul", tr: "Beyond Istanbul" },
    body: {
      en: "A cinematic city work around Istanbul's architecture, waterways, transformations and collective memory.",
      tr: "İstanbul'un mimarisi, su yolları, dönüşümü ve kolektif hafızası etrafında gelişen sinematik kent işi.",
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
    year: "Next",
    category: { en: "Essays", tr: "Denemeler" },
    title: { en: "Development notes", tr: "Geliştirme notları" },
    body: {
      en: "Longer writing on story development, archives, production design, cinema, museums and original worlds will live here over time.",
      tr: "Hikaye geliştirme, arşivler, prodüksiyon tasarımı, sinema, müzeler ve özgün dünyalar üzerine daha uzun yazılar zamanla burada yer alacak.",
    },
  },
];
