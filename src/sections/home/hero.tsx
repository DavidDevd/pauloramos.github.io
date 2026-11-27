import { DeployRecord } from "@/components/home/deploy-record";
import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { homeCopy } from "@/data/copy";
import { profile } from "@/data/profile";
import { withBasePath } from "@/i18n/config";
import type { BuildInfo } from "@/lib/build-info";
import type { Locale } from "@/types";

type HeroProps = { locale: Locale; build: BuildInfo };

export function Hero({ locale, build }: HeroProps) {
  const copy = homeCopy[locale].hero;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grid gap-12 pb-20 pt-12 sm:pt-16 lg:pb-24 lg:pt-20 xl:grid-cols-[minmax(0,1fr)_22rem] xl:gap-14"
    >
      <div className="xl:pt-6">
        <h1
          id="hero-title"
          className="font-wide text-balance text-[clamp(2.125rem,3.7vw,3.25rem)] font-semibold leading-[1.07] tracking-[-0.025em] text-fg"
        >
          {copy.headline}
        </h1>
        <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
          {copy.lede}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#projects">{copy.primaryCta}</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={withBasePath(profile.resume[locale])}>
              <Icon name="download" />
              {copy.resumeCta}
            </a>
          </Button>
        </div>
      </div>

      <DeployRecord build={build} copy={copy.record} locale={locale} />
    </section>
  );
}
