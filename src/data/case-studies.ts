import type { CaseStudyData, Locale } from "@/types";

type Case = CaseStudyData["cases"][number];

const link = (label: string, href: string) => ({
  label,
  href,
  target: "_blank" as const,
  icon: "github" as const,
  variant: "outline" as const,
});

function makeCase(
  input: Pick<
    Case,
    | "slug"
    | "title"
    | "subtitle"
    | "category"
    | "problem"
    | "summary"
    | "objective"
    | "solution"
    | "architecture"
    | "flow"
    | "technologies"
    | "engineeringDecisions"
    | "results"
    | "challenges"
    | "lessonsLearned"
    | "futureImprovements"
    | "links"
  >,
): Case {
  return {
    ...input,
    status: "completed",
    year: "2026",
    duration: "Hands-on project",
    screenshots: [],
    metrics: [],
    featured: true,
    myRole:
      "Design, implementation and documentation of the public portfolio project.",
  };
}

const ptCases = [
  makeCase({
    slug: "projeto-korp",
    title: "Projeto Korp",
    subtitle: "Infraestrutura containerizada com automação e observabilidade",
    category: "DevOps · Automation · Observability",
    problem:
      "Executar, expor, provisionar e observar uma aplicação Go de forma organizada.",
    summary:
      "Stack local com Go, NGINX, Prometheus e Grafana orquestrada por Docker Compose e preparada por Ansible.",
    objective:
      "Construir um fluxo operacional inspecionável, da preparação do host à validação HTTP.",
    solution:
      "Build multi-stage, reverse proxy NGINX, métricas Prometheus, container Grafana e playbook Ansible para Docker, rede, deployment e validação.",
    architecture: [
      "NGINX recebe tráfego na porta 80 e encaminha para a aplicação Go na porta 8080.",
      "Prometheus coleta o endpoint /metrics diretamente da aplicação.",
      "Grafana está presente no Compose, sem datasource provisionado no repositório.",
      "Ansible prepara o host, cria a rede externa, inicia a stack e valida /health e /projeto-korp.",
    ],
    flow: [
      "Ansible",
      "Docker Compose",
      "NGINX",
      "Go Application",
      "Prometheus",
      "Grafana",
    ],
    technologies: [
      "Go",
      "Docker",
      "Docker Compose",
      "NGINX",
      "Ansible",
      "Prometheus",
      "Grafana",
    ],
    engineeringDecisions: [
      {
        question: "Como expor o serviço?",
        decision: "NGINX como reverse proxy.",
        rationale:
          "Centraliza a entrada HTTP e mantém a aplicação na rede interna do Compose.",
      },
      {
        question: "Como validar a entrega?",
        decision: "Chamadas HTTP no playbook.",
        rationale: "Confirma /health e o endpoint funcional após o deployment.",
      },
    ],
    results: [
      "Quatro serviços definidos no Compose.",
      "Métrica de contagem de requisições exposta para Prometheus.",
      "Provisionamento e validação automatizados via Ansible.",
    ],
    challenges: [
      "O Compose depende de uma rede externa criada pelo playbook.",
      "O Grafana requer configuração manual de datasource.",
    ],
    lessonsLearned: [
      "Distinguir presença de ferramenta de integração completamente provisionada.",
      "Validar a aplicação depois de subir a stack.",
    ],
    futureImprovements: [
      "Adicionar healthchecks ao Compose.",
      "Provisionar o datasource do Grafana.",
      "Adicionar usuário non-root e graceful shutdown.",
    ],
    links: {
      github: link(
        "GitHub",
        "https://github.com/DavidDevd/http-server-projeto-korp",
      ),
    },
  }),
  makeCase({
    slug: "aws-multi-environment-iac",
    title: "AWS Multi-Environment IaC",
    subtitle: "Infraestrutura AWS modular para dev, staging e prod",
    category: "Terraform · AWS · IaC",
    problem:
      "Reutilizar a mesma arquitetura sem misturar configuração e estado entre ambientes.",
    summary:
      "Terraform com módulos de VPC, security groups, ALB e EC2/ASG, consumidos por três ambientes isolados.",
    objective:
      "Demonstrar infraestrutura reproduzível, versionada e revisável.",
    solution:
      "Módulos reutilizáveis, variáveis por ambiente e padrão de backend S3 com lock no DynamoDB.",
    architecture: [
      "VPC com subnets públicas e privadas.",
      "ALB público encaminha tráfego ao Auto Scaling Group em subnets privadas.",
      "IAM/SSM e fundamentos de CloudWatch fazem parte do módulo EC2.",
      "Dev, staging e prod mantêm configurações e chaves de estado separadas.",
    ],
    flow: [
      "Terraform",
      "Environment",
      "Reusable modules",
      "VPC",
      "ALB",
      "EC2 Auto Scaling",
    ],
    technologies: [
      "Terraform",
      "AWS",
      "VPC",
      "ALB",
      "EC2",
      "Auto Scaling",
      "IAM",
      "S3",
      "DynamoDB",
    ],
    engineeringDecisions: [
      {
        question: "Como separar ambientes?",
        decision: "Diretórios e backends por ambiente.",
        rationale: "Evita compartilhamento implícito de estado.",
      },
    ],
    results: [
      "Módulos compartilhados por três ambientes.",
      "Health checks e sizing específicos por ambiente.",
    ],
    challenges: [
      "Backend S3/DynamoDB precisa existir antes do terraform init.",
    ],
    lessonsLearned: [
      "Estado e configuração são limites operacionais diferentes.",
    ],
    futureImprovements: ["Adicionar CI para terraform fmt, validate e plan."],
    links: {
      github: link(
        "GitHub",
        "https://github.com/DavidDevd/Configuracao-de-Infraestrutura-Multi-Ambiente",
      ),
    },
  }),
  makeCase({
    slug: "aws-ci-cd-pipeline",
    title: "AWS CI/CD Pipeline",
    subtitle: "FastAPI do push ao App Runner",
    category: "CI/CD · AWS",
    problem: "Substituir entrega manual por um pipeline verificável.",
    summary:
      "GitHub Actions testa a API, constrói e publica a imagem no ECR, faz deploy no App Runner e valida o ambiente dev.",
    objective:
      "Automatizar a progressão entre teste, artefato e deployment AWS.",
    solution:
      "Jobs encadeados com Pytest, Docker, OIDC para AWS, ECR, App Runner e health check.",
    architecture: [
      "Push em main dispara o workflow para mudanças relevantes.",
      "Pytest bloqueia o build em caso de falha.",
      "Imagens são identificadas pelo SHA curto e publicadas no ECR.",
      "Dev é implantado e validado antes do build de produção.",
    ],
    flow: [
      "Git Push",
      "Pytest",
      "Docker Build",
      "Amazon ECR",
      "AWS App Runner",
      "Health Check",
    ],
    technologies: [
      "GitHub Actions",
      "Pytest",
      "Docker",
      "Amazon ECR",
      "AWS App Runner",
      "FastAPI",
    ],
    engineeringDecisions: [
      {
        question: "Como autenticar na AWS?",
        decision: "OIDC e roles assumidas pelo workflow.",
        rationale: "Evita credenciais estáticas no repositório.",
      },
    ],
    results: [
      "Pipeline dev/prod encadeado.",
      "Validação HTTP pós-deploy em dev.",
    ],
    challenges: [
      "O workflow contém identificadores de conta e roles, mas não credenciais secretas.",
    ],
    lessonsLearned: [
      "Promoção depende de validação explícita, não apenas de build bem-sucedido.",
    ],
    futureImprovements: ["Adicionar aprovação manual antes de produção."],
    links: {
      github: link("GitHub", "https://github.com/DavidDevd/devops.ci.api"),
    },
  }),
  makeCase({
    slug: "kubernetes-application-stack",
    title: "Kubernetes Application Stack",
    subtitle: "FastAPI e PostgreSQL em Kind",
    category: "Kubernetes · Reliability",
    problem:
      "Orquestrar aplicação, banco, configuração e persistência em um cluster local.",
    summary:
      "Manifests Kubernetes para Deployments, Services, namespaces, ConfigMap, Secrets de exemplo, PV/PVC, probes e HPA.",
    objective:
      "Praticar primitivas de orquestração e fundamentos de confiabilidade.",
    solution:
      "Cluster Kind com dois workers, descoberta via DNS interno e recursos separados para API e PostgreSQL.",
    architecture: [
      "Service ClusterIP direciona tráfego à API.",
      "ConfigMap e Secret injetam configuração do banco.",
      "PostgreSQL usa PV/PVC hostPath para o laboratório local.",
      "Liveness/readiness probes e HPA atuam sobre a API.",
    ],
    flow: [
      "Client",
      "API Service",
      "FastAPI Deployment",
      "PostgreSQL Service",
      "PostgreSQL Deployment",
      "PV/PVC",
    ],
    technologies: [
      "Kubernetes",
      "Kind",
      "Docker",
      "FastAPI",
      "PostgreSQL",
      "ConfigMap",
      "HPA",
      "PV/PVC",
    ],
    engineeringDecisions: [
      {
        question: "Como separar configuração sensível?",
        decision: "Secrets de exemplo e arquivos reais ignorados.",
        rationale: "O repositório público não inclui valores reais.",
      },
    ],
    results: [
      "API e banco em namespaces separados.",
      "Probes e autoscaling declarados.",
    ],
    challenges: [
      "O laboratório exige criação manual dos namespaces.",
      "hostPath é apropriado apenas ao escopo local.",
    ],
    lessonsLearned: [
      "Service discovery e readiness são parte do runtime, não detalhes acessórios.",
    ],
    futureImprovements: [
      "Adicionar manifests declarativos de Namespace.",
      "Adicionar NetworkPolicies.",
    ],
    links: {
      github: link("GitHub", "https://github.com/DavidDevd/desafio-kubernetes"),
    },
  }),
  makeCase({
    slug: "flowstock",
    title: "FlowStock",
    subtitle: "Application engineering como diferencial DevOps",
    category: "Software Engineering · DevOps Evidence",
    problem:
      "Criar uma base de produto verificável sem perder segurança, qualidade e capacidade operacional.",
    summary:
      "FastAPI, React e PostgreSQL com testes, containers endurecidos, CI de supply chain e observabilidade local.",
    objective: "Entender e validar a aplicação que será empacotada e operada.",
    solution:
      "Monólito modular, containers multi-stage non-root, Compose com read-only/no-new-privileges, Prometheus/Grafana e CI com Trivy e SBOM.",
    architecture: [
      "Caddy atua como edge para React e FastAPI.",
      "FastAPI acessa PostgreSQL em rede interna.",
      "Prometheus coleta /metrics e Grafana recebe datasource provisionado.",
      "Health endpoints, logs estruturados e correlation IDs apoiam diagnóstico.",
    ],
    flow: ["Edge", "Web", "FastAPI", "PostgreSQL", "Prometheus", "Grafana"],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Trivy",
      "Prometheus",
      "Grafana",
    ],
    engineeringDecisions: [
      {
        question: "Como fortalecer containers?",
        decision:
          "Usuários non-root, filesystem read-only e no-new-privileges.",
        rationale: "Reduz privilégios e superfície de alteração no runtime.",
      },
    ],
    results: [
      "Gates de backend, frontend e containers.",
      "Trivy bloqueia findings HIGH/CRITICAL e SBOMs SPDX são gerados.",
    ],
    challenges: [
      "O snapshot é uma fundação de engenharia, não um produto em produção.",
    ],
    lessonsLearned: [
      "Aplicação, supply chain e observabilidade precisam ser avaliadas em conjunto.",
    ],
    futureImprovements: [
      "Continuar os incrementos de produto claramente marcados como planejados.",
    ],
    links: {
      github: link("GitHub", "https://github.com/DavidDevd/flowstock-public"),
    },
  }),
] as const;

const englishOverrides: Record<string, Partial<Case>> = {
  "projeto-korp": {
    title: "Project Korp",
    subtitle: "Container infrastructure with automation and observability",
    problem:
      "Run, expose, provision and observe a Go application in an organized way.",
    summary:
      "Local Go, NGINX, Prometheus and Grafana stack orchestrated by Docker Compose and prepared with Ansible.",
  },
  "aws-multi-environment-iac": {
    subtitle: "Modular AWS infrastructure for dev, staging and prod",
    problem:
      "Reuse one architecture without mixing configuration and state across environments.",
    summary:
      "Terraform modules for VPC, security groups, ALB and EC2/ASG consumed by three isolated environments.",
  },
  "aws-ci-cd-pipeline": {
    subtitle: "FastAPI from push to App Runner",
    problem: "Replace manual delivery with an inspectable pipeline.",
    summary:
      "GitHub Actions tests the API, builds and publishes the image to ECR, deploys to App Runner and validates dev.",
  },
  "kubernetes-application-stack": {
    subtitle: "FastAPI and PostgreSQL on Kind",
    problem:
      "Orchestrate application, database, configuration and persistence in a local cluster.",
    summary:
      "Kubernetes manifests for Deployments, Services, namespaces, ConfigMap, example Secrets, PV/PVC, probes and HPA.",
  },
  flowstock: {
    subtitle: "Application engineering as a DevOps advantage",
    problem:
      "Build a verifiable product foundation without losing security, quality or operational insight.",
    summary:
      "FastAPI, React and PostgreSQL with tests, hardened containers, supply-chain CI and local observability.",
  },
};

const enCases = ptCases.map((item) => ({
  ...item,
  ...englishOverrides[item.slug],
})) satisfies readonly Case[];

const pageLabels = {
  "pt-BR": {
    backLabel: "Voltar para projetos",
    overview: "Visão geral",
    summary: "Resumo",
    problem: "Problema",
    objective: "Objetivo",
    solution: "Solução",
    architecture: "Arquitetura",
    architectureDiagram: "Diagrama de arquitetura",
    technologyStack: "Stack técnica",
    engineeringDecisions: "Decisões de engenharia",
    challenges: "Desafios",
    myRole: "Meu papel",
    results: "Resultados",
    lessonsLearned: "Aprendizados",
    futureImprovements: "Próximas melhorias",
    metrics: "Métricas",
    github: "GitHub",
    demo: "Demo",
    previousCase: "Case anterior",
    nextCase: "Próximo case",
    unavailableDemo: "Este projeto não possui demo pública.",
  },
  "en-US": {
    backLabel: "Back to projects",
    overview: "Overview",
    summary: "Summary",
    problem: "Problem",
    objective: "Objective",
    solution: "Solution",
    architecture: "Architecture",
    architectureDiagram: "Architecture diagram",
    technologyStack: "Technology stack",
    engineeringDecisions: "Engineering decisions",
    challenges: "Challenges",
    myRole: "My role",
    results: "Results",
    lessonsLearned: "Lessons learned",
    futureImprovements: "Future improvements",
    metrics: "Metrics",
    github: "GitHub",
    demo: "Demo",
    previousCase: "Previous case",
    nextCase: "Next case",
    unavailableDemo: "This project has no public demo.",
  },
} as const;

export const caseStudiesDataByLocale = {
  "pt-BR": {
    eyebrow: "Cases DevOps & Cloud",
    title: "Projetos práticos e verificáveis.",
    description:
      "Arquitetura, automação, entrega e operação documentadas a partir dos repositórios públicos.",
    page: pageLabels["pt-BR"],
    labels: {
      featured: "Destaque",
      problem: "Problema",
      solution: "Solução",
      architecture: "Arquitetura",
      technologies: "Tecnologias",
      engineeringDecisions: "Decisões",
      learnings: "Aprendizados",
    },
    cases: ptCases,
  },
  "en-US": {
    eyebrow: "DevOps & Cloud Cases",
    title: "Hands-on, verifiable projects.",
    description:
      "Architecture, automation, delivery and operations documented from the public repositories.",
    page: pageLabels["en-US"],
    labels: {
      featured: "Featured",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      technologies: "Technologies",
      engineeringDecisions: "Decisions",
      learnings: "Learnings",
    },
    cases: enCases,
  },
} as const satisfies Record<Locale, CaseStudyData>;

export const caseStudiesData = caseStudiesDataByLocale["pt-BR"];
export function getCaseStudyBySlug(slug: string, locale: Locale = "pt-BR") {
  return caseStudiesDataByLocale[locale].cases.find(
    (item) => item.slug === slug,
  );
}
export function getCaseStudyNavigation(slug: string, locale: Locale = "pt-BR") {
  const cases = caseStudiesDataByLocale[locale].cases;
  const index = cases.findIndex((item) => item.slug === slug);
  return {
    previous: index > 0 ? cases[index - 1] : undefined,
    next: index >= 0 && index < cases.length - 1 ? cases[index + 1] : undefined,
  };
}
