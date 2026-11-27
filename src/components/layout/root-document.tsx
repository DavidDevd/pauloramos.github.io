import { archivo, plexMono } from "@/app/fonts";
import { Footer } from "@/components/layout/footer";
import { Rail } from "@/components/layout/rail";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { getBuildInfo } from "@/lib/build-info";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

import "@/styles/globals.css";

const skipLabel: Record<Locale, string> = {
  "pt-BR": "Pular para o conteúdo",
  "en-US": "Skip to content",
};

function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: `${siteConfig.url}${locale === "en-US" ? "/en/" : "/"}`,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.locality,
      addressRegion: profile.location.region,
      addressCountry: profile.location.country,
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "DevOps",
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
  };
}

type RootDocumentProps = {
  locale: Locale;
  children: React.ReactNode;
};

/**
 * The <html> shell shared by the Portuguese and English root layouts. Each
 * locale has its own root layout so `lang` is correct in the static HTML.
 */
export function RootDocument({ locale, children }: RootDocumentProps) {
  const build = getBuildInfo();

  return (
    <html lang={locale} className={cn(archivo.variable, plexMono.variable)}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-signal px-4 py-2 font-medium text-signal-fg transition-transform focus:translate-y-0"
        >
          {skipLabel[locale]}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape "<" so no string can close the script element.
            __html: JSON.stringify(personJsonLd(locale)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <div className="lg:flex">
          <Rail />
          <div className="min-w-0 flex-1">
            <main
              id="main"
              tabIndex={-1}
              className="mx-auto w-full max-w-[1120px] px-5 outline-none sm:px-8 lg:px-14"
            >
              {children}
            </main>
            <Footer locale={locale} build={build} />
          </div>
        </div>
      </body>
    </html>
  );
}
