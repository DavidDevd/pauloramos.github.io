import * as React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "full";
};

const containerSizes = {
  sm: "mx-auto w-full max-w-3xl px-4 sm:px-6",
  md: "mx-auto w-full max-w-5xl px-4 sm:px-6",
  lg: "mx-auto w-full max-w-6xl px-4 sm:px-6",
  full: "w-full px-4 sm:px-6",
};

export function Container({ className, size = "lg", ...props }: ContainerProps) {
  return <div className={cn(containerSizes[size], className)} {...props} />;
}
