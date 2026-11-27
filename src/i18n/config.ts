import type { Locale } from "@/types";

export const defaultLocale: Locale = "pt-BR";
export const secondaryLocale: Locale = "en-US";

export const localeStorageKey = "phoenix-locale";

export const localePathPrefix = {
  "pt-BR": "",
  "en-US": "/en",
} as const satisfies Record<Locale, string>;

export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(pathname: string) {
  if (
    !publicBasePath ||
    pathname.startsWith("http") ||
    pathname.startsWith("#")
  ) {
    return pathname;
  }

  return `${publicBasePath}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export const localeOptions = [
  {
    locale: "pt-BR",
    shortLabel: "PT",
    label: "Português",
    ariaLabel: "Ver portfólio em português",
  },
  {
    locale: "en-US",
    shortLabel: "EN",
    label: "English",
    ariaLabel: "View portfolio in English",
  },
] as const satisfies readonly {
  readonly locale: Locale;
  readonly shortLabel: string;
  readonly label: string;
  readonly ariaLabel: string;
}[];

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/")
    ? "en-US"
    : defaultLocale;
}

function ensureTrailingSlash(pathname: string) {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

/**
 * Builds the href for `pathname` (as returned by `usePathname`, i.e. without
 * the basePath) rendered in `locale`. Always includes the basePath so links
 * work under GitHub Pages project sites, and always ends with "/" to match
 * `trailingSlash: true` and avoid a redirect hop.
 */
export function localizePathname(pathname: string, locale: Locale) {
  const normalized = ensureTrailingSlash(pathname || "/");
  const withoutLocale = normalized.startsWith("/en/")
    ? normalized.slice(3)
    : normalized;
  const localized =
    locale === defaultLocale
      ? withoutLocale
      : `${localePathPrefix[locale]}${withoutLocale}`;

  return withBasePath(localized);
}
