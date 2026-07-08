import { siteConfig } from "@/config/site";
import type { SeoData } from "@/types";

export const seoData = siteConfig.seo satisfies SeoData;
