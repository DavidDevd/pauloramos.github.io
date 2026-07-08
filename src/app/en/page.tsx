import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { HomeSections } from "@/sections/home-sections";

const seo = siteConfig.seoByLocale["en-US"];

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: seo.canonicalPath,
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: seo.openGraph.type,
    locale: seo.openGraph.locale,
    url: seo.canonicalPath,
    siteName: siteConfig.name,
    title: seo.openGraph.title,
    description: seo.openGraph.description,
  },
  twitter: {
    card: seo.twitter.card,
    title: seo.twitter.title,
    description: seo.twitter.description,
  },
};

export default function EnglishHomePage() {
  return <HomeSections locale="en-US" />;
}
