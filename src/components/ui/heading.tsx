import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("text-balance font-semibold tracking-normal", {
  variants: {
    size: {
      sm: "text-xl",
      md: "text-2xl sm:text-3xl",
      lg: "text-3xl sm:text-4xl",
      xl: "text-4xl sm:text-5xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3";
}

export function Heading({ as: Comp = "h2", size, className, ...props }: HeadingProps) {
  return <Comp className={cn(headingVariants({ size, className }))} {...props} />;
}

export { headingVariants };
