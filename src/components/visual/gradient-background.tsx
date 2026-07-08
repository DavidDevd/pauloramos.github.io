import * as React from "react";

import { cn } from "@/lib/utils";

export type GradientBackgroundProps = React.HTMLAttributes<HTMLDivElement>;

export function GradientBackground({ className, ...props }: GradientBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)} {...props}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,hsl(var(--primary)/0.24),transparent_30rem),radial-gradient(circle_at_72%_12%,hsl(var(--accent)/0.14),transparent_28rem),linear-gradient(180deg,hsl(var(--background)/0)_0%,hsl(var(--background))_84%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(hsl(var(--foreground))_0.7px,transparent_0.7px)] [background-size:6px_6px]" />
    </div>
  );
}
