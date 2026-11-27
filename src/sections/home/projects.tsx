import { ArchitectureDiagram } from "@/components/diagram/architecture-diagram";
import { SectionIntro } from "@/components/home/section-intro";
import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { caseStudies, casePath } from "@/data/case-studies";
import { caseCopy, homeCopy } from "@/data/copy";
import { withBasePath } from "@/i18n/config";
import type { Locale } from "@/types";

export function Projects({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale].projects;
  const [featured, ...others] = caseStudies;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-line py-20 sm:py-24"
    >
      <SectionIntro
        id="projects-title"
        title={copy.title}
        description={copy.description}
      />

      <article aria-labelledby="featured-title" className="mt-14">
        <h3
          id="featured-title"
          className="font-wide text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]"
        >
          {featured.title[locale]}
        </h3>
        <p className="mt-3 max-w-prose text-lg text-muted">
          {featured.tagline[locale]}
        </p>

        <dl className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <dt className="font-medium text-fg">{copy.problem}</dt>
            <dd className="mt-2 text-muted">{featured.problem[locale]}</dd>
          </div>
          <div>
            <dt className="font-medium text-fg">{copy.proves}</dt>
            <dd className="mt-2 text-muted">{featured.proves[locale]}</dd>
          </div>
        </dl>

        <div className="mt-10">
          <ArchitectureDiagram
            diagram={featured.diagram}
            repository={featured.repository}
            locale={locale}
            text={{
              hint: copy.diagramHint,
              openFile: caseCopy[locale].openFile,
              diagramLabel: caseCopy[locale].diagramLabel,
              componentList: caseCopy[locale].componentList,
            }}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href={withBasePath(casePath(featured.slug, locale))}>
              {copy.read}
              <span className="sr-only">: {featured.title[locale]}</span>
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={featured.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
              {copy.repository}
            </a>
          </Button>
        </div>
      </article>

      <ul className="mt-20 border-t border-line">
        {others.map((item) => (
          <li key={item.slug} className="border-b border-line">
            <article className="grid gap-4 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
              <div>
                <h3 className="font-wide text-xl font-semibold tracking-tight text-fg">
                  {item.title[locale]}
                </h3>
                <p className="mt-2 max-w-prose text-muted">
                  {item.tagline[locale]}
                </p>
                <p className="mt-3 text-sm text-muted">
                  {item.stack.join(", ")}
                </p>
              </div>
              <a
                href={withBasePath(casePath(item.slug, locale))}
                className="self-start rounded-sm text-[0.9375rem] font-medium text-signal underline decoration-signal/40 underline-offset-4 hover:decoration-signal md:mt-1"
              >
                {copy.read}
                <span className="sr-only">: {item.title[locale]}</span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
