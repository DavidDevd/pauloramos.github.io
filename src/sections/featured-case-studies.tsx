import { caseStudiesData } from "@/data/case-studies";
import { FeaturedCaseStudiesSection } from "@/sections/featured-case-studies-section";

export function FeaturedCaseStudies() {
  return <FeaturedCaseStudiesSection data={caseStudiesData} />;
}
