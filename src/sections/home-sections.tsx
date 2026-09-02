import { heroDataByLocale } from "@/data/hero";
import {
  BackgroundSection,
  ContactSection,
  DeliveryPipelineSection,
  InfrastructureSection,
  ObservabilitySection,
  ProjectsSection,
  ToolchainSection,
} from "@/sections/devops-sections";
import { HeroSection } from "@/sections/hero-section";
import type { Locale } from "@/types";

type HomeSectionsProps = { locale: Locale };

export function HomeSections({ locale }: HomeSectionsProps) {
  return (
    <main>
      <HeroSection data={heroDataByLocale[locale]} />
      <ToolchainSection locale={locale} />
      <DeliveryPipelineSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ObservabilitySection locale={locale} />
      <InfrastructureSection locale={locale} />
      <BackgroundSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}
