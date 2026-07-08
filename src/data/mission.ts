import type { MissionData } from "@/types";

export const missionData = {
  eyebrow: "Mission",
  title: "Building software beyond code.",
  description:
    "Software is more than code. It is the ability to solve real problems through engineering, automation and continuous learning.",
  pillars: [
    {
      icon: "code",
      title: "Software Engineering",
      description:
        "Designing scalable applications with clean architecture, APIs and maintainable code.",
    },
    {
      icon: "sparkles",
      title: "AI Automation",
      description:
        "Creating intelligent workflows with AI agents, API integrations and automation tools.",
    },
    {
      icon: "cloud",
      title: "Cloud Computing",
      description:
        "Designing reliable infrastructure with cloud services, containers and DevOps practices.",
    },
  ],
} as const satisfies MissionData;
