import type { AboutData } from "@/types";

export const aboutData = {
  eyebrow: "About",
  title: "From technical support to building modern software.",
  story: [
    "Minha carreira começou no suporte técnico. Foi nesse ambiente que desenvolvi uma base sólida em troubleshooting, infraestrutura, redes e atendimento ao usuário. Aprendi que tecnologia não existe apenas para funcionar — ela precisa resolver problemas reais.",
    "Com o tempo, passei a estudar desenvolvimento de software, computação em nuvem e automação. Hoje construo aplicações Full Stack, APIs modernas, infraestrutura em Cloud e soluções utilizando Inteligência Artificial, sempre buscando escrever código limpo, reutilizável e preparado para produção.",
    "Meu objetivo é crescer como Software Engineer, criando produtos que unam engenharia de software, IA, Cloud Computing e automação para gerar impacto real em pessoas e empresas.",
  ],
  highlights: [
    "Full Stack Development",
    "Backend Engineering",
    "AI Automation",
    "Cloud Computing",
    "DevOps",
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
    items: ["Python", "FastAPI", "React", "Next.js", "Docker", "Kubernetes", "AWS", "AI Agents"],
  },
} as const satisfies AboutData;
