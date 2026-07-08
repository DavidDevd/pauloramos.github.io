import { socialData } from "@/data/social";
import type { ContactData } from "@/types";

export const contactData = {
  title: "",
  description: "",
  email: "",
  links: socialData,
} as const satisfies ContactData;
