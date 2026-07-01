import Link from "next/link";
import { divisions } from "@/content/divisions";
import { academicEngagements, academicIntro, chronology, futureNotes, journalIntro } from "@/content/journal";
import { projectPath, routePaths } from "@/content/navigation";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { MediaBlock } from "./MediaBlock";
import { SiteShell } from "./SiteShell";

export function WorkIndex({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale} active="work" alternateHref={routePaths[locale === "en" ? "tr" : "en"].work}>
      <PageHeader
        locale={locale}
        eyebrow={locale === "en" ? "Selected work" : "Seçili işler"}
        title={locale === "en" ? "Films, experiences and story worlds shaped with purpose." : "Amacı olan filmler, deneyimler ve anlatı dünyaları."}
        body={locale === "en" ? "A selection of original and commissioned projects across cinema, museum experience, cultural production and visual storytelling." : "Sinema, müze deneyimi, kültürel prodüksiyon ve görsel anlatı alanlarında geliştirilen özgün ve siparişe dayalı projelerden bir seçki."}
      />
      <section className="page-wrap grid gap-8 pb-20">
        {projects.map((project) => {
          const externalUrl = project.externalUrl;
          const ctaClassName = "mt-6 inline-block text-sm text-[#e9e5dc] underline decoration-[#d7ff2f] underline-offset-8";

          return (
            <article key={project.slug} className="grid gap-6 border-t fine-rule pt-8 md:grid-cols-[0.65fr_1.35fr]">
              <MediaBlock media={project.heroMedia} locale={locale} className="min-h-64" />
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
                  {project.featured ? (locale === "en" ? "Featured Original" : "Öne Çıkan Özgün Proje") : divisions[project.division].name}
                </p>
                <h2 className="mt-4 font-romie text-5xl text-[#f4f1ea]">{project.displayTitle?.[locale] ?? project.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a7a39b]">{project.summary[locale]}</p>
                {externalUrl ? (
                  <a href={externalUrl} className={ctaClassName}>
                    {externalProjectLabel(externalUrl)}
                  </a>
                ) : (
                  <Link href={projectPath(locale, project.slug)} className={ctaClassName}>
                    {locale === "en" ? "View project" : "Projeyi incele"}
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </SiteShell>
  );
}

export function OriginalsPage({ locale }: { locale: Locale }) {
  const original = projects.find((project) => project.featured)!;
  return (
    <SiteShell locale={locale} active="originals" alternateHref={routePaths[locale === "en" ? "tr" : "en"].originals}>
      <PageHeader
        locale={locale}
        eyebrow="The Asterion Originals"
        title={locale === "en" ? "Original story worlds with the capacity to move across forms." : "Farklı biçimlere açılabilen özgün anlatı dünyaları."}
        body={locale === "en" ? "Originals is where authored intellectual properties are developed through research, writing, visual world-building and long-term production strategy." : "Originals; yazarlıklı fikri mülkiyetlerin araştırma, yazım, görsel dünya kurma ve uzun vadeli prodüksiyon stratejisiyle geliştirildiği alandır."}
      />
      <section className="page-wrap grid gap-10 pb-20 lg:grid-cols-2">
        <MediaBlock media={original.heroMedia} locale={locale} className="min-h-[30rem]" />
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
            {locale === "en" ? "Ongoing Original Project" : "Devam Eden Özgün Proje"}
          </p>
          <h2 className="mt-4 font-romie text-7xl text-[#f4f1ea]">{original.title}</h2>
          <p className="mt-6 text-sm leading-7 text-[#a7a39b]">{original.summary[locale]}</p>
          {original.externalUrl ? (
            <a href={original.externalUrl} className="mt-8 inline-block bg-[#d7ff2f] px-5 py-3 text-sm text-[#090a0c]">
              nud38.com
            </a>
          ) : (
            <Link href={projectPath(locale, original.slug)} className="mt-8 inline-block bg-[#d7ff2f] px-5 py-3 text-sm text-[#090a0c]">
              {locale === "en" ? "Explore NU.D38" : "NU.D38'i incele"}
            </Link>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

export function ProductionPage({ locale }: { locale: Locale }) {
  const practices = [
    {
      title: { en: "Story Development", tr: "Hikaye Geliştirme" },
      body: {
        en: "Research, narrative development, treatments, concept writing, documentary research, archive work and world-building.",
        tr: "Araştırma, anlatı geliştirme, tretman, konsept yazımı, belgesel araştırması, arşiv çalışması ve dünya kurma.",
      },
    },
    {
      title: { en: "Film & Documentary", tr: "Film ve Belgesel" },
      body: {
        en: "Documentary development, film production, artist films, interviews, visual essays and cinematic content.",
        tr: "Belgesel geliştirme, film prodüksiyonu, sanatçı filmleri, röportajlar, görsel denemeler ve sinematik içerikler.",
      },
    },
    {
      title: { en: "Museum & Exhibition", tr: "Müze ve Sergi" },
      body: {
        en: "Museum concepts, exhibition narratives, visitor journeys, archive interpretation and cultural heritage experiences.",
        tr: "Müze konseptleri, sergi anlatıları, ziyaretçi yolculukları, arşiv yorumlama ve kültürel miras deneyimleri.",
      },
    },
    {
      title: { en: "Visual Production", tr: "Görsel Prodüksiyon" },
      body: {
        en: "Creative direction, art direction, moving image, motion design, 3D production, animation and post-production.",
        tr: "Yaratıcı yönetim, sanat yönetimi, hareketli görüntü, motion design, 3D prodüksiyon, animasyon ve post-prodüksiyon.",
      },
    },
    {
      title: { en: "Spatial & Interactive", tr: "Mekansal ve Etkileşimli" },
      body: {
        en: "Spatial media, interactive environments, real-time cinematics and immersive installations shaped around the narrative.",
        tr: "Anlatı etrafında şekillenen mekansal medya, etkileşimli ortamlar, gerçek zamanlı sinematikler ve immersif enstalasyonlar.",
      },
    },
  ];
  return (
    <SiteShell locale={locale} active="production" alternateHref={routePaths[locale === "en" ? "tr" : "en"].production}>
      <PageHeader
        locale={locale}
        eyebrow={locale === "en" ? "Capabilities" : "Yetkinlikler"}
        title={locale === "en" ? "Story-led production for films, museums, exhibitions and interactive environments." : "Filmler, müzeler, sergiler ve interaktif ortamlar için hikâye odaklı prodüksiyon."}
        body={locale === "en" ? "The Asterion develops projects from research and narrative structure through creative direction, media production, technical integration and public presentation." : "The Asterion; projeleri araştırma ve anlatı kurgusundan yaratıcı yönetime, medya prodüksiyonuna, teknik entegrasyona ve kamusal sunuma kadar geliştirir."}
      />
      <section className="page-wrap grid gap-px border fine-rule pb-20 md:grid-cols-2">
        {practices.map((practice) => (
          <article key={practice.title.en} className="bg-[#111317] p-7">
            <h2 className="font-romie text-4xl text-[#f4f1ea]">{practice.title[locale]}</h2>
            <p className="mt-5 text-sm leading-7 text-[#a7a39b]">{practice.body[locale]}</p>
          </article>
        ))}
      </section>
      <section className="page-wrap pb-20 text-sm leading-7 text-[#a7a39b]">
        {locale === "en"
          ? "Each production method is chosen for the story, the site and the audience, not as a fixed service package."
          : "Her prodüksiyon yöntemi sabit bir hizmet paketi olarak değil; hikayeye, mekana ve izleyiciye göre seçilir."}
      </section>
    </SiteShell>
  );
}

export function StudioPage({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale} active="studio" alternateHref={routePaths[locale === "en" ? "tr" : "en"].studio}>
      <PageHeader
        locale={locale}
        eyebrow={locale === "en" ? "Studio" : "Stüdyo"}
        title={locale === "en" ? "An independent production house for stories that move across forms." : "Farklı biçimler arasında hareket eden hikayeler için bağımsız bir prodüksiyon stüdyosu."}
        body={locale === "en" ? "The Asterion is an Istanbul-based story development and production house working across original intellectual properties, film, documentary, museum experience and visual production." : "The Asterion, özgün fikri mülkiyet projeleri, film, belgesel, müze deneyimi ve görsel prodüksiyon alanlarında çalışan İstanbul merkezli bir hikaye geliştirme ve prodüksiyon stüdyosudur."}
      />
      <section className="page-wrap grid gap-10 pb-20 md:grid-cols-2">
        <div className="text-sm leading-7 text-[#a7a39b]">
          <p>
            {locale === "en"
              ? "The studio brings together research, writing, visual direction, production design, moving image and spatial experience."
              : "Stüdyo; araştırmayı, yazımı, görsel yönetimi, prodüksiyon tasarımını, hareketli görüntüyü, gerçek zamanlı teknolojileri ve mekansal deneyimi bir araya getirir."}
          </p>
          <p className="mt-5">
            {locale === "en"
              ? "Projects are developed through purpose-built teams of filmmakers, designers, researchers, writers, developers, artists, architects and production specialists."
              : "Projeler; film yapımcıları, tasarımcılar, araştırmacılar, yazarlar, yazılımcılar, sanatçılar, mimarlar ve prodüksiyon uzmanlarından oluşan projeye özel ekiplerle geliştirilir."}
          </p>
        </div>
        <aside className="border fine-rule p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{locale === "en" ? "Founder" : "Kurucu"}</p>
          <h2 className="mt-4 font-romie text-4xl text-[#f4f1ea]">
            {locale === "en" ? "Founder & Creative Director - Talat Alkan" : "Kurucu ve Yaratıcı Yönetmen - Talat Alkan"}
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#a7a39b]">
            {locale === "en"
              ? "Talat Alkan is a creative director and producer working across cultural storytelling, film, immersive experience and spatial media. His practice combines philosophical and historical research, visual culture, narrative development and multidisciplinary production."
              : "Talat Alkan; kültürel anlatı, film, immersif deneyim ve mekansal medya alanlarında çalışan yaratıcı yönetmen ve yapımcıdır. Üretim pratiği; felsefi ve tarihsel araştırmayı, görsel kültürü, anlatı geliştirmeyi ve disiplinlerarası prodüksiyonu bir araya getirir."}
          </p>
          <Link
            href={locale === "en" ? "/en/studio/selected-history" : "/tr/studyo/secili-gecmis"}
            className="mt-6 inline-block border-b border-[#d7ff2f] pb-1 text-sm text-[#e9e5dc]"
          >
            {locale === "en" ? "Selected history" : "Seçili geçmiş"}
          </Link>
        </aside>
      </section>
    </SiteShell>
  );
}

export function JournalPage({ locale, alternateHref }: { locale: Locale; alternateHref?: string }) {
  return (
    <SiteShell locale={locale} active="journal" alternateHref={alternateHref ?? routePaths[locale === "en" ? "tr" : "en"].journal}>
      <PageHeader
        locale={locale}
        eyebrow={locale === "en" ? "Selected history" : "Seçili geçmiş"}
        title={locale === "en" ? "Selected Exhibitions, Talks and Institutional Engagements" : "Seçili Sergiler, Konuşmalar ve Kurumsal İşbirlikleri"}
        body={journalIntro[locale]}
      />
      <section className="page-wrap grid gap-10 pb-20 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="journal-note border fine-rule p-7">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
            {locale === "en" ? "Selective institutional record" : "Seçici kurumsal kayıt"}
          </p>
          <h2 className="mt-4 font-romie text-5xl leading-none text-[#f4f1ea]">
            {locale === "en" ? "Not a complete chronology." : "Eksiksiz bir kronoloji değil."}
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#a7a39b]">
            {locale === "en"
              ? "This page keeps the public archive intentionally concise: exhibitions, talks, workshops and institutional collaborations with a meaningful creative, production or educational role."
              : "Bu sayfa kamusal arşivi bilinçli olarak seçici tutar: anlamlı bir yaratıcı, prodüksiyonel veya eğitsel rol içeren sergiler, konuşmalar, atölyeler ve kurumsal işbirlikleri."}
          </p>
        </aside>
        <ol className="grid gap-px border fine-rule">
          {chronology.map((entry) => (
            <li key={`${entry.year}-${entry.title.en}`} className="chronology-row grid gap-5 bg-[#111317] p-6 md:grid-cols-[8rem_1fr]">
              <div>
                <p className="font-romie text-4xl leading-none text-[#d7ff2f]">{entry.year}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#a7a39b]">{entry.category[locale]}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-romie text-4xl leading-none text-[#f4f1ea]">{entry.title[locale]}</h2>
                  {entry.status ? (
                    <span className="bg-[#4b00ff] px-3 py-1 text-xs uppercase tracking-[0.16em] text-white">
                      {entry.status[locale]}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#a7a39b]">{entry.body[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="page-wrap pb-20">
        <div className="border-t fine-rule pt-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
            {locale === "en" ? "Academic and Educational Engagements" : "Akademik ve Eğitsel Katkılar"}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#a7a39b]">{academicIntro[locale]}</p>
          <ol className="mt-8 grid gap-px border fine-rule">
            {academicEngagements.map((entry) => (
              <li key={`${entry.year}-${entry.title.en}`} className="chronology-row grid gap-5 bg-[#111317] p-6 md:grid-cols-[8rem_1fr]">
                <div>
                  <p className="font-romie text-3xl leading-none text-[#d7ff2f]">{entry.year}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#a7a39b]">{entry.category[locale]}</p>
                </div>
                <div>
                  <h2 className="font-romie text-4xl leading-none text-[#f4f1ea]">{entry.title[locale]}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#a7a39b]">{entry.body[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="page-wrap pb-24">
        <div className="border-t fine-rule pt-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
            {locale === "en" ? "Future publishing" : "Gelecek yayınlar"}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {futureNotes.map((entry) => (
              <article key={entry.title.en} className="border fine-rule p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#a7a39b]">{entry.category[locale]}</p>
                <h2 className="mt-4 font-romie text-4xl text-[#f4f1ea]">{entry.title[locale]}</h2>
                <p className="mt-4 text-sm leading-7 text-[#a7a39b]">{entry.body[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const projectTypes = locale === "en"
    ? ["Original IP Development", "Film", "Documentary", "Museum or Exhibition", "Immersive Experience", "Artist Production", "Brand Film or Visual Production", "Research and Development", "Other"]
    : ["Özgün Proje Geliştirme", "Film", "Belgesel", "Müze veya Sergi", "Immersif Deneyim", "Sanatçı Prodüksiyonu", "Marka Filmi veya Görsel Prodüksiyon", "Araştırma ve Geliştirme", "Diğer"];
  return (
    <SiteShell locale={locale} active="contact" alternateHref={routePaths[locale === "en" ? "tr" : "en"].contact}>
      <PageHeader
        locale={locale}
        eyebrow={locale === "en" ? "Contact" : "İletişim"}
        title={locale === "en" ? "Tell us what you are developing." : "Geliştirdiğiniz hikayeyi anlatın."}
        body={locale === "en" ? "For films, documentaries, museums, archives, cultural subjects and original worlds, write to us with the first contours of the project." : "Film, belgesel, müze, arşiv, kültürel konu ve özgün dünyalar için projenin ilk çerçevesiyle bize yazabilirsiniz."}
      />
      <section className="page-wrap grid gap-10 pb-20 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="text-sm leading-7 text-[#a7a39b]">
          <p className="text-[#e9e5dc]">{site.email}</p>
          <p>
            <a href="tel:+905323902000" className="transition-colors hover:text-[#e9e5dc]">
              {site.phone}
            </a>
          </p>
          <p>{site.location[locale]}</p>
        </div>
        <form className="grid gap-4" action={`mailto:${site.email}`} method="post">
          <Input label={locale === "en" ? "Name" : "Ad"} />
          <Input label={locale === "en" ? "Institution or Company" : "Kurum veya Şirket"} />
          <Input label="Email" type="email" />
          <label className="grid gap-2 text-sm text-[#a7a39b]">
            {locale === "en" ? "Project Type" : "Proje Türü"}
            <select className="border fine-rule bg-[#111317] px-4 py-3 text-[#e9e5dc]">
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <Input label={locale === "en" ? "Project Stage" : "Proje Aşaması"} />
          <Input label={locale === "en" ? "Estimated Timeline" : "Tahmini Zamanlama"} />
          <Input label={locale === "en" ? "Estimated Budget Range" : "Tahmini Bütçe Aralığı"} />
          <label className="grid gap-2 text-sm text-[#a7a39b]">
            {locale === "en" ? "Message" : "Mesaj"}
            <textarea className="min-h-40 border fine-rule bg-[#111317] px-4 py-3 text-[#e9e5dc]" />
          </label>
          <Input label={locale === "en" ? "Reference Link" : "Referans Link"} />
          <button className="justify-self-start bg-[#e9e5dc] px-5 py-3 text-sm text-[#090a0c]" type="submit">
            {locale === "en" ? "Start a Conversation" : "Görüşmeyi Başlat"}
          </button>
        </form>
      </section>
    </SiteShell>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const items = locale === "en"
    ? [
        ["Contact", "When you contact The Asterion, we use the information you provide only to respond to your enquiry and discuss the relevant project."],
        ["Project material", "Any project descriptions, references or attachments shared with us are treated as confidential unless a different agreement is made in writing."],
        ["Analytics", "The website may use standard hosting and analytics logs to understand basic site performance and usage. No public project claims are derived from this data."],
        ["Rights", "Project images, artworks, trademarks and institutional names remain the property of their respective rights holders."],
      ]
    : [
        ["İletişim", "The Asterion ile iletişime geçtiğinizde paylaştığınız bilgiler yalnızca talebinize yanıt vermek ve ilgili projeyi görüşmek için kullanılır."],
        ["Proje materyalleri", "Bizimle paylaşılan proje açıklamaları, referanslar veya ekler, yazılı olarak farklı bir anlaşma yapılmadıkça gizli kabul edilir."],
        ["Analitik", "Web sitesi, temel performans ve kullanım bilgilerini anlamak için standart barındırma ve analitik kayıtlarından yararlanabilir. Bu verilerden kamusal proje iddiaları üretilmez."],
        ["Haklar", "Proje görselleri, eserler, ticari markalar ve kurum adları ilgili hak sahiplerine aittir."],
      ];

  return (
    <SiteShell locale={locale} active="privacy" alternateHref={routePaths[locale === "en" ? "tr" : "en"].privacy}>
      <PageHeader
        locale={locale}
        eyebrow={locale === "en" ? "Privacy" : "Gizlilik"}
        title={locale === "en" ? "A clear note on contact, project material and rights." : "İletişim, proje materyalleri ve haklar hakkında açık not."}
        body={locale === "en" ? "This page explains how The Asterion treats basic contact information and project material shared through the website." : "Bu sayfa, The Asterion'un web sitesi üzerinden paylaşılan temel iletişim bilgilerini ve proje materyallerini nasıl ele aldığını açıklar."}
      />
      <section className="page-wrap grid gap-px border fine-rule pb-20 md:grid-cols-2">
        {items.map(([title, body]) => (
          <article key={title} className="bg-[#111317] p-7">
            <h2 className="font-romie text-4xl text-[#f4f1ea]">{title}</h2>
            <p className="mt-5 text-sm leading-7 text-[#a7a39b]">{body}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}

function PageHeader({ locale, eyebrow, title, body }: { locale: Locale; eyebrow: string; title: string; body: string }) {
  return (
    <section className="page-wrap py-16">
      <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{eyebrow}</p>
      <h1 className="mt-6 max-w-5xl text-balance font-romie text-[clamp(3.1rem,8vw,7.4rem)] leading-[0.92] text-[#f4f1ea]">{title}</h1>
      <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-[#b9b5ad]">{body}</p>
      <p className="sr-only">{locale}</p>
    </section>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm text-[#a7a39b]">
      {label}
      <input type={type} className="border fine-rule bg-[#111317] px-4 py-3 text-[#e9e5dc]" />
    </label>
  );
}

function externalProjectLabel(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}
