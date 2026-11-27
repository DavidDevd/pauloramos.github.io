import type { Metadata } from "next";

import { archivo, plexMono } from "@/app/fonts";
import { profile } from "@/data/profile";
import { withBasePath } from "@/i18n/config";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: `404 | ${profile.name}`,
  robots: { index: false, follow: true },
};

const linkClass =
  "inline-flex h-11 items-center rounded-md px-4 font-medium transition-colors";

/** GitHub Pages serves this for any unknown path, in either language. */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={cn(archivo.variable, plexMono.variable)}>
      <body>
        <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6 py-16">
          <p className="font-mono text-sm text-muted">HTTP 404</p>
          <h1 className="font-wide mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Página não encontrada
          </h1>
          <p lang="en-US" className="mt-2 text-xl text-muted">
            Page not found
          </p>
          <p className="mt-8 max-w-prose text-muted">
            O endereço pode ter mudado. Os estudos de caso continuam na página
            inicial.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={withBasePath("/")}
              className={cn(
                linkClass,
                "bg-signal text-signal-fg hover:bg-[#FFB84A]",
              )}
            >
              Ir para o início
            </a>
            <a
              href={withBasePath("/en/")}
              lang="en-US"
              className={cn(
                linkClass,
                "border border-line-strong text-fg hover:bg-surface",
              )}
            >
              Go to the English home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
