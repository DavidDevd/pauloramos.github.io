import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border text-card-foreground shadow-[0_1px_0_hsl(var(--foreground)/0.04)] transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_80px_hsl(var(--primary)/0.08)]",
  {
  variants: {
    variant: {
      primary: "border-primary/30 bg-primary/10",
      secondary: "border-border bg-card",
      outline: "border-border bg-transparent",
      ghost: "border-transparent bg-transparent",
      subtle: "border-border/70 bg-muted/30",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-5",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "secondary",
    padding: "md",
  },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, padding, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  );
}

export { cardVariants };
