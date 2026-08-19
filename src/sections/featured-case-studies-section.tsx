"use client";

import Link from "next/link";
import { m } from "framer-motion";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/visual/section-header";
import { fadeUp, motionDurations, motionEasing, staggerContainer } from "@/lib/motion";
import type { CaseStudyData, ContentLink } from "@/types";

type FeaturedCaseStudiesSectionProps = {
  data: CaseStudyData;
  locale?: "pt-BR" | "en-US";
};

function getCaseStudyLinks(caseStudy: CaseStudyData["cases"][number]) {
  return [caseStudy.links.github, caseStudy.links.demo].filter(
    (link): link is ContentLink => Boolean(link),
  );
}

export function FeaturedCaseStudiesSection({
  data,
  locale = "pt-BR",
}: FeaturedCaseStudiesSectionProps) {
  const featuredCases = data.cases.filter((caseStudy) => caseStudy.featured).slice(0, 4);
  const projectBasePath = locale === "en-US" ? "/en/projects" : "/projects";
  const caseLabel = locale === "en-US" ? "View case study" : "Ver case completo";

  return (
    <Section id="projects" className="relative overflow-hidden border-b border-border/60">
      <Container className="space-y-12">
        <m.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={fadeUp}
          transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
        >
          <SectionHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
        </m.div>

        <m.div
          className="grid gap-5 lg:grid-cols-2"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          {featuredCases.map((caseStudy) => (
            <m.article
              key={caseStudy.slug}
              variants={fadeUp}
              transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
            >
              <Card
                className="group flex h-full flex-col gap-7 transition-colors hover:border-primary/40 hover:bg-surface-elevated/70"
                padding="lg"
                variant="secondary"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">{caseStudy.category}</Badge>
                    <Badge variant="subtle">{data.labels.featured}</Badge>
                    <Badge variant="outline">{caseStudy.status}</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {caseStudy.title}
                  </h3>
                  {caseStudy.subtitle ? (
                    <p className="text-sm leading-7 text-muted-foreground">{caseStudy.subtitle}</p>
                  ) : null}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2 rounded-md border border-border/70 bg-background/40 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {data.labels.problem}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">{caseStudy.problem}</p>
                  </div>
                  <div className="space-y-2 rounded-md border border-border/70 bg-background/40 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {data.labels.solution}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {data.labels.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 6).map((technology) => (
                      <Badge key={technology} variant="outline">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                {caseStudy.metrics.length ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {caseStudy.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} className="rounded-md border border-border/70 bg-background/40 p-4">
                        <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-auto flex flex-wrap gap-3 pt-1">
                  <Button asChild variant="primary" size="sm">
                    <Link href={`${projectBasePath}/${caseStudy.slug}`}>{caseLabel}</Link>
                  </Button>
                  {getCaseStudyLinks(caseStudy).map((link) => (
                    <Button key={link.href} asChild variant={link.variant ?? "ghost"} size="sm">
                      <a
                        href={link.href}
                        target={link.target}
                        rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                        aria-label={link.ariaLabel}
                      >
                        {link.icon ? <Icon name={link.icon} className="size-4" /> : null}
                        {link.label}
                      </a>
                    </Button>
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
