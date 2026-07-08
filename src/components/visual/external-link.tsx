import { ArrowUpRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalLink({ className, children, ...props }: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </a>
  );
}
