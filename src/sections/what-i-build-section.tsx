"use client";

import { m } from "framer-motion";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/visual/section-header";
import { fadeUp, motionDurations, motionEasing, staggerContainer } from "@/lib/motion";
import type { WhatIBuildData } from "@/types";

type WhatIBuildSectionProps = {
  data: WhatIBuildData;
};

export function WhatIBuildSection({ data }: WhatIBuildSectionProps) {
  return (
    <Section id="what-i-build" className="relative overflow-hidden border-b border-border/60">
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
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-12%" }}
          variants={staggerContainer}
        >
          {data.items.map((item) => (
            <m.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: motionDurations.normal, ease: motionEasing.standard }}
            >
              <Card
                className="group flex h-full flex-col gap-6 transition-colors hover:border-primary/40 hover:bg-surface-elevated/70"
                padding="lg"
                variant="subtle"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface-subtle text-primary transition-colors group-hover:border-primary/40">
                    <Icon name={item.icon} className="size-5" />
                  </div>
                  <Badge variant={item.badge === "Main Focus" ? "primary" : "subtle"}>
                    {item.badge}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>

                <div className="mt-auto space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {data.technologyLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <Badge key={technology} variant="outline">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
