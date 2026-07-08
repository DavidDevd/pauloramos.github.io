"use client";

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
};

function getCaseStudyLinks(caseStudy: CaseStudyData["cases"][number]) {
  return [caseStudy.links.github, caseStudy.links.demo].filter(
    (link): link is ContentLink => Boolean(link),
  );
}

export function FeaturedCaseStudiesSection({ data }: FeaturedCaseStudiesSectionProps) {
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
          {data.cases.map((caseStudy) => (
            <m.article
              key={caseStudy.title}
              variants={fadeUp}
              transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
            >
              <Card
                className="group flex h-full flex-col gap-7 transition-colors hover:border-primary/40 hover:bg-surface-elevated/70"
                padding="lg"
                variant={caseStudy.featured ? "secondary" : "subtle"}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary">{caseStudy.category}</Badge>
                      {caseStudy.featured ? (
                        <Badge variant="subtle">{data.labels.featured}</Badge>
                      ) : null}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {caseStudy.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2 rounded-md border border-border/70 bg-background/40 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {data.labels.problem}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {caseStudy.problem}
                    </p>
                  </div>
                  <div className="space-y-2 rounded-md border border-border/70 bg-background/40 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {data.labels.solution}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {data.labels.architecture}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.architecture.map((item) => (
                      <Badge key={item} variant="subtle">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {data.labels.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((technology) => (
                      <Badge key={technology} variant="outline">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 text-sm leading-7 text-muted-foreground md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">{data.labels.engineeringDecisions}</p>
                    <ul className="space-y-2">
                      {caseStudy.engineeringDecisions.map((decision) => (
                        <li key={decision.question}>{decision.rationale}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">{data.labels.learnings}</p>
                    <ul className="space-y-2">
                      {caseStudy.lessonsLearned.map((learning) => (
                        <li key={learning}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-1">
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
