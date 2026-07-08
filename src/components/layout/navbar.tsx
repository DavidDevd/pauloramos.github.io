"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { navigationData } from "@/data/navigation";
import {
  getLocaleFromPathname,
  localeStorageKey,
  localizePathname,
  withBasePath,
} from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { ContentLink, Locale, NavigationItem } from "@/types";

function getSectionId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

function NavLink({
  item,
  activeId,
  onNavigate,
  className,
}: {
  item: NavigationItem;
  activeId: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const sectionId = getSectionId(item.href);
  const isActive = activeId === sectionId;

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "text-foreground",
        className,
      )}
      href={item.href}
      onClick={onNavigate}
    >
      <span
        className={cn(
          "absolute inset-x-2 bottom-1 h-px origin-center scale-x-0 rounded-full bg-primary transition-transform duration-200",
          isActive && "scale-x-100",
        )}
        aria-hidden="true"
      />
      {item.label}
    </a>
  );
}

function SocialAction({ action }: { action: ContentLink }) {
  return (
    <Button asChild variant={action.variant ?? "ghost"} size="icon" className="size-9">
      <a
        aria-label={action.ariaLabel}
        href={withBasePath(action.href)}
        target={action.target}
        rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {action.icon ? <Icon name={action.icon} className="size-4" /> : null}
      </a>
    </Button>
  );
}

function LanguageSwitcher({
  currentLocale,
  className,
}: {
  currentLocale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const data = navigationData[currentLocale].languageSwitcher;

  return (
    <div
      aria-label={data.ariaLabel}
      className={cn(
        "inline-flex items-center rounded-md border border-border/70 bg-surface/55 p-1",
        className,
      )}
      role="group"
    >
      {data.options.map((option) => {
        const isActive = option.locale === currentLocale;
        const href = localizePathname(pathname, option.locale);

        return (
          <a
            key={option.locale}
            aria-current={isActive ? "page" : undefined}
            aria-label={option.ariaLabel}
            className={cn(
              "inline-flex h-8 min-w-10 items-center justify-center rounded px-2 text-xs font-semibold text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
              isActive && "bg-primary/12 text-primary",
            )}
            href={href}
            hrefLang={option.locale}
            onClick={() => window.localStorage.setItem(localeStorageKey, option.locale)}
          >
            <span aria-hidden="true" className="mr-1 text-[10px]">
              {option.flag}
            </span>
            {option.shortLabel}
          </a>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const data = navigationData[currentLocale];
  const [activeId, setActiveId] = useState(getSectionId(data.logo.href));
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const observedIds = useMemo(
    () => [getSectionId(data.logo.href), ...data.links.map((item) => getSectionId(item.href))],
    [data.logo.href, data.links],
  );

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const sections = observedIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.12, 0.24, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [observedIds]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        isScrolled
          ? "border-border/70 bg-background/72 shadow-[0_18px_60px_hsl(var(--background)/0.32)] backdrop-blur-xl"
          : "bg-background/20 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          aria-label={data.logo.ariaLabel}
          href={withBasePath(data.logo.href)}
          className="inline-flex size-9 items-center justify-center rounded-md border border-border/80 bg-surface/75 text-sm font-semibold text-foreground shadow-[0_1px_0_hsl(var(--foreground)/0.05)] outline-none transition-colors hover:border-primary/45 hover:bg-surface-elevated focus-visible:ring-2 focus-visible:ring-ring"
          onClick={closeMenu}
        >
          {data.logo.label}
        </a>

        <nav
          aria-label={data.mobile.menuLabel}
          className="hidden items-center rounded-lg border border-border/70 bg-surface/48 px-1.5 py-1 shadow-[0_1px_0_hsl(var(--foreground)/0.04)] backdrop-blur-xl lg:flex"
        >
          {data.links.map((item) => (
            <NavLink key={item.href} item={item} activeId={activeId} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher currentLocale={currentLocale} />

          <Button asChild variant={data.resume.variant ?? "primary"} size="sm">
            <a aria-label={data.resume.ariaLabel} href={withBasePath(data.resume.href)}>
              {data.resume.icon ? <Icon name={data.resume.icon} className="size-4" /> : null}
              {data.resume.label}
            </a>
          </Button>

          <div className="flex items-center gap-1">
            {data.social.map((action) => (
              <SocialAction key={action.href} action={action} />
            ))}
          </div>
        </div>

        <Button
          aria-expanded={isOpen}
          aria-label={isOpen ? data.mobile.closeLabel : data.mobile.openLabel}
          className="size-9 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          size="icon"
          type="button"
          variant="outline"
        >
          <Icon name={isOpen ? "x" : "menu"} className="size-4" />
        </Button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border/60 bg-background/88 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav aria-label={data.mobile.menuLabel} className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6">
            <div className="space-y-2 rounded-lg border border-border/70 bg-surface/65 p-2 shadow-2xl shadow-primary/10">
              {data.links.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  activeId={activeId}
                  className="flex h-11 w-full justify-start px-3"
                  onNavigate={closeMenu}
                />
              ))}

              <div className="grid gap-2 border-t border-border/70 pt-2">
                <LanguageSwitcher currentLocale={currentLocale} className="w-full justify-center" />

                <Button asChild variant={data.resume.variant ?? "primary"} size="lg">
                  <a aria-label={data.resume.ariaLabel} href={withBasePath(data.resume.href)} onClick={closeMenu}>
                    {data.resume.icon ? <Icon name={data.resume.icon} className="size-4" /> : null}
                    {data.resume.label}
                  </a>
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  {data.social.map((action) => (
                    <Button
                      key={action.href}
                      asChild
                      variant={action.variant ?? "ghost"}
                      size="default"
                    >
                      <a
                        aria-label={action.ariaLabel}
                        href={withBasePath(action.href)}
                        target={action.target}
                        rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
                        onClick={closeMenu}
                      >
                        {action.icon ? <Icon name={action.icon} className="size-4" /> : null}
                        {action.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
