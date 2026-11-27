import { CopyEmail } from "@/components/home/copy-email";
import { SectionIntro } from "@/components/home/section-intro";
import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-registry";
import { homeCopy } from "@/data/copy";
import { profile } from "@/data/profile";
import { withBasePath } from "@/i18n/config";
import type { Locale } from "@/types";

type Channel = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: IconName;
  readonly external: boolean;
};

export function Contact({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale].contact;
  const channels: Channel[] = [
    {
      label: copy.whatsapp,
      value: profile.whatsapp.display,
      href: profile.whatsapp.href,
      icon: "message",
      external: true,
    },
    {
      label: copy.linkedin,
      value: "paulo-ramos-b605a9209",
      href: profile.linkedin,
      icon: "linkedin",
      external: true,
    },
    {
      label: copy.github,
      value: profile.githubHandle,
      href: profile.github,
      icon: "github",
      external: true,
    },
    {
      label: copy.resume,
      value: copy.resumeFile,
      href: withBasePath(profile.resume[locale]),
      icon: "download",
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line py-20 sm:py-24"
    >
      <SectionIntro
        id="contact-title"
        title={copy.title}
        description={copy.text}
      />
      <p className="mt-4 text-muted">
        {profile.location.display[locale]} ({profile.location.timeZone})
      </p>

      <div className="mt-12 overflow-hidden rounded-md border border-line">
        <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div className="min-w-0">
            <p className="text-sm text-muted">{copy.email}</p>
            <a
              href={`mailto:${profile.email}`}
              className="font-wide mt-1 block break-all rounded-sm text-[clamp(1.375rem,3.2vw,2.125rem)] font-semibold tracking-tight text-fg underline decoration-line-strong decoration-2 underline-offset-[6px] hover:decoration-signal"
            >
              {profile.email}
            </a>
          </div>
          <CopyEmail
            email={profile.email}
            labels={{
              copy: copy.copy,
              copied: copy.copied,
              copyFailed: copy.copyFailed,
            }}
          />
        </div>
        <ul className="grid sm:grid-cols-2">
          {channels.map((channel, index) => (
            <li
              key={channel.label}
              className={
                index % 2 === 0
                  ? "border-b border-line sm:border-r"
                  : "border-b border-line"
              }
            >
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center gap-4 p-6 transition-colors hover:bg-surface sm:px-8"
              >
                <Icon
                  name={channel.icon}
                  className="size-5 shrink-0 text-muted"
                />
                <span className="min-w-0">
                  <span className="block text-sm text-muted">
                    {channel.label}
                  </span>
                  <span className="block truncate font-medium text-fg">
                    {channel.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
