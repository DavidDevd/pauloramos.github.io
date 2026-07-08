import { Articles } from "@/sections/articles";
import { Certifications } from "@/sections/certifications";
import { Contact } from "@/sections/contact";
import { Experience } from "@/sections/experience";
import { caseStudiesDataByLocale } from "@/data/case-studies";
import { aboutDataByLocale } from "@/data/about";
import { heroDataByLocale } from "@/data/hero";
import { missionDataByLocale } from "@/data/mission";
import { whatIBuildDataByLocale } from "@/data/what-i-build";
import { FeaturedCaseStudiesSection } from "@/sections/featured-case-studies-section";
import { HeroSection } from "@/sections/hero-section";
import { Journey } from "@/sections/journey";
import { MissionSection } from "@/sections/mission-section";
import { AboutSection } from "@/sections/about-section";
import { WhatIBuildSection } from "@/sections/what-i-build-section";
import type { Locale } from "@/types";

type HomeSectionsProps = {
  locale: Locale;
};

export function HomeSections({ locale }: HomeSectionsProps) {
  return (
    <main>
      <HeroSection data={heroDataByLocale[locale]} />
      <MissionSection data={missionDataByLocale[locale]} />
      <AboutSection data={aboutDataByLocale[locale]} />
      <WhatIBuildSection data={whatIBuildDataByLocale[locale]} />
      <FeaturedCaseStudiesSection data={caseStudiesDataByLocale[locale]} />
      <Experience />
      <Journey />
      <Certifications />
      <Articles />
      <Contact />
    </main>
  );
}
