"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Icon } from "@/components/icons/icon";
import { caseCopy, homeCopy } from "@/data/copy";
import { navigationData } from "@/data/navigation";
import { profile } from "@/data/profile";
import {
  getLocaleFromPathname,
  localeOptions,
  localizePathname,
  withBasePath,
} from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

const CASE_PATH = /^\/(?:en\/)?projects\/[^/]+\/?$/;

type RailItem = { readonly label: string; readonly id: string };

function caseToc(locale: Locale): RailItem[] {
  const copy = caseCopy[locale];
  return [
    { label: copy.problem, id: "problem" },
    { label: copy.architecture, id: "architecture" },
    { label: copy.decisions, id: "decisions" },
    { label: copy.tradeoffs, id: "tradeoffs" },
    { label: copy.failureModes, id: "runbook" },
    { label: copy.productionNext, id: "production" },
    { label: copy.evidence, id: "evidence" },
  ];
}

function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

export function Rail() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const nav = navigationData[locale];
  const rail = homeCopy[locale].rail;
  const isCasePage = CASE_PATH.test(pathname);
  const homePath = locale === "en-US" ? "/en/" : "/";
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo<RailItem[]>(
    () =>
      isCasePage
        ? caseToc(locale)
        : nav.links.map((link) => ({
            label: link.label,
            id: link.href.replace("#", ""),
          })),
    [isCasePage, locale, nav.links],
  );
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const activeId = useActiveSection(ids);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/85 lg:flex lg:h-dvh lg:w-[264px] lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r lg:bg-bg lg:backdrop-blur-none">
      <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8 lg:h-auto lg:px-7 lg:pt-9">
        <a href={withBasePath(homePath)} className="rounded-sm" onClick={close}>
          <span className="font-wide block text-[1.1875rem] font-bold leading-tight tracking-tight">
            {profile.name}
          </span>
          <span className="block text-sm text-muted">{profile.role}</span>
        </a>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line-strong text-fg lg:hidden"
          aria-expanded={isOpen}
          aria-controls="rail-panel"
          aria-label={isOpen ? nav.mobile.closeLabel : nav.mobile.openLabel}
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? "x" : "menu"} className="size-5" />
        </button>
      </div>

      <div
        id="rail-panel"
        className={cn(
          "max-h-[calc(100dvh-4rem)] overflow-y-auto px-5 pb-6 sm:px-8 lg:flex lg:max-h-none lg:flex-1 lg:flex-col lg:overflow-visible lg:px-7 lg:pb-8",
          isOpen ? "block" : "hidden",
        )}
      >
        <p className="mt-1 flex items-start gap-2 text-sm text-muted lg:mt-5">
          <span
            className="mt-[0.45em] size-2 shrink-0 rounded-full bg-ok"
            aria-hidden="true"
          />
          {rail.status}
        </p>

        <nav aria-label={nav.mobile.menuLabel} className="mt-8 lg:mt-10">
          {isCasePage ? (
            <a
              href={withBasePath(`${homePath}#projects`)}
              className="mb-5 inline-flex items-center gap-2 rounded-sm text-sm text-muted hover:text-fg"
              onClick={close}
            >
              <Icon name="arrowLeft" className="size-4" />
              {caseCopy[locale].back}
            </a>
          ) : null}
          {isCasePage ? (
            <p className="mb-2 text-sm text-muted">
              {caseCopy[locale].onThisPage}
            </p>
          ) : null}
          <ul className="-ml-3 space-y-0.5">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={close}
                    className={cn(
                      "relative flex items-center rounded-sm py-1.5 pl-3 text-[0.9375rem] text-muted transition-colors hover:text-fg",
                      "before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-transparent before:transition-colors",
                      isActive && "text-fg before:bg-signal",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 space-y-5 border-t border-line pt-6 lg:mt-auto">
          <div
            role="group"
            aria-label={nav.languageSwitcher.ariaLabel}
            className="inline-flex rounded-md border border-line p-0.5"
          >
            {localeOptions.map((option) => {
              const isCurrent = option.locale === locale;
              return (
                <a
                  key={option.locale}
                  href={localizePathname(pathname, option.locale)}
                  hrefLang={option.locale}
                  lang={option.locale}
                  // The accessible name must contain the visible "PT"/"EN"
                  // (WCAG 2.5.3 label in name) so voice control can target it.
                  aria-label={`${option.shortLabel}: ${option.ariaLabel}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "inline-flex h-8 min-w-11 items-center justify-center rounded px-2.5 text-sm font-medium transition-colors",
                    isCurrent
                      ? "bg-raised text-fg"
                      : "text-muted hover:text-fg",
                  )}
                >
                  {option.shortLabel}
                </a>
              );
            })}
          </div>

          <a
            href={withBasePath(nav.resume.href)}
            aria-label={nav.resume.ariaLabel}
            className="flex items-center gap-2 rounded-sm text-sm text-fg hover:text-signal"
          >
            <Icon name="download" className="size-4" />
            {nav.resume.label}
          </a>

          <ul
            aria-label={rail.contact}
            className="flex items-center gap-1 text-muted"
          >
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`${homeCopy[locale].contact.email}: ${profile.email}`}
                className="inline-flex size-10 items-center justify-center rounded-md hover:bg-surface hover:text-fg"
              >
                <Icon name="mail" className="size-[1.125rem]" />
              </a>
            </li>
            {nav.social.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="inline-flex size-10 items-center justify-center rounded-md hover:bg-surface hover:text-fg"
                >
                  {link.icon ? (
                    <Icon name={link.icon} className="size-[1.125rem]" />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
