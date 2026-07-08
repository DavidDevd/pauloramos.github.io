import type { Locale } from "@/types";

export const defaultLocale: Locale = "pt-BR";
export const secondaryLocale: Locale = "en-US";

export const localeStorageKey = "phoenix-locale";

export const localePathPrefix = {
  "pt-BR": "",
  "en-US": "/en",
} as const satisfies Record<Locale, string>;

export const localeOptions = [
  {
    locale: "pt-BR",
    shortLabel: "PT",
    label: "Portugues",
    ariaLabel: "Ver portfolio em portugues",
    flag: "BR",
  },
  {
    locale: "en-US",
    shortLabel: "EN",
    label: "English",
    ariaLabel: "View portfolio in English",
    flag: "US",
  },
] as const satisfies readonly {
  readonly locale: Locale;
  readonly shortLabel: string;
  readonly label: string;
  readonly ariaLabel: string;
  readonly flag: string;
}[];

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en-US" : defaultLocale;
}

export function localizePathname(pathname: string, locale: Locale) {
  const normalizedPathname = pathname || "/";
  const pathnameWithoutEnglishPrefix =
    normalizedPathname === "/en"
      ? "/"
      : normalizedPathname.startsWith("/en/")
        ? normalizedPathname.slice(3)
        : normalizedPathname;

  if (locale === defaultLocale) {
    return pathnameWithoutEnglishPrefix || "/";
  }

  return pathnameWithoutEnglishPrefix === "/"
    ? localePathPrefix[locale]
    : `${localePathPrefix[locale]}${pathnameWithoutEnglishPrefix}`;
}
