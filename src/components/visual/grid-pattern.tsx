import * as React from "react";

import { cn } from "@/lib/utils";

export type GridPatternProps = React.HTMLAttributes<HTMLDivElement>;

export function GridPattern({ className, ...props }: GridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.26)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.22)_1px,transparent_1px)] bg-[size:64px_64px]",
        className,
      )}
      {...props}
    />
  );
}
