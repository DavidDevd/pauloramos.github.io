import type { Locale, MissionData } from "@/types";

export const missionDataByLocale = {
  "pt-BR": {
    eyebrow: "Missao",
    title: "Criar sistemas inteligentes que resolvem problemas reais.",
    description:
      "Meu foco e transformar IA, automacao e infraestrutura cloud em solucoes praticas: agentes que executam tarefas, APIs que integram sistemas e plataformas que sustentam operacoes reais.",
    pillars: [
      {
        icon: "sparkles",
        title: "Engenharia de IA",
        description:
          "Construindo agentes de IA, integracoes com LLMs, fluxos preparados para RAG e comportamento confiavel de agentes.",
      },
      {
        icon: "workflow",
        title: "Automacao Inteligente",
        description:
          "Criando automacoes com n8n, APIs, chatbots e transferencia para atendimento humano em fluxos operacionais.",
      },
      {
        icon: "cloud",
        title: "Cloud & Platform",
        description:
          "Projetando sistemas containerizados, observaveis e prontos para deploy com AWS, Docker, Kubernetes e CI/CD.",
      },
    ],
  },
  "en-US": {
    eyebrow: "Mission",
    title: "Engineering intelligent systems that solve real problems.",
    description:
      "My focus is turning AI, automation and cloud infrastructure into practical solutions: agents that execute tasks, APIs that connect systems and platforms that support real operations.",
    pillars: [
      {
        icon: "sparkles",
        title: "AI Engineering",
        description:
          "Building AI agents, LLM integrations, RAG-ready workflows and reliable agent behavior.",
      },
      {
        icon: "workflow",
        title: "Intelligent Automation",
        description:
          "Creating automations with n8n, APIs, chatbots and human handoff for operational workflows.",
      },
      {
        icon: "cloud",
        title: "Cloud & Platform",
        description:
          "Designing containerized, observable and deployable systems using AWS, Docker, Kubernetes and CI/CD.",
      },
    ],
  },
} as const satisfies Record<Locale, MissionData>;

export const missionData = missionDataByLocale["pt-BR"];
