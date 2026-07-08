import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { caseStudiesData } from "@/data/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-07T00:00:00.000Z");
  const caseStudyRoutes = caseStudiesData.cases.flatMap((caseStudy) => [
    {
      url: `${siteConfig.url}/projects/${caseStudy.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/en/projects/${caseStudy.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudyRoutes,
  ];
}
