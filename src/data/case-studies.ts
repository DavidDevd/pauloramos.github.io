import type { CaseStudyData } from "@/types";

export const caseStudiesData = {
  eyebrow: "Featured Case Studies",
  title: "Engineering stories behind real projects.",
  description:
    "A curated view of projects presented as problems, solutions and technical decisions, showing how each build connects software engineering, automation and cloud infrastructure.",
  page: {
    backLabel: "Back to projects",
    overview: "Overview",
    problem: "Problem",
    objective: "Objective",
    solution: "Solution",
    architecture: "Architecture",
    architectureDiagram: "Architecture Diagram",
    technologyStack: "Technology Stack",
    engineeringDecisions: "Engineering Decisions",
    challenges: "Challenges",
    lessonsLearned: "Lessons Learned",
    futureImprovements: "Future Improvements",
    metrics: "Metrics",
    github: "GitHub",
    demo: "Live Demo",
    previousCase: "Previous Case",
    nextCase: "Next Case",
    unavailableDemo: "Demo will be added when the project has a public deployment.",
  },
  labels: {
    featured: "Featured",
    problem: "Problem",
    solution: "Solution",
    architecture: "Architecture",
    technologies: "Technologies",
    engineeringDecisions: "Engineering Decisions",
    learnings: "Lessons Learned",
  },
  cases: [
    {
      slug: "ai-automation-platform",
      title: "AI Automation Platform",
      category: "AI Automation",
      status: "in-progress",
      year: "2026",
      duration: "4 weeks",
      problem:
        "Teams lose time moving information manually between chat, APIs and operational tools.",
      objective:
        "Build an automation foundation that connects AI agents, workflow orchestration and external APIs with clear operational boundaries.",
      solution:
        "Designed an automation platform that connects AI agents, API integrations and workflow orchestration to reduce repetitive work.",
      architecture: ["AI Agent", "FastAPI", "n8n", "PostgreSQL", "External APIs"],
      flow: ["User request", "AI intent analysis", "API orchestration", "Workflow execution", "Human handoff"],
      technologies: ["Python", "FastAPI", "OpenAI", "n8n", "PostgreSQL"],
      engineeringDecisions: [
        {
          question: "Why separate orchestration from API endpoints?",
          decision: "Keep workflow execution outside the request handler.",
          rationale:
            "This makes the API easier to test and allows automation flows to evolve independently.",
        },
        {
          question: "Why use reusable workflow units?",
          decision: "Structure prompts and integrations as isolated steps.",
          rationale:
            "Small workflow boundaries reduce coupling between AI behavior and business integrations.",
        },
      ],
      screenshots: [
        {
          title: "Workflow overview",
          src: "/case-studies/ai-automation-platform/workflow-overview.png",
          alt: "AI automation workflow connecting agent, API and external tools",
          type: "diagram",
        },
      ],
      metrics: [
        {
          label: "Manual steps",
          value: "Planned",
          description: "Measure reduction of repetitive steps after workflow validation.",
        },
      ],
      challenges: [
        "Designing predictable AI behavior for operational workflows.",
        "Preparing clear fallback points for human review.",
      ],
      lessonsLearned: [
        "AI automation needs observability, fallbacks and clear human handoff points.",
        "Small workflow boundaries make integrations easier to test and evolve.",
      ],
      futureImprovements: [
        "Add workflow execution logs.",
        "Create an admin view for monitoring automation runs.",
      ],
      links: {
        github: {
          label: "View repository",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open AI Automation Platform repository on GitHub",
          icon: "github",
          variant: "ghost",
        },
      },
      featured: true,
    },
    {
      slug: "terraform-multi-environment",
      title: "Terraform Multi Environment",
      category: "Cloud Infrastructure",
      status: "in-progress",
      year: "2026",
      duration: "3 weeks",
      problem:
        "Cloud environments become inconsistent when infrastructure is configured manually.",
      objective:
        "Create a repeatable infrastructure model that separates environments and keeps cloud resources versioned.",
      solution:
        "Created a Terraform structure for reusable modules, environment separation and repeatable infrastructure provisioning.",
      architecture: ["Terraform Modules", "Dev Environment", "Prod Environment", "AWS"],
      flow: ["Plan infrastructure", "Review changes", "Apply environment config", "Validate resources"],
      technologies: ["Terraform", "AWS", "IaC", "GitHub Actions"],
      engineeringDecisions: [
        {
          question: "Why use modules?",
          decision: "Extract reusable infrastructure blocks.",
          rationale:
            "Modules reduce duplication and make environment differences explicit through variables.",
        },
        {
          question: "Why separate environments?",
          decision: "Keep dev and production configuration isolated.",
          rationale:
            "Environment boundaries reduce drift and make changes easier to review before production.",
        },
      ],
      screenshots: [
        {
          title: "Infrastructure module map",
          src: "/case-studies/terraform-multi-environment/module-map.png",
          alt: "Terraform module map for multiple AWS environments",
          type: "diagram",
        },
      ],
      metrics: [
        {
          label: "Provisioning",
          value: "Repeatable",
          description: "Infrastructure can be recreated from versioned configuration.",
        },
      ],
      challenges: [
        "Designing modules without over-engineering the first version.",
        "Keeping environment variables clear and auditable.",
      ],
      lessonsLearned: [
        "Infrastructure code benefits from the same review discipline as application code.",
        "Clear module boundaries reduce configuration drift.",
      ],
      futureImprovements: [
        "Add remote state configuration.",
        "Add policy checks before apply.",
      ],
      links: {
        github: {
          label: "View repository",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open Terraform Multi Environment repository on GitHub",
          icon: "github",
          variant: "ghost",
        },
      },
      featured: true,
    },
    {
      slug: "ci-cd-platform",
      title: "CI/CD Platform",
      category: "Developer Experience",
      status: "in-progress",
      year: "2026",
      duration: "2 weeks",
      problem:
        "Manual delivery makes releases slower, less reliable and harder to reproduce.",
      objective:
        "Create a delivery workflow that validates code, builds containers and prepares deployment steps consistently.",
      solution:
        "Built a CI/CD workflow focused on automated validation, container builds and repeatable deployment steps.",
      architecture: ["GitHub Actions", "Tests", "Docker Build", "Deployment Pipeline"],
      flow: ["Commit", "Lint and typecheck", "Build image", "Run pipeline gates", "Prepare deployment"],
      technologies: ["GitHub Actions", "Docker", "Linux", "YAML"],
      engineeringDecisions: [
        {
          question: "Why add validation gates?",
          decision: "Run checks before any deployment step.",
          rationale:
            "Fast feedback protects the deployment path and keeps failures closer to the code change.",
        },
        {
          question: "Why split pipeline stages?",
          decision: "Keep validation, build and deployment preparation independent.",
          rationale:
            "Independent stages are easier to troubleshoot and evolve as the project grows.",
        },
      ],
      screenshots: [
        {
          title: "Pipeline execution",
          src: "/case-studies/ci-cd-platform/pipeline-run.gif",
          alt: "CI/CD pipeline running validation and build steps",
          type: "gif",
        },
      ],
      metrics: [
        {
          label: "Release process",
          value: "Automated",
          description: "Manual release steps are moved into a repeatable workflow.",
        },
      ],
      challenges: [
        "Designing useful gates without making the pipeline slow.",
        "Keeping pipeline configuration readable for future changes.",
      ],
      lessonsLearned: [
        "A reliable pipeline increases confidence before production changes.",
        "Good CI/CD design starts with clear build and validation boundaries.",
      ],
      futureImprovements: [
        "Add environment-based deployments.",
        "Add deployment preview artifacts.",
      ],
      links: {
        github: {
          label: "View repository",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open CI/CD Platform repository on GitHub",
          icon: "github",
          variant: "ghost",
        },
      },
      featured: true,
    },
    {
      slug: "fastapi-kubernetes",
      title: "FastAPI Kubernetes",
      category: "Backend & Kubernetes",
      status: "in-progress",
      year: "2026",
      duration: "4 weeks",
      problem:
        "APIs need predictable deployment, configuration and scaling when moving beyond local development.",
      objective:
        "Prepare a FastAPI backend to run in a containerized Kubernetes environment with production-oriented practices.",
      solution:
        "Implemented a containerized FastAPI service prepared for Kubernetes deployment with configuration and scaling practices.",
      architecture: ["FastAPI", "Docker", "Kubernetes", "PostgreSQL", "HPA"],
      flow: ["API request", "FastAPI service", "PostgreSQL persistence", "Container runtime", "Kubernetes scaling"],
      technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "PostgreSQL"],
      engineeringDecisions: [
        {
          question: "Why externalize configuration?",
          decision: "Use Kubernetes primitives for runtime configuration.",
          rationale:
            "Configuration outside the application makes deployments safer across environments.",
        },
        {
          question: "Why containerize before Kubernetes?",
          decision: "Make the API run consistently before orchestration.",
          rationale:
            "A reliable container image is the baseline for predictable cluster deployment.",
        },
      ],
      screenshots: [
        {
          title: "Kubernetes deployment flow",
          src: "/case-studies/fastapi-kubernetes/deployment-flow.png",
          alt: "FastAPI service deployment flow on Kubernetes",
          type: "diagram",
        },
      ],
      metrics: [
        {
          label: "Deployment",
          value: "Reproducible",
          description: "The API can be deployed from container and manifest definitions.",
        },
      ],
      challenges: [
        "Balancing local development simplicity with cluster readiness.",
        "Making configuration explicit without exposing secrets.",
      ],
      lessonsLearned: [
        "Production readiness depends on configuration, health checks and deployment discipline.",
        "Containers make the application portable, but Kubernetes makes operations explicit.",
      ],
      futureImprovements: [
        "Add health checks and readiness probes.",
        "Add observability with logs and metrics.",
      ],
      links: {
        github: {
          label: "View repository",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open FastAPI Kubernetes repository on GitHub",
          icon: "github",
          variant: "ghost",
        },
      },
      featured: true,
    },
    {
      slug: "docker-compose-api",
      title: "Docker Compose API",
      category: "Backend Infrastructure",
      status: "in-progress",
      year: "2026",
      duration: "1 week",
      problem:
        "Local backend environments often become hard to reproduce across machines and contributors.",
      objective:
        "Create a reproducible local environment for API development with database and service configuration.",
      solution:
        "Created a Docker Compose setup to run API, database and supporting services with a predictable developer workflow.",
      architecture: ["API Service", "Docker Compose", "PostgreSQL", "Environment Variables"],
      flow: ["Clone repository", "Configure environment", "Start services", "Run API", "Validate database"],
      technologies: ["Docker", "Docker Compose", "PostgreSQL", "API", "Linux"],
      engineeringDecisions: [
        {
          question: "Why Docker Compose?",
          decision: "Use a simple orchestration layer for local services.",
          rationale:
            "Compose gives repeatability without introducing Kubernetes complexity too early.",
        },
        {
          question: "Why environment variables?",
          decision: "Keep configuration outside application code.",
          rationale:
            "External configuration improves portability and avoids hardcoded local settings.",
        },
      ],
      screenshots: [
        {
          title: "Local services running",
          src: "/case-studies/docker-compose-api/local-services.png",
          alt: "Docker Compose services running an API and database locally",
          type: "screenshot",
        },
      ],
      metrics: [
        {
          label: "Setup",
          value: "One command",
          description: "The local stack can be started from a single Compose command.",
        },
      ],
      challenges: [
        "Keeping service configuration simple and understandable.",
        "Avoiding local-only assumptions in the API runtime.",
      ],
      lessonsLearned: [
        "Reproducible local environments reduce setup friction.",
        "Compose files are a practical bridge between learning containers and production orchestration.",
      ],
      futureImprovements: [
        "Add seed data for local development.",
        "Add a development troubleshooting guide.",
      ],
      links: {
        github: {
          label: "View repository",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open Docker Compose API repository on GitHub",
          icon: "github",
          variant: "ghost",
        },
      },
      featured: false,
    },
  ],
} as const satisfies CaseStudyData;

export function getCaseStudyBySlug(slug: string) {
  return caseStudiesData.cases.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyNavigation(slug: string) {
  const currentIndex = caseStudiesData.cases.findIndex((caseStudy) => caseStudy.slug === slug);

  if (currentIndex < 0) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  return {
    previous: currentIndex > 0 ? caseStudiesData.cases[currentIndex - 1] : undefined,
    next:
      currentIndex < caseStudiesData.cases.length - 1
        ? caseStudiesData.cases[currentIndex + 1]
        : undefined,
  };
}
