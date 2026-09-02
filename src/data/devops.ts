import type { Locale } from "@/types";

const repositories = {
  korp: "https://github.com/DavidDevd/http-server-projeto-korp",
  terraform:
    "https://github.com/DavidDevd/Configuracao-de-Infraestrutura-Multi-Ambiente",
  pipeline: "https://github.com/DavidDevd/devops.ci.api",
  kubernetes: "https://github.com/DavidDevd/desafio-kubernetes",
  flowstock: "https://github.com/DavidDevd/flowstock-public",
} as const;

export const devopsDataByLocale = {
  "pt-BR": {
    stack: {
      eyebrow: "Toolchain",
      title: "Competências organizadas pelo ciclo de entrega.",
      description:
        "Tecnologias aplicadas em projetos práticos e laboratórios — separadas da experiência profissional.",
      groups: [
        {
          name: "Cloud",
          description: "Entrega e infraestrutura AWS",
          items: ["AWS", "Amazon ECR", "App Runner"],
        },
        {
          name: "Containers & Orchestration",
          description: "Empacotamento e execução",
          items: ["Docker", "Docker Compose", "Kubernetes", "Kind"],
        },
        {
          name: "IaC & Automation",
          description: "Infraestrutura reproduzível",
          items: ["Terraform", "Ansible"],
        },
        {
          name: "CI/CD",
          description: "Validação e entrega automatizada",
          items: ["GitHub Actions", "Git", "Pytest"],
        },
        {
          name: "Observability",
          description: "Sinais e saúde dos serviços",
          items: ["Prometheus", "Grafana", "Metrics", "Health Checks"],
        },
        {
          name: "Systems & Networking",
          description: "Base operacional",
          items: ["Linux", "NGINX", "TCP/IP"],
        },
      ],
    },
    pipeline: {
      eyebrow: "Delivery lifecycle",
      title: "Do commit ao feedback operacional.",
      description:
        "Uma visão conceitual do fluxo exercitado entre os projetos do portfólio.",
      stages: [
        "Code",
        "Test",
        "Build",
        "Containerize",
        "Provision",
        "Deploy",
        "Observe",
        "Improve",
      ],
      ariaLabel:
        "Pipeline: código, teste, build, containerização, provisionamento, deploy, observação e melhoria",
    },
    projects: {
      eyebrow: "Projetos DevOps & Cloud",
      title: "Evidência prática, com arquitetura inspecionável.",
      description:
        "Cada descrição abaixo foi conferida no repositório público correspondente.",
      labels: {
        problem: "Problema",
        evidence: "Evidências",
        repository: "Ver no GitHub",
        architecture: "Explorar arquitetura",
        featured: "Featured case",
      },
      items: [
        {
          number: "01",
          title: "Projeto Korp",
          category: "DevOps · Automation · Observability",
          summary:
            "Infraestrutura local orientada à operação para uma aplicação Go containerizada.",
          problem:
            "Executar, expor, provisionar e observar um serviço HTTP de forma organizada.",
          evidence: [
            "Build multi-stage em Docker",
            "NGINX como reverse proxy",
            "Prometheus coletando /metrics",
            "Grafana incluído no Compose",
            "Ansible instala Docker, cria a rede, sobe a stack e valida /health",
          ],
          technologies: [
            "Go",
            "Docker",
            "Compose",
            "NGINX",
            "Ansible",
            "Prometheus",
            "Grafana",
          ],
          repository: repositories.korp,
          featured: true,
        },
        {
          number: "02",
          title: "AWS Multi-Environment IaC",
          category: "Terraform · AWS · Infrastructure as Code",
          summary:
            "Módulos reutilizáveis para ambientes dev, staging e prod com estados isolados.",
          problem:
            "Reduzir duplicação mantendo separação de configuração, sizing e estado entre ambientes.",
          evidence: [
            "VPC e subnets públicas/privadas",
            "ALB e health check",
            "EC2 Auto Scaling",
            "IAM/SSM",
            "S3 + DynamoDB para estado remoto e lock",
          ],
          technologies: [
            "Terraform",
            "AWS",
            "VPC",
            "ALB",
            "EC2",
            "Auto Scaling",
          ],
          repository: repositories.terraform,
          featured: false,
        },
        {
          number: "03",
          title: "AWS CI/CD Pipeline",
          category: "GitHub Actions · ECR · App Runner",
          summary:
            "Pipeline de uma API FastAPI do teste ao deploy AWS em dev e prod.",
          problem:
            "Tornar build, publicação, deployment e validação repetíveis.",
          evidence: [
            "Pytest antes do build",
            "Imagem Docker versionada pelo SHA",
            "Push para Amazon ECR",
            "Deploy no AWS App Runner",
            "Health check pós-deploy em dev",
          ],
          technologies: [
            "GitHub Actions",
            "Docker",
            "Amazon ECR",
            "App Runner",
            "FastAPI",
          ],
          repository: repositories.pipeline,
          featured: false,
        },
        {
          number: "04",
          title: "Kubernetes Application Stack",
          category: "Kubernetes · Reliability foundations",
          summary:
            "FastAPI e PostgreSQL em cluster Kind com configuração, persistência e probes.",
          problem:
            "Orquestrar aplicação e banco além do simples start de containers.",
          evidence: [
            "Deployments e Services",
            "Namespaces separados",
            "ConfigMap e Secrets de exemplo",
            "PV/PVC",
            "Liveness/readiness probes",
            "HPA por CPU",
          ],
          technologies: [
            "Kubernetes",
            "Kind",
            "FastAPI",
            "PostgreSQL",
            "HPA",
            "PV/PVC",
          ],
          repository: repositories.kubernetes,
          featured: false,
        },
        {
          number: "05",
          title: "FlowStock",
          category: "Application Engineering · DevOps evidence",
          summary:
            "A aplicação por trás da infraestrutura: FastAPI, React e PostgreSQL com controles de entrega.",
          problem:
            "Construir uma base de produto verificável com segurança, qualidade e operação observável.",
          evidence: [
            "Testes backend e frontend",
            "Containers multi-stage e non-root",
            "Read-only e no-new-privileges",
            "Trivy e SBOM no CI",
            "Prometheus, Grafana e health endpoints",
          ],
          technologies: [
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
            "Trivy",
            "Prometheus",
          ],
          repository: repositories.flowstock,
          featured: false,
        },
      ],
    },
    observability: {
      eyebrow: "Observability",
      title: "Saúde, métricas e contexto para operar.",
      description:
        "Representação arquitetural — não exibe telemetria ou números de produção.",
      items: [
        {
          label: "Metrics",
          value: "Prometheus",
          detail: "Scrape do endpoint /metrics",
        },
        {
          label: "Visualization",
          value: "Grafana",
          detail: "Camada de visualização na stack",
        },
        {
          label: "Health",
          value: "Health Checks",
          detail: "Validação explícita de disponibilidade",
        },
        {
          label: "Edge / Traffic",
          value: "NGINX",
          detail: "Entrada e proxy para a aplicação",
        },
      ],
      note: "Architecture visualization · sem métricas fictícias",
    },
    infrastructure: {
      eyebrow: "Infrastructure & Automation",
      title: "Declarar recursos. Automatizar configuração.",
      description:
        "Duas ferramentas com responsabilidades complementares nos projetos do portfólio.",
      cards: [
        {
          title: "Terraform",
          badge: "Infrastructure as Code",
          text: "Modela rede, compute, load balancing, segurança e estado remoto para dev, staging e prod.",
          points: [
            "Versionamento",
            "Módulos reutilizáveis",
            "Ambientes isolados",
            "Planos revisáveis",
          ],
        },
        {
          title: "Ansible",
          badge: "Provisioning automation",
          text: "Prepara o host local do Korp, instala Docker quando necessário, cria a rede e inicia a stack.",
          points: [
            "Automação repetível",
            "Módulos idempotentes onde aplicável",
            "Deploy via Compose",
            "Validação HTTP",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Operational background",
      title: "Fundação operacional real + projetos DevOps/Cloud.",
      role: "Suporte Técnico N2",
      text: "Experiência profissional em troubleshooting, conectividade, redes TCP/IP, diagnóstico, incidentes e suporte operacional. Terraform, Kubernetes, AWS, Ansible, Prometheus e Grafana aparecem aqui como projetos práticos — não como cargo profissional.",
      skills: [
        "Troubleshooting",
        "TCP/IP",
        "Infraestrutura",
        "Diagnóstico",
        "Incidentes",
        "Suporte operacional",
      ],
    },
    development: {
      eyebrow: "Development as an advantage",
      title: "Entendendo a aplicação por trás da infraestrutura.",
      text: "Python, FastAPI, Go, PostgreSQL e APIs REST ajudam a investigar runtime, dependências, bancos, métricas, containers e falhas de deployment.",
      items: ["Python", "FastAPI", "Go", "PostgreSQL", "REST APIs"],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre DevOps, Cloud e operações confiáveis?",
      text: "Aberto a oportunidades DevOps Jr. e Cloud/Infrastructure em início de carreira.",
      action: "Falar no LinkedIn",
      github: "Ver GitHub",
    },
  },
  "en-US": {
    stack: {
      eyebrow: "Toolchain",
      title: "Skills organized around the delivery lifecycle.",
      description:
        "Technologies used in hands-on projects and labs — kept separate from professional experience.",
      groups: [
        {
          name: "Cloud",
          description: "AWS delivery and infrastructure",
          items: ["AWS", "Amazon ECR", "App Runner"],
        },
        {
          name: "Containers & Orchestration",
          description: "Packaging and runtime",
          items: ["Docker", "Docker Compose", "Kubernetes", "Kind"],
        },
        {
          name: "IaC & Automation",
          description: "Reproducible infrastructure",
          items: ["Terraform", "Ansible"],
        },
        {
          name: "CI/CD",
          description: "Automated validation and delivery",
          items: ["GitHub Actions", "Git", "Pytest"],
        },
        {
          name: "Observability",
          description: "Service signals and health",
          items: ["Prometheus", "Grafana", "Metrics", "Health Checks"],
        },
        {
          name: "Systems & Networking",
          description: "Operational foundation",
          items: ["Linux", "NGINX", "TCP/IP"],
        },
      ],
    },
    pipeline: {
      eyebrow: "Delivery lifecycle",
      title: "From commit to operational feedback.",
      description:
        "A conceptual view of the flow exercised across the portfolio projects.",
      stages: [
        "Code",
        "Test",
        "Build",
        "Containerize",
        "Provision",
        "Deploy",
        "Observe",
        "Improve",
      ],
      ariaLabel:
        "Pipeline: code, test, build, containerize, provision, deploy, observe and improve",
    },
    projects: {
      eyebrow: "DevOps & Cloud Projects",
      title: "Hands-on evidence with inspectable architecture.",
      description:
        "Every description below was verified against its public repository.",
      labels: {
        problem: "Problem",
        evidence: "Evidence",
        repository: "View on GitHub",
        architecture: "Explore architecture",
        featured: "Featured case",
      },
      items: [
        {
          number: "01",
          title: "Project Korp",
          category: "DevOps · Automation · Observability",
          summary:
            "Operations-oriented local infrastructure for a containerized Go application.",
          problem:
            "Run, expose, provision and observe an HTTP service in an organized way.",
          evidence: [
            "Multi-stage Docker build",
            "NGINX reverse proxy",
            "Prometheus scraping /metrics",
            "Grafana included in Compose",
            "Ansible installs Docker, creates the network, starts the stack and validates /health",
          ],
          technologies: [
            "Go",
            "Docker",
            "Compose",
            "NGINX",
            "Ansible",
            "Prometheus",
            "Grafana",
          ],
          repository: repositories.korp,
          featured: true,
        },
        {
          number: "02",
          title: "AWS Multi-Environment IaC",
          category: "Terraform · AWS · Infrastructure as Code",
          summary:
            "Reusable modules for dev, staging and prod with isolated state.",
          problem:
            "Reduce duplication while keeping configuration, sizing and state separated.",
          evidence: [
            "Public/private VPC subnets",
            "ALB health check",
            "EC2 Auto Scaling",
            "IAM/SSM",
            "S3 + DynamoDB remote state pattern",
          ],
          technologies: [
            "Terraform",
            "AWS",
            "VPC",
            "ALB",
            "EC2",
            "Auto Scaling",
          ],
          repository: repositories.terraform,
          featured: false,
        },
        {
          number: "03",
          title: "AWS CI/CD Pipeline",
          category: "GitHub Actions · ECR · App Runner",
          summary:
            "A FastAPI pipeline from tests to AWS deployment across dev and prod.",
          problem:
            "Make build, publishing, deployment and validation repeatable.",
          evidence: [
            "Pytest before build",
            "SHA-tagged Docker image",
            "Amazon ECR publishing",
            "AWS App Runner deployment",
            "Post-deploy dev health check",
          ],
          technologies: [
            "GitHub Actions",
            "Docker",
            "Amazon ECR",
            "App Runner",
            "FastAPI",
          ],
          repository: repositories.pipeline,
          featured: false,
        },
        {
          number: "04",
          title: "Kubernetes Application Stack",
          category: "Kubernetes · Reliability foundations",
          summary:
            "FastAPI and PostgreSQL on Kind with configuration, persistence and probes.",
          problem:
            "Orchestrate application and database beyond merely starting containers.",
          evidence: [
            "Deployments and Services",
            "Separate namespaces",
            "ConfigMap and example Secrets",
            "PV/PVC",
            "Liveness/readiness probes",
            "CPU-based HPA",
          ],
          technologies: [
            "Kubernetes",
            "Kind",
            "FastAPI",
            "PostgreSQL",
            "HPA",
            "PV/PVC",
          ],
          repository: repositories.kubernetes,
          featured: false,
        },
        {
          number: "05",
          title: "FlowStock",
          category: "Application Engineering · DevOps evidence",
          summary:
            "The application behind the infrastructure: FastAPI, React and PostgreSQL with delivery controls.",
          problem:
            "Build a verifiable product foundation with security, quality and observable operations.",
          evidence: [
            "Backend and frontend tests",
            "Multi-stage non-root containers",
            "Read-only and no-new-privileges",
            "Trivy and SBOM in CI",
            "Prometheus, Grafana and health endpoints",
          ],
          technologies: [
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
            "Trivy",
            "Prometheus",
          ],
          repository: repositories.flowstock,
          featured: false,
        },
      ],
    },
    observability: {
      eyebrow: "Observability",
      title: "Health, metrics and context for operations.",
      description:
        "Architecture visualization — no production telemetry or fabricated numbers.",
      items: [
        {
          label: "Metrics",
          value: "Prometheus",
          detail: "Scrapes the /metrics endpoint",
        },
        {
          label: "Visualization",
          value: "Grafana",
          detail: "Visualization layer in the stack",
        },
        {
          label: "Health",
          value: "Health Checks",
          detail: "Explicit availability validation",
        },
        {
          label: "Edge / Traffic",
          value: "NGINX",
          detail: "Ingress and application proxy",
        },
      ],
      note: "Architecture visualization · no fictional metrics",
    },
    infrastructure: {
      eyebrow: "Infrastructure & Automation",
      title: "Declare resources. Automate configuration.",
      description:
        "Two tools with complementary responsibilities across the portfolio projects.",
      cards: [
        {
          title: "Terraform",
          badge: "Infrastructure as Code",
          text: "Models networking, compute, load balancing, security and remote state for dev, staging and prod.",
          points: [
            "Version control",
            "Reusable modules",
            "Isolated environments",
            "Reviewable plans",
          ],
        },
        {
          title: "Ansible",
          badge: "Provisioning automation",
          text: "Prepares the local Korp host, installs Docker when needed, creates the network and starts the stack.",
          points: [
            "Repeatable automation",
            "Idempotent modules where applicable",
            "Compose deployment",
            "HTTP validation",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Operational background",
      title: "Real operational foundation + DevOps/Cloud projects.",
      role: "N2 Technical Support",
      text: "Professional experience in troubleshooting, connectivity, TCP/IP networking, diagnostics, incidents and operational support. Terraform, Kubernetes, AWS, Ansible, Prometheus and Grafana are presented as hands-on projects — not as a professional job title.",
      skills: [
        "Troubleshooting",
        "TCP/IP",
        "Infrastructure",
        "Diagnostics",
        "Incidents",
        "Operational support",
      ],
    },
    development: {
      eyebrow: "Development as an advantage",
      title: "Understanding the application behind the infrastructure.",
      text: "Python, FastAPI, Go, PostgreSQL and REST APIs help investigate runtime behavior, dependencies, databases, metrics, containers and deployment failures.",
      items: ["Python", "FastAPI", "Go", "PostgreSQL", "REST APIs"],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about DevOps, Cloud and reliable operations.",
      text: "Open to Junior DevOps and early-career Cloud/Infrastructure opportunities.",
      action: "Connect on LinkedIn",
      github: "View GitHub",
    },
  },
} as const satisfies Record<Locale, object>;
