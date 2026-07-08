import type { CaseStudyData, Locale } from "@/types";

const ptCases = [
  {
    slug: "ana-ai-customer-support-agent",
    title: "Ana - Agente de IA para Atendimento",
    category: "Agente de IA em Producao",
    status: "in-progress",
    year: "2026",
    duration: "Case em producao",
    problem:
      "Equipes de atendimento precisam responder clientes com mais velocidade sem perder contexto, qualidade ou controle sobre fluxos operacionais sensiveis.",
    objective:
      "Construir um agente de atendimento com IA capaz de entender solicitacoes, orquestrar workflows e preparar transferencia segura para revisao humana quando necessario.",
    solution:
      "Desenhei um workflow de agente de IA conectado a mensageria, automacao e APIs, com limites claros para deteccao de intencao, execucao de ferramentas e escalonamento humano.",
    architecture: ["Agente de IA", "LLM", "n8n", "Integracoes via API", "Handoff Humano"],
    flow: ["Mensagem do cliente", "Analise de intencao", "Busca de contexto", "Execucao do workflow", "Resposta ou handoff"],
    technologies: ["OpenAI", "n8n", "Webhooks", "APIs", "Prompt Engineering"],
    engineeringDecisions: [
      {
        question: "Por que manter handoff humano na arquitetura?",
        decision: "Usar o agente para automatizar atendimento repetitivo sem remover o controle operacional.",
        rationale:
          "Automacao de atendimento exige confiabilidade, rotas de escalonamento e limites claros de seguranca.",
      },
      {
        question: "Por que separar deteccao de intencao da execucao?",
        decision: "Manter raciocinio de IA e acoes operacionais em etapas diferentes.",
        rationale:
          "Isso facilita monitoramento, depuracao e evolucao sem acoplar toda acao a um unico prompt.",
      },
    ],
    screenshots: [
      {
        title: "Workflow de atendimento com IA",
        src: "/case-studies/ana-ai-customer-support-agent/workflow-overview.png",
        alt: "Workflow do agente de IA com analise de intencao, automacao e handoff",
        type: "diagram",
      },
    ],
    metrics: [
      {
        label: "Foco operacional",
        value: "Automacao de suporte",
        description: "Projetado para reduzir trabalho repetitivo preservando controle humano.",
      },
    ],
    challenges: [
      "Projetar comportamento previsivel de IA em cenarios de atendimento.",
      "Evitar exposicao de dados sensiveis de clientes ou da empresa.",
      "Criar fallback quando confianca ou contexto forem insuficientes.",
    ],
    lessonsLearned: [
      "Agentes de IA para suporte precisam de limites, controle de contexto e escalonamento.",
      "A automacao fica mais confiavel quando cada etapa tem responsabilidade clara.",
    ],
    futureImprovements: [
      "Adicionar metricas de avaliacao de conversas.",
      "Adicionar observabilidade para decisoes do agente e execucao do workflow.",
      "Criar case publico sanitizado com diagramas de arquitetura.",
    ],
    links: {
      github: {
        label: "Ver GitHub",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Abrir perfil de Paulo Ramos no GitHub",
        icon: "github",
        variant: "ghost",
      },
    },
    featured: true,
  },
  {
    slug: "crewai-multi-agent-pipeline",
    title: "Pipeline Multiagente com CrewAI",
    category: "Engenharia de IA",
    status: "in-progress",
    year: "2026",
    duration: "Projeto de pesquisa",
    problem:
      "Tarefas complexas exigem varias etapas de raciocinio, mas um unico prompt fica dificil de controlar, avaliar e evoluir.",
    objective:
      "Desenhar um pipeline multiagente em que cada agente tenha papel, responsabilidade e fronteira de saida bem definidos.",
    solution:
      "Estruturei um workflow com CrewAI para coordenar agentes especializados em planejamento, execucao, revisao e documentacao.",
    architecture: ["CrewAI", "Papeis de Agente", "Orquestracao", "Etapa de Revisao"],
    flow: ["Tarefa de entrada", "Agente planejador", "Agente executor", "Agente revisor", "Saida estruturada"],
    technologies: ["Python", "CrewAI", "LLMs", "Prompt Engineering", "Automacao"],
    engineeringDecisions: [
      {
        question: "Por que usar multiplos agentes em vez de um prompt grande?",
        decision: "Separar responsabilidades de raciocinio entre agentes especializados.",
        rationale:
          "Papeis menores tornam o workflow mais facil de depurar, avaliar e melhorar.",
      },
      {
        question: "Por que adicionar um agente revisor?",
        decision: "Adicionar um gate de validacao antes de aceitar a saida final.",
        rationale:
          "Workflows de IA precisam de controle de qualidade, especialmente em tarefas de engenharia.",
      },
    ],
    screenshots: [
      {
        title: "Workflow multiagente",
        src: "/case-studies/crewai-multi-agent-pipeline/agent-workflow.png",
        alt: "Pipeline multiagente com planejamento, execucao e revisao",
        type: "diagram",
      },
    ],
    metrics: [
      {
        label: "Qualidade do workflow",
        value: "Baseado em papeis",
        description: "Cada agente possui responsabilidade e fronteira de saida especificas.",
      },
    ],
    challenges: ["Evitar acoplamento de prompts entre agentes.", "Definir saidas faceis de validar."],
    lessonsLearned: [
      "Sistemas multiagentes precisam de disciplina de orquestracao, nao apenas prompts melhores.",
      "Etapas de revisao tornam workflows de IA mais uteis para engenharia.",
    ],
    futureImprovements: [
      "Adicionar memoria e historico de tarefas.",
      "Adicionar metricas de avaliacao das saidas dos agentes.",
      "Conectar o pipeline a tarefas reais de automacao.",
    ],
    links: {
      github: {
        label: "Ver GitHub",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Abrir perfil de Paulo Ramos no GitHub",
        icon: "github",
        variant: "ghost",
      },
    },
    featured: true,
  },
  {
    slug: "ci-cd-platform",
    title: "Plataforma CI/CD",
    category: "Developer Experience",
    status: "in-progress",
    year: "2026",
    duration: "2 semanas",
    problem: "Entregas manuais tornam releases mais lentos, menos confiaveis e dificeis de reproduzir.",
    objective:
      "Criar um fluxo de entrega que valide codigo, construa containers e prepare etapas de deploy de forma consistente.",
    solution:
      "Construi um workflow CI/CD focado em validacao automatizada, build de containers e etapas de deploy reproduziveis.",
    architecture: ["GitHub Actions", "Testes", "Docker Build", "Pipeline de Deploy"],
    flow: ["Commit", "Lint e typecheck", "Build da imagem", "Quality gates", "Preparacao do deploy"],
    technologies: ["GitHub Actions", "Docker", "Linux", "YAML"],
    engineeringDecisions: [
      {
        question: "Por que adicionar gates de validacao?",
        decision: "Executar checks antes de qualquer etapa de deploy.",
        rationale: "Feedback rapido protege o caminho de entrega e aproxima falhas da mudanca de codigo.",
      },
      {
        question: "Por que separar estagios do pipeline?",
        decision: "Manter validacao, build e deploy como etapas independentes.",
        rationale: "Estagios independentes facilitam troubleshooting e evolucao do projeto.",
      },
    ],
    screenshots: [
      {
        title: "Execucao do pipeline",
        src: "/case-studies/ci-cd-platform/pipeline-run.gif",
        alt: "Pipeline CI/CD executando validacao e build",
        type: "gif",
      },
    ],
    metrics: [
      {
        label: "Processo de release",
        value: "Automatizado",
        description: "Etapas manuais foram movidas para um workflow reproduzivel.",
      },
    ],
    challenges: ["Criar gates uteis sem deixar o pipeline lento.", "Manter a configuracao legivel."],
    lessonsLearned: [
      "Um pipeline confiavel aumenta a seguranca antes de mudancas em producao.",
      "Bom CI/CD comeca com fronteiras claras entre validacao e build.",
    ],
    futureImprovements: ["Adicionar deploy por ambiente.", "Adicionar artefatos de preview."],
    links: {
      github: {
        label: "Ver repositorio",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Abrir repositorio da Plataforma CI/CD no GitHub",
        icon: "github",
        variant: "ghost",
      },
    },
    featured: true,
  },
  {
    slug: "fastapi-kubernetes",
    title: "FastAPI com Kubernetes",
    category: "Backend & Kubernetes",
    status: "in-progress",
    year: "2026",
    duration: "4 semanas",
    problem: "APIs precisam de deploy, configuracao e escala previsiveis ao sair do ambiente local.",
    objective:
      "Preparar uma API FastAPI para rodar em ambiente Kubernetes com praticas orientadas a producao.",
    solution:
      "Implementei um servico FastAPI containerizado e preparado para Kubernetes, com configuracao e escala explicitas.",
    architecture: ["FastAPI", "Docker", "Kubernetes", "PostgreSQL", "HPA"],
    flow: ["Requisicao API", "Servico FastAPI", "Persistencia PostgreSQL", "Container runtime", "Escala Kubernetes"],
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "PostgreSQL"],
    engineeringDecisions: [
      {
        question: "Por que externalizar configuracao?",
        decision: "Usar primitivas do Kubernetes para configuracao em runtime.",
        rationale: "Configuracao fora da aplicacao torna deploys mais seguros entre ambientes.",
      },
      {
        question: "Por que containerizar antes do Kubernetes?",
        decision: "Garantir execucao consistente da API antes da orquestracao.",
        rationale: "Uma imagem confiavel e a base para deploy previsivel em cluster.",
      },
    ],
    screenshots: [
      {
        title: "Fluxo de deploy Kubernetes",
        src: "/case-studies/fastapi-kubernetes/deployment-flow.png",
        alt: "Fluxo de deploy de servico FastAPI no Kubernetes",
        type: "diagram",
      },
    ],
    metrics: [
      {
        label: "Deploy",
        value: "Reproduzivel",
        description: "A API pode ser implantada a partir de imagem e manifestos.",
      },
    ],
    challenges: ["Equilibrar simplicidade local com prontidao para cluster.", "Evitar exposicao de secrets."],
    lessonsLearned: [
      "Production readiness depende de configuracao, health checks e disciplina de deploy.",
      "Containers tornam a aplicacao portavel; Kubernetes torna a operacao explicita.",
    ],
    futureImprovements: ["Adicionar readiness probes.", "Adicionar logs e metricas."],
    links: {
      github: {
        label: "Ver repositorio",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Abrir repositorio FastAPI Kubernetes no GitHub",
        icon: "github",
        variant: "ghost",
      },
    },
    featured: true,
  },
  {
    slug: "docker-compose-api",
    title: "API com Docker Compose",
    category: "Infraestrutura Backend",
    status: "in-progress",
    year: "2026",
    duration: "1 semana",
    problem: "Ambientes backend locais frequentemente ficam dificeis de reproduzir entre maquinas.",
    objective: "Criar um ambiente local reproduzivel para API, banco de dados e configuracao de servicos.",
    solution:
      "Criei uma configuracao Docker Compose para executar API, banco e servicos de apoio com fluxo previsivel.",
    architecture: ["Servico API", "Docker Compose", "PostgreSQL", "Variaveis de Ambiente"],
    flow: ["Clonar repositorio", "Configurar ambiente", "Subir servicos", "Rodar API", "Validar banco"],
    technologies: ["Docker", "Docker Compose", "PostgreSQL", "API", "Linux"],
    engineeringDecisions: [
      {
        question: "Por que Docker Compose?",
        decision: "Usar uma camada simples de orquestracao para servicos locais.",
        rationale: "Compose traz repetibilidade sem introduzir complexidade de Kubernetes cedo demais.",
      },
      {
        question: "Por que variaveis de ambiente?",
        decision: "Manter configuracao fora do codigo da aplicacao.",
        rationale: "Configuracao externa melhora portabilidade e evita ajustes locais hardcoded.",
      },
    ],
    screenshots: [
      {
        title: "Servicos locais em execucao",
        src: "/case-studies/docker-compose-api/local-services.png",
        alt: "Servicos Docker Compose executando API e banco localmente",
        type: "screenshot",
      },
    ],
    metrics: [
      {
        label: "Setup",
        value: "Um comando",
        description: "A stack local pode ser iniciada com um unico comando Compose.",
      },
    ],
    challenges: ["Manter configuracao simples.", "Evitar suposicoes apenas locais no runtime."],
    lessonsLearned: [
      "Ambientes locais reproduziveis reduzem atrito de setup.",
      "Compose e uma ponte pratica entre containers e orquestracao de producao.",
    ],
    futureImprovements: ["Adicionar dados de seed.", "Adicionar guia de troubleshooting."],
    links: {
      github: {
        label: "Ver repositorio",
        href: "https://github.com/DavidDevd",
        target: "_blank",
        ariaLabel: "Abrir repositorio Docker Compose API no GitHub",
        icon: "github",
        variant: "ghost",
      },
    },
    featured: false,
  },
] as const satisfies CaseStudyData["cases"];

const enCases = [
  {
    slug: "ana-ai-customer-support-agent",
    title: "Ana - AI Customer Support Agent",
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
        rationale: "Customer support automation needs reliability, escalation paths and clear safety boundaries.",
      },
      {
        question: "Why separate intent detection from workflow execution?",
        decision: "Keep AI reasoning and operational actions in different steps.",
        rationale: "This makes the automation easier to monitor, debug and improve without coupling every action to one prompt.",
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
    problem: "Complex tasks often require multiple reasoning steps, but a single prompt becomes hard to control, evaluate and evolve.",
    objective: "Design a multi-agent pipeline where each agent has a clear role, responsibility and output boundary.",
    solution: "Structured a CrewAI-based workflow to coordinate specialized agents for planning, execution, review and documentation.",
    architecture: ["CrewAI", "Agent Roles", "Task Orchestration", "Review Step"],
    flow: ["Input task", "Planner agent", "Executor agent", "Reviewer agent", "Structured output"],
    technologies: ["Python", "CrewAI", "LLMs", "Prompt Engineering", "Automation"],
    engineeringDecisions: [
      {
        question: "Why use multiple agents instead of one large prompt?",
        decision: "Split reasoning responsibilities across specialized agents.",
        rationale: "Smaller roles make the workflow easier to debug, evaluate and improve.",
      },
      {
        question: "Why add a review agent?",
        decision: "Add a validation step before accepting the final output.",
        rationale: "AI workflows need quality gates, especially when outputs are used for engineering or operations.",
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
    challenges: ["Avoiding prompt coupling between agents.", "Defining outputs that are easy to validate."],
    lessonsLearned: [
      "Multi-agent systems need orchestration discipline, not just better prompts.",
      "Review steps make AI workflows more useful for engineering tasks.",
    ],
    futureImprovements: ["Add memory and task history.", "Add evaluation metrics for agent outputs.", "Connect the pipeline to real automation tasks."],
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
    problem: "Manual delivery makes releases slower, less reliable and harder to reproduce.",
    objective: "Create a delivery workflow that validates code, builds containers and prepares deployment steps consistently.",
    solution: "Built a CI/CD workflow focused on automated validation, container builds and repeatable deployment steps.",
    architecture: ["GitHub Actions", "Tests", "Docker Build", "Deployment Pipeline"],
    flow: ["Commit", "Lint and typecheck", "Build image", "Run quality gates", "Prepare deployment"],
    technologies: ["GitHub Actions", "Docker", "Linux", "YAML"],
    engineeringDecisions: [
      {
        question: "Why add validation gates?",
        decision: "Run checks before any deployment step.",
        rationale: "Fast feedback protects the delivery path and keeps failures close to the code change.",
      },
      {
        question: "Why split pipeline stages?",
        decision: "Keep validation, build and deployment preparation independent.",
        rationale: "Independent stages are easier to troubleshoot and evolve as the project grows.",
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
    challenges: ["Designing useful gates without making the pipeline slow.", "Keeping pipeline configuration readable."],
    lessonsLearned: [
      "A reliable pipeline increases confidence before production changes.",
      "Good CI/CD design starts with clear build and validation boundaries.",
    ],
    futureImprovements: ["Add environment-based deployments.", "Add deployment preview artifacts."],
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
    problem: "APIs need predictable deployment, configuration and scaling when moving beyond local development.",
    objective: "Prepare a FastAPI backend to run in a containerized Kubernetes environment with production-oriented practices.",
    solution: "Implemented a containerized FastAPI service prepared for Kubernetes deployment with explicit configuration and scaling practices.",
    architecture: ["FastAPI", "Docker", "Kubernetes", "PostgreSQL", "HPA"],
    flow: ["API request", "FastAPI service", "PostgreSQL persistence", "Container runtime", "Kubernetes scaling"],
    technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "PostgreSQL"],
    engineeringDecisions: [
      {
        question: "Why externalize configuration?",
        decision: "Use Kubernetes primitives for runtime configuration.",
        rationale: "Configuration outside the application makes deployments safer across environments.",
      },
      {
        question: "Why containerize before Kubernetes?",
        decision: "Make the API run consistently before orchestration.",
        rationale: "A reliable container image is the baseline for predictable cluster deployment.",
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
    challenges: ["Balancing local development simplicity with cluster readiness.", "Making configuration explicit without exposing secrets."],
    lessonsLearned: [
      "Production readiness depends on configuration, health checks and deployment discipline.",
      "Containers make the application portable, but Kubernetes makes operations explicit.",
    ],
    futureImprovements: ["Add readiness probes.", "Add logs and metrics."],
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
    problem: "Local backend environments often become hard to reproduce across machines and contributors.",
    objective: "Create a reproducible local environment for API development with database and service configuration.",
    solution: "Created a Docker Compose setup to run the API, database and supporting services with a predictable developer workflow.",
    architecture: ["API Service", "Docker Compose", "PostgreSQL", "Environment Variables"],
    flow: ["Clone repository", "Configure environment", "Start services", "Run API", "Validate database"],
    technologies: ["Docker", "Docker Compose", "PostgreSQL", "API", "Linux"],
    engineeringDecisions: [
      {
        question: "Why Docker Compose?",
        decision: "Use a simple orchestration layer for local services.",
        rationale: "Compose gives repeatability without introducing Kubernetes complexity too early.",
      },
      {
        question: "Why environment variables?",
        decision: "Keep configuration outside application code.",
        rationale: "External configuration improves portability and avoids hardcoded local settings.",
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
    challenges: ["Keeping service configuration simple and understandable.", "Avoiding local-only assumptions in the API runtime."],
    lessonsLearned: [
      "Reproducible local environments reduce setup friction.",
      "Compose files are a practical bridge between containers and production orchestration.",
    ],
    futureImprovements: ["Add seed data for local development.", "Add a development troubleshooting guide."],
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
] as const satisfies CaseStudyData["cases"];

export const caseStudiesDataByLocale = {
  "pt-BR": {
    eyebrow: "Cases em destaque",
    title: "Cases de engenharia de IA, automacao e cloud.",
    description:
      "Projetos apresentados como problemas reais, solucoes tecnicas e decisoes de engenharia, conectando agentes de IA, automacao, backend e infraestrutura cloud.",
    page: {
      backLabel: "Voltar para projetos",
      overview: "Visao geral",
      problem: "Problema",
      objective: "Objetivo",
      solution: "Solucao",
      architecture: "Arquitetura",
      architectureDiagram: "Diagrama de arquitetura",
      technologyStack: "Stack tecnica",
      engineeringDecisions: "Decisoes de engenharia",
      challenges: "Desafios",
      lessonsLearned: "Licoes aprendidas",
      futureImprovements: "Melhorias futuras",
      metrics: "Metricas",
      github: "GitHub",
      demo: "Demo",
      previousCase: "Case anterior",
      nextCase: "Proximo case",
      unavailableDemo: "A demo sera adicionada quando o projeto tiver deploy publico.",
    },
    labels: {
      featured: "Destaque",
      problem: "Problema",
      solution: "Solucao",
      architecture: "Arquitetura",
      technologies: "Tecnologias",
      engineeringDecisions: "Decisoes de engenharia",
      learnings: "Licoes aprendidas",
    },
    cases: ptCases,
  },
  "en-US": {
    eyebrow: "Featured Case Studies",
    title: "AI engineering cases, automation systems and cloud delivery.",
    description:
      "Projects presented as real problems, technical solutions and engineering decisions, connecting AI agents, automation, backend systems and cloud infrastructure.",
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
    cases: enCases,
  },
} as const satisfies Record<Locale, CaseStudyData>;

export const caseStudiesData = caseStudiesDataByLocale["pt-BR"];

export function getCaseStudyBySlug(slug: string, locale: Locale = "pt-BR") {
  return caseStudiesDataByLocale[locale].cases.find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudyNavigation(slug: string, locale: Locale = "pt-BR") {
  const cases = caseStudiesDataByLocale[locale].cases;
  const currentIndex = cases.findIndex((caseStudy) => caseStudy.slug === slug);

  if (currentIndex < 0) {
    return {
      previous: undefined,
      next: undefined,
    };
  }

  return {
    previous: currentIndex > 0 ? cases[currentIndex - 1] : undefined,
    next: currentIndex < cases.length - 1 ? cases[currentIndex + 1] : undefined,
  };
}
