import Link from "next/link";
import type { Locale } from "@/content/types";
import { alternateLocale, navItems, navLabels, routePaths, type RouteKey } from "@/content/navigation";
import { site } from "@/content/site";
import { JsonLd } from "./JsonLd";

type SiteShellProps = {
  locale: Locale;
  active: RouteKey;
  alternateHref?: string;
  children: React.ReactNode;
};

export function SiteShell({ locale, active, alternateHref, children }: SiteShellProps) {
  const otherLocale = alternateLocale(locale);
  const footerText = {
    note:
      locale === "en"
        ? "The Asterion is an independent story development and production house based in Istanbul and working internationally."
        : "The Asterion, İstanbul merkezli ve uluslararası ölçekte çalışan bağımsız bir hikaye geliştirme ve prodüksiyon stüdyosudur.",
    rights:
      locale === "en"
        ? "All project titles, artworks, images, trademarks and institutional names remain the property of their respective rights holders. Public-domain and archival images are credited where shown."
        : "Tüm proje adları, eserler, görseller, ticari markalar ve kurum adları ilgili hak sahiplerine aittir. Kamu malı ve arşiv görselleri kullanıldıkları yerde kredilendirilir.",
    references:
      locale === "en"
        ? "Historical references, selected brand contexts and legacy production credits describe past project context only; they do not imply current endorsement, partnership or affiliation unless explicitly stated."
        : "Tarihsel referanslar, seçili marka bağlamları ve geçmiş prodüksiyon kredileri yalnızca geçmiş proje bağlamını ifade eder; açıkça belirtilmediği sürece güncel onay, ortaklık veya kurumsal ilişki anlamına gelmez.",
    muse:
      locale === "en"
        ? "Muse Studio is mentioned only where needed as historical production credit."
        : "Muse Studio yalnızca gerekli yerlerde tarihsel prodüksiyon kredisi olarak anılır.",
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
            "An independent story development and production house working across films, documentaries, museum experiences and visual worlds.",
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#e9e5dc] focus:px-4 focus:py-3 focus:text-[#090a0c]"
      >
        {locale === "en" ? "Skip to content" : "İçeriğe geç"}
      </a>
      <header className="sticky top-0 z-40 border-b fine-rule bg-[#090a0c]/88 backdrop-blur">
        <div className="page-wrap flex min-h-20 items-center justify-between gap-6">
          <Link href={routePaths[locale].home} className="group block" aria-label="The Asterion home">
            <span className="block font-romie text-2xl leading-none tracking-normal text-[#f4f1ea]">
              THE ASTERION
            </span>
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
            <nav className="absolute right-0 top-12 grid w-56 gap-1 border fine-rule bg-[#111317] p-3 shadow-2xl">
              {navItems.map((item) => (
                <Link key={item} href={routePaths[locale][item]} className="px-3 py-3 text-sm text-[#e9e5dc]">
                  {navLabels[locale][item]}
                </Link>
              ))}
              <Link href={alternateHref ?? routePaths[otherLocale][active]} className="px-3 py-3 text-sm text-[#d7ff2f]">
                {otherLocale.toUpperCase()}
              </Link>
            </nav>
          </details>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="border-t fine-rule py-12">
        <div className="page-wrap grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-romie text-4xl text-[#f4f1ea]">{site.principle[locale]}</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a7a39b]">
              {locale === "en"
                ? "Film, museum, immersive environment or game - the format comes after the narrative, the context and the audience."
                : "Film, müze, immersif ortam veya oyun: format; anlatının, bağlamın ve izleyicinin ardından gelir."}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#a7a39b]">{footerText.note}</p>
          </div>
          <div className="grid gap-6 text-sm leading-7 text-[#a7a39b] md:text-right">
            <div>
              <p className="text-[#f4f1ea]">{site.email}</p>
              <p>{site.location[locale]}</p>
            </div>
            <nav
              aria-label={locale === "en" ? "Footer navigation" : "Alt bilgi navigasyonu"}
              className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end"
            >
              {navItems.map((item) => (
                <Link key={item} href={routePaths[locale][item]} className="transition-colors hover:text-[#d7ff2f]">
                  {navLabels[locale][item]}
                </Link>
              ))}
            </nav>
            <div className="grid gap-3 border-t fine-rule pt-5 text-xs leading-6 text-[#777a7f]">
              <p>{footerText.rights}</p>
              <p>{footerText.references}</p>
              <p>{footerText.muse}</p>
              <p className="text-[#595c60]">
                © 2026 The Asterion. {locale === "en" ? "All rights reserved." : "Tüm hakları saklıdır."}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
