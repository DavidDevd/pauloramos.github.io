import { SectionIntro } from "@/components/home/section-intro";
import { caseStudies, casePath } from "@/data/case-studies";
import { homeCopy } from "@/data/copy";
import { withBasePath } from "@/i18n/config";
import type { Locale } from "@/types";

type Column = {
  readonly key: string;
  readonly label: string;
  readonly href?: string;
};

export function StackMatrix({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale].stack;
  const columns: Column[] = [
    ...caseStudies.map((item) => ({
      key: item.slug,
      label: item.shortTitle,
      href: withBasePath(casePath(item.slug, locale)),
    })),
    { key: "experience", label: copy.experienceColumn },
  ];

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="border-t border-line py-20 sm:py-24"
    >
      <SectionIntro
        id="stack-title"
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[22rem] max-w-[56rem] border-collapse text-[0.9375rem]">
          <caption className="sr-only">{copy.caption}</caption>
          <thead>
            <tr className="border-b border-line-strong">
              <th
                scope="col"
                className="pb-3 pr-4 text-left align-bottom text-sm font-medium text-muted"
              >
                {copy.toolColumn}
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-1 pb-3 align-bottom text-sm font-medium sm:px-2"
                >
                  <span className="mx-auto block w-fit [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]">
                    {column.href ? (
                      <a
                        href={column.href}
                        className="rounded-sm text-fg underline decoration-line-strong underline-offset-4 hover:decoration-signal"
                      >
                        {column.label}
                      </a>
                    ) : (
                      <span className="text-muted">{column.label}</span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          {copy.groups.map((group) => (
            <tbody key={group.name}>
              <tr>
                <th
                  scope="colgroup"
                  colSpan={columns.length + 1}
                  className="pb-2 pt-7 text-left text-sm font-medium text-muted"
                >
                  {group.name}
                </th>
              </tr>
              {group.items.map((tool) => (
                <tr key={tool.name} className="border-t border-line">
                  <th
                    scope="row"
                    className="py-2.5 pr-4 text-left font-medium text-fg"
                  >
                    {tool.name}
                  </th>
                  {columns.map((column) => {
                    const used = tool.proof.some(
                      (proof) => proof === column.key,
                    );
                    return (
                      <td key={column.key} className="px-1 py-2.5 text-center">
                        {used ? (
                          <span
                            role="img"
                            aria-label={`${tool.name}, ${copy.used} ${column.label}`}
                            className="inline-block size-2.5 rounded-sm bg-signal align-middle"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="inline-block size-1 rounded-full bg-line-strong align-middle"
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
}
