import type { HeroData, Locale } from "@/types";

export const heroDataByLocale = {
  "pt-BR": {
    eyebrow: "Paulo Ramos · Aberto a oportunidades junior",
    name: "Paulo Ramos",
    title: "Software Engineer",
    subtitle: "Backend | APIs | Automacao | IA Aplicada | Cloud",
    headline: "Construindo software que conecta sistemas, automacao e operacoes reais.",
    description:
      "Software Engineer em inicio de carreira com projetos verificaveis em backend, integracoes e automacao. Aqui voce pode inspecionar arquitetura, testes, documentacao e as decisoes por tras de cada entrega.",
    actions: [
      { label: "Ver Projetos", href: "#projects", ariaLabel: "Ver projetos e estudos de caso de engenharia de software", variant: "primary" },
      { label: "Baixar Curriculo", href: "/curriculo.pdf", ariaLabel: "Baixar curriculo em PDF", variant: "outline" },
      { label: "GitHub", href: "https://github.com/DavidDevd", target: "_blank", ariaLabel: "Abrir perfil de Paulo Ramos no GitHub em uma nova aba", icon: "github", variant: "ghost" },
      { label: "LinkedIn", href: "https://linkedin.com/in/paulo-ramos-b605a9209", target: "_blank", ariaLabel: "Abrir perfil de Paulo Ramos no LinkedIn em uma nova aba", icon: "linkedin", variant: "subtle" },
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
    eyebrow: "Paulo Ramos · Open to junior opportunities",
    name: "Paulo Ramos",
    title: "Software Engineer",
    subtitle: "Backend | APIs | Automation | Applied AI | Cloud",
    headline: "Building software that connects systems, automation and real operations.",
    description:
      "Early-career Software Engineer with verifiable backend, integration and automation projects. Inspect the architecture, tests, documentation and technical decisions behind each delivery.",
    actions: [
      { label: "View Projects", href: "#projects", ariaLabel: "View software engineering projects and case studies", variant: "primary" },
      { label: "Download Resume", href: "/resume.pdf", ariaLabel: "Download resume as a PDF", variant: "outline" },
      { label: "GitHub", href: "https://github.com/DavidDevd", target: "_blank", ariaLabel: "Open Paulo Ramos GitHub profile in a new tab", icon: "github", variant: "ghost" },
      { label: "LinkedIn", href: "https://linkedin.com/in/paulo-ramos-b605a9209", target: "_blank", ariaLabel: "Open Paulo Ramos LinkedIn profile in a new tab", icon: "linkedin", variant: "subtle" },
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
