import type { Locale } from "@/types";

export type CaseSlug =
  | "projeto-korp"
  | "aws-multi-environment-iac"
  | "aws-ci-cd-pipeline"
  | "kubernetes-application-stack"
  | "flowstock";

export type StackEvidence = {
  readonly name: string;
  /** Case studies that use the tool, or "experience" for the N2 role. */
  readonly proof: readonly (CaseSlug | "experience")[];
};

export type HomeCopy = {
  readonly rail: {
    readonly status: string;
    readonly contact: string;
  };
  readonly hero: {
    readonly headline: string;
    readonly lede: string;
    readonly primaryCta: string;
    readonly resumeCta: string;
    readonly record: {
      readonly title: string;
      readonly commit: string;
      readonly branch: string;
      readonly builtAt: string;
      readonly run: string;
      readonly published: string;
      readonly checkOnly: string;
      readonly ciNote: string;
      readonly localTitle: string;
      readonly localNote: string;
      readonly gates: readonly string[];
    };
  };
  readonly projects: {
    readonly title: string;
    readonly description: string;
    readonly diagramHint: string;
    readonly read: string;
    readonly repository: string;
    readonly problem: string;
    readonly proves: string;
  };
  readonly principles: {
    readonly title: string;
    readonly description: string;
    readonly proofLabel: string;
    readonly items: readonly {
      readonly title: string;
      readonly text: string;
      readonly proof: CaseSlug;
    }[];
  };
  readonly stack: {
    readonly title: string;
    readonly description: string;
    readonly caption: string;
    readonly toolColumn: string;
    readonly experienceColumn: string;
    readonly used: string;
    readonly groups: readonly {
      readonly name: string;
      readonly items: readonly StackEvidence[];
    }[];
  };
  readonly journey: {
    readonly title: string;
    readonly description: string;
    readonly experienceTitle: string;
    readonly since: string;
    readonly educationTitle: string;
    readonly transparency: string;
  };
  readonly contact: {
    readonly title: string;
    readonly text: string;
    readonly email: string;
    readonly copy: string;
    readonly copied: string;
    readonly copyFailed: string;
    readonly whatsapp: string;
    readonly linkedin: string;
    readonly github: string;
    readonly resume: string;
    readonly resumeFile: string;
  };
  readonly footer: {
    readonly build: string;
    readonly localBuild: string;
    readonly source: string;
  };
};

const stackGroups = (labels: {
  cloud: string;
  containers: string;
  delivery: string;
  observability: string;
  application: string;
  operations: string;
  networks: string;
}): HomeCopy["stack"]["groups"] => [
  {
    name: labels.cloud,
    items: [
      {
        name: "AWS",
        proof: ["aws-multi-environment-iac", "aws-ci-cd-pipeline"],
      },
      { name: "Terraform", proof: ["aws-multi-environment-iac"] },
      { name: "Ansible", proof: ["projeto-korp"] },
    ],
  },
  {
    name: labels.containers,
    items: [
      {
        name: "Docker",
        proof: [
          "projeto-korp",
          "aws-ci-cd-pipeline",
          "kubernetes-application-stack",
          "flowstock",
        ],
      },
      { name: "Docker Compose", proof: ["projeto-korp", "flowstock"] },
      { name: "Kubernetes", proof: ["kubernetes-application-stack"] },
    ],
  },
  {
    name: labels.delivery,
    items: [
      { name: "GitHub Actions", proof: ["aws-ci-cd-pipeline", "flowstock"] },
      { name: "OIDC", proof: ["aws-ci-cd-pipeline"] },
      { name: "Trivy, SBOM", proof: ["flowstock"] },
    ],
  },
  {
    name: labels.observability,
    items: [
      { name: "Prometheus", proof: ["projeto-korp", "flowstock"] },
      { name: "Grafana", proof: ["projeto-korp", "flowstock"] },
      { name: "CloudWatch", proof: ["aws-multi-environment-iac"] },
    ],
  },
  {
    name: labels.application,
    items: [
      {
        name: "Python, FastAPI",
        proof: [
          "aws-ci-cd-pipeline",
          "kubernetes-application-stack",
          "flowstock",
        ],
      },
      { name: "Go", proof: ["projeto-korp"] },
      {
        name: "PostgreSQL",
        proof: ["kubernetes-application-stack", "flowstock"],
      },
    ],
  },
  {
    name: labels.operations,
    items: [
      { name: labels.networks, proof: ["experience"] },
      { name: "Troubleshooting", proof: ["experience"] },
      { name: "NGINX, Caddy", proof: ["projeto-korp", "flowstock"] },
    ],
  },
];

export const homeCopy: Record<Locale, HomeCopy> = {
  "pt-BR": {
    rail: {
      status: "Disponível para novas posições",
      contact: "Contato",
    },
    hero: {
      headline:
        "Transformo código em sistemas reproduzíveis, observáveis e prontos para operar.",
      lede: "Desde 2024 resolvo incidentes reais no suporte N2 da VDSNET. Nos meus projetos construo o outro lado: pipelines, infraestrutura como código e observabilidade. Tudo público e verificável, inclusive os limites.",
      primaryCta: "Ver estudos de caso",
      resumeCta: "Baixar currículo",
      record: {
        title: "Registro de deploy desta página",
        commit: "Commit",
        branch: "Branch",
        builtAt: "Build",
        run: "Execução",
        published: "Publicado no GitHub Pages",
        checkOnly: "Verificação de pull request, não publicado",
        ciNote:
          "Todo deploy deste site passa por estes gates. Se um falhar, nada é publicado.",
        localTitle: "Build local, fora do CI",
        localNote:
          "No site publicado, este registro mostra o commit e a execução do GitHub Actions que geraram a página.",
        gates: [
          "Lint",
          "Typecheck",
          "Formatação",
          "Testes unitários",
          "Build estático",
          "E2E e acessibilidade",
          "Lighthouse",
        ],
      },
    },
    projects: {
      title: "Estudos de caso",
      description:
        "Cinco projetos públicos, cada um com problema, arquitetura, decisões com as alternativas que descartei, trade-offs e runbook. Os limites estão escritos, inclusive bugs que encontrei revisando meu próprio código.",
      diagramHint:
        "Selecione um componente para ver o que ele faz e o arquivo que comprova.",
      read: "Ler estudo de caso",
      repository: "Repositório",
      problem: "Problema",
      proves: "O que prova",
    },
    principles: {
      title: "Como eu trabalho",
      description:
        "Quatro princípios que guiam minhas decisões, cada um ligado ao projeto onde foi aplicado.",
      proofLabel: "Aplicado em",
      items: [
        {
          title: "Verificar faz parte do deploy",
          text: 'Um deploy só termina quando o sistema prova que está saudável e sendo observado. "O container subiu" não é critério de pronto.',
          proof: "projeto-korp",
        },
        {
          title: "Menor privilégio por padrão",
          text: "OIDC no lugar de chaves estáticas, produção sem SSH, IMDSv2 e containers read-only. Acesso é exceção auditável, não conveniência.",
          proof: "aws-multi-environment-iac",
        },
        {
          title: "Produção só depois de provar",
          text: "Cada etapa é um gate: teste antes do build, dev saudável antes de prod. Falhar cedo custa menos que falhar em produção.",
          proof: "aws-ci-cd-pipeline",
        },
        {
          title: "Toda decisão tem um porquê escrito",
          text: "ADRs, trade-offs e runbooks versionados junto com o código, incluindo o que eu faria diferente num ambiente de produção real.",
          proof: "flowstock",
        },
      ],
    },
    stack: {
      title: "Ferramentas e onde as usei",
      description:
        "Sem barras de proficiência. Cada ferramenta aparece marcada nos projetos em que foi usada; o nome do projeto abre o estudo de caso.",
      caption: "Ferramentas por projeto",
      toolColumn: "Ferramenta",
      experienceColumn: "VDSNET",
      used: "usada em",
      groups: stackGroups({
        cloud: "Cloud e IaC",
        containers: "Containers e orquestração",
        delivery: "CI/CD e supply chain",
        observability: "Observabilidade",
        application: "Aplicação",
        operations: "Operação e redes",
        networks: "Redes TCP/IP",
      }),
    },
    journey: {
      title: "Trajetória",
      description:
        "Operar sob pressão ensina o que tutorial nenhum ensina: isolar a causa antes de agir e escalar com evidência.",
      experienceTitle: "Experiência",
      since: "desde",
      educationTitle: "Formação",
      transparency:
        "Transparência: os projetos DevOps deste portfólio são práticos e públicos. Minha experiência profissional atual é em operação N2.",
    },
    contact: {
      title: "Contato",
      text: "Procuro posições de DevOps, Cloud ou Platform Engineering, remoto ou híbrido. Se o seu time valoriza quem documenta decisões e verifica o que entrega, quero conhecer o desafio.",
      email: "E-mail",
      copy: "Copiar",
      copied: "Copiado",
      copyFailed: "Não foi possível copiar",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Currículo",
      resumeFile: "PDF em português",
    },
    footer: {
      build: "Build",
      localBuild: "Build local",
      source: "Código-fonte do site",
    },
  },
  "en-US": {
    rail: {
      status: "Open to new roles",
      contact: "Contact",
    },
    hero: {
      headline:
        "I turn code into systems that are reproducible, observable and ready to operate.",
      lede: "Since 2024 I have handled real incidents in Tier 2 support at VDSNET. In my projects I build the other side: pipelines, infrastructure as code and observability. All public and verifiable, limits included.",
      primaryCta: "View case studies",
      resumeCta: "Download resume",
      record: {
        title: "Deploy record for this page",
        commit: "Commit",
        branch: "Branch",
        builtAt: "Built",
        run: "Run",
        published: "Published to GitHub Pages",
        checkOnly: "Pull request check, not published",
        ciNote:
          "Every deploy of this site goes through these gates. If one fails, nothing is published.",
        localTitle: "Local build, outside CI",
        localNote:
          "On the published site, this record shows the commit and the GitHub Actions run that produced the page.",
        gates: [
          "Lint",
          "Typecheck",
          "Formatting",
          "Unit tests",
          "Static build",
          "E2E and accessibility",
          "Lighthouse",
        ],
      },
    },
    projects: {
      title: "Case studies",
      description:
        "Five public projects, each with the problem, architecture, decisions with the alternatives I rejected, trade-offs and a runbook. The limits are written down, including bugs I found reviewing my own code.",
      diagramHint:
        "Select a component to see what it does and the file that proves it.",
      read: "Read case study",
      repository: "Repository",
      problem: "Problem",
      proves: "What it proves",
    },
    principles: {
      title: "How I work",
      description:
        "Four principles behind my decisions, each linked to the project where it was applied.",
      proofLabel: "Applied in",
      items: [
        {
          title: "Verification is part of the deploy",
          text: 'A deploy only finishes once the system proves it is healthy and being observed. "The container started" is not a definition of done.',
          proof: "projeto-korp",
        },
        {
          title: "Least privilege by default",
          text: "OIDC instead of static keys, production without SSH, IMDSv2 and read-only containers. Access is an auditable exception, not a convenience.",
          proof: "aws-multi-environment-iac",
        },
        {
          title: "Production only after proof",
          text: "Every stage is a gate: tests before the build, a healthy dev before prod. Failing early costs less than failing in production.",
          proof: "aws-ci-cd-pipeline",
        },
        {
          title: "Every decision has a written why",
          text: "ADRs, trade-offs and runbooks versioned with the code, including what I would do differently in a real production environment.",
          proof: "flowstock",
        },
      ],
    },
    stack: {
      title: "Tools and where I used them",
      description:
        "No proficiency bars. Each tool is marked in the projects that use it; the project name opens the case study.",
      caption: "Tools by project",
      toolColumn: "Tool",
      experienceColumn: "VDSNET",
      used: "used in",
      groups: stackGroups({
        cloud: "Cloud and IaC",
        containers: "Containers and orchestration",
        delivery: "CI/CD and supply chain",
        observability: "Observability",
        application: "Application",
        operations: "Operations and networking",
        networks: "TCP/IP networking",
      }),
    },
    journey: {
      title: "Journey",
      description:
        "Operating under pressure teaches what no tutorial does: isolate the cause before acting, and escalate with evidence.",
      experienceTitle: "Experience",
      since: "since",
      educationTitle: "Education",
      transparency:
        "Transparency: the DevOps projects in this portfolio are hands-on and public. My current professional experience is in Tier 2 operations.",
    },
    contact: {
      title: "Contact",
      text: "I am looking for DevOps, Cloud or Platform Engineering roles, remote or hybrid. If your team values people who document decisions and verify what they ship, I would like to hear about the challenge.",
      email: "Email",
      copy: "Copy",
      copied: "Copied",
      copyFailed: "Could not copy",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Resume",
      resumeFile: "PDF in English",
    },
    footer: {
      build: "Build",
      localBuild: "Local build",
      source: "Site source code",
    },
  },
};

const ptCaseCopy = {
  back: "Todos os estudos de caso",
  onThisPage: "Nesta página",
  problem: "Problema",
  proves: "O que este projeto prova",
  architecture: "Arquitetura",
  architectureHint:
    "Selecione um componente para ver o que ele faz e o arquivo que comprova.",
  highlights: "Evidência verificada no repositório",
  decisions: "Decisões de arquitetura",
  context: "Contexto",
  decision: "Decisão",
  alternatives: "Alternativas consideradas",
  consequence: "Consequência",
  tradeoffs: "Trade-offs e limites conhecidos",
  failureModes: "Modos de falha e runbook",
  symptom: "Sintoma",
  cause: "Causa provável",
  diagnose: "Como diagnosticar",
  fix: "Correção",
  productionNext: "Em produção, eu faria",
  evidence: "Arquivos que comprovam",
  repository: "Ver repositório",
  openFile: "Abrir arquivo",
  stack: "Stack",
  previous: "Anterior",
  next: "Próximo",
  diagramLabel: "Diagrama de arquitetura interativo",
  componentList: "Componentes",
} as const;

const enCaseCopy: Record<keyof typeof ptCaseCopy, string> = {
  back: "All case studies",
  onThisPage: "On this page",
  problem: "Problem",
  proves: "What this project proves",
  architecture: "Architecture",
  architectureHint:
    "Select a component to see what it does and the file that proves it.",
  highlights: "Evidence verified in the repository",
  decisions: "Architecture decisions",
  context: "Context",
  decision: "Decision",
  alternatives: "Alternatives considered",
  consequence: "Consequence",
  tradeoffs: "Trade-offs and known limits",
  failureModes: "Failure modes and runbook",
  symptom: "Symptom",
  cause: "Likely cause",
  diagnose: "How to diagnose",
  fix: "Fix",
  productionNext: "In production, I would",
  evidence: "Files that prove it",
  repository: "View repository",
  openFile: "Open file",
  stack: "Stack",
  previous: "Previous",
  next: "Next",
  diagramLabel: "Interactive architecture diagram",
  componentList: "Components",
};

export type CaseCopy = Record<keyof typeof ptCaseCopy, string>;

export const caseCopy: Record<Locale, CaseCopy> = {
  "pt-BR": ptCaseCopy,
  "en-US": enCaseCopy,
};
