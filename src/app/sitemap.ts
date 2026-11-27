import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { caseStudies, casePath } from "@/data/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${siteConfig.url}${path}`;

  const page = (ptPath: string, enPath: string, priority: number) => [
    {
      url: url(ptPath),
      lastModified,
      priority,
      alternates: { languages: { "pt-BR": url(ptPath), "en-US": url(enPath) } },
    },
    {
      url: url(enPath),
      lastModified,
      priority: priority - 0.1,
      alternates: { languages: { "pt-BR": url(ptPath), "en-US": url(enPath) } },
    },
  ];

  return [
    ...page("/", "/en/", 1),
    ...caseStudies.flatMap((item) =>
      page(casePath(item.slug, "pt-BR"), casePath(item.slug, "en-US"), 0.8),
    ),
  ];
}
