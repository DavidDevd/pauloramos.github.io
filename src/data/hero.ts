import type { HeroData, Locale } from "@/types";

export const heroDataByLocale = {
  "pt-BR": {
    eyebrow: "Paulo Ramos",
    name: "Paulo Ramos",
    title: "Software Engineer",
    subtitle: "Backend | APIs | Automacao | IA | Cloud",
    headline: "Construindo software que conecta sistemas, automacao e operacoes reais.",
    description:
      "Portfolio de engenharia focado em backend, integracoes, automacao e IA aplicada, com projetos documentados, testados e apresentados com decisoes tecnicas verificaveis.",
    actions: [
      {
        label: "Ver Projetos",
        href: "#projects",
        ariaLabel: "Ver projetos e estudos de caso de engenharia de software",
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
      ariaLabel: "Fluxo tecnico: problema, arquitetura, implementacao, testes, integracao e entrega",
      items: [
        { label: "Problema", icon: "brain" },
        { label: "Arquitetura", icon: "workflow" },
        { label: "API", icon: "code" },
        { label: "Automacao", icon: "sparkles" },
        { label: "Cloud", icon: "cloud" },
        { label: "Testado", icon: "badgeCheck" },
      ],
    },
  },
  "en-US": {
    eyebrow: "Paulo Ramos",
    name: "Paulo Ramos",
    title: "Software Engineer",
    subtitle: "Backend | APIs | Automation | AI | Cloud",
    headline: "Building software that connects systems, automation and real operations.",
    description:
      "An engineering portfolio focused on backend, integrations, automation and applied AI, with documented and tested projects backed by inspectable technical decisions.",
    actions: [
      {
        label: "View Projects",
        href: "#projects",
        ariaLabel: "View software engineering projects and case studies",
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
      ariaLabel: "Technical flow: problem, architecture, implementation, testing, integration and delivery",
      items: [
        { label: "Problem", icon: "brain" },
        { label: "Architecture", icon: "workflow" },
        { label: "API", icon: "code" },
        { label: "Automation", icon: "sparkles" },
        { label: "Cloud", icon: "cloud" },
        { label: "Tested", icon: "badgeCheck" },
      ],
    },
  },
} as const satisfies Record<Locale, HeroData>;

export const heroData = heroDataByLocale["pt-BR"];
