import { notFound } from "next/navigation";
import Link from "next/link";
import { divisions } from "@/content/divisions";
import { projectPath, routePaths } from "@/content/navigation";
import { getProject, projects } from "@/content/projects";
import type { Locale } from "@/content/types";
import { site } from "@/content/site";
import { JsonLd } from "./JsonLd";
import { MediaBlock } from "./MediaBlock";
import { SiteShell } from "./SiteShell";

export function ProjectPage({ locale, slug }: { locale: Locale; slug: string }) {
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const alternateHref = projectPath(locale === "en" ? "tr" : "en", project.slug);
  const related = projects.find((item) => item.slug !== project.slug);

  return (
    <SiteShell locale={locale} active="work" alternateHref={alternateHref}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.displayTitle?.[locale] ?? project.title,
          creator: project.artist ?? "The Asterion",
          producer: "The Asterion",
          url: `${site.url}${projectPath(locale, project.slug)}`,
          description: project.summary[locale],
          genre: project.categories.map((category) => category[locale]),
        }}
      />
      <article>
        <section className="page-wrap grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#a76e4d]">
              {divisions[project.division].name} / {project.status === "ongoing" ? (locale === "en" ? "Ongoing" : "Devam Eden") : project.year ?? "Dossier"}
            </p>
            <h1 className="mt-6 font-romie text-[clamp(4rem,11vw,9rem)] leading-[0.86] text-[#f4f1ea]">
              {project.displayTitle?.[locale] ?? project.title}
            </h1>
            {project.artist ? (
              <p className="mt-6 text-lg text-[#e9e5dc]">
                {locale === "en" ? "Artist" : "Sanatçı"}: {project.artist}
              </p>
            ) : null}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#a7a39b]">{project.summary[locale]}</p>
          </div>
          <MediaBlock media={project.heroMedia} locale={locale} className="min-h-[34rem]" />
        </section>

        <section className="border-y fine-rule bg-[#111317] py-12">
          <div className="page-wrap grid gap-6 md:grid-cols-4">
            <Meta label={locale === "en" ? "Division" : "Bölüm"} value={divisions[project.division].name} />
            <Meta label={locale === "en" ? "Status" : "Durum"} value={project.status === "ongoing" ? (locale === "en" ? "Ongoing Original Project" : "Devam Eden Özgün Proje") : locale === "en" ? "Completed" : "Tamamlandı"} />
            <Meta label={locale === "en" ? "Credit" : "Kredi"} value={project.artist ?? project.client ?? project.institution ?? "-"} />
            <Meta label={locale === "en" ? "Categories" : "Kategoriler"} value={project.categories.map((item) => item[locale]).join(", ")} />
          </div>
        </section>

        <section className="page-wrap grid gap-10 py-16 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="font-romie text-5xl text-[#f4f1ea]">{locale === "en" ? "Dossier" : "Dosya"}</h2>
          <div className="grid gap-8 text-sm leading-7 text-[#a7a39b]">
            {project.context ? <TextBlock title={locale === "en" ? "Context" : "Bağlam"} body={project.context[locale]} /> : null}
            {project.concept ? <TextBlock title={locale === "en" ? "Story or Concept" : "Hikaye veya Konsept"} body={project.concept[locale]} /> : null}
            {project.production ? <TextBlock title={locale === "en" ? "Production Approach" : "Prodüksiyon Yaklaşımı"} body={project.production[locale]} /> : null}
            {project.experience ? <TextBlock title={locale === "en" ? "Audience Experience" : "İzleyici Deneyimi"} body={project.experience[locale]} /> : null}
          </div>
        </section>

        {project.formats ? (
          <section className="page-wrap pb-16">
            <h2 className="font-romie text-4xl text-[#f4f1ea]">{locale === "en" ? "Development Fields" : "Geliştirme Alanları"}</h2>
            <div className="mt-6 grid gap-px border fine-rule md:grid-cols-2 lg:grid-cols-3">
              {project.formats.map((format) => (
                <div key={format.en} className="bg-[#111317] p-5 text-sm text-[#e9e5dc]">
                  {format[locale]}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.scope ? (
          <section className="page-wrap pb-16">
            <h2 className="font-romie text-4xl text-[#f4f1ea]">{locale === "en" ? "Scope" : "Kapsam"}</h2>
            <ul className="mt-6 grid gap-px border fine-rule md:grid-cols-2 lg:grid-cols-3">
              {project.scope.map((scope) => (
                <li key={scope.en} className="bg-[#111317] p-5 text-sm text-[#e9e5dc]">
                  {scope[locale]}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="page-wrap grid gap-5 pb-16 md:grid-cols-2">
          {project.gallery.map((media, index) => (
            <MediaBlock key={`${project.slug}-${index}`} media={media} locale={locale} />
          ))}
        </section>

        {project.legacyCredit ? (
          <section className="border-y fine-rule bg-[#0d0f12] py-10">
            <div className="page-wrap text-sm leading-7 text-[#a7a39b]">{project.legacyCredit[locale]}</div>
          </section>
        ) : null}

        <nav className="page-wrap flex flex-wrap items-center justify-between gap-4 border-t fine-rule py-12">
          <Link href={routePaths[locale].work} className="text-sm text-[#e9e5dc]">
            {locale === "en" ? "Return to work" : "İşlere dön"}
          </Link>
          {related ? (
            <Link href={projectPath(locale, related.slug)} className="text-sm text-[#a76e4d]">
              {locale === "en" ? "Related dossier" : "İlişkili dosya"}: {related.title}
            </Link>
          ) : null}
        </nav>
      </article>
    </SiteShell>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-[#595c60]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#e9e5dc]">{value}</p>
    </div>
  );
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-lg text-[#e9e5dc]">{title}</h2>
      <p className="mt-3">{body}</p>
    </section>
  );
}
