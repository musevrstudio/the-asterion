import type { LocalizedText } from "./types";

export type JournalEntry = {
  year: string;
  category: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  status?: LocalizedText;
};

export const journalIntro: LocalizedText = {
  en: "The Asterion is built on more than a decade of practice across museums, immersive media, visual production, cultural technology and public programmes. This selection brings together significant projects, invited talks and institutional collaborations developed under the creative direction of Talat Alkan and, in earlier years, through Muse Studio. Original artist, institution and production credits are retained on the relevant project pages.",
  tr: "The Asterion; müze, immersif medya, görsel prodüksiyon, kültürel teknoloji ve kamusal programlar alanlarında on yılı aşan bir üretim deneyimi üzerine kuruludur. Bu seçki, Talat Alkan'ın yaratıcı yönetiminde ve önceki yıllarda Muse Studio bünyesinde geliştirilen önemli projeleri, davetli konuşmaları ve kurumsal işbirliklerini bir araya getirir. Özgün sanatçı, kurum ve prodüksiyon kredileri ilgili proje sayfalarında korunur.",
};

export const chronology: JournalEntry[] = [
  {
    year: "2025",
    category: { en: "Invited talk", tr: "Davetli konuşma" },
    title: { en: "UNESCO World Day for Audiovisual Heritage", tr: "UNESCO Dünya Görsel-İşitsel Miras Günü" },
    body: {
      en: "Invited speaker on audiovisual heritage, new media and cultural memory.",
      tr: "Görsel-işitsel miras, yeni medya ve kültürel hafıza üzerine davetli konuşmacı.",
    },
    status: { en: "Event wording to be verified", tr: "Etkinlik metni teyit edilecek" },
  },
  {
    year: "2024",
    category: { en: "Private seminar and workshop", tr: "Kapalı seminer ve atölye" },
    title: { en: "Coca-Cola MENA", tr: "Coca-Cola MENA" },
    body: {
      en: "A private seminar and workshop for regional strategy executives at Four Seasons Istanbul, focusing on artificial intelligence, visual culture and creative production.",
      tr: "Four Seasons İstanbul'da bölgesel strateji yöneticilerine yönelik; yapay zeka, görsel kültür ve yaratıcı üretim üzerine kapalı seminer ve atölye.",
    },
  },
  {
    year: "2022",
    category: { en: "Digital experience", tr: "Dijital deneyim" },
    title: { en: "ORTA MetaDenimVerse", tr: "ORTA MetaDenimVerse" },
    body: {
      en: "A multi-city digital experience and brand world presented across New York, Amsterdam, Munich, Istanbul and Kayseri.",
      tr: "New York, Amsterdam, Münih, İstanbul ve Kayseri'yi kapsayan çok şehirli dijital deneyim ve marka dünyası.",
    },
  },
  {
    year: "2022",
    category: { en: "Workshop and talk", tr: "Atölye ve konuşma" },
    title: { en: "Turkish Design Council - New Ways of Seeing", tr: "Türkiye Tasarım Vakfı - Yeni Görme Biçimleri" },
    body: {
      en: "A workshop and talk on image, perception, technology and contemporary visual culture.",
      tr: "Görüntü, algı, teknoloji ve çağdaş görsel kültür üzerine atölye ve konuşma.",
    },
  },
  {
    year: "2022",
    category: { en: "Talks and panels", tr: "Konuşmalar ve paneller" },
    title: { en: "Contemporary Istanbul Foundation", tr: "Contemporary Istanbul Foundation" },
    body: {
      en: "Talks and panels on digital art, NFTs, the metaverse and emerging models of cultural production.",
      tr: "Dijital sanat, NFT, metaverse ve yeni kültürel üretim modelleri üzerine konuşmalar ve paneller.",
    },
  },
  {
    year: "2022",
    category: { en: "Project presentation", tr: "Proje sunumu" },
    title: { en: "Beyond Istanbul", tr: "Beyond Istanbul" },
    body: {
      en: "Presentation of the project during a Republic Day programme at Four Seasons Sultanahmet.",
      tr: "Projenin Four Seasons Sultanahmet'te düzenlenen Cumhuriyet Bayramı programındaki sunumu.",
    },
  },
  {
    year: "2021",
    category: { en: "Museum and media project", tr: "Müze ve medya projesi" },
    title: { en: "Borusan Contemporary - Water Reverie / Düş Suda", tr: "Borusan Contemporary - Water Reverie / Düş Suda" },
    body: {
      en: "A connected body of work developed in relation to the exhibition, including an immersive VR experience, an outdoor mapping project and a mobile augmented-reality application.",
      tr: "Sergiyle ilişkili olarak geliştirilen immersif VR deneyimi, açık hava mapping projesi ve mobil artırılmış gerçeklik uygulamasından oluşan bütünlüklü çalışma.",
    },
  },
  {
    year: "2021",
    category: { en: "International premiere", tr: "Uluslararası prömiyer" },
    title: { en: "Munich Fabric Start - VR Denim Journey", tr: "Munich Fabric Start - VR Denim Journey" },
    body: {
      en: "International premiere of an immersive denim experience developed in collaboration with ORTA Anadolu.",
      tr: "ORTA Anadolu işbirliğiyle geliştirilen immersif denim deneyiminin uluslararası prömiyeri.",
    },
  },
  {
    year: "2021",
    category: { en: "Augmented-reality project", tr: "Artırılmış gerçeklik projesi" },
    title: { en: "Contemporary Istanbul", tr: "Contemporary Istanbul" },
    body: {
      en: "An augmented-reality project developed in collaboration with Gallery Perrotin, Julio Le Parc Studio and Globart.",
      tr: "Gallery Perrotin, Julio Le Parc Studio ve Globart işbirliğiyle geliştirilen artırılmış gerçeklik projesi.",
    },
    status: { en: "Scope and credits to be verified", tr: "Kapsam ve krediler teyit edilecek" },
  },
  {
    year: "2021",
    category: { en: "Public talks", tr: "Kamusal konuşmalar" },
    title: { en: "Public Talk Programme", tr: "Kamusal Konuşma Programı" },
    body: {
      en: "Talks on immersive storytelling, digital culture, NFTs and the metaverse for AURA Istanbul, Robert College Alumni Association, Rotary Istanbul and Cercle d'Orient.",
      tr: "AURA İstanbul, Robert Koleji Mezunlar Derneği, Rotary İstanbul ve Cercle d'Orient kapsamında immersif anlatı, dijital kültür, NFT ve metaverse üzerine konuşmalar.",
    },
  },
  {
    year: "2020",
    category: { en: "Festival programme", tr: "Festival programı" },
    title: { en: "Venice VR Expanded - La Biennale di Venezia", tr: "Venice VR Expanded - La Biennale di Venezia" },
    body: {
      en: "Participation in the Venice International Film Festival's Venice VR Expanded programme under Muse VR, in collaboration with Soho House and the Istanbul Planning Agency.",
      tr: "Soho House ve İstanbul Planlama Ajansı işbirliğiyle, Muse VR olarak Venedik Uluslararası Film Festivali'nin Venice VR Expanded programına katılım.",
    },
    status: { en: "Participation format to be verified", tr: "Katılım formatı teyit edilecek" },
  },
  {
    year: "2020",
    category: { en: "Workshop", tr: "Atölye" },
    title: { en: "Sonar Istanbul", tr: "Sonar İstanbul" },
    body: {
      en: "Workshop on artistic interactive narratives, immersive media and emerging forms of storytelling.",
      tr: "Sanatsal interaktif anlatılar, immersif medya ve yeni hikaye anlatıcılığı biçimleri üzerine atölye.",
    },
  },
  {
    year: "2019",
    category: { en: "Museum experience", tr: "Müze deneyimi" },
    title: {
      en: "Pera Museum - A Journey into the World of Osman Hamdi Bey",
      tr: "Pera Müzesi - Osman Hamdi Bey'in Dünyasına Yolculuk",
    },
    body: {
      en: "An immersive museum experience translating Osman Hamdi Bey's life, artistic world and intellectual legacy into an interactive virtual environment.",
      tr: "Osman Hamdi Bey'in yaşamını, sanatsal dünyasını ve düşünsel mirasını interaktif bir sanal ortama taşıyan immersif müze deneyimi.",
    },
  },
  {
    year: "2019",
    category: { en: "Professional development", tr: "Profesyonel gelişim" },
    title: { en: "MedCruise - Genoa", tr: "MedCruise - Cenova" },
    body: {
      en: "A professional development course on the future of storytelling and the VR paradigm.",
      tr: "Hikaye anlatıcılığının geleceği ve VR paradigması üzerine profesyonel gelişim programı.",
    },
  },
  {
    year: "2018",
    category: { en: "Digital art presentation", tr: "Dijital sanat sunumu" },
    title: { en: "Carrousel du Louvre - Paris", tr: "Carrousel du Louvre - Paris" },
    body: {
      en: "Participation in a presentation of digital art and virtual-reality work at the Carrousel du Louvre.",
      tr: "Carrousel du Louvre'da dijital sanat ve sanal gerçeklik çalışmalarının yer aldığı sunuma katılım.",
    },
  },
  {
    year: "2018",
    category: { en: "Immersive project", tr: "İmmersif proje" },
    title: { en: "Virtual Revolution / Sanal Devrim", tr: "Virtual Revolution / Sanal Devrim" },
    body: {
      en: "An immersive project developed in relation to the visual world of Devrim Erbil and presented in Istanbul, Izmir and Eskişehir.",
      tr: "Devrim Erbil'in görsel dünyasıyla ilişkili olarak geliştirilen ve İstanbul, İzmir ile Eskişehir'de sunulan immersif proje.",
    },
    status: { en: "Venues to be verified", tr: "Mekanlar teyit edilecek" },
  },
  {
    year: "2018",
    category: { en: "Art fair presentation", tr: "Sanat fuarı sunumu" },
    title: { en: "Art New York", tr: "Art New York" },
    body: {
      en: "Presentation of Virtual Revolution, an immersive project developed in relation to the work of Devrim Erbil, with Gama Gallery.",
      tr: "Devrim Erbil'in sanatsal dünyasıyla ilişkili olarak geliştirilen Sanal Devrim immersif projesinin Gama Gallery ile sunumu.",
    },
    status: { en: "Subject to verification", tr: "Teyide tabi" },
  },
];

export const academicIntro: LocalizedText = {
  en: "Talat Alkan has delivered lectures, workshops and guest teaching sessions on visual culture, immersive storytelling, art and technology, creative entrepreneurship and new media.",
  tr: "Talat Alkan; görsel kültür, immersif hikaye anlatıcılığı, sanat ve teknoloji, yaratıcı girişimcilik ve yeni medya alanlarında konferanslar, atölyeler ve misafir dersler gerçekleştirdi.",
};

export const academicEngagements: JournalEntry[] = [
  {
    year: "Selected",
    category: { en: "Institutions", tr: "Kurumlar" },
    title: { en: "Academic and Educational Engagements", tr: "Akademik ve Eğitsel Katkılar" },
    body: {
      en: "Koç University MBA Programme; Bahçeşehir University VR First; İzmir Institute of Technology, Faculty of Architecture; Özyeğin University; Bursa Technical University; Bursa Uludağ University, Department of Architecture; Ege University; Turkcell Academy; AURA Istanbul; Turkish Design Council.",
      tr: "Koç Üniversitesi MBA Programı; Bahçeşehir Üniversitesi VR First; İzmir Yüksek Teknoloji Enstitüsü Mimarlık Fakültesi; Özyeğin Üniversitesi; Bursa Teknik Üniversitesi; Bursa Uludağ Üniversitesi Mimarlık Bölümü; Ege Üniversitesi; Turkcell Akademi; AURA İstanbul; Türkiye Tasarım Vakfı.",
    },
  },
  {
    year: "Selected",
    category: { en: "Conference", tr: "Konferans" },
    title: { en: "Bursa Uludağ University, Department of Architecture", tr: "Bursa Uludağ Üniversitesi Mimarlık Bölümü" },
    body: {
      en: "Conference on New Ways of Seeing at Bursa Uludağ University, Department of Architecture.",
      tr: "Bursa Uludağ Üniversitesi Mimarlık Bölümü'nde Yeni Görme Biçimleri üzerine konferans.",
    },
  },
];

export const homepageHistoryHighlights: JournalEntry[] = chronology.filter((entry) =>
  [
    "UNESCO World Day for Audiovisual Heritage",
    "Pera Museum - A Journey into the World of Osman Hamdi Bey",
    "Borusan Contemporary - Water Reverie / Düş Suda",
    "Venice VR Expanded - La Biennale di Venezia",
    "Carrousel du Louvre - Paris",
    "Turkish Design Council - New Ways of Seeing",
  ].includes(entry.title.en)
);

export const futureNotes: JournalEntry[] = [
  {
    year: "Notes",
    category: { en: "Publishing", tr: "Yayın" },
    title: { en: "Essays and production notes", tr: "Denemeler ve prodüksiyon notları" },
    body: {
      en: "Longer writing on story development, archives, production design, cinema, museums and original worlds will be published over time.",
      tr: "Hikaye geliştirme, arşivler, prodüksiyon tasarımı, sinema, müzeler ve özgün dünyalar üzerine daha uzun yazılar zamanla yayımlanacaktır.",
    },
  },
];
