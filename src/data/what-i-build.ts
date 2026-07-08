import type { WhatIBuildData } from "@/types";

export const whatIBuildData = {
  eyebrow: "What I Build",
  title: "Building across software, automation and cloud.",
  description:
    "A focused view of the systems, automations and infrastructure I build while evolving as a Software Engineer.",
  technologyLabel: "Featured Technologies",
  items: [
    {
      icon: "layers",
      title: "Full Stack Applications",
      description:
        "Building modern web applications using React, Next.js, FastAPI and Spring Boot.",
      badge: "Main Focus",
      technologies: ["React", "Next.js", "FastAPI", "Spring Boot", "PostgreSQL"],
    },
    {
      icon: "terminal",
      title: "Backend Systems",
      description: "Designing scalable APIs, databases and integrations.",
      badge: "Main Focus",
      technologies: ["Python", "Java", "REST APIs", "PostgreSQL", "Integrations"],
    },
    {
      icon: "sparkles",
      title: "AI Automation",
      description: "Creating intelligent workflows with AI Agents, n8n, APIs and LLMs.",
      badge: "Currently Building",
      technologies: ["OpenAI", "AI Agents", "n8n", "Python", "FastAPI"],
    },
    {
      icon: "cloud",
      title: "Cloud Infrastructure",
      description:
        "Deploying reliable infrastructure using AWS, Docker, Kubernetes and Terraform.",
      badge: "Currently Building",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux"],
    },
    {
      icon: "database",
      title: "Data Engineering",
      description: "Building data workflows with Python, SQL, dashboards and automation.",
      badge: "Currently Building",
      technologies: ["Python", "SQL", "Pipelines", "Dashboards", "Automation"],
    },
  ],
} as const satisfies WhatIBuildData;
