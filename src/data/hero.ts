import type { HeroData } from "@/types";

export const heroData = {
  eyebrow: "Paulo Ramos",
  name: "Paulo Ramos",
  title: "Software Engineer",
  subtitle: "AI Automation • Full Stack • Cloud & DevOps",
  headline: "Building AI-powered cloud solutions.",
  description:
    "Desenvolvedor Full Stack apaixonado por IA e Cloud, criando aplicações escaláveis, automações inteligentes e infraestrutura moderna com foco em produtividade, confiabilidade e impacto real.",
  actions: [
    {
      label: "Ver Projetos",
      href: "#projects",
      ariaLabel: "Ver projetos em destaque",
      variant: "primary",
    },
    {
      label: "Baixar Currículo",
      href: "/resume.pdf",
      ariaLabel: "Baixar currículo em PDF",
      variant: "outline",
    },
    {
      label: "GitHub",
      href: "https://github.com/DavidDevd",
      target: "_blank",
      ariaLabel: "Abrir perfil de Paulo Ramos no GitHub em uma nova aba",
      icon: "github",
      variant: "ghost",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/paulo-ramos-b605a9209",
      target: "_blank",
      ariaLabel: "Abrir perfil de Paulo Ramos no LinkedIn em uma nova aba",
      icon: "linkedin",
      variant: "subtle",
    },
  ],
  workflow: {
    ariaLabel: "Fluxo técnico: AI Agent, API, Docker, Kubernetes, AWS e Production Ready",
    items: [
      {
        label: "AI Agent",
        icon: "sparkles",
      },
      {
        label: "API",
        icon: "code",
      },
      {
        label: "Docker",
        icon: "terminal",
      },
      {
        label: "Kubernetes",
        icon: "cpu",
      },
      {
        label: "AWS",
        icon: "cloud",
      },
      {
        label: "Production Ready",
        icon: "badgeCheck",
      },
    ],
  },
} as const satisfies HeroData;
