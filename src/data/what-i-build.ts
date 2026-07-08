import type { Locale, WhatIBuildData } from "@/types";

export const whatIBuildDataByLocale = {
  "pt-BR": {
    eyebrow: "O que construo",
    title: "Engenharia AI-first para automacao, backend e cloud.",
    description:
      "Uma visao objetiva dos sistemas que construo: agentes de IA, automacoes operacionais, APIs modernas e infraestrutura cloud preparada para evoluir.",
    technologyLabel: "Tecnologias em destaque",
    items: [
      {
        icon: "sparkles",
        title: "Engenharia de IA",
        description:
          "Construindo agentes de IA, integracoes com LLMs, fluxos preparados para RAG e sistemas multiagentes.",
        badge: "Foco principal",
        technologies: ["OpenAI", "CrewAI", "AI Agents", "RAG", "Python"],
      },
      {
        icon: "workflow",
        title: "Plataformas de Automacao",
        description:
          "Criando automacoes inteligentes com n8n, APIs, chatbots e workflows operacionais.",
        badge: "Foco principal",
        technologies: ["n8n", "Webhooks", "REST APIs", "Chatbots", "FastAPI"],
      },
      {
        icon: "cloud",
        title: "Infraestrutura Cloud",
        description:
          "Publicando sistemas confiaveis com AWS, Docker, Kubernetes, Terraform e pipelines CI/CD.",
        badge: "Em construcao",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      },
      {
        icon: "terminal",
        title: "Sistemas Backend",
        description:
          "Projetando APIs, integracoes, bancos de dados e servicos backend para produtos orientados a automacao.",
        badge: "Em construcao",
        technologies: ["Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL"],
      },
      {
        icon: "layers",
        title: "Platform Engineering",
        description:
          "Conectando experiencia de desenvolvimento, automacao de deploy e praticas de infraestrutura para entregas escalaveis.",
        badge: "Em construcao",
        technologies: ["CI/CD", "Linux", "Observability", "Containers", "DevOps"],
      },
    ],
  },
  "en-US": {
    eyebrow: "What I Build",
    title: "AI-first engineering for automation, backend and cloud.",
    description:
      "A focused view of the systems I build: AI agents, operational automations, modern APIs and cloud infrastructure prepared to evolve.",
    technologyLabel: "Featured Technologies",
    items: [
      {
        icon: "sparkles",
        title: "AI Engineering",
        description:
          "Building AI agents, LLM integrations, RAG-ready workflows and multi-agent systems.",
        badge: "Main Focus",
        technologies: ["OpenAI", "CrewAI", "AI Agents", "RAG", "Python"],
      },
      {
        icon: "workflow",
        title: "Automation Platforms",
        description:
          "Creating intelligent automations with n8n, APIs, chatbots and operational workflows.",
        badge: "Main Focus",
        technologies: ["n8n", "Webhooks", "REST APIs", "Chatbots", "FastAPI"],
      },
      {
        icon: "cloud",
        title: "Cloud Infrastructure",
        description:
          "Deploying reliable systems using AWS, Docker, Kubernetes, Terraform and CI/CD pipelines.",
        badge: "Currently Building",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      },
      {
        icon: "terminal",
        title: "Backend Systems",
        description:
          "Designing APIs, integrations, databases and backend services for automation-heavy products.",
        badge: "Currently Building",
        technologies: ["Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL"],
      },
      {
        icon: "layers",
        title: "Platform Engineering",
        description:
          "Connecting developer experience, deployment automation and infrastructure practices for scalable delivery.",
        badge: "Currently Building",
        technologies: ["CI/CD", "Linux", "Observability", "Containers", "DevOps"],
      },
    ],
  },
} as const satisfies Record<Locale, WhatIBuildData>;

export const whatIBuildData = whatIBuildDataByLocale["pt-BR"];
