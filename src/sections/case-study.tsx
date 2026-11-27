import { ArchitectureDiagram } from "@/components/diagram/architecture-diagram";
import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { RichText } from "@/components/ui/rich-text";
import {
  casePath,
  evidenceUrl,
  getCaseStudyNavigation,
} from "@/data/case-studies";
import { caseCopy } from "@/data/copy";
import { withBasePath } from "@/i18n/config";
import type { CaseStudy, Locale } from "@/types";

type CaseStudyPageProps = { caseStudy: CaseStudy; locale: Locale };

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="font-wide text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-fg"
    >
      {children}
    </h2>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 max-w-prose space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <span
            aria-hidden="true"
            className="mt-[0.7em] size-1 shrink-0 rounded-full bg-muted"
          />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

const sectionClass = "border-t border-line py-16 sm:py-20";

export function CaseStudyPage({ caseStudy, locale }: CaseStudyPageProps) {
  const copy = caseCopy[locale];
  const { previous, next } = getCaseStudyNavigation(caseStudy.slug);
  const t = (text: Record<Locale, string>) => text[locale];

  return (
    <article aria-labelledby="case-title">
      <header className="pb-14 pt-12 sm:pt-16 lg:pt-20">
        <h1
          id="case-title"
          className="font-wide max-w-[20ch] text-balance text-[clamp(2.25rem,4.4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-fg"
        >
          {t(caseStudy.title)}
        </h1>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted sm:text-xl">
          {t(caseStudy.tagline)}
        </p>
        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Button asChild variant="outline">
            <a
              href={caseStudy.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
              {copy.repository}
            </a>
          </Button>
          <p className="text-sm text-muted">
            <span className="sr-only">{copy.stack}: </span>
            {caseStudy.stack.join(", ")}
          </p>
        </div>
      </header>

      <section
        aria-labelledby="problem-title"
        className={`${sectionClass} grid gap-10 md:grid-cols-2 md:gap-14`}
      >
        <div id="problem">
          <SectionTitle id="problem-title">{copy.problem}</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            <RichText text={t(caseStudy.problem)} />
          </p>
        </div>
        <div>
          <h2 className="font-wide text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-fg">
            {copy.proves}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            <RichText text={t(caseStudy.proves)} />
          </p>
        </div>
      </section>

      <section
        id="architecture"
        aria-labelledby="architecture-title"
        className={sectionClass}
      >
        <SectionTitle id="architecture-title">{copy.architecture}</SectionTitle>
        <div className="mt-8">
          <ArchitectureDiagram
            diagram={caseStudy.diagram}
            repository={caseStudy.repository}
            locale={locale}
            text={{
              hint: copy.architectureHint,
              openFile: copy.openFile,
              diagramLabel: copy.diagramLabel,
              componentList: copy.componentList,
            }}
          />
        </div>
        <h3 className="mt-14 text-lg font-semibold text-fg">
          {copy.highlights}
        </h3>
        <Bullets items={caseStudy.highlights.map(t)} />
      </section>

      <section
        id="decisions"
        aria-labelledby="decisions-title"
        className={sectionClass}
      >
        <SectionTitle id="decisions-title">{copy.decisions}</SectionTitle>
        <div className="mt-8 divide-y divide-line">
          {caseStudy.decisions.map((decision) => (
            <article key={t(decision.title)} className="py-8 first:pt-2">
              <h3 className="text-xl font-semibold tracking-tight text-fg">
                {t(decision.title)}
              </h3>
              <dl className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-[11rem_minmax(0,1fr)]">
                {(
                  [
                    [copy.context, decision.context],
                    [copy.decision, decision.decision],
                    [copy.alternatives, decision.alternatives],
                    [copy.consequence, decision.consequence],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="contents">
                    <dt className="text-sm font-medium text-muted sm:pt-0.5">
                      {label}
                    </dt>
                    <dd className="max-w-prose text-fg">
                      <RichText text={t(value)} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section
        id="tradeoffs"
        aria-labelledby="tradeoffs-title"
        className={sectionClass}
      >
        <SectionTitle id="tradeoffs-title">{copy.tradeoffs}</SectionTitle>
        <Bullets items={caseStudy.tradeoffs.map(t)} />
      </section>

      <section
        id="runbook"
        aria-labelledby="runbook-title"
        className={sectionClass}
      >
        <SectionTitle id="runbook-title">{copy.failureModes}</SectionTitle>
        <div className="mt-8 space-y-5">
          {caseStudy.failureModes.map((mode) => (
            <article
              key={t(mode.symptom)}
              className="overflow-hidden rounded-md border border-line"
            >
              <h3 className="border-b border-line bg-surface px-5 py-3.5 font-semibold text-fg">
                <span className="sr-only">{copy.symptom}: </span>
                <RichText text={t(mode.symptom)} />
              </h3>
              <dl className="grid gap-x-10 gap-y-4 p-5 sm:grid-cols-[11rem_minmax(0,1fr)]">
                {(
                  [
                    [copy.cause, mode.cause],
                    [copy.diagnose, mode.diagnose],
                    [copy.fix, mode.fix],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="contents">
                    <dt className="text-sm font-medium text-muted sm:pt-0.5">
                      {label}
                    </dt>
                    <dd className="max-w-prose text-fg">
                      <RichText text={t(value)} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section
        id="production"
        aria-labelledby="production-title"
        className={sectionClass}
      >
        <SectionTitle id="production-title">{copy.productionNext}</SectionTitle>
        <Bullets items={caseStudy.productionNext.map(t)} />
      </section>

      <section
        id="evidence"
        aria-labelledby="evidence-title"
        className={sectionClass}
      >
        <SectionTitle id="evidence-title">{copy.evidence}</SectionTitle>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {caseStudy.evidence.map((link) => (
            <li key={link.path}>
              <a
                href={evidenceUrl(caseStudy, link.path)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-3"
              >
                <span className="font-medium text-fg">{t(link.label)}</span>
                <span className="flex min-w-0 items-center gap-2 text-sm text-muted group-hover:text-signal">
                  <code className="truncate">{link.path}</code>
                  <Icon name="external" className="size-3.5 shrink-0" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <nav
        aria-label={`${copy.previous} / ${copy.next}`}
        className="grid gap-4 border-t border-line py-12 sm:grid-cols-2"
      >
        {previous ? (
          <a
            href={withBasePath(casePath(previous.slug, locale))}
            className="group rounded-md border border-line p-5 transition-colors hover:border-line-strong hover:bg-surface"
          >
            <span className="flex items-center gap-2 text-sm text-muted">
              <Icon name="arrowLeft" className="size-4" />
              {copy.previous}
            </span>
            <span className="mt-2 block font-semibold text-fg group-hover:text-signal">
              {t(previous.title)}
            </span>
          </a>
        ) : (
          <span aria-hidden="true" />
        )}
        {next ? (
          <a
            href={withBasePath(casePath(next.slug, locale))}
            className="group rounded-md border border-line p-5 text-right transition-colors hover:border-line-strong hover:bg-surface"
          >
            <span className="flex items-center justify-end gap-2 text-sm text-muted">
              {copy.next}
              <Icon name="arrowRight" className="size-4" />
            </span>
            <span className="mt-2 block font-semibold text-fg group-hover:text-signal">
              {t(next.title)}
            </span>
          </a>
        ) : null}
      </nav>
    </article>
  );
}
