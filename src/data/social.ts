import { siteConfig } from "@/config/site";
import type { SocialLink } from "@/types";

export const socialData = siteConfig.social satisfies readonly SocialLink[];
