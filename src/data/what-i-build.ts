import type { Locale, WhatIBuildData } from "@/types";

export const whatIBuildDataByLocale = {
  "pt-BR": {
    eyebrow: "O que construo",
    title: "Backend, integracoes e automacao com evidencia tecnica.",
    description:
      "Uma visao objetiva das capacidades demonstradas nos projetos: APIs, dados, automacao, IA aplicada e praticas de entrega.",
    technologyLabel: "Tecnologias em destaque",
    items: [
      {
        icon: "terminal",
        title: "Sistemas Backend",
        description:
          "APIs, regras de negocio, autenticacao, persistencia e integracoes para produtos web.",
        badge: "Foco principal",
        technologies: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "REST APIs",
          "TypeScript",
        ],
      },
      {
        icon: "workflow",
        title: "Integracoes & Automacao",
        description:
          "Workflows que conectam sistemas por APIs, webhooks e automacao operacional.",
        badge: "Foco principal",
        technologies: ["n8n", "Webhooks", "REST APIs", "Automation", "FastAPI"],
      },
      {
        icon: "sparkles",
        title: "IA Aplicada",
        description:
          "Uso de LLMs e agentes em fluxos estruturados, com revisao e limites claros de responsabilidade.",
        badge: "Em evolucao",
        technologies: [
          "OpenAI",
          "CrewAI",
          "AI Agents",
          "Python",
          "Prompt Engineering",
        ],
      },
      {
        icon: "cloud",
        title: "Cloud & Containers",
        description:
          "Ambientes reproduziveis e fundamentos de deploy para executar aplicacoes alem da maquina local.",
        badge: "Em evolucao",
        technologies: [
          "Docker",
          "Docker Compose",
          "Linux",
          "AWS",
          "Kubernetes",
        ],
      },
      {
        icon: "layers",
        title: "Qualidade & Entrega",
        description:
          "Testes, CI/CD, documentacao e observabilidade como parte do processo de engenharia.",
        badge: "Pratica aplicada",
        technologies: [
          "GitHub Actions",
          "Testing",
          "OpenAPI",
          "Observability",
          "CI/CD",
        ],
      },
    ],
  },
  "en-US": {
    eyebrow: "What I Build",
    title: "Backend, integrations and automation backed by technical evidence.",
    description:
      "A focused view of the capabilities demonstrated across my projects: APIs, data, automation, applied AI and delivery practices.",
    technologyLabel: "Featured Technologies",
    items: [
      {
        icon: "terminal",
        title: "Backend Systems",
        description:
          "APIs, business rules, authentication, persistence and integrations for web products.",
        badge: "Main Focus",
        technologies: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "REST APIs",
          "TypeScript",
        ],
      },
      {
        icon: "workflow",
        title: "Integrations & Automation",
        description:
          "Workflows that connect systems through APIs, webhooks and operational automation.",
        badge: "Main Focus",
        technologies: ["n8n", "Webhooks", "REST APIs", "Automation", "FastAPI"],
      },
      {
        icon: "sparkles",
        title: "Applied AI",
        description:
          "LLMs and agents used in structured workflows with review steps and clear responsibility boundaries.",
        badge: "Growing",
        technologies: [
          "OpenAI",
          "CrewAI",
          "AI Agents",
          "Python",
          "Prompt Engineering",
        ],
      },
      {
        icon: "cloud",
        title: "Cloud & Containers",
        description:
          "Reproducible environments and deployment foundations for running applications beyond a local machine.",
        badge: "Growing",
        technologies: [
          "Docker",
          "Docker Compose",
          "Linux",
          "AWS",
          "Kubernetes",
        ],
      },
      {
        icon: "layers",
        title: "Quality & Delivery",
        description:
          "Testing, CI/CD, documentation and observability treated as part of the engineering process.",
        badge: "Applied Practice",
        technologies: [
          "GitHub Actions",
          "Testing",
          "OpenAPI",
          "Observability",
          "CI/CD",
        ],
      },
    ],
  },
} as const satisfies Record<Locale, WhatIBuildData>;

export const whatIBuildData = whatIBuildDataByLocale["pt-BR"];
