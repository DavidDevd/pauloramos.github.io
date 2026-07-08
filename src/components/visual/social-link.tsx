import { Icon } from "@/components/icons/icon";
import type { SocialLink as SocialLinkData } from "@/types";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  link: SocialLinkData;
  className?: string;
};

export function SocialLink({ link, className }: SocialLinkProps) {
  return (
    <a
      aria-label={link.label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      href={link.href}
      target={link.target}
      rel={link.target === "_blank" ? "noreferrer" : undefined}
    >
      <Icon name={link.icon} className="size-4" />
    </a>
  );
}
