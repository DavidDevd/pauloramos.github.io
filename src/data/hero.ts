import type { HeroData } from "@/types";

export const heroData = {
  eyebrow: "Paulo Ramos",
  name: "Paulo Ramos",
  title: "Software Engineer",
  subtitle: "AI Engineering | Intelligent Automation | Cloud & Platform",
  headline: "Building AI Agents, Cloud Platforms and Modern Backend Systems.",
  description:
    "Construo agentes de IA, automacoes inteligentes e sistemas backend modernos, conectando LLMs, APIs, n8n, Docker, Kubernetes e AWS para resolver problemas reais com confiabilidade e impacto.",
  actions: [
    {
      label: "Ver Projetos",
      href: "#projects",
      ariaLabel: "Ver projetos de AI Engineering, automacao e cloud",
      variant: "primary",
    },
    {
      label: "Baixar Curriculo",
      href: "/resume.pdf",
      ariaLabel: "Baixar curriculo em PDF",
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
    ariaLabel: "Fluxo tecnico: AI Agent, LLM, API, Workflow, Cloud e Production Ready",
    items: [
      {
        label: "AI Agent",
        icon: "sparkles",
      },
      {
        label: "LLM Integration",
        icon: "brain",
      },
      {
        label: "API",
        icon: "code",
      },
      {
        label: "Automation Workflow",
        icon: "workflow",
      },
      {
        label: "Cloud Platform",
        icon: "cloud",
      },
      {
        label: "Production Ready",
        icon: "badgeCheck",
      },
    ],
  },
} as const satisfies HeroData;
