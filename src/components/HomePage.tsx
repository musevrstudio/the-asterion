import Link from "next/link";
import Image from "next/image";
import { divisions } from "@/content/divisions";
import { projectPath, routePaths } from "@/content/navigation";
import { homepageHistoryHighlights } from "@/content/journal";
import { featuredProject, selectedProjects } from "@/content/projects";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { ArchiveWallVisual } from "./ArchiveWallVisual";
import { MediaBlock } from "./MediaBlock";
import { SiteShell } from "./SiteShell";

const practice = {
  en: [
    ["Films & Documentaries", "Original films, documentaries, artist films and commissioned cinematic productions."],
    ["Museums & Experiences", "Museum narratives, exhibitions, immersive environments and cultural experiences."],
    ["Original Worlds", "Long-term story properties developed across film, documentary, exhibition, publication and interactive media."],
    ["Visual Production", "Creative direction, moving image, spatial media, animation and real-time visual production."],
  ],
  tr: [
    ["Filmler & Belgeseller", "Ã–zgÃ¼n filmler, belgeseller, sanatÃ§Ä± filmleri ve sipariÅŸe dayalÄ± sinematik prodÃ¼ksiyonlar."],
    ["MÃ¼zeler & Deneyimler", "MÃ¼ze anlatÄ±larÄ±, sergiler, immersif ortamlar ve kÃ¼ltÃ¼rel deneyimler."],
    ["Ã–zgÃ¼n DÃ¼nyalar", "Film, belgesel, sergi, oyun, yayÄ±n ve etkileÅŸimli medya arasÄ±nda geliÅŸtirilen uzun soluklu Ã¶zgÃ¼n anlatÄ± dÃ¼nyalarÄ±."],
    ["GÃ¶rsel ProdÃ¼ksiyon", "YaratÄ±cÄ± yÃ¶netim, hareketli gÃ¶rÃ¼ntÃ¼, mekansal medya, animasyon ve gerÃ§ek zamanlÄ± gÃ¶rsel prodÃ¼ksiyon."],
  ],
};

const method = {
  en: ["Research", "Story Development", "Visual World-Building", "Production", "Experience or Distribution"],
  tr: ["AraÅŸtÄ±rma", "Hikaye GeliÅŸtirme", "GÃ¶rsel DÃ¼nya Kurma", "ProdÃ¼ksiyon", "Deneyim veya DaÄŸÄ±tÄ±m"],
};

const archiveWall = {
  title: "Asterion Archive Wall",
  headline: {
    en: "Turn your archive into a living digital experience.",
    tr: "ArÅŸivinizi yaÅŸayan bir dijital deneyime dÃ¶nÃ¼ÅŸtÃ¼rÃ¼n.",
  },
  body: {
    en: "We transform documents, photographs, videos and audio recordings into interactive, searchable and exhibition-ready LED wall experiences for institutions with a living memory.",
    tr: "Belgeler, fotoÄŸraflar, videolar ve ses kayÄ±tlarÄ±nÄ±; interaktif, aranabilir ve sergilenebilir LED wall deneyimlerine dÃ¶nÃ¼ÅŸtÃ¼rÃ¼yoruz.",
  },
  tags: {
    en: ["Digitization", "Curation", "Interactive LED Wall"],
    tr: ["DijitalleÅŸtirme", "KÃ¼rasyon", "Ä°nteraktif LED Wall"],
  },
  cta: {
    en: "Transform Your Archive",
    tr: "ArÅŸivinizi DÃ¶nÃ¼ÅŸtÃ¼relim",
  },
  alt: {
    en: "Asterion Archive Wall interactive digital archive experience",
    tr: "Asterion Archive Wall interaktif dijital arÅŸiv deneyimi",
  },
};

const presence = {
  title: "Asterion Presence",
  headline: {
    en: "Give your story a human presence.",
    tr: "Hikayenize insan Ã¶lÃ§eÄŸinde bir varlÄ±k kazandÄ±rÄ±n.",
  },
  body: {
    en: "Life-scale digital figures for museums, exhibitions, brands and public spaces, developed from narrative and character design to cinematic production, system integration and installation.",
    tr: "MÃ¼zeler, sergiler, markalar ve kamusal alanlar iÃ§in insan Ã¶lÃ§eÄŸinde dijital figÃ¼rler; anlatÄ± ve karakter tasarÄ±mÄ±ndan sinematik prodÃ¼ksiyon, sistem entegrasyonu ve kuruluma kadar geliÅŸtirilir.",
  },
  tags: {
    en: ["Digital Hologram", "Character Direction", "Installation"],
    tr: ["Dijital Hologram", "Karakter YÃ¶netimi", "Kurulum"],
  },
  cta: {
    en: "Develop a Presence",
    tr: "Bir Presence GeliÅŸtirelim",
  },
  alt: {
    en: "Asterion Presence life-scale digital hologram display",
    tr: "Asterion Presence insan Ã¶lÃ§eÄŸinde dijital hologram Ã¼nitesi",
  },
};

export function HomePage({ locale }: { locale: Locale }) {
  const featuredUrl = featuredProject.externalUrl ?? projectPath(locale, featuredProject.slug);

  return (
    <SiteShell locale={locale} active="home" alternateHref={routePaths[locale === "en" ? "tr" : "en"].home}>
      <section className="cinematic-panel border-b fine-rule">
        <div className="page-wrap relative grid min-h-[calc(100vh-5rem)] items-end gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="relative z-10 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d7ff2f]">{site.descriptor[locale]}</p>
            <h1 className="mt-8 font-romie text-[clamp(3.1rem,7.8vw,7.9rem)] leading-[0.9] text-[#f4f1ea]">
              {site.statement[locale]}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#a7a39b]">{site.support[locale]}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={routePaths[locale].work} className="lime-cta px-5 py-3 text-sm" style={{ color: "#090a0c" }}>
                {locale === "en" ? "View Selected Work" : "SeÃ§ili Ä°ÅŸleri Ä°ncele"}
              </Link>
              <Link href={routePaths[locale].contact} className="border fine-rule px-5 py-3 text-sm text-[#e9e5dc]">
                {locale === "en" ? "Start a Conversation" : "GÃ¶rÃ¼ÅŸmeyi BaÅŸlat"}
              </Link>
            </div>
          </div>
          <div className="relative z-10 grid gap-3 border-l fine-rule pl-6 text-sm text-[#a7a39b]">
            {Object.values(divisions).map((division) => (
              <div key={division.name}>
                <p className="text-[#e9e5dc]">{division.name}</p>
                <p>{division.description[locale]}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="archive-wall" className="page-wrap relative z-10 mt-12 border-t fine-rule pt-8">
          <div className="archive-wall-hero grid gap-10 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="archive-wall-copy">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{archiveWall.title}</p>
              <h2 className="mt-5 max-w-3xl font-romie text-[clamp(3rem,5.6vw,5.8rem)] leading-[0.94] text-[#f4f1ea]">
                {archiveWall.headline[locale]}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7a39b]">{archiveWall.body[locale]}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {archiveWall.tags[locale].map((tag) => (
                  <span key={tag} className="border fine-rule px-3 py-2 text-xs text-[#a7a39b]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={routePaths[locale].contact} className="lime-cta mt-8 inline-block px-5 py-3 text-sm" style={{ color: "#090a0c" }}>
                {archiveWall.cta[locale]}
              </Link>
            </div>
            <figure className="archive-wall-media media-figure">
              <div className="archive-wall-frame relative overflow-hidden border fine-rule lg:mt-10">
                <Image
                  src="/media/archive-wall.png"
                  alt={archiveWall.alt[locale]}
                  fill
                  className="archive-wall-image media-image"
                  sizes="(min-width: 1024px) 52vw, calc(100vw - 3rem)"
                />
              </div>
              <figcaption className="media-caption">
                <span>{locale === "en" ? "Archive Wall / interactive memory environment" : "Archive Wall / interaktif hafÄ±za ortamÄ±"}</span>
              </figcaption>
            </figure>
          </div>
          <div id="asterion-presence" className="presence-feature grid gap-10 border-t fine-rule py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="presence-copy">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">{presence.title}</p>
              <h2 className="mt-5 max-w-3xl font-romie text-[clamp(3rem,5.2vw,5.6rem)] leading-[0.94] text-[#f4f1ea]">
                {presence.headline[locale]}
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7a39b]">{presence.body[locale]}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {presence.tags[locale].map((tag) => (
                  <span key={tag} className="border fine-rule px-3 py-2 text-xs text-[#a7a39b]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={routePaths[locale].contact} className="lime-cta mt-8 inline-block px-5 py-3 text-sm" style={{ color: "#090a0c" }}>
                {presence.cta[locale]}
              </Link>
            </div>
            <figure className="presence-media">
              <div className="presence-frame relative overflow-hidden border fine-rule">
                <Image
                  src="/media/asterion-presence-v2.png"
                  alt={presence.alt[locale]}
                  fill
                  className="presence-image"
                  sizes="(min-width: 1024px) 48vw, calc(100vw - 3rem)"
                />
              </div>
              <figcaption className="media-caption">
                <span>{locale === "en" ? "Asterion Presence / life-scale digital hologram" : "Asterion Presence / insan Ã¶lÃ§eÄŸinde dijital hologram"}</span>
              </figcaption>
            </figure>
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
            {locale === "en" ? "Selected institutional engagements" : "SeÃ§ili kurumsal iÅŸbirlikleri"}
          </p>
          <ul className="mt-6 grid gap-px border fine-rule md:grid-cols-2 lg:grid-cols-3">
            {homepageHistoryHighlights.map((entry) => (
              <li key={entry.title.en} className="bg-[#090a0c] p-5">
                <p className="font-romie text-3xl leading-none text-[#f4f1ea]">{entry.year}</p>
                <p className="mt-3 text-sm leading-6 text-[#a7a39b]">{entry.title[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-wrap grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
            {locale === "en" ? "Featured Original" : "Ã–ne Ã‡Ä±kan Ã–zgÃ¼n Proje"}
          </p>
          <h2 className="mt-5 font-romie text-7xl leading-none text-[#f4f1ea]">{featuredProject.title}</h2>
          <p className="mt-6 max-w-xl text-xl leading-8 text-[#e9e5dc]">
            {locale === "en"
              ? "A remarkable aviation chapter reimagined through immersive experience, documentary research and an expanding cinematic world."
              : "Dikkat Ã§ekici bir havacÄ±lÄ±k dÃ¶nemini immersif deneyim, belgesel araÅŸtÄ±rmasÄ± ve geniÅŸleyen sinematik bir dÃ¼nya Ã¼zerinden yeniden yorumlayan proje."}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#a7a39b]">{featuredProject.summary[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredProject.formats?.slice(0, 4).map((format) => (
              <span key={format.en} className="border fine-rule px-3 py-2 text-xs text-[#a7a39b]">
                {format[locale]}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={featuredUrl} className="lime-cta px-5 py-3 text-sm" style={{ color: "#090a0c" }}>
              nud38.com
            </a>
          </div>
        </div>
        <MediaBlock media={featuredProject.heroMedia} locale={locale} className="min-h-[32rem]" label="NU.D38 / development world" />
      </section>

      <section className="border-y fine-rule bg-[#0d0f12] py-20">
        <div className="page-wrap">
          <h2 className="font-romie text-5xl text-[#f4f1ea]">
            {locale === "en" ? "A story can choose more than one form." : "Bir hikaye birden fazla biÃ§im seÃ§ebilir."}
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border fine-rule md:grid-cols-2 lg:grid-cols-4">
            {practice[locale].map(([title, body]) => (
              <article key={title} className="bg-[#111317] p-6">
                <h3 className="text-lg text-[#e9e5dc]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#a7a39b]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-romie text-5xl text-[#f4f1ea]">
            {locale === "en" ? "Selected work across culture and production" : "KÃ¼ltÃ¼r ve prodÃ¼ksiyon alanÄ±nda seÃ§ili iÅŸler"}
          </h2>
          <Link href={routePaths[locale].work} className="hidden text-sm text-[#d7ff2f] md:block">
            {locale === "en" ? "View all work" : "TÃ¼m iÅŸler"}
          </Link>
        </div>
        <div className="grid gap-12">
          {selectedProjects.map((project, index) => (
            <article key={project.slug} className="grid gap-6 border-t fine-rule pt-8 md:grid-cols-[0.85fr_1.15fr]">
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <MediaBlock media={project.heroMedia} locale={locale} className="min-h-80" />
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7ff2f]">
                  {project.artist ?? project.client ?? project.institution ?? project.categories[0][locale]}
                </p>
                <h3 className="mt-4 font-romie text-5xl leading-none text-[#f4f1ea]">
                  {project.displayTitle?.[locale] ?? project.title}
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#a7a39b]">{project.summary[locale]}</p>
                <Link href={projectPath(locale, project.slug)} className="mt-6 inline-block text-sm text-[#e9e5dc] underline decoration-[#d7ff2f] underline-offset-8">
                  {locale === "en" ? "Read case study" : "Vaka dosyasÄ±nÄ± oku"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y fine-rule bg-[#111317] py-20">
        <div className="page-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-romie text-5xl text-[#f4f1ea]">
              {locale === "en" ? "From research to the final form." : "AraÅŸtÄ±rmadan son biÃ§ime."}
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#a7a39b]">
              {locale === "en"
                ? "Our process connects research, writing, visual development, direction, production and technology. Each project is built around the form the story actually requires."
                : "SÃ¼recimiz araÅŸtÄ±rmayÄ±, yazÄ±mÄ±, gÃ¶rsel geliÅŸtirmeyi, yÃ¶netimi, prodÃ¼ksiyonu ve teknolojiyi birbirine baÄŸlar. Her proje, hikayenin gerÃ§ekten ihtiyaÃ§ duyduÄŸu biÃ§im Ã§evresinde kurulur."}
            </p>
          </div>
          <ol className="grid gap-px border fine-rule">
            {method[locale].map((stage, index) => (
              <li key={stage} className="grid grid-cols-[4rem_1fr] bg-[#090a0c]">
                <span className="border-r fine-rule p-5 text-[#d7ff2f]">{String(index + 1).padStart(2, "0")}</span>
                <span className="p-5 text-[#e9e5dc]">{stage}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="story-network" className="story-principle-section py-24">
        <div className="page-wrap">
          <div className="story-principle-visual">
            <div className="story-principle-label">
              <span>{locale === "en" ? "Asterion Story Network" : "Asterion Hikaye AÄŸÄ±"}</span>
            </div>
            <ArchiveWallVisual
              alt={locale === "en" ? "Asterion story network globe" : "Asterion hikaye aÄŸÄ± kÃ¼resi"}
              locale={locale}
            />
          </div>
          <p className="mt-10 max-w-5xl font-romie text-[clamp(3rem,8vw,8rem)] leading-[0.9] text-[#f4f1ea]">
            {site.principle[locale]}
          </p>
          <div className="mt-16 grid gap-10 border-t fine-rule pt-10 md:grid-cols-2">
            <div>
              <h2 className="text-xl text-[#e9e5dc]">
                {locale === "en"
                  ? "Built on years of cultural production."
                  : "YÄ±llara yayÄ±lan kÃ¼ltÃ¼rel prodÃ¼ksiyon deneyimi Ã¼zerine kuruldu."}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a7a39b]">
                {locale === "en"
                  ? "The Asterion carries forward a body of cultural, museum, spatial storytelling and visual production work first developed through selected projects under Muse Studio. Original project, artist and institutional credits are retained on the relevant project pages."
                  : "The Asterion; Muse Studio dÃ¶neminde geliÅŸtirilen seÃ§ili kÃ¼ltÃ¼r, mÃ¼ze, mekansal anlatÄ± ve gÃ¶rsel prodÃ¼ksiyon iÅŸlerinden oluÅŸan birikimi sÃ¼rdÃ¼rÃ¼r. Ã–zgÃ¼n proje, sanatÃ§Ä± ve kurum kredileri ilgili proje sayfalarÄ±nda korunur."}
              </p>
            </div>
            <div>
              <h2 className="text-xl text-[#e9e5dc]">
                {locale === "en" ? "What kind of story are you developing?" : "NasÄ±l bir hikaye geliÅŸtiriyorsunuz?"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#a7a39b]">
                {locale === "en"
                  ? "Talk to us about a film, documentary, museum, archive, cultural subject or original world in development."
                  : "GeliÅŸtirme sÃ¼recindeki film, belgesel, mÃ¼ze, arÅŸiv, kÃ¼ltÃ¼rel konu veya Ã¶zgÃ¼n dÃ¼nya fikrinizi bizimle paylaÅŸÄ±n."}
              </p>
              <Link href={routePaths[locale].contact} className="paper-cta mt-6 inline-block px-5 py-3 text-sm" style={{ color: "#090a0c" }}>
                {locale === "en" ? "Start a Conversation" : "GÃ¶rÃ¼ÅŸmeyi BaÅŸlat"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

