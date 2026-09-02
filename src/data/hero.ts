import type { HeroData, Locale } from "@/types";

export const heroDataByLocale = {
  "pt-BR": {
    eyebrow: "Paulo Ramos · Aberto a oportunidades DevOps Jr.",
    name: "Paulo Ramos",
    title: "DEVOPS • CLOUD • OBSERVABILITY",
    subtitle: "AWS · Docker · Kubernetes · Terraform · CI/CD",
    headline: "Infraestrutura confiável, do código à operação.",
    description:
      "Automação, containers, Infrastructure as Code, CI/CD e observabilidade para aplicações modernas — com base operacional em suporte N2 e entendimento do software por trás da infraestrutura.",
    actions: [
      {
        label: "Ver projetos DevOps",
        href: "#projects",
        ariaLabel: "Ver projetos práticos de DevOps e Cloud",
        variant: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Abrir GitHub de Paulo Ramos em nova aba",
        icon: "github",
        variant: "outline",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/paulo-ramos-b605a9209",
        target: "_blank",
        ariaLabel: "Abrir LinkedIn de Paulo Ramos em nova aba",
        icon: "linkedin",
        variant: "ghost",
      },
    ],
    workflow: {
      ariaLabel: "Ciclo operacional do código à observabilidade",
      items: [
        { label: "Código", icon: "code" },
        { label: "Container", icon: "layers" },
        { label: "Infraestrutura", icon: "cloud" },
        { label: "CI/CD", icon: "workflow" },
        { label: "Observabilidade", icon: "badgeCheck" },
      ],
    },
  },
  "en-US": {
    eyebrow: "Paulo Ramos · Open to Junior DevOps opportunities",
    name: "Paulo Ramos",
    title: "DEVOPS • CLOUD • OBSERVABILITY",
    subtitle: "AWS · Docker · Kubernetes · Terraform · CI/CD",
    headline: "Building reliable infrastructure from code to operations.",
    description:
      "Automation, containers, Infrastructure as Code, CI/CD and observability for modern applications — grounded in N2 support operations and an understanding of the software behind the infrastructure.",
    actions: [
      {
        label: "View DevOps projects",
        href: "#projects",
        ariaLabel: "View hands-on DevOps and Cloud projects",
        variant: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Open Paulo Ramos GitHub in a new tab",
        icon: "github",
        variant: "outline",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/paulo-ramos-b605a9209",
        target: "_blank",
        ariaLabel: "Open Paulo Ramos LinkedIn in a new tab",
        icon: "linkedin",
        variant: "ghost",
      },
    ],
    workflow: {
      ariaLabel: "Operational lifecycle from code to observability",
      items: [
        { label: "Code", icon: "code" },
        { label: "Container", icon: "layers" },
        { label: "Infrastructure", icon: "cloud" },
        { label: "CI/CD", icon: "workflow" },
        { label: "Observability", icon: "badgeCheck" },
      ],
    },
  },
} as const satisfies Record<Locale, HeroData>;

export const heroData = heroDataByLocale["pt-BR"];
