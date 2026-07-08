import * as React from "react";

import { cn } from "@/lib/utils";

export type GlowProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "primary" | "accent";
};

export function Glow({ className, tone = "primary", ...props }: GlowProps) {
  const color = tone === "accent" ? "bg-accent/18" : "bg-primary/20";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute size-80 rounded-full blur-3xl", color, className)}
      {...props}
    />
  );
}
