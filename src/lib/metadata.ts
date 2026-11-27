import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import { casePath } from "@/data/case-studies";
import type { CaseStudy, Locale } from "@/types";

/*
 * Every URL here is absolute. The site lives under a GitHub Pages project
 * path, and a root-relative URL such as "/" resolved against metadataBase
 * would point at the account root instead of this site.
 */
const absolute = (path: string) => `${siteConfig.url}${path}`;

const ogLocale: Record<Locale, string> = {
  "pt-BR": "pt_BR",
  "en-US": "en_US",
};

function shared(
  locale: Locale,
  paths: Record<Locale, string>,
  title: string,
  description: string,
): Metadata {
  const url = absolute(paths[locale]);
  return {
    metadataBase: new URL(`${siteConfig.url}/`),
    description,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": absolute(paths["pt-BR"]),
        "en-US": absolute(paths["en-US"]),
        "x-default": absolute(paths["pt-BR"]),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "pt-BR" ? "en-US" : "pt-BR"],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}, ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    authors: [{ name: siteConfig.name, url: absolute("/") }],
    creator: siteConfig.name,
    robots: { index: true, follow: true },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const seo = siteConfig.seoByLocale[locale];
  return {
    ...shared(
      locale,
      { "pt-BR": "/", "en-US": "/en/" },
      seo.title,
      seo.description,
    ),
    title: { absolute: seo.title },
    keywords: [...seo.keywords],
  };
}

export function caseMetadata(caseStudy: CaseStudy, locale: Locale): Metadata {
  const title = `${caseStudy.title[locale]} | ${siteConfig.name}`;
  const description = caseStudy.tagline[locale];
  return {
    ...shared(
      locale,
      {
        "pt-BR": casePath(caseStudy.slug, "pt-BR"),
        "en-US": casePath(caseStudy.slug, "en-US"),
      },
      title,
      description,
    ),
    title: { absolute: title },
    keywords: [...caseStudy.stack],
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1D22",
  colorScheme: "dark",
};
