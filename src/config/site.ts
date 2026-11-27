import { profile } from "@/data/profile";
import type { Locale, SeoData } from "@/types";

const domain = "daviddevd.github.io/pauloramos.github.io";
const url = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${domain}`;

const title = `${profile.name} | ${profile.role}`;

const descriptions: Record<Locale, string> = {
  "pt-BR":
    "Paulo Ramos, DevOps Engineer. Estudos de caso verificáveis em AWS, Terraform, Kubernetes, CI/CD, supply chain e observabilidade, com decisões, trade-offs e runbooks.",
  "en-US":
    "Paulo Ramos, DevOps Engineer. Verifiable case studies in AWS, Terraform, Kubernetes, CI/CD, supply chain and observability, with decisions, trade-offs and runbooks.",
};

const sharedKeywords = [
  "Paulo Ramos",
  "DevOps Engineer",
  "Platform Engineering",
  "Cloud",
  "AWS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Ansible",
  "Prometheus",
  "Grafana",
  "SRE",
];

function seoFor(locale: Locale): SeoData {
  const description = descriptions[locale];
  return {
    title,
    titleTemplate: `%s | ${profile.name}`,
    description,
    keywords:
      locale === "pt-BR"
        ? [...sharedKeywords, "Observabilidade", "Infraestrutura como código"]
        : [...sharedKeywords, "Observability", "Infrastructure as Code"],
    canonicalPath: locale === "pt-BR" ? "/" : "/en/",
    openGraph: {
      title,
      description,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const siteConfig = {
  name: profile.name,
  role: profile.role,
  domain,
  url,
  ogImage: `${url}/og.png`,
  repository: "https://github.com/DavidDevd/pauloramos.github.io",
  seoByLocale: {
    "pt-BR": seoFor("pt-BR"),
    "en-US": seoFor("en-US"),
  } satisfies Record<Locale, SeoData>,
} as const;
