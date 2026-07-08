import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg";
};

const sectionSpacing = {
  sm: "py-section-sm",
  md: "py-section",
  lg: "py-section-lg",
};

export function Section({ className, spacing = "md", ...props }: SectionProps) {
  return <section className={cn(sectionSpacing[spacing], className)} {...props} />;
}
