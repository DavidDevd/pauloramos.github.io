import type { SiteConfig } from "@/types";

const domain = "pauloramos.dev";
const url = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${domain}`;

const ptDescription =
  "Software Engineer focado em AI Engineering, automacao inteligente, backend moderno e cloud platform.";

const enDescription =
  "Software Engineer focused on AI Engineering, intelligent automation, modern backend systems and cloud platforms.";

const ptSeo = {
  title: "Paulo Ramos | Software Engineer",
  titleTemplate: "%s | Paulo Ramos",
  description: ptDescription,
  keywords: [
    "Paulo Ramos",
    "Software Engineer",
    "AI Engineer",
    "Engenheiro de IA",
    "Automacao com IA",
    "AI Automation",
    "Backend Engineering",
    "Cloud Platform",
  ],
  canonicalPath: "/",
  openGraph: {
    title: "Paulo Ramos | Software Engineer",
    description: ptDescription,
    type: "website",
    locale: "pt-BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Ramos | Software Engineer",
    description: ptDescription,
  },
} as const;

const enSeo = {
  title: "Paulo Ramos | Software Engineer",
  titleTemplate: "%s | Paulo Ramos",
  description: enDescription,
  keywords: [
    "Paulo Ramos",
    "Software Engineer",
    "AI Engineer",
    "AI Automation Engineer",
    "AI Automation",
    "Backend Engineering",
    "Cloud Platform",
  ],
  canonicalPath: "/en",
  openGraph: {
    title: "Paulo Ramos | Software Engineer",
    description: enDescription,
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Ramos | Software Engineer",
    description: enDescription,
  },
} as const;

export const siteConfig = {
  name: "Paulo Ramos",
  title: "Software Engineer",
  description: "AI Engineering | Intelligent Automation | Cloud & Platform",
  domain,
  url,
  locale: "pt-BR",
  locales: ["pt-BR", "en-US"],
  social: [
    {
      label: "GitHub",
      href: "https://github.com/DavidDevd",
      icon: "github",
      target: "_blank",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/paulo-ramos-b605a9209",
      icon: "linkedin",
      target: "_blank",
    },
    {
      label: "Email",
      href: "mailto:contato@pauloramos.dev",
      icon: "mail",
      target: "_self",
    },
  ],
  seo: ptSeo,
  seoByLocale: {
    "pt-BR": ptSeo,
    "en-US": enSeo,
  },
} as const satisfies SiteConfig;
