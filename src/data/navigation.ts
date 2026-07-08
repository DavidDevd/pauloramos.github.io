import { localeOptions } from "@/i18n/config";
import type { LocalizedNavigationData } from "@/types";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/DavidDevd",
    target: "_blank",
    icon: "github",
    variant: "ghost",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/paulo-ramos-b605a9209",
    target: "_blank",
    icon: "linkedin",
    variant: "ghost",
  },
] as const;

export const navigationData = {
  "pt-BR": {
    logo: {
      label: "PR",
      href: "#home",
      ariaLabel: "Ir para a secao inicial",
    },
    links: [
      { label: "Sobre", href: "#about" },
      { label: "O que construo", href: "#what-i-build" },
      { label: "Projetos", href: "#projects" },
      { label: "Contato", href: "#contact" },
    ],
    resume: {
      label: "Baixar curriculo",
      href: "/curriculo.pdf",
      ariaLabel: "Baixar curriculo de Paulo Ramos em portugues",
      icon: "download",
      variant: "primary",
    },
    social: [
      {
        ...socialLinks[0],
        ariaLabel: "Abrir perfil de Paulo Ramos no GitHub em uma nova aba",
      },
      {
        ...socialLinks[1],
        ariaLabel: "Abrir perfil de Paulo Ramos no LinkedIn em uma nova aba",
      },
    ],
    mobile: {
      openLabel: "Abrir menu de navegacao",
      closeLabel: "Fechar menu de navegacao",
      menuLabel: "Navegacao principal",
    },
    languageSwitcher: {
      ariaLabel: "Selecionar idioma",
      options: localeOptions,
    },
  },
  "en-US": {
    logo: {
      label: "PR",
      href: "#home",
      ariaLabel: "Go to home section",
    },
    links: [
      { label: "About", href: "#about" },
      { label: "What I Build", href: "#what-i-build" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    resume: {
      label: "Download Resume",
      href: "/resume.pdf",
      ariaLabel: "Download Paulo Ramos resume in English",
      icon: "download",
      variant: "primary",
    },
    social: [
      {
        ...socialLinks[0],
        ariaLabel: "Open Paulo Ramos GitHub profile in a new tab",
      },
      {
        ...socialLinks[1],
        ariaLabel: "Open Paulo Ramos LinkedIn profile in a new tab",
      },
    ],
    mobile: {
      openLabel: "Open navigation menu",
      closeLabel: "Close navigation menu",
      menuLabel: "Main navigation",
    },
    languageSwitcher: {
      ariaLabel: "Select language",
      options: localeOptions,
    },
  },
} as const satisfies LocalizedNavigationData;
