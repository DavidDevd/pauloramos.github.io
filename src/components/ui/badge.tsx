import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "border-primary/30 bg-primary/10 text-primary",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
        outline: "border-border text-muted-foreground",
        ghost: "border-transparent text-muted-foreground",
        subtle: "border-border/70 bg-muted/40 text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { badgeVariants };
