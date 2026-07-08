import type { MissionData } from "@/types";

export const missionData = {
  eyebrow: "Mission",
  title: "Engineering intelligent systems that solve real problems.",
  description:
    "Meu foco e transformar IA, automacao e infraestrutura cloud em solucoes praticas: agentes que executam tarefas, APIs que integram sistemas e plataformas que sustentam operacoes reais.",
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
} as const satisfies MissionData;
