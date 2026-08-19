import type { Locale, MissionData } from "@/types";

export const missionDataByLocale = {
  "pt-BR": {
    eyebrow: "Direcao de engenharia",
    title: "Construir software util, verificavel e pronto para evoluir.",
    description:
      "Meu foco e transformar problemas reais em sistemas claros: APIs que conectam servicos, automacoes que reduzem trabalho manual e software que pode ser testado, documentado e mantido.",
    pillars: [
      {
        icon: "terminal",
        title: "Backend & APIs",
        description:
          "Construindo APIs, integracoes e servicos com contratos claros, persistencia e regras de negocio inspecionaveis.",
      },
      {
        icon: "workflow",
        title: "Automacao & IA Aplicada",
        description:
          "Usando n8n, webhooks e IA quando agregam valor ao fluxo, sem esconder a engenharia por tras da automacao.",
      },
      {
        icon: "cloud",
        title: "Entrega & Confiabilidade",
        description:
          "Aplicando containers, CI/CD, testes, observabilidade e documentacao para tornar a entrega reproduzivel e confiavel.",
      },
    ],
  },
  "en-US": {
    eyebrow: "Engineering direction",
    title: "Build useful, verifiable software that is ready to evolve.",
    description:
      "My focus is turning real problems into clear systems: APIs that connect services, automations that reduce manual work and software that can be tested, documented and maintained.",
    pillars: [
      {
        icon: "terminal",
        title: "Backend & APIs",
        description:
          "Building APIs, integrations and services with clear contracts, persistence and inspectable business rules.",
      },
      {
        icon: "workflow",
        title: "Automation & Applied AI",
        description:
          "Using n8n, webhooks and AI where they add value to the workflow without hiding the engineering behind the automation.",
      },
      {
        icon: "cloud",
        title: "Delivery & Reliability",
        description:
          "Applying containers, CI/CD, testing, observability and documentation to make delivery reproducible and reliable.",
      },
    ],
  },
} as const satisfies Record<Locale, MissionData>;

export const missionData = missionDataByLocale["pt-BR"];
