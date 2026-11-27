import { profile } from "@/data/profile";
import { localeOptions } from "@/i18n/config";
import type { LocalizedNavigationData } from "@/types";

export const navigationData = {
  "pt-BR": {
    links: [
      { label: "Projetos", href: "#projects" },
      { label: "Princípios", href: "#principles" },
      { label: "Stack", href: "#stack" },
      { label: "Trajetória", href: "#journey" },
      { label: "Contato", href: "#contact" },
    ],
    resume: {
      label: "Currículo",
      href: profile.resume["pt-BR"],
      ariaLabel: "Baixar currículo de Paulo Ramos (PDF, português)",
      icon: "download",
      variant: "primary",
    },
    social: [
      {
        label: "GitHub",
        href: profile.github,
        target: "_blank",
        icon: "github",
        variant: "ghost",
        ariaLabel: "GitHub de Paulo Ramos (abre em nova aba)",
      },
      {
        label: "LinkedIn",
        href: profile.linkedin,
        target: "_blank",
        icon: "linkedin",
        variant: "ghost",
        ariaLabel: "LinkedIn de Paulo Ramos (abre em nova aba)",
      },
    ],
    mobile: {
      openLabel: "Abrir menu de navegação",
      closeLabel: "Fechar menu de navegação",
      menuLabel: "Navegação principal",
    },
    languageSwitcher: {
      ariaLabel: "Selecionar idioma",
      options: localeOptions,
    },
  },
  "en-US": {
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Principles", href: "#principles" },
      { label: "Stack", href: "#stack" },
      { label: "Journey", href: "#journey" },
      { label: "Contact", href: "#contact" },
    ],
    resume: {
      label: "Resume",
      href: profile.resume["en-US"],
      ariaLabel: "Download Paulo Ramos' resume (PDF, English)",
      icon: "download",
      variant: "primary",
    },
    social: [
      {
        label: "GitHub",
        href: profile.github,
        target: "_blank",
        icon: "github",
        variant: "ghost",
        ariaLabel: "Paulo Ramos on GitHub (opens in a new tab)",
      },
      {
        label: "LinkedIn",
        href: profile.linkedin,
        target: "_blank",
        icon: "linkedin",
        variant: "ghost",
        ariaLabel: "Paulo Ramos on LinkedIn (opens in a new tab)",
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
