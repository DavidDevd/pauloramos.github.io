import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Glow } from "@/components/visual/glow";
import { GradientBackground } from "@/components/visual/gradient-background";
import { GridPattern } from "@/components/visual/grid-pattern";
import type { CaseStudyData } from "@/types";

type CaseStudy = CaseStudyData["cases"][number];

type CaseStudyPageProps = {
  data: CaseStudyData;
  caseStudy: CaseStudy;
  previous?: CaseStudy;
  next?: CaseStudy;
  projectBasePath: string;
};

type SectionBlockProps = {
  title: string;
  children: React.ReactNode;
};

function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <section className="scroll-mt-24 space-y-5">
      <Heading size="md">{title}</Heading>
      {children}
    </section>
  );
}

function TextCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="leading-8 text-muted-foreground" padding="lg" variant="subtle">
      {children}
    </Card>
  );
}

function ListCard({ items }: { items: readonly string[] }) {
  return (
    <Card padding="lg" variant="subtle">
      <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

export function CaseStudyPage({ data, caseStudy, previous, next, projectBasePath }: CaseStudyPageProps) {
  const githubLink = caseStudy.links.github;
  const demoLink = caseStudy.links.demo;

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-border/60 py-section-lg">
        <GradientBackground />
        <GridPattern className="opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
        <Glow className="-right-24 top-10 opacity-70" />

        <Container className="relative z-10 space-y-10">
          <Button asChild variant="ghost" size="sm">
            <Link href={`${projectBasePath === "/projects" ? "/" : "/en"}#projects`}>{data.page.backLabel}</Link>
          </Button>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">{caseStudy.category}</Badge>
                <Badge variant="subtle">{caseStudy.status}</Badge>
                <Badge variant="outline">{caseStudy.year}</Badge>
                <Badge variant="outline">{caseStudy.duration}</Badge>
              </div>

              <div className="space-y-4">
                <Heading as="h1" size="xl" className="max-w-4xl">
                  {caseStudy.title}
                </Heading>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  {caseStudy.objective}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant={githubLink.variant ?? "primary"}>
                  <a
                    aria-label={githubLink.ariaLabel}
                    href={githubLink.href}
                    target={githubLink.target}
                    rel={githubLink.target === "_blank" ? "noopener noreferrer" : undefined}
                  >
                    {githubLink.icon ? <Icon name={githubLink.icon} className="size-4" /> : null}
                    {githubLink.label}
                  </a>
                </Button>

                {demoLink ? (
                  <Button asChild variant={demoLink.variant ?? "outline"}>
                    <a
                      aria-label={demoLink.ariaLabel}
                      href={demoLink.href}
                      target={demoLink.target}
                      rel={demoLink.target === "_blank" ? "noopener noreferrer" : undefined}
                    >
                      {demoLink.icon ? <Icon name={demoLink.icon} className="size-4" /> : null}
                      {demoLink.label}
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            <Card className="space-y-5" padding="lg" variant="subtle">
              <p className="text-sm font-medium text-foreground">{data.page.overview}</p>
              <div className="grid gap-3">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md border border-border/70 bg-background/45 p-4">
                    <p className="font-mono text-sm text-primary">{metric.value}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{metric.label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-section lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <Card className="space-y-4" padding="lg" variant="outline">
            <p className="text-sm font-medium text-foreground">{data.page.technologyStack}</p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((technology) => (
                <Badge key={technology} variant="outline">
                  {technology}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="space-y-4" padding="lg" variant="outline">
            <p className="text-sm font-medium text-foreground">{data.page.architecture}</p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.architecture.map((item) => (
                <Badge key={item} variant="subtle">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        </aside>

        <div className="space-y-14">
          <SectionBlock title={data.page.problem}>
            <TextCard>{caseStudy.problem}</TextCard>
          </SectionBlock>

          <SectionBlock title={data.page.objective}>
            <TextCard>{caseStudy.objective}</TextCard>
          </SectionBlock>

          <SectionBlock title={data.page.solution}>
            <TextCard>{caseStudy.solution}</TextCard>
          </SectionBlock>

          <SectionBlock title={data.page.architectureDiagram}>
            <Card className="space-y-5" padding="lg" variant="subtle">
              <div className="grid gap-3 md:grid-cols-2">
                {caseStudy.flow.map((step, index) => (
                  <div key={step} className="rounded-md border border-border/70 bg-background/45 p-4">
                    <p className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-2 text-sm font-medium text-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.screenshots.map((asset) => (
                  <Badge key={asset.src} variant="subtle">
                    {asset.title}
                  </Badge>
                ))}
              </div>
            </Card>
          </SectionBlock>

          <SectionBlock title={data.page.engineeringDecisions}>
            <div className="grid gap-4">
              {caseStudy.engineeringDecisions.map((decision) => (
                <Card key={decision.question} className="space-y-3" padding="lg" variant="subtle">
                  <p className="text-sm font-medium text-primary">{decision.question}</p>
                  <p className="text-base font-medium text-foreground">{decision.decision}</p>
                  <p className="text-sm leading-7 text-muted-foreground">{decision.rationale}</p>
                </Card>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title={data.page.challenges}>
            <ListCard items={caseStudy.challenges} />
          </SectionBlock>

          <SectionBlock title={data.page.lessonsLearned}>
            <ListCard items={caseStudy.lessonsLearned} />
          </SectionBlock>

          <SectionBlock title={data.page.futureImprovements}>
            <ListCard items={caseStudy.futureImprovements} />
          </SectionBlock>

          <SectionBlock title={data.page.metrics}>
            <div className="grid gap-4 md:grid-cols-2">
              {caseStudy.metrics.map((metric) => (
                <Card key={metric.label} className="space-y-2" padding="lg" variant="subtle">
                  <p className="font-mono text-sm text-primary">{metric.value}</p>
                  <p className="font-medium text-foreground">{metric.label}</p>
                  <p className="text-sm leading-7 text-muted-foreground">{metric.description}</p>
                </Card>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title={data.page.github}>
            <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" padding="lg" variant="subtle">
              <p className="text-sm leading-7 text-muted-foreground">{githubLink.ariaLabel}</p>
              <Button asChild variant={githubLink.variant ?? "primary"}>
                <a
                  aria-label={githubLink.ariaLabel}
                  href={githubLink.href}
                  target={githubLink.target}
                  rel={githubLink.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  {githubLink.icon ? <Icon name={githubLink.icon} className="size-4" /> : null}
                  {githubLink.label}
                </a>
              </Button>
            </Card>
          </SectionBlock>

          <SectionBlock title={data.page.demo}>
            <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" padding="lg" variant="outline">
              <p className="text-sm leading-7 text-muted-foreground">
                {demoLink?.ariaLabel ?? data.page.unavailableDemo}
              </p>
              {demoLink ? (
                <Button asChild variant={demoLink.variant ?? "primary"}>
                  <a
                    aria-label={demoLink.ariaLabel}
                    href={demoLink.href}
                    target={demoLink.target}
                    rel={demoLink.target === "_blank" ? "noopener noreferrer" : undefined}
                  >
                    {demoLink.icon ? <Icon name={demoLink.icon} className="size-4" /> : null}
                    {demoLink.label}
                  </a>
                </Button>
              ) : null}
            </Card>
          </SectionBlock>

          <nav className="grid gap-4 border-t border-border/70 pt-8 md:grid-cols-2" aria-label={data.page.nextCase}>
            {previous ? (
              <Link href={`${projectBasePath}/${previous.slug}`} className="group rounded-lg border border-border/70 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-surface-elevated">
                <p className="text-sm text-muted-foreground">{data.page.previousCase}</p>
                <p className="mt-2 font-medium text-foreground">{previous.title}</p>
              </Link>
            ) : null}

            {next ? (
              <Link href={`${projectBasePath}/${next.slug}`} className="group rounded-lg border border-border/70 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-surface-elevated md:text-right">
                <p className="text-sm text-muted-foreground">{data.page.nextCase}</p>
                <p className="mt-2 font-medium text-foreground">{next.title}</p>
              </Link>
            ) : null}
          </nav>
        </div>
      </Container>
    </main>
  );
}
