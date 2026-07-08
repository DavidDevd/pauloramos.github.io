import { About } from "@/sections/about";
import { Articles } from "@/sections/articles";
import { Certifications } from "@/sections/certifications";
import { Contact } from "@/sections/contact";
import { Experience } from "@/sections/experience";
import { FeaturedCaseStudies } from "@/sections/featured-case-studies";
import { Hero } from "@/sections/hero";
import { Journey } from "@/sections/journey";
import { Mission } from "@/sections/mission";
import { WhatIBuild } from "@/sections/what-i-build";

export function HomeSections() {
  return (
    <main>
      <Hero />
      <Mission />
      <About />
      <WhatIBuild />
      <FeaturedCaseStudies />
      <Experience />
      <Journey />
      <Certifications />
      <Articles />
      <Contact />
    </main>
  );
}
