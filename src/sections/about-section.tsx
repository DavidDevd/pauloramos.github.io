"use client";

import { m } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { fadeUp, motionDurations, motionEasing, staggerContainer } from "@/lib/motion";
import type { AboutData } from "@/types";

type AboutSectionProps = {
  data: AboutData;
};

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <Section id="about" className="relative overflow-hidden border-b border-border/60">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <m.div
          className="space-y-8"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={staggerContainer}
        >
          <m.div className="space-y-4" variants={fadeUp}>
            <Badge variant="subtle">{data.eyebrow}</Badge>
            <Heading size="lg">{data.title}</Heading>
          </m.div>

          <m.div className="space-y-5 text-base leading-8 text-muted-foreground" variants={fadeUp}>
            {data.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </m.div>

          <m.div className="flex flex-wrap gap-2" variants={fadeUp}>
            {data.highlights.map((highlight) => (
              <Badge key={highlight} variant="outline">
                {highlight}
              </Badge>
            ))}
          </m.div>
        </m.div>

        <m.aside
          aria-label={data.professionalJourneyAriaLabel}
          className="space-y-4"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={staggerContainer}
        >
          <m.div variants={fadeUp}>
            <Card className="space-y-6" padding="lg" variant="subtle">
              <div className="space-y-2">
                <p className="font-mono text-sm text-primary">{data.journey.year}</p>
                <h3 className="text-xl font-semibold text-foreground">{data.journey.start}</h3>
              </div>

              <Timeline>
                {data.journey.steps.map((step) => (
                  <TimelineItem key={step}>
                    <p className="text-sm font-medium text-foreground">{step}</p>
                  </TimelineItem>
                ))}
              </Timeline>
            </Card>
          </m.div>

          <m.div
            variants={fadeUp}
            transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
          >
            <Card className="space-y-4" padding="lg" variant="outline">
              <h3 className="text-sm font-medium text-muted-foreground">{data.currentFocus.title}</h3>
              <div className="flex flex-wrap gap-2">
                {data.currentFocus.items.map((item) => (
                  <Badge key={item} variant="subtle">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </m.div>
        </m.aside>
      </Container>
    </Section>
  );
}
