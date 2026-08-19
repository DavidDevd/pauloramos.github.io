import type { SiteConfig } from "@/types";

const domain = "daviddevd.github.io/pauloramos.github.io";
const url = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${domain}`;

const ptDescription =
  "Portfolio de Paulo Ramos, Software Engineer em inicio de carreira, com projetos verificaveis em backend, APIs, automacao, IA aplicada e cloud.";

const enDescription =
  "Paulo Ramos' early-career Software Engineering portfolio with verifiable projects across backend, APIs, automation, applied AI and cloud.";

const ptSeo = {
  title: "Paulo Ramos | Software Engineer",
  titleTemplate: "%s | Paulo Ramos",
  description: ptDescription,
  keywords: [
    "Paulo Ramos",
    "Software Engineer Junior",
    "Desenvolvedor Backend",
    "FastAPI",
    "TypeScript",
    "Python",
    "APIs",
    "Automacao",
    "AI Engineering",
    "Cloud",
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
    "Junior Software Engineer",
    "Backend Developer",
    "FastAPI",
    "TypeScript",
    "Python",
    "APIs",
    "Automation",
    "AI Engineering",
    "Cloud",
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
  description: "Backend | APIs | Automation | Applied AI | Cloud",
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
