import { Icon } from "@/components/icons/icon";
import type { HomeCopy } from "@/data/copy";
import type { BuildInfo } from "@/lib/build-info";
import type { Locale } from "@/types";

type DeployRecordProps = {
  build: BuildInfo;
  copy: HomeCopy["hero"]["record"];
  locale: Locale;
};

const linkClass =
  "rounded-sm text-fg underline decoration-line-strong underline-offset-4 hover:decoration-signal";

/**
 * The deploy record of the page being viewed. In CI it shows the real
 * commit and run; the deploy job only runs after every gate below passes,
 * so a published page can truthfully mark them as passed. Locally it says
 * so instead of pretending.
 */
export function DeployRecord({ build, copy, locale }: DeployRecordProps) {
  const builtAt = new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(build.builtAt));

  return (
    <figure className="rounded-md border border-line bg-surface">
      <figcaption className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
        <span className="text-sm font-medium text-fg">{copy.title}</span>
      </figcaption>

      <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-line px-5 py-4 text-sm">
        <div>
          <dt className="text-muted">{copy.commit}</dt>
          <dd className="mt-0.5 font-mono">
            {build.commitUrl && build.shortSha ? (
              <a href={build.commitUrl} className={linkClass}>
                {build.shortSha}
              </a>
            ) : (
              <span className="text-muted">local</span>
            )}
          </dd>
        </div>
        <div>
          <dt className="text-muted">{copy.builtAt}</dt>
          <dd className="mt-0.5">
            <time dateTime={build.builtAt}>{builtAt} UTC</time>
          </dd>
        </div>
        {build.isCi ? (
          <>
            <div>
              <dt className="text-muted">{copy.branch}</dt>
              <dd className="mt-0.5 font-mono">{build.branch}</dd>
            </div>
            <div>
              <dt className="text-muted">{copy.run}</dt>
              <dd className="mt-0.5 font-mono">
                {build.runUrl ? (
                  <a href={build.runUrl} className={linkClass}>
                    #{build.runId}
                  </a>
                ) : null}
              </dd>
            </div>
          </>
        ) : null}
      </dl>

      <ol className="space-y-2.5 px-5 py-4 text-[0.9375rem]">
        {copy.gates.map((gate, index) => (
          <li
            key={gate}
            className="record-step flex items-center gap-3"
            style={{ "--step": index } as React.CSSProperties}
          >
            {build.isCi ? (
              <Icon
                name="circleCheck"
                className="record-check size-4 shrink-0 text-ok"
              />
            ) : (
              <Icon
                name="circle"
                className="size-4 shrink-0 text-line-strong"
              />
            )}
            <span>{gate}</span>
          </li>
        ))}
        <li
          className="record-step flex items-center gap-3 border-t border-line pt-3 font-medium"
          style={{ "--step": copy.gates.length } as React.CSSProperties}
        >
          {build.isCi ? (
            <Icon
              name="circleCheck"
              className="record-check size-4 shrink-0 text-ok"
            />
          ) : (
            <Icon name="circle" className="size-4 shrink-0 text-line-strong" />
          )}
          {build.isCi ? copy.published : copy.localTitle}
        </li>
      </ol>

      <p className="border-t border-line px-5 py-3.5 text-sm text-muted">
        {build.isCi ? copy.ciNote : copy.localNote}
      </p>
    </figure>
  );
}
