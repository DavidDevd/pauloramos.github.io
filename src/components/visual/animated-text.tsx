"use client";

import { m, type HTMLMotionProps } from "framer-motion";

import { fadeUp, motionDurations, motionEasing } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = HTMLMotionProps<"span">;

export function AnimatedText({ className, ...props }: AnimatedTextProps) {
  return (
    <m.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={{
        duration: motionDurations.normal,
        ease: motionEasing.standard,
      }}
      {...props}
    />
  );
}
