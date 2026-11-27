import { siteConfig } from "@/config/site";
import { homeCopy } from "@/data/copy";
import { profile } from "@/data/profile";
import type { BuildInfo } from "@/lib/build-info";
import type { Locale } from "@/types";

type FooterProps = { locale: Locale; build: BuildInfo };

export function Footer({ locale, build }: FooterProps) {
  const copy = homeCopy[locale].footer;
  const year = new Date(build.builtAt).getUTCFullYear();

  return (
    <footer className="mx-auto w-full max-w-[1120px] px-5 pb-10 sm:px-8 lg:px-14">
      <div className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {build.commitUrl && build.shortSha ? (
            <span>
              {copy.build}{" "}
              <a
                href={build.commitUrl}
                className="rounded-sm font-mono text-fg underline decoration-line-strong underline-offset-4 hover:decoration-signal"
              >
                {build.shortSha}
              </a>
            </span>
          ) : (
            <span>{copy.localBuild}</span>
          )}
          <a
            href={siteConfig.repository}
            className="rounded-sm underline decoration-line-strong underline-offset-4 hover:text-fg hover:decoration-signal"
          >
            {copy.source}
          </a>
        </p>
      </div>
    </footer>
  );
}
