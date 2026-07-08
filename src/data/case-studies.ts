import type { CaseStudyData } from "@/types";

export const caseStudiesData = {
  eyebrow: "Featured Case Studies",
  title: "AI engineering cases, automation systems and cloud delivery.",
  description:
    "Projetos apresentados como problemas reais, solucoes tecnicas e decisoes de engenharia, conectando agentes de IA, automacao, backend e infraestrutura cloud.",
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
      slug: "ana-ai-customer-support-agent",
      title: "Ana — AI Customer Support Agent",
      category: "Production AI Agent",
      status: "in-progress",
      year: "2026",
      duration: "Production case",
      problem:
        "Support teams need to answer customers faster without losing context, quality or control over sensitive operational workflows.",
      objective:
        "Build an AI customer support agent capable of understanding requests, orchestrating workflows and preparing reliable handoff when human review is needed.",
      solution:
        "Designed an AI agent workflow connected to messaging, automation and API integrations, with clear boundaries for intent detection, tool execution and human escalation.",
      architecture: ["AI Agent", "LLM", "n8n", "API Integrations", "Human Handoff"],
      flow: ["Customer message", "Intent analysis", "Context lookup", "Workflow execution", "Response or handoff"],
      technologies: ["OpenAI", "n8n", "Webhooks", "APIs", "Prompt Engineering"],
      engineeringDecisions: [
        {
          question: "Why keep human handoff in the architecture?",
          decision: "Use the agent to automate repetitive support, not to remove operational control.",
          rationale:
            "Customer support automation needs reliability, escalation paths and clear safety boundaries.",
        },
        {
          question: "Why separate intent detection from workflow execution?",
          decision: "Keep AI reasoning and operational actions in different steps.",
          rationale:
            "This makes the automation easier to monitor, debug and improve without coupling every action to one prompt.",
        },
      ],
      screenshots: [
        {
          title: "AI support workflow",
          src: "/case-studies/ana-ai-customer-support-agent/workflow-overview.png",
          alt: "AI customer support agent workflow with intent analysis, automation and handoff",
          type: "diagram",
        },
      ],
      metrics: [
        {
          label: "Operational focus",
          value: "Support automation",
          description: "Designed to reduce repetitive support work while preserving human control.",
        },
      ],
      challenges: [
        "Designing predictable AI behavior for customer support scenarios.",
        "Avoiding exposure of sensitive customer or company data.",
        "Creating fallback paths when confidence or context is insufficient.",
      ],
      lessonsLearned: [
        "AI agents for support need safety boundaries, context control and escalation paths.",
        "Automation becomes more reliable when each workflow step has a clear responsibility.",
      ],
      futureImprovements: [
        "Add conversation evaluation metrics.",
        "Add observability for agent decisions and workflow execution.",
        "Create a sanitized public case page with architecture diagrams.",
      ],
      links: {
        github: {
          label: "View GitHub",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open Paulo Ramos GitHub profile",
          icon: "github",
          variant: "ghost",
        },
      },
      featured: true,
    },
    {
      slug: "crewai-multi-agent-pipeline",
      title: "CrewAI Multi-Agent Pipeline",
      category: "AI Engineering",
      status: "in-progress",
      year: "2026",
      duration: "Research build",
      problem:
        "Complex tasks often require multiple reasoning steps, but a single prompt becomes hard to control, evaluate and evolve.",
      objective:
        "Design a multi-agent pipeline where each agent has a clear role, responsibility and output boundary.",
      solution:
        "Structured a CrewAI-based workflow to coordinate specialized agents for planning, execution, review and documentation.",
      architecture: ["CrewAI", "Agent Roles", "Task Orchestration", "Review Step"],
      flow: ["Input task", "Planner agent", "Executor agent", "Reviewer agent", "Structured output"],
      technologies: ["Python", "CrewAI", "LLMs", "Prompt Engineering", "Automation"],
      engineeringDecisions: [
        {
          question: "Why use multiple agents instead of one large prompt?",
          decision: "Split reasoning responsibilities across specialized agents.",
          rationale:
            "Smaller roles make the workflow easier to debug, evaluate and improve.",
        },
        {
          question: "Why add a review agent?",
          decision: "Add a validation step before accepting the final output.",
          rationale:
            "AI workflows need quality gates, especially when outputs are used for engineering or operations.",
        },
      ],
      screenshots: [
        {
          title: "Multi-agent workflow",
          src: "/case-studies/crewai-multi-agent-pipeline/agent-workflow.png",
          alt: "CrewAI multi-agent pipeline with planning, execution and review agents",
          type: "diagram",
        },
      ],
      metrics: [
        {
          label: "Workflow quality",
          value: "Role-based",
          description: "Each agent has a specific responsibility and output boundary.",
        },
      ],
      challenges: [
        "Avoiding prompt coupling between agents.",
        "Defining outputs that are easy to validate.",
      ],
      lessonsLearned: [
        "Multi-agent systems need orchestration discipline, not just better prompts.",
        "Review steps make AI workflows more useful for engineering tasks.",
      ],
      futureImprovements: [
        "Add memory and task history.",
        "Add evaluation metrics for agent outputs.",
        "Connect the pipeline to real automation tasks.",
      ],
      links: {
        github: {
          label: "View GitHub",
          href: "https://github.com/DavidDevd",
          target: "_blank",
          ariaLabel: "Open Paulo Ramos GitHub profile",
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
