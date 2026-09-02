import type { AboutData, Locale } from "@/types";

export const aboutDataByLocale = {
  "pt-BR": {
    eyebrow: "Sobre",
    title:
      "Do suporte tecnico para a construcao de sistemas de software verificaveis.",
    story: [
      "Minha carreira comecou no suporte tecnico, onde desenvolvi uma base pratica em troubleshooting, infraestrutura, redes, atendimento ao usuario e resolucao de incidentes.",
      "Hoje estou direcionando essa experiencia para engenharia de software. Construo projetos em backend, APIs, automacao e IA aplicada, usando documentacao, testes e decisoes de arquitetura para tornar o trabalho inspecionavel.",
      "Busco minha oportunidade como Software Engineer em inicio de carreira. Quero contribuir em times onde eu possa entregar software real, aprender com revisoes tecnicas e continuar evoluindo em backend, integracoes, automacao e cloud.",
    ],
    highlights: [
      "Backend Engineering",
      "APIs & Integracoes",
      "Automacao",
      "IA Aplicada",
      "Cloud & Containers",
      "Testes & Documentacao",
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
        "Backend",
        "APIs",
        "Automacao",
        "Engenharia de Software",
      ],
    },
    currentFocus: {
      title: "Construindo atualmente com",
      items: [
        "Python",
        "FastAPI",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Docker",
        "n8n",
        "GitHub Actions",
      ],
    },
  },
  "en-US": {
    eyebrow: "About",
    title: "From technical support to building verifiable software systems.",
    story: [
      "My career started in technical support, where I developed practical experience with troubleshooting, infrastructure, networking, user support and incident resolution.",
      "I am now directing that experience toward software engineering. I build backend, API, automation and applied AI projects, using documentation, tests and architecture decisions to make the work inspectable.",
      "I am looking for an early-career Software Engineer opportunity where I can ship real software, learn through technical review and keep growing across backend systems, integrations, automation and cloud.",
    ],
    highlights: [
      "Backend Engineering",
      "APIs & Integrations",
      "Automation",
      "Applied AI",
      "Cloud & Containers",
      "Testing & Documentation",
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
        "Backend",
        "APIs",
        "Automation",
        "Software Engineering",
      ],
    },
    currentFocus: {
      title: "Currently building with",
      items: [
        "Python",
        "FastAPI",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Docker",
        "n8n",
        "GitHub Actions",
      ],
    },
  },
} as const satisfies Record<Locale, AboutData>;

export const aboutData = aboutDataByLocale["pt-BR"];
