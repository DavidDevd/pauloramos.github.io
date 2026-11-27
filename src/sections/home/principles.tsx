import { SectionIntro } from "@/components/home/section-intro";
import { casePath, getCaseStudyBySlug } from "@/data/case-studies";
import { homeCopy } from "@/data/copy";
import { withBasePath } from "@/i18n/config";
import type { Locale } from "@/types";

export function Principles({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale].principles;

  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="border-t border-line py-20 sm:py-24"
    >
      <SectionIntro
        id="principles-title"
        title={copy.title}
        description={copy.description}
      />
      <ul className="mt-12 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {copy.items.map((item) => {
          const target = getCaseStudyBySlug(item.proof);
          return (
            <li key={item.title}>
              <h3 className="text-xl font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
              <p className="mt-3 text-muted">{item.text}</p>
              {target ? (
                <p className="mt-4 text-sm">
                  <span className="text-muted">{copy.proofLabel} </span>
                  <a
                    href={withBasePath(casePath(target.slug, locale))}
                    className="rounded-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-signal"
                  >
                    {target.title[locale]}
                  </a>
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
