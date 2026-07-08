"use client";

import { m } from "framer-motion";

import { Icon } from "@/components/icons/icon";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/visual/section-header";
import { fadeUp, motionDurations, motionEasing, staggerContainer } from "@/lib/motion";
import type { MissionData } from "@/types";

type MissionSectionProps = {
  data: MissionData;
};

export function MissionSection({ data }: MissionSectionProps) {
  return (
    <Section id="mission" className="relative overflow-hidden border-b border-border/60">
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
            className="mx-auto text-center"
          />
        </m.div>

        <m.div
          className="grid gap-4 md:grid-cols-3"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={staggerContainer}
        >
          {data.pillars.map((pillar) => (
            <m.div
              key={pillar.title}
              variants={fadeUp}
              transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
            >
              <Card
                className="group h-full space-y-5 transition-colors hover:border-primary/40 hover:bg-surface-elevated/70"
                padding="lg"
                variant="subtle"
              >
                <div className="flex size-11 items-center justify-center rounded-md border border-border bg-surface-subtle text-primary transition-colors group-hover:border-primary/40">
                  <Icon name={pillar.icon} className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </div>
              </Card>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
