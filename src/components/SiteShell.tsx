import Link from "next/link";
import type { Locale } from "@/content/types";
import { alternateLocale, footerNavItems, navItems, navLabels, routePaths, type RouteKey } from "@/content/navigation";
import { site } from "@/content/site";
import { JsonLd } from "./JsonLd";

type SiteShellProps = {
  locale: Locale;
  active: RouteKey;
  alternateHref?: string;
  children: React.ReactNode;
};

const practiceLinks = {
  en: [
    "Story & Research",
    "Film & Documentary",
    "Museums & Exhibitions",
    "Immersive & Interactive",
    "Spatial Media",
    "Creative Technology",
    "Production & Installation",
  ],
  tr: [
    "Hikâye ve Araştırma",
    "Film ve Belgesel",
    "Müze ve Sergi",
    "Immersif ve İnteraktif",
    "Mekânsal Medya",
    "Yaratıcı Teknoloji",
    "Prodüksiyon ve Kurulum",
  ],
};

export function SiteShell({ locale, active, alternateHref, children }: SiteShellProps) {
  const otherLocale = alternateLocale(locale);
  const year = new Date().getFullYear();
  const footerText = {
    descriptor:
      locale === "en"
        ? "Story Development, Museum Design & Production"
        : "Hikâye Geliştirme, Müze Tasarımı ve Prodüksiyon",
    support:
      locale === "en"
        ? "Films, museums, immersive environments and original worlds."
        : "Filmler, müzeler, immersif ortamlar ve özgün dünyalar.",
    invitation:
      locale === "en"
        ? "Have a story, space or archive that needs a new form?"
        : "Yeni bir biçime ihtiyaç duyan bir hikâyeniz, mekânınız veya arşiviniz mi var?",
    rights:
      locale === "en"
        ? "Project titles, artworks, images, trademarks and institutional names remain the property of their respective rights holders."
        : "Proje adları, eserler, görseller, ticari markalar ve kurum adları ilgili hak sahiplerine aittir.",
    references:
      locale === "en"
        ? "Historical references and legacy production credits describe past project context only; they do not imply current endorsement, partnership or affiliation unless explicitly stated."
        : "Tarihsel referanslar ve geçmiş prodüksiyon kredileri yalnızca geçmiş proje bağlamını ifade eder; açıkça belirtilmediği sürece güncel onay, ortaklık veya kurumsal ilişki anlamına gelmez.",
  };

  return (
    <div className="asterion-shell" lang={locale}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The Asterion",
          url: site.url,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Istanbul",
            addressCountry: "TR",
          },
          description:
            "An independent story development and production house working across films, museums, exhibitions, immersive environments and visual worlds.",
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#e9e5dc] focus:px-4 focus:py-3 focus:text-[#090a0c]"
      >
        {locale === "en" ? "Skip to content" : "İçeriğe geç"}
      </a>
      <header className="sticky top-0 z-40 border-b fine-rule bg-[#090a0c]/86">
        <div className="page-wrap flex min-h-20 items-center justify-between gap-6">
          <Link href={routePaths[locale].home} className="group block" aria-label="The Asterion home">
            <span className="block font-romie text-2xl leading-none tracking-normal text-[#f4f1ea]">THE ASTERION</span>
            <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.22em] text-[#a7a39b]">
              {site.descriptor[locale]}
            </span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={routePaths[locale][item]}
                className={`text-sm transition-colors hover:text-[#e9e5dc] ${
                  active === item ? "text-[#d7ff2f]" : "text-[#a7a39b]"
                }`}
              >
                {navLabels[locale][item]}
              </Link>
            ))}
            <Link
              href={routePaths[locale].contact}
              className="border-b border-[#d7ff2f]/70 pb-1 text-sm text-[#e9e5dc] transition-colors hover:text-[#d7ff2f]"
            >
              {locale === "en" ? "Start a Project" : "Bir Proje Başlatalım"}
            </Link>
            <Link
              href={alternateHref ?? routePaths[otherLocale][active]}
              className="border-l fine-rule pl-6 text-sm text-[#e9e5dc] transition-colors hover:text-[#d7ff2f]"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </nav>
          <details className="mobile-menu relative lg:hidden">
            <summary
              className="mobile-menu-button cursor-pointer list-none border fine-rule text-[#e9e5dc]"
              aria-label={locale === "en" ? "Open menu" : "Menüyü aç"}
            >
              <span className="sr-only">{locale === "en" ? "Menu" : "Menü"}</span>
              <span className="hamburger-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </summary>
            <nav className="absolute right-0 top-12 grid w-64 gap-1 border fine-rule bg-[#111317] p-3 shadow-2xl">
              {navItems.map((item) => (
                <Link key={item} href={routePaths[locale][item]} className="px-3 py-3 text-sm text-[#e9e5dc]">
                  {navLabels[locale][item]}
                </Link>
              ))}
              <Link href={routePaths[locale].contact} className="px-3 py-3 text-sm text-[#d7ff2f]">
                {locale === "en" ? "Start a Project" : "Bir Proje Başlatalım"}
              </Link>
              <Link href={alternateHref ?? routePaths[otherLocale][active]} className="px-3 py-3 text-sm text-[#d7ff2f]">
                {otherLocale.toUpperCase()}
              </Link>
            </nav>
          </details>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="border-t fine-rule py-16">
        <div className="page-wrap">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr_0.9fr_1fr]">
            <div>
              <p className="font-romie text-4xl leading-none text-[#f4f1ea]">THE ASTERION</p>
              <p className="mt-4 text-sm leading-7 text-[#e9e5dc]">{footerText.descriptor}</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[#a7a39b]">{footerText.support}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#d7ff2f]">{locale === "en" ? "Practice" : "Pratik"}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#a7a39b]">
                {practiceLinks[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#d7ff2f]">{locale === "en" ? "Studio" : "Stüdyo"}</p>
              <nav className="mt-5 grid gap-2 text-sm leading-6 text-[#a7a39b]">
                {footerNavItems.map((item) => (
                  <Link key={item} href={routePaths[locale][item]} className="transition-colors hover:text-[#e9e5dc]">
                    {navLabels[locale][item]}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#d7ff2f]">{locale === "en" ? "Contact" : "İletişim"}</p>
              <div className="mt-5 text-sm leading-7 text-[#a7a39b]">
                <p className="text-[#e9e5dc]">{site.email}</p>
                <p>{locale === "en" ? "Istanbul, Türkiye" : "İstanbul, Türkiye"}</p>
                <p>{locale === "en" ? "Working internationally" : "Uluslararası ölçekte çalışır"}</p>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-6 border-t fine-rule pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-romie text-3xl leading-tight text-[#f4f1ea]">{footerText.invitation}</p>
              <Link href={routePaths[locale].contact} className="mt-5 inline-block border-b border-[#d7ff2f] pb-1 text-sm text-[#e9e5dc]">
                {locale === "en" ? "Start a Conversation" : "Görüşmeyi Başlat"}
              </Link>
            </div>
            <div className="grid gap-2 text-xs leading-6 text-[#777a7f] md:max-w-xl md:text-right">
              <p>{footerText.rights}</p>
              <p>{footerText.references}</p>
              <p>
                © {year} The Asterion. {locale === "en" ? "All rights reserved." : "Tüm hakları saklıdır."}{" "}
                <Link href={routePaths[locale].privacy} className="text-[#a7a39b] underline decoration-[#d7ff2f] underline-offset-4">
                  {navLabels[locale].privacy}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
