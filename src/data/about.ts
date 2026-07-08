import type { AboutData } from "@/types";

export const aboutData = {
  eyebrow: "About",
  title: "From technical support to AI engineering and cloud automation.",
  story: [
    "Minha carreira comecou no suporte tecnico. Foi nesse ambiente que desenvolvi base pratica em troubleshooting, infraestrutura, redes, atendimento ao usuario e resolucao de incidentes.",
    "Com o tempo, direcionei essa experiencia para engenharia de software, automacao e cloud. Hoje construo agentes de IA, workflows com n8n, APIs modernas e infraestrutura containerizada para transformar tarefas operacionais em sistemas mais inteligentes.",
    "Meu objetivo e crescer como Software Engineer especializado em AI Engineering, Intelligent Automation e Cloud Platform, criando solucoes que conectam LLMs, backend e infraestrutura para resolver problemas reais.",
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
} as const satisfies AboutData;
