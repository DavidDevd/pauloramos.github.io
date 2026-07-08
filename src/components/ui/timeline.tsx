import * as React from "react";

import { cn } from "@/lib/utils";

export type TimelineProps = React.HTMLAttributes<HTMLDivElement>;

export function Timeline({ className, ...props }: TimelineProps) {
  return <div className={cn("relative space-y-6", className)} {...props} />;
}

export type TimelineItemProps = React.HTMLAttributes<HTMLDivElement>;

export function TimelineItem({ className, ...props }: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative border-l border-border pl-5 before:absolute before:-left-1.5 before:top-1 before:size-3 before:rounded-full before:bg-primary",
        className,
      )}
      {...props}
    />
  );
}
