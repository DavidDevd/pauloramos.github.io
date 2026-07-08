import type { WhatIBuildData } from "@/types";

export const whatIBuildData = {
  eyebrow: "What I Build",
  title: "AI-first engineering for automation, backend and cloud.",
  description:
    "Uma visao objetiva dos sistemas que construo: agentes de IA, automacoes operacionais, APIs modernas e infraestrutura cloud preparada para evoluir.",
  technologyLabel: "Featured Technologies",
  items: [
    {
      icon: "sparkles",
      title: "AI Engineering",
      description:
        "Building AI agents, LLM integrations, RAG-ready workflows and multi-step agent systems.",
      badge: "Main Focus",
      technologies: ["OpenAI", "CrewAI", "AI Agents", "RAG", "Python"],
    },
    {
      icon: "workflow",
      title: "Automation Platforms",
      description:
        "Creating intelligent automations with n8n, APIs, chatbots and operational workflows.",
      badge: "Main Focus",
      technologies: ["n8n", "Webhooks", "REST APIs", "Chatbots", "FastAPI"],
    },
    {
      icon: "cloud",
      title: "Cloud Infrastructure",
      description:
        "Deploying reliable systems using AWS, Docker, Kubernetes, Terraform and CI/CD pipelines.",
      badge: "Currently Building",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      icon: "terminal",
      title: "Backend Systems",
      description:
        "Designing APIs, integrations, databases and backend services for automation-heavy products.",
      badge: "Currently Building",
      technologies: ["Python", "FastAPI", "Java", "Spring Boot", "PostgreSQL"],
    },
    {
      icon: "layers",
      title: "Platform Engineering",
      description:
        "Connecting developer experience, deployment automation and infrastructure practices for scalable delivery.",
      badge: "Currently Building",
      technologies: ["CI/CD", "Linux", "Observability", "Containers", "DevOps"],
    },
  ],
} as const satisfies WhatIBuildData;
