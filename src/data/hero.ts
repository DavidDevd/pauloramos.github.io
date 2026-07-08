import type { HeroData, Locale } from "@/types";

export const heroDataByLocale = {
  "pt-BR": {
    eyebrow: "Paulo Ramos",
    name: "Paulo Ramos",
    title: "Software Engineer",
    subtitle: "Engenharia de IA | Automacao Inteligente | Cloud & Platform",
    headline: "Construindo agentes de IA, automacoes e plataformas cloud.",
    description:
      "Crio agentes de IA, workflows com n8n, APIs modernas e infraestrutura cloud para transformar operacoes complexas em sistemas mais inteligentes, confiaveis e prontos para evoluir.",
    actions: [
      {
        label: "Ver Projetos",
        href: "#projects",
        ariaLabel: "Ver projetos de engenharia de IA, automacao e cloud",
        variant: "primary",
      },
      {
        label: "Baixar Curriculo",
        href: "/curriculo.pdf",
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
      ariaLabel: "Fluxo tecnico: agente de IA, LLM, API, workflow, cloud e pronto para producao",
      items: [
        {
          label: "Agente de IA",
          icon: "sparkles",
        },
        {
          label: "Integracao LLM",
          icon: "brain",
        },
        {
          label: "API",
          icon: "code",
        },
        {
          label: "Workflow",
          icon: "workflow",
        },
        {
          label: "Cloud Platform",
          icon: "cloud",
        },
        {
          label: "Pronto para Producao",
          icon: "badgeCheck",
        },
      ],
    },
  },
  "en-US": {
    eyebrow: "Paulo Ramos",
    name: "Paulo Ramos",
    title: "Software Engineer",
    subtitle: "AI Engineering | Intelligent Automation | Cloud & Platform",
    headline: "Building AI agents, automation systems and cloud platforms.",
    description:
      "I build AI agents, n8n workflows, modern APIs and cloud infrastructure to turn complex operations into smarter, reliable and production-oriented systems.",
    actions: [
      {
        label: "View Projects",
        href: "#projects",
        ariaLabel: "View AI engineering, automation and cloud projects",
        variant: "primary",
      },
      {
        label: "Download Resume",
        href: "/resume.pdf",
        ariaLabel: "Download resume as a PDF",
        variant: "outline",
      },
      {
        label: "GitHub",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Open Paulo Ramos GitHub profile in a new tab",
        icon: "github",
        variant: "ghost",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/paulo-ramos-b605a9209",
        target: "_blank",
        ariaLabel: "Open Paulo Ramos LinkedIn profile in a new tab",
        icon: "linkedin",
        variant: "subtle",
      },
    ],
    workflow: {
      ariaLabel: "Technical workflow: AI agent, LLM, API, workflow, cloud and production ready",
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
  },
} as const satisfies Record<Locale, HeroData>;

export const heroData = heroDataByLocale["pt-BR"];
