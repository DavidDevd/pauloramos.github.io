import type { SiteConfig } from "@/types";

const domain = "pauloramos.dev";
const url = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${domain}`;

const ptSeo = {
  title: "Paulo Ramos | Software Engineer",
  titleTemplate: "%s | Paulo Ramos",
  description:
    "Software Engineer focado em AI Automation, Full Stack, Cloud e DevOps.",
  keywords: [
    "Paulo Ramos",
    "Software Engineer",
    "Desenvolvedor Full Stack",
    "AI Automation",
    "Cloud",
    "DevOps",
  ],
  canonicalPath: "/",
  openGraph: {
    title: "Paulo Ramos | Software Engineer",
    description:
      "Software Engineer focado em AI Automation, Full Stack, Cloud e DevOps.",
    type: "website",
    locale: "pt-BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Ramos | Software Engineer",
    description:
      "Software Engineer focado em AI Automation, Full Stack, Cloud e DevOps.",
  },
} as const;

const enSeo = {
  title: "Paulo Ramos | Software Engineer",
  titleTemplate: "%s | Paulo Ramos",
  description:
    "Software Engineer focused on AI Automation, Full Stack, Cloud and DevOps.",
  keywords: [
    "Paulo Ramos",
    "Software Engineer",
    "Full Stack Developer",
    "AI Automation",
    "Cloud",
    "DevOps",
  ],
  canonicalPath: "/en",
  openGraph: {
    title: "Paulo Ramos | Software Engineer",
    description:
      "Software Engineer focused on AI Automation, Full Stack, Cloud and DevOps.",
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Ramos | Software Engineer",
    description:
      "Software Engineer focused on AI Automation, Full Stack, Cloud and DevOps.",
  },
} as const;

export const siteConfig = {
  name: "Paulo Ramos",
  title: "Software Engineer",
  description: "AI Automation | Full Stack | Cloud & DevOps",
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
