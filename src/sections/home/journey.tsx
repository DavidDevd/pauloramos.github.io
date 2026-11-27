import { SectionIntro } from "@/components/home/section-intro";
import { Tenure } from "@/components/home/tenure";
import { homeCopy } from "@/data/copy";
import { education, experience } from "@/data/profile";
import type { BuildInfo } from "@/lib/build-info";
import { formatYearMonth, monthsSince } from "@/lib/tenure";
import type { Locale } from "@/types";

type JourneyProps = { locale: Locale; build: BuildInfo };

export function Journey({ locale, build }: JourneyProps) {
  const copy = homeCopy[locale].journey;
  const builtAt = new Date(build.builtAt);

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="border-t border-line py-20 sm:py-24"
    >
      <SectionIntro
        id="journey-title"
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div>
          <h3 className="text-sm font-medium text-muted">
            {copy.experienceTitle}
          </h3>
          {experience.map((job) => (
            <article key={job.company} className="mt-4">
              <p className="font-wide text-2xl font-semibold tracking-tight text-fg">
                {job.company}
              </p>
              <p className="mt-1 text-fg">
                {job.role[locale]}, {job.segment[locale]}
              </p>
              <p className="mt-1 text-sm text-muted">
                {copy.since} {formatYearMonth(job.start)} (
                <Tenure
                  start={job.start}
                  locale={locale}
                  initialMonths={monthsSince(job.start, builtAt)}
                />
                )
              </p>
              <p className="mt-5 max-w-prose text-muted">
                {job.summary[locale]}
              </p>
              <ul className="mt-5 space-y-2.5">
                {job.responsibilities.map((item) => (
                  <li key={item[locale]} className="flex gap-3 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] size-1 shrink-0 rounded-full bg-muted"
                    />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted">
            {copy.educationTitle}
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {education.map((item) => (
              <li key={item.institution} className="py-5">
                <p className="font-semibold text-fg">{item.title[locale]}</p>
                <p className="mt-1 text-muted">
                  {item.institution}, {item.kind[locale].toLowerCase()}
                </p>
                <p className="mt-1 text-sm text-muted">{item.status[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 max-w-prose border-l-2 border-signal pl-4 text-sm text-muted">
        {copy.transparency}
      </p>
    </section>
  );
}
