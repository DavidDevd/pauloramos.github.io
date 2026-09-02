"use client";

import { m } from "framer-motion";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/visual/section-header";
import { devopsDataByLocale } from "@/data/devops";
import {
  fadeUp,
  motionDurations,
  motionEasing,
  staggerContainer,
} from "@/lib/motion";
import type { Locale } from "@/types";

type LocalizedSectionProps = { locale: Locale };

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={fadeUp}
      transition={{
        duration: motionDurations.normal,
        ease: motionEasing.standard,
      }}
    >
      {children}
    </m.div>
  );
}

export function ToolchainSection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale].stack;
  return (
    <Section id="stack" className="border-b border-border/60">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </Reveal>
        <m.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
          variants={staggerContainer}
        >
          {data.groups.map((group, index) => (
            <m.article key={group.name} variants={fadeUp}>
              <Card
                className="h-full border-border/75 bg-surface/65 transition-colors hover:border-primary/40"
                padding="lg"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-primary">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{group.name}</h3>
                  </div>
                  <Icon
                    name={
                      index === 0
                        ? "cloud"
                        : index === 2
                          ? "workflow"
                          : index === 4
                            ? "badgeCheck"
                            : "layers"
                    }
                    className="size-5 text-muted-foreground"
                  />
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </m.article>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}

export function DeliveryPipelineSection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale].pipeline;
  return (
    <Section className="border-b border-border/60" spacing="sm">
      <Container className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </Reveal>
        <m.ol
          aria-label={data.ariaLabel}
          className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8"
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {data.stages.map((stage, index) => (
            <m.li
              key={stage}
              variants={fadeUp}
              className="relative rounded-lg border border-border/75 bg-surface/70 p-3.5 text-center shadow-[0_1px_0_hsl(var(--foreground)/0.04)]"
            >
              <span className="block font-mono text-[0.65rem] text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                {stage}
              </span>
              {index < data.stages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 z-10 hidden h-px w-2 bg-primary/70 xl:block"
                />
              ) : null}
            </m.li>
          ))}
        </m.ol>
      </Container>
    </Section>
  );
}

function KorpArchitecture({ locale }: LocalizedSectionProps) {
  const labels =
    locale === "pt-BR"
      ? {
          title: "Arquitetura verificada",
          note: "Grafana está no Compose, mas o repositório Korp não provisiona o datasource automaticamente.",
          automation: "Provisiona host, rede, stack e valida HTTP",
        }
      : {
          title: "Verified architecture",
          note: "Grafana is included in Compose, but the Korp repository does not provision its datasource automatically.",
          automation: "Provisions host, network, stack and validates HTTP",
        };
  const Node = ({
    title,
    detail,
    tone = "primary",
  }: {
    title: string;
    detail: string;
    tone?: "primary" | "success";
  }) => (
    <div
      className={`rounded-md border p-3 text-center ${tone === "success" ? "border-success/35 bg-success/5" : "border-primary/35 bg-primary/5"}`}
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
    </div>
  );
  return (
    <div
      id="korp-architecture"
      className="rounded-lg border border-border/75 bg-background/45 p-4 sm:p-5"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        {labels.title}
      </p>
      <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="space-y-2">
          <Node title="NGINX :80" detail="Reverse proxy" />
          <div className="mx-auto h-3 w-px bg-border" />
          <Node
            title="Go Application :8080"
            detail="/projeto-korp · /health · /metrics"
            tone="success"
          />
        </div>
        <div
          className="hidden h-px w-8 bg-border lg:block"
          aria-hidden="true"
        />
        <div className="space-y-2">
          <Node title="Prometheus :9090" detail="Scrape app:8080" />
          <div className="mx-auto h-3 w-px bg-border" />
          <Node title="Grafana :3000" detail="Visualization container" />
        </div>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-border/70 px-3 py-2 text-xs text-muted-foreground">
          <strong className="text-foreground">Docker Compose</strong> · 4
          services + external bridge network
        </div>
        <div className="rounded-md border border-border/70 px-3 py-2 text-xs text-muted-foreground">
          <strong className="text-foreground">Ansible</strong> ·{" "}
          {labels.automation}
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        {labels.note}
      </p>
    </div>
  );
}

export function ProjectsSection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale].projects;
  const featured = data.items[0];
  return (
    <Section id="projects" className="border-b border-border/60">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </Reveal>
        <Reveal>
          <article className="relative overflow-hidden rounded-lg border border-primary/40 bg-surface/80 p-5 shadow-2xl shadow-primary/10 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">{data.labels.featured}</Badge>
                  <Badge variant="outline">{featured.category}</Badge>
                </div>
                <div>
                  <p className="font-mono text-sm text-primary">
                    {featured.number}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-lg text-muted-foreground">
                    {featured.summary}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {data.labels.problem}
                  </p>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    {featured.problem}
                  </p>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {data.labels.evidence}
                  </p>
                  <ul className="space-y-2">
                    {featured.evidence.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-success"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.technologies.map((technology) => (
                    <Badge key={technology} variant="outline">
                      {technology}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="primary">
                    <a href="#korp-architecture">{data.labels.architecture}</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href={featured.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" className="size-4" />
                      {data.labels.repository}
                    </a>
                  </Button>
                </div>
              </div>
              <KorpArchitecture locale={locale} />
            </div>
          </article>
        </Reveal>
        <m.div
          className="grid gap-4 lg:grid-cols-2"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
          variants={staggerContainer}
        >
          {data.items.slice(1).map((project) => (
            <m.article key={project.number} variants={fadeUp}>
              <Card
                className="flex h-full flex-col gap-5 transition-colors hover:border-primary/40"
                padding="lg"
                variant="secondary"
              >
                <div>
                  <p className="font-mono text-xs text-primary">
                    {project.number}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary/90">
                    {project.category}
                  </p>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {project.summary}
                </p>
                <div className="rounded-md border border-border/70 bg-background/35 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {data.labels.problem}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {project.evidence.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology} variant="outline">
                      {technology}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" className="mt-auto w-fit">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" className="size-4" />
                    {data.labels.repository}
                  </a>
                </Button>
              </Card>
            </m.article>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}

export function ObservabilitySection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale].observability;
  return (
    <Section id="observability" className="border-b border-border/60">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </Reveal>
        <Reveal className="rounded-lg border border-border/75 bg-surface/75 p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between border-b border-border/70 pb-4">
            <div className="flex gap-2" aria-hidden="true">
              <span className="size-2 rounded-full bg-success" />
              <span className="size-2 rounded-full bg-primary" />
              <span className="size-2 rounded-full bg-accent" />
            </div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              {data.note}
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.items.map((item, index) => (
              <div
                key={item.label}
                className="rounded-md border border-border/70 bg-background/45 p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    {item.label}
                  </p>
                  <span
                    className="size-2 rounded-full bg-success shadow-[0_0_12px_hsl(var(--success))]"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-semibold">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {item.detail}
                </p>
                <div
                  className="mt-4 flex h-8 items-end gap-1"
                  aria-hidden="true"
                >
                  {[38, 58, 44, 72, 52, 82, 64, 88].map((height, bar) => (
                    <span
                      key={bar}
                      className="flex-1 rounded-sm bg-primary/30"
                      style={{ height: `${((height + index * 7) % 75) + 20}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function InfrastructureSection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale].infrastructure;
  return (
    <Section id="infrastructure" className="border-b border-border/60">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          {data.cards.map((card, index) => (
            <Reveal key={card.title}>
              <Card className="h-full" padding="lg" variant="secondary">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant={index === 0 ? "primary" : "outline"}>
                      {card.badge}
                    </Badge>
                    <h3 className="mt-4 text-2xl font-semibold">
                      {card.title}
                    </h3>
                  </div>
                  <Icon
                    name={index === 0 ? "cloud" : "workflow"}
                    className="size-7 text-primary"
                  />
                </div>
                <p className="mt-4 leading-7 text-muted-foreground">
                  {card.text}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-md border border-border/70 bg-background/40 p-3 text-sm text-muted-foreground"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function BackgroundSection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale];
  return (
    <>
      <Section id="about" className="border-b border-border/60">
        <Container className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeader
              eyebrow={data.about.eyebrow}
              title={data.about.title}
            />
          </Reveal>
          <Reveal>
            <Card padding="lg">
              <Badge variant="primary">{data.about.role}</Badge>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {data.about.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {data.about.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>
      <Section className="border-b border-border/60" spacing="sm">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow={data.development.eyebrow}
              title={data.development.title}
              description={data.development.text}
            />
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {data.development.items.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-border/75 bg-surface/65 px-4 py-3 font-mono text-sm text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export function ContactSection({ locale }: LocalizedSectionProps) {
  const data = devopsDataByLocale[locale].contact;
  return (
    <Section id="contact">
      <Container>
        <Reveal className="rounded-lg border border-primary/35 bg-gradient-to-br from-primary/10 via-surface to-accent/5 p-6 text-center sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {data.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {data.text}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <a
                href="https://linkedin.com/in/paulo-ramos-b605a9209"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" className="size-4" />
                {data.action}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/DavidDevd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" className="size-4" />
                {data.github}
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
