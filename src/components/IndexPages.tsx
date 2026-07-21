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
        eyebrow={locale === "en" ? "Works" : "İşler"}
        title={locale === "en" ? "Works shaped through research, memory and cultural experience." : "Araştırma, hafıza ve kültürel deneyimle şekillenen işler."}
        body={locale === "en" ? "A selection of original worlds, archive systems, cultural experiences and visual works developed through the practice." : "Pratik içinde geliştirilen özgün dünyalar, arşiv sistemleri, kültürel deneyimler ve görsel işlerden bir seçki."}
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
                  {project.featured ? (locale === "en" ? "Original World" : "Özgün Dünya") : divisions[project.division].name}
                </p>
                <h2 className="mt-4 font-romie text-5xl text-[#f4f1ea]">{project.displayTitle?.[locale] ?? project.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a7a39b]">{project.summary[locale]}</p>
                {externalUrl ? (
                  <a href={externalUrl} className={ctaClassName}>{externalProjectLabel(externalUrl)}</a>
                ) : (
                  <Link href={projectPath(locale, project.slug)} className={ctaClassName}>{locale === "en" ? "Open work" : "İşi incele"}</Link>
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
        title={locale === "en" ? "Original worlds with the capacity to move across forms." : "Farklı biçimlere açılabilen özgün dünyalar."}
        body={locale === "en" ? "Originals is where authored intellectual properties are developed through research, writing, visual world-building and long-term cultural strategy." : "Originals; yazarlıklı fikri mülkiyetlerin araştırma, yazım, görsel dünya kurma ve uzun vadeli kültürel stratejiyle geliştirildiği alandır."}
      />
      <section className="page-wrap grid gap-10 pb-20 lg:grid-cols-2">
        <MediaBlock media={original.heroMedia} locale={locale} className="min-h-[30rem]" />
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{locale === "en" ? "Ongoing Original World" : "Devam Eden Özgün Dünya"}</p>
          <h2 className="mt-4 font-romie text-7xl text-[#f4f1ea]">{original.title}</h2>
          <p className="mt-6 text-sm leading-7 text-[#a7a39b]">{original.summary[locale]}</p>
          {original.externalUrl ? (
            <a href={original.externalUrl} className="lime-cta mt-8 inline-block px-5 py-3 text-sm" style={{ color: "#090a0c" }}>nud38.com</a>
          ) : (
            <Link href={projectPath(locale, original.slug)} className="lime-cta mt-8 inline-block px-5 py-3 text-sm" style={{ color: "#090a0c" }}>{locale === "en" ? "Explore NU.D38" : "NU.D38'i incele"}</Link>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

export function ProductionPage({ locale }: { locale: Locale }) {
  const practices = [
    { title: { en: "Research & Authorship", tr: "Araştırma ve Yazarlık" }, body: { en: "Research, writing, interpretation, treatments, archive work and authorship for long-term cultural work.", tr: "Uzun soluklu kültürel işler için araştırma, yazım, yorumlama, tretman, arşiv çalışması ve yazarlık." } },
    { title: { en: "Film & Documentary", tr: "Film ve Belgesel" }, body: { en: "Documentary inquiry, film direction, artist films, interviews, visual essays and cinematic forms shaped by the subject.", tr: "Konu tarafından şekillenen belgesel araştırma, film yönetimi, sanatçı filmleri, röportajlar, görsel denemeler ve sinematik biçimler." } },
    { title: { en: "Museum & Exhibition", tr: "Müze ve Sergi" }, body: { en: "Museum concepts, exhibition interpretation, visitor journeys, archive reading and cultural heritage experiences.", tr: "Müze konseptleri, sergi yorumlama, ziyaretçi yolculukları, arşiv okuması ve kültürel miras deneyimleri." } },
    { title: { en: "Archive Wall", tr: "Arşiv Duvarı" }, body: { en: "Archive interpretation, curation and interactive LED wall systems for museums, institutions and cultural memory projects.", tr: "Müzeler, kurumlar ve kültürel hafıza projeleri için arşiv yorumlama, kürasyon ve interaktif LED wall sistemleri." } },
    { title: { en: "Asterion Presence", tr: "Asterion Presence" }, body: { en: "Life-scale digital figures for museums, exhibitions, brands and public spaces, shaped through research, character direction, performance, system integration and installation.", tr: "Müzeler, sergiler, markalar ve kamusal alanlar için araştırma, karakter yönetimi, performans, sistem entegrasyonu ve kurulumla şekillenen insan ölçeğinde dijital figürler." } },
    { title: { en: "Visual Systems", tr: "Görsel Sistemler" }, body: { en: "Creative direction, art direction, moving image, motion design, 3D, animation and post-production when the work requires them.", tr: "İşin gerektirdiği yerde yaratıcı yönetim, sanat yönetimi, hareketli görüntü, motion design, 3D, animasyon ve post-prodüksiyon." } },
    { title: { en: "Spatial & Interactive", tr: "Mekansal ve Etkileşimli" }, body: { en: "Spatial media, interactive environments, real-time cinematics and immersive installations shaped around meaning and participation.", tr: "Anlam ve katılım etrafında şekillenen mekansal medya, etkileşimli ortamlar, gerçek zamanlı sinematikler ve immersif enstalasyonlar." } },
  ];
  return (
    <SiteShell locale={locale} active="production" alternateHref={routePaths[locale === "en" ? "tr" : "en"].production}>
      <PageHeader locale={locale} eyebrow={locale === "en" ? "Practice" : "Pratik"} title={locale === "en" ? "A practice for research, authorship, memory and cultural experience." : "Araştırma, yazarlık, hafıza ve kültürel deneyim için bir pratik."} body={locale === "en" ? "Production remains one capability among research, authorship, archive interpretation, spatial experience, visual systems and public presentation." : "Prodüksiyon; araştırma, yazarlık, arşiv yorumlama, mekansal deneyim, görsel sistemler ve kamusal sunum arasındaki yetkinliklerden biridir."} />
      <section className="page-wrap grid gap-px border fine-rule pb-20 md:grid-cols-2">{practices.map((practice) => (<article key={practice.title.en} className="bg-[#111317] p-7"><h2 className="font-romie text-4xl text-[#f4f1ea]">{practice.title[locale]}</h2><p className="mt-5 text-sm leading-7 text-[#a7a39b]">{practice.body[locale]}</p></article>))}</section>
      <section className="page-wrap pb-20 text-sm leading-7 text-[#a7a39b]">{locale === "en" ? "Each method is chosen for the subject, the site and the audience, not as a fixed service package." : "Her yöntem sabit bir hizmet paketi olarak değil; konuya, mekana ve izleyiciye göre seçilir."}</section>
    </SiteShell>
  );
}

export function StudioPage({ locale }: { locale: Locale }) {
  return (
    <SiteShell locale={locale} active="studio" alternateHref={routePaths[locale === "en" ? "tr" : "en"].studio}>
      <PageHeader locale={locale} eyebrow={locale === "en" ? "About" : "Hakkında"} title={locale === "en" ? "A cultural practice for forms of research, memory and experience." : "Araştırma, hafıza ve deneyim biçimleri için kültürel bir pratik."} body={locale === "en" ? "The Asterion works through research, authorship, archives, cultural experience, original intellectual properties and visual systems." : "The Asterion; araştırma, yazarlık, arşivler, kültürel deneyim, özgün fikri mülkiyetler ve görsel sistemler üzerinden çalışır."} />
      <section className="page-wrap grid gap-10 pb-20 md:grid-cols-2"><div className="text-sm leading-7 text-[#a7a39b]"><p>{locale === "en" ? "The practice brings together research, writing, visual direction, archive interpretation, moving image and spatial experience." : "Pratik; araştırmayı, yazımı, görsel yönetimi, arşiv yorumlamayı, hareketli görüntüyü ve mekansal deneyimi bir araya getirir."}</p><p className="mt-5">{locale === "en" ? "Projects are developed through purpose-built teams of filmmakers, designers, researchers, writers, developers, artists, architects and production specialists." : "Projeler; film yapımcıları, tasarımcılar, araştırmacılar, yazarlar, yazılımcılar, sanatçılar, mimarlar ve prodüksiyon uzmanlarından oluşan projeye özel ekiplerle geliştirilir."}</p></div><aside className="border fine-rule p-7"><p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{locale === "en" ? "Direction" : "Yön"}</p><h2 className="mt-4 font-romie text-4xl text-[#f4f1ea]">{locale === "en" ? "Research, authorship and public form" : "Araştırma, yazarlık ve kamusal biçim"}</h2><p className="mt-5 text-sm leading-7 text-[#a7a39b]">{locale === "en" ? "The work is shaped by cultural memory, visual culture, philosophical and historical research, narrative development and multidisciplinary making." : "İşler; kültürel hafıza, görsel kültür, felsefi ve tarihsel araştırma, anlatı geliştirme ve disiplinlerarası üretimle şekillenir."}</p><Link href={locale === "en" ? "/en/studio/selected-history" : "/tr/studyo/secili-gecmis"} className="mt-6 inline-block border-b border-[#d7ff2f] pb-1 text-sm text-[#e9e5dc]">{locale === "en" ? "Selected history" : "Seçili geçmiş"}</Link></aside></section>
    </SiteShell>
  );
}

export function JournalPage({ locale, alternateHref }: { locale: Locale; alternateHref?: string }) {
  return (
    <SiteShell locale={locale} active="journal" alternateHref={alternateHref ?? routePaths[locale === "en" ? "tr" : "en"].journal}>
      <PageHeader locale={locale} eyebrow={locale === "en" ? "Selected history" : "Seçili geçmiş"} title={locale === "en" ? "Selected Exhibitions, Talks and Institutional Engagements" : "Seçili Sergiler, Konuşmalar ve Kurumsal İşbirlikleri"} body={journalIntro[locale]} />
      <section className="page-wrap grid gap-10 pb-20 lg:grid-cols-[0.78fr_1.22fr]"><aside className="journal-note border fine-rule p-7"><p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{locale === "en" ? "Selective institutional record" : "Seçici kurumsal kayıt"}</p><h2 className="mt-4 font-romie text-5xl leading-none text-[#f4f1ea]">{locale === "en" ? "Not a complete chronology." : "Eksiksiz bir kronoloji değil."}</h2><p className="mt-5 text-sm leading-7 text-[#a7a39b]">{locale === "en" ? "This page keeps the public archive intentionally concise: exhibitions, talks, workshops and institutional collaborations with a meaningful creative, production or educational role." : "Bu sayfa kamusal arşivi bilinçli olarak seçici tutar: anlamlı bir yaratıcı, prodüksiyonel veya eğitsel rol içeren sergiler, konuşmalar, atölyeler ve kurumsal işbirlikleri."}</p></aside><ol className="grid gap-px border fine-rule">{chronology.map((entry) => (<li key={entry.year + entry.title.en} className="chronology-row grid gap-5 bg-[#111317] p-6 md:grid-cols-[8rem_1fr]"><div><p className="font-romie text-4xl leading-none text-[#d7ff2f]">{entry.year}</p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#a7a39b]">{entry.category[locale]}</p></div><div><div className="flex flex-wrap items-center gap-3"><h2 className="font-romie text-4xl leading-none text-[#f4f1ea]">{entry.title[locale]}</h2>{entry.status ? (<span className="bg-[#4b00ff] px-3 py-1 text-xs uppercase tracking-[0.16em] text-white">{entry.status[locale]}</span>) : null}</div><p className="mt-4 text-sm leading-7 text-[#a7a39b]">{entry.body[locale]}</p></div></li>))}</ol></section>
      <section className="page-wrap pb-20"><div className="border-t fine-rule pt-10"><p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{locale === "en" ? "Academic and Educational Engagements" : "Akademik ve Eğitsel Katkılar"}</p><p className="mt-5 max-w-3xl text-sm leading-7 text-[#a7a39b]">{academicIntro[locale]}</p><ol className="mt-8 grid gap-px border fine-rule">{academicEngagements.map((entry) => (<li key={entry.year + entry.title.en} className="chronology-row grid gap-5 bg-[#111317] p-6 md:grid-cols-[8rem_1fr]"><div><p className="font-romie text-3xl leading-none text-[#d7ff2f]">{entry.year}</p><p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#a7a39b]">{entry.category[locale]}</p></div><div><h2 className="font-romie text-4xl leading-none text-[#f4f1ea]">{entry.title[locale]}</h2><p className="mt-4 text-sm leading-7 text-[#a7a39b]">{entry.body[locale]}</p></div></li>))}</ol></div></section>
      <section className="page-wrap pb-24"><div className="border-t fine-rule pt-10"><p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{locale === "en" ? "Future publishing" : "Gelecek yayınlar"}</p><div className="mt-6 grid gap-6 md:grid-cols-2">{futureNotes.map((entry) => (<article key={entry.title.en} className="border fine-rule p-7"><p className="text-xs uppercase tracking-[0.2em] text-[#a7a39b]">{entry.category[locale]}</p><h2 className="mt-4 font-romie text-4xl text-[#f4f1ea]">{entry.title[locale]}</h2><p className="mt-4 text-sm leading-7 text-[#a7a39b]">{entry.body[locale]}</p></article>))}</div></div></section>
    </SiteShell>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const projectTypes = locale === "en" ? ["Original World", "Research Direction", "Archive or Memory Work", "Museum or Exhibition", "Cultural Experience", "Film or Documentary", "Asterion Presence", "Archive Wall", "Other"] : ["Özgün Dünya", "Araştırma Yönü", "Arşiv veya Hafıza Çalışması", "Müze veya Sergi", "Kültürel Deneyim", "Film veya Belgesel", "Asterion Presence", "Archive Wall", "Diğer"];
  return (
    <SiteShell locale={locale} active="contact" alternateHref={routePaths[locale === "en" ? "tr" : "en"].contact}>
      <PageHeader locale={locale} eyebrow={locale === "en" ? "Contact" : "İletişim"} title={locale === "en" ? "Begin with what needs to take form." : "Biçim alması gereken yerden başlayalım."} body={locale === "en" ? "For research directions, archives, cultural subjects, original worlds and public experiences, write with the first contours of the work." : "Araştırma yönleri, arşivler, kültürel konular, özgün dünyalar ve kamusal deneyimler için işin ilk çerçevesiyle bize yazabilirsiniz."} />
      <section className="page-wrap grid gap-10 pb-20 lg:grid-cols-[0.75fr_1.25fr]"><div className="text-sm leading-7 text-[#a7a39b]"><p><a href={"mailto:" + site.email} className="text-[#e9e5dc] transition-colors hover:text-[#d7ff2f]">{site.email}</a></p><p><a href="tel:+905323902000" className="transition-colors hover:text-[#e9e5dc]">{site.phone}</a></p><p>{site.location[locale]}</p></div><form className="grid gap-4" action={"mailto:" + site.email} method="post"><Input label={locale === "en" ? "Name" : "Ad"} /><Input label={locale === "en" ? "Institution or Company" : "Kurum veya Şirket"} /><Input label="Email" type="email" /><label className="grid gap-2 text-sm text-[#a7a39b]">{locale === "en" ? "Work Type" : "İş Türü"}<select className="border fine-rule bg-[#111317] px-4 py-3 text-[#e9e5dc]">{projectTypes.map((type) => (<option key={type}>{type}</option>))}</select></label><Input label={locale === "en" ? "Stage" : "Aşama"} /><Input label={locale === "en" ? "Estimated Timeline" : "Tahmini Zamanlama"} /><Input label={locale === "en" ? "Estimated Budget Range" : "Tahmini Bütçe Aralığı"} /><label className="grid gap-2 text-sm text-[#a7a39b]">{locale === "en" ? "Message" : "Mesaj"}<textarea className="min-h-40 border fine-rule bg-[#111317] px-4 py-3 text-[#e9e5dc]" /></label><Input label={locale === "en" ? "Reference Link" : "Referans Link"} /><button className="lime-cta justify-self-start px-5 py-3 text-sm" style={{ color: "#090a0c" }} type="submit">{locale === "en" ? "Begin a Conversation" : "Bir Görüşme Başlat"}</button></form></section>
    </SiteShell>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const items = locale === "en" ? [["Contact", "When you contact The Asterion, we use the information you provide only to respond to your enquiry and discuss the relevant work."], ["Project material", "Any project descriptions, references or attachments shared with us are treated as confidential unless a different agreement is made in writing."], ["Analytics", "The website may use standard hosting and analytics logs to understand basic site performance and usage. No public project claims are derived from this data."], ["Rights", "Project titles, artworks, images, trademarks and institutional names remain the property of their respective rights holders. Historical references and legacy production credits describe past project context only; they do not imply current endorsement, partnership or affiliation unless explicitly stated."]] : [["İletişim", "The Asterion ile iletişime geçtiğinizde paylaştığınız bilgiler yalnızca talebinize yanıt vermek ve ilgili işi görüşmek için kullanılır."], ["Proje materyalleri", "Bizimle paylaşılan proje açıklamaları, referanslar veya ekler, yazılı olarak farklı bir anlaşma yapılmadıkça gizli kabul edilir."], ["Analitik", "Web sitesi, temel performans ve kullanım bilgilerini anlamak için standart barındırma ve analitik kayıtlarından yararlanabilir. Bu verilerden kamusal proje iddiaları üretilmez."], ["Haklar", "Proje başlıkları, eserler, görseller, ticari markalar ve kurum adları ilgili hak sahiplerine aittir. Tarihsel referanslar ve geçmiş prodüksiyon kredileri yalnızca geçmiş proje bağlamını açıklar; açıkça belirtilmedikçe güncel onay, ortaklık veya bağlılık anlamına gelmez."]];
  return (
    <SiteShell locale={locale} active="privacy" alternateHref={routePaths[locale === "en" ? "tr" : "en"].privacy}>
      <PageHeader locale={locale} eyebrow={locale === "en" ? "Privacy" : "Gizlilik"} title={locale === "en" ? "A clear note on contact, project material and rights." : "İletişim, proje materyalleri ve haklar hakkında açık not."} body={locale === "en" ? "This page explains how The Asterion treats basic contact information and project material shared through the website." : "Bu sayfa, The Asterion'un web sitesi üzerinden paylaşılan temel iletişim bilgilerini ve proje materyallerini nasıl ele aldığını açıklar."} />
      <section className="page-wrap grid gap-px border fine-rule pb-20 md:grid-cols-2">{items.map(([title, body]) => (<article key={title} className="bg-[#111317] p-7"><h2 className="font-romie text-4xl text-[#f4f1ea]">{title}</h2><p className="mt-5 text-sm leading-7 text-[#a7a39b]">{body}</p></article>))}</section>
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
