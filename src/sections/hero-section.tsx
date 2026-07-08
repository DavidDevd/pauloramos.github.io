"use client";

import { m } from "framer-motion";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Glow } from "@/components/visual/glow";
import { GradientBackground } from "@/components/visual/gradient-background";
import { GridPattern } from "@/components/visual/grid-pattern";
import { fadeUp, motionDurations, motionEasing, scaleIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { HeroData } from "@/types";

type HeroSectionProps = {
  data: HeroData;
};

const workflowStatuses = ["Connected", "Healthy", "Running", "Ready"] as const;

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <Section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden border-b border-border/60 pt-20 sm:pt-24"
      spacing="lg"
    >
      <GradientBackground />
      <GridPattern className="opacity-45 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <Glow className="-right-24 top-14 opacity-80" />
      <Glow tone="accent" className="-bottom-24 left-1/4 opacity-60" />

      <Container className="relative z-10 grid items-center gap-12 py-8 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <m.div
          className="max-w-3xl space-y-9"
          initial={false}
          animate="visible"
          variants={staggerContainer}
        >
          <m.div
            className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-surface/75 px-3 py-1.5 text-sm text-muted-foreground shadow-[0_1px_0_hsl(var(--foreground)/0.04)] backdrop-blur-xl"
            variants={fadeUp}
            transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_18px_hsl(var(--accent))]" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </m.div>

          <div className="space-y-6">
            <m.div className="space-y-4" variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {data.title}
              </p>
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                {data.headline}
              </h1>
            </m.div>

            <m.p className="max-w-2xl text-balance text-lg font-medium text-muted-foreground sm:text-xl" variants={fadeUp}>
              {data.subtitle}
            </m.p>

            <m.p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9" variants={fadeUp}>
              {data.description}
            </m.p>
          </div>

          <m.div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap" variants={fadeUp}>
            {data.actions.map((action) => (
              <Button
                key={action.href}
                asChild
                variant={action.variant ?? "outline"}
                size="lg"
              >
                <a
                  aria-label={action.ariaLabel}
                  href={action.href}
                  target={action.target}
                  rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {action.icon ? <Icon name={action.icon} className="size-4" /> : null}
                  {action.label}
                </a>
              </Button>
            ))}
          </m.div>
        </m.div>

        <m.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={false}
          animate="visible"
          variants={scaleIn}
          transition={{ duration: motionDurations.slow, ease: motionEasing.emphasized }}
        >
          <div className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-lg border border-border/80 bg-surface/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="mb-5 flex items-center justify-between border-b border-border/70 pb-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-danger" />
                <span className="size-2.5 rounded-full bg-warning" />
                <span className="size-2.5 rounded-full bg-success" />
              </div>
              <div className="flex items-center gap-2 rounded-md border border-border/70 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-success shadow-[0_0_14px_hsl(var(--success))]" aria-hidden="true" />
                {workflowStatuses[3]}
              </div>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4" aria-hidden="true">
              {workflowStatuses.map((status, index) => (
                <div
                  key={status}
                  className={cn(
                    "rounded-md border border-border/70 bg-background/45 px-2.5 py-2 text-center text-[0.7rem] font-medium text-muted-foreground",
                    index === workflowStatuses.length - 1 && "border-success/40 text-foreground",
                  )}
                >
                  {status}
                </div>
              ))}
            </div>

            <div className="space-y-3" aria-label={data.workflow.ariaLabel}>
              {data.workflow.items.map((item, index) => (
                <WorkflowNode
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isLast={index === data.workflow.items.length - 1}
                  index={index}
                />
              ))}
            </div>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}

type WorkflowNodeProps = {
  icon: HeroData["workflow"]["items"][number]["icon"];
  label: string;
  isLast: boolean;
  index: number;
};

function WorkflowNode({ icon, label, isLast, index }: WorkflowNodeProps) {
  return (
    <m.div
      className="relative"
      initial={false}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.12 * index,
        duration: motionDurations.normal,
        ease: motionEasing.standard,
      }}
    >
      <div
        className={cn(
          "group relative flex items-center gap-3 rounded-lg border border-border/80 bg-background/65 p-3 shadow-[0_1px_0_hsl(var(--foreground)/0.04)] transition-[border-color,background-color,box-shadow,transform]",
          "hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-elevated/85 hover:shadow-[0_18px_44px_hsl(var(--primary)/0.08)]",
        )}
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-subtle text-primary transition-colors group-hover:border-primary/40">
          <Icon name={icon} className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">{label}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{workflowStatuses[index % workflowStatuses.length]}</p>
        </div>
        <div className="h-2 w-16 overflow-hidden rounded-full bg-muted/70" aria-hidden="true">
          <m.div
            className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-success"
            initial={false}
            animate={{ width: "100%" }}
            transition={{
              delay: 0.16 * index,
              duration: 0.7,
              ease: motionEasing.emphasized,
            }}
          />
        </div>
      </div>
      {!isLast ? (
        <div
          className="mx-8 h-3 w-px bg-gradient-to-b from-border to-primary/50"
          aria-hidden="true"
        />
      ) : null}
    </m.div>
  );
}
