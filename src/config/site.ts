import type { SiteConfig } from "@/types";

const domain = "daviddevd.github.io/pauloramos.github.io";
const url = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${domain}`;

const ptDescription =
  "Portfolio DevOps e Cloud de Paulo Ramos, com projetos verificaveis em AWS, Docker, Kubernetes, Terraform, CI/CD, automacao e observabilidade.";

const enDescription =
  "Paulo Ramos' early-career DevOps and Cloud portfolio with verifiable projects across AWS, Docker, Kubernetes, Terraform, CI/CD, automation and observability.";

const ptSeo = {
  title: "Paulo Ramos | DevOps & Cloud",
  titleTemplate: "%s | Paulo Ramos",
  description: ptDescription,
  keywords: [
    "Paulo Ramos",
    "DevOps Junior",
    "Cloud Infrastructure",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Automacao",
    "Observabilidade",
  ],
  canonicalPath: "/",
  openGraph: {
    title: "Paulo Ramos | DevOps & Cloud",
    description: ptDescription,
    type: "website",
    locale: "pt-BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Ramos | DevOps & Cloud",
    description: ptDescription,
  },
} as const;

const enSeo = {
  title: "Paulo Ramos | DevOps & Cloud",
  titleTemplate: "%s | Paulo Ramos",
  description: enDescription,
  keywords: [
    "Paulo Ramos",
    "Junior DevOps",
    "Cloud Infrastructure",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Automation",
    "Observability",
  ],
  canonicalPath: "/en",
  openGraph: {
    title: "Paulo Ramos | DevOps & Cloud",
    description: enDescription,
    type: "website",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paulo Ramos | DevOps & Cloud",
    description: enDescription,
  },
} as const;

export const siteConfig = {
  name: "Paulo Ramos",
  title: "DevOps & Cloud",
  description:
    "AWS | Containers | Infrastructure as Code | CI/CD | Observability",
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
