import type { AboutData, Locale } from "@/types";

export const aboutDataByLocale = {
  "pt-BR": {
    eyebrow: "Sobre",
    title: "Do suporte tecnico a engenharia de IA e automacao cloud.",
    story: [
      "Minha carreira comecou no suporte tecnico. Foi nesse ambiente que desenvolvi uma base pratica em troubleshooting, infraestrutura, redes, atendimento ao usuario e resolucao de incidentes.",
      "Com o tempo, direcionei essa experiencia para engenharia de software, automacao e cloud. Hoje construo agentes de IA, workflows com n8n, APIs modernas e infraestrutura containerizada para transformar tarefas operacionais em sistemas mais inteligentes.",
      "Meu objetivo e crescer como Software Engineer especializado em Engenharia de IA, Automacao Inteligente e Cloud Platform, criando solucoes que conectam LLMs, backend e infraestrutura para resolver problemas reais.",
    ],
    highlights: [
      "Engenharia de IA",
      "Automacao com IA",
      "Backend Engineering",
      "Cloud & Platform",
      "Praticas DevOps",
      "Clean Architecture",
      "Aprendizado Continuo",
    ],
    professionalJourneyAriaLabel:
      "Jornada profissional do suporte tecnico a engenharia de software",
    journey: {
      year: "2024",
      start: "Suporte Tecnico",
      steps: [
        "Infraestrutura",
        "Linux",
        "Docker",
        "Cloud",
        "Backend",
        "Automacao com IA",
        "Engenharia de Software",
      ],
    },
    currentFocus: {
      title: "Construindo atualmente com",
      items: ["AI Agents", "CrewAI", "n8n", "Python", "FastAPI", "Docker", "Kubernetes", "AWS"],
    },
  },
  "en-US": {
    eyebrow: "About",
    title: "From technical support to AI engineering and cloud automation.",
    story: [
      "My career started in technical support. That environment gave me practical experience with troubleshooting, infrastructure, networking, user support and incident resolution.",
      "Over time, I redirected that experience toward software engineering, automation and cloud. Today I build AI agents, n8n workflows, modern APIs and containerized infrastructure to turn operational tasks into smarter systems.",
      "My goal is to grow as a Software Engineer focused on AI Engineering, Intelligent Automation and Cloud Platform, creating solutions that connect LLMs, backend systems and infrastructure to solve real problems.",
    ],
    highlights: [
      "AI Engineering",
      "AI Automation",
      "Backend Engineering",
      "Cloud & Platform",
      "DevOps Practices",
      "Clean Architecture",
      "Continuous Learning",
    ],
    professionalJourneyAriaLabel:
      "Professional journey from technical support to software engineering",
    journey: {
      year: "2024",
      start: "Technical Support",
      steps: [
        "Infrastructure",
        "Linux",
        "Docker",
        "Cloud",
        "Backend",
        "AI Automation",
        "Software Engineering",
      ],
    },
    currentFocus: {
      title: "Currently building with",
      items: ["AI Agents", "CrewAI", "n8n", "Python", "FastAPI", "Docker", "Kubernetes", "AWS"],
    },
  },
} as const satisfies Record<Locale, AboutData>;

export const aboutData = aboutDataByLocale["pt-BR"];
