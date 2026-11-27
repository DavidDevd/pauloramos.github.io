/**
 * Resume content, versioned with the site. Every statement here is either
 * stated by Paulo (his previous resume) or verified in the linked public
 * repositories. Rebuild the PDFs with `pnpm resume`.
 */

const contact = {
  name: "Paulo Davi Pinto Ramos",
  location: "Simões Filho, BA",
  phone: "+55 71 99269-3940",
  email: "davifd642@gmail.com",
  links: [
    "linkedin.com/in/paulo-ramos-b605a9209",
    "github.com/DavidDevd",
    "daviddevd.github.io/pauloramos.github.io",
  ],
};

export const resumes = {
  "pt-BR": {
    file: "public/curriculo.pdf",
    lang: "pt-BR",
    contact,
    title:
      "DevOps Engineer | Cloud & Infrastructure | AWS | Docker | Kubernetes | Terraform | CI/CD | Observability",
    sections: {
      summary: "Resumo profissional",
      skills: "Competências técnicas",
      projects: "Projetos DevOps e Cloud",
      experience: "Experiência profissional",
      education: "Formação",
      languages: "Idiomas",
    },
    summary:
      "Profissional de tecnologia com experiência em Suporte Técnico N2 e formação DevOps pela Rocketseat. Construo projetos públicos e verificáveis com Linux, Docker, Kubernetes, Terraform, AWS, Ansible, CI/CD e observabilidade com Prometheus e Grafana, documentando decisões, trade-offs e runbooks. A base em backend me ajuda a entender o ciclo completo, do código ao deploy, monitoramento e troubleshooting. Busco posições de DevOps, Cloud ou Platform Engineering.",
    skills: [
      [
        "Cloud",
        "AWS (ECR, App Runner, VPC, ALB, EC2 Auto Scaling, IAM, SSM, CloudWatch)",
      ],
      [
        "Containers e orquestração",
        "Docker, Docker Compose, Kubernetes (Kind)",
      ],
      ["IaC e automação", "Terraform, Ansible"],
      ["CI/CD e supply chain", "GitHub Actions, OIDC, Trivy, SBOM, Dependabot"],
      ["Observabilidade", "Prometheus, Grafana, métricas, health checks"],
      ["Testes e qualidade", "Pytest, Vitest, Playwright, axe, Lighthouse CI"],
      ["Sistemas e redes", "Linux, NGINX, TCP/IP"],
      ["Desenvolvimento", "Python, FastAPI, Go, PostgreSQL/SQL, REST APIs"],
    ],
    projects: [
      {
        name: "Projeto Korp",
        tag: "Automação e observabilidade",
        bullets: [
          "Stack containerizada com Docker Compose e NGINX como reverse proxy e único ponto de entrada, com healthchecks e ordem de subida por saúde.",
          "Hardening: usuário não-root, filesystem somente leitura, imagens versionadas, timeouts e graceful shutdown na aplicação Go.",
          "Prometheus e Grafana com datasource e dashboard provisionados como código.",
          "Playbook Ansible idempotente com verificação ponta a ponta: /health, contrato JSON, target up==1 no Prometheus e dashboard no Grafana.",
        ],
      },
      {
        name: "AWS, Terraform e CI/CD",
        tag: "Labs públicos",
        bullets: [
          "Terraform multiambiente (dev, staging, prod) com 4 módulos reutilizáveis, state remoto em S3 criptografado com lock em DynamoDB, IMDSv2 e produção sem SSH (SSM).",
          "Pipeline GitHub Actions com testes, imagem por SHA no Amazon ECR e deploy no AWS App Runner via OIDC, sem chaves estáticas, com dev como gate de produção.",
          "FastAPI e PostgreSQL em Kubernetes com namespaces, ConfigMap/Secret, PV/PVC, probes e HPA.",
        ],
      },
      {
        name: "FlowStock",
        tag: "Aplicação, qualidade e DevOps",
        bullets: [
          "Aplicação full stack com Python/FastAPI, React, PostgreSQL e Docker: autenticação, RBAC, auditoria e observabilidade.",
          "46 testes automatizados (24 backend, 22 frontend), 84,97% de cobertura no backend, auditoria de dependências, Trivy sem HIGH/CRITICAL e SBOM SPDX no CI.",
        ],
      },
      {
        name: "Portfólio",
        tag: "Sistema em produção",
        bullets: [
          "Site estático com CI de qualidade (lint, testes unitários e E2E com Playwright, acessibilidade com axe, Lighthouse CI) e deploy no GitHub Pages do mesmo artefato testado.",
        ],
      },
    ],
    experience: [
      {
        company: "VDSNET",
        role: "Suporte Técnico N2",
        period: "Out 2024 – atual",
        place: "Simões Filho, BA",
        bullets: [
          "Troubleshooting e diagnóstico de incidentes de conectividade em atendimentos remotos e presenciais.",
          "Atuação com redes TCP/IP, roteadores e ONTs/ONUs, acompanhando ocorrências até a resolução.",
          "Suporte a usuários, abertura, acompanhamento e documentação de ordens de serviço.",
        ],
      },
      {
        company: "americanas s.a.",
        role: "Operador de Logística",
        period: "Fev 2024 – Set 2024",
        place: "Simões Filho, BA",
        bullets: [
          "Execução de rotinas operacionais, organização e colaboração com a equipe com foco em produtividade.",
        ],
      },
    ],
    education: [
      [
        "Análise e Desenvolvimento de Sistemas",
        "Uninter",
        "em andamento, conclusão prevista para 07/2027",
      ],
      ["Formação DevOps", "Rocketseat", "concluída em 2026"],
    ],
    languages: "Português (nativo), inglês (intermediário)",
  },
  "en-US": {
    file: "public/resume.pdf",
    lang: "en-US",
    contact: { ...contact, location: "Simões Filho, Bahia, Brazil (UTC−3)" },
    title:
      "DevOps Engineer | Cloud & Infrastructure | AWS | Docker | Kubernetes | Terraform | CI/CD | Observability",
    sections: {
      summary: "Summary",
      skills: "Technical skills",
      projects: "DevOps and Cloud projects",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Technology professional with Tier 2 technical support experience and a DevOps program completed at Rocketseat. I build public, verifiable projects with Linux, Docker, Kubernetes, Terraform, AWS, Ansible, CI/CD and observability with Prometheus and Grafana, documenting decisions, trade-offs and runbooks. A backend background helps me follow the full cycle, from code to deployment, monitoring and troubleshooting. Looking for DevOps, Cloud or Platform Engineering roles, remote or hybrid.",
    skills: [
      [
        "Cloud",
        "AWS (ECR, App Runner, VPC, ALB, EC2 Auto Scaling, IAM, SSM, CloudWatch)",
      ],
      [
        "Containers and orchestration",
        "Docker, Docker Compose, Kubernetes (Kind)",
      ],
      ["IaC and automation", "Terraform, Ansible"],
      [
        "CI/CD and supply chain",
        "GitHub Actions, OIDC, Trivy, SBOM, Dependabot",
      ],
      ["Observability", "Prometheus, Grafana, metrics, health checks"],
      ["Testing and quality", "Pytest, Vitest, Playwright, axe, Lighthouse CI"],
      ["Systems and networking", "Linux, NGINX, TCP/IP"],
      ["Development", "Python, FastAPI, Go, PostgreSQL/SQL, REST APIs"],
    ],
    projects: [
      {
        name: "Project Korp",
        tag: "Automation and observability",
        bullets: [
          "Containerized stack with Docker Compose and NGINX as reverse proxy and single entry point, with health checks and health-gated start order.",
          "Hardening: non-root user, read-only filesystem, pinned images, timeouts and graceful shutdown in the Go service.",
          "Prometheus and Grafana with datasource and dashboard provisioned as code.",
          "Idempotent Ansible playbook with end-to-end verification: /health, JSON contract, target up==1 in Prometheus and the Grafana dashboard.",
        ],
      },
      {
        name: "AWS, Terraform and CI/CD",
        tag: "Public labs",
        bullets: [
          "Multi-environment Terraform (dev, staging, prod) with 4 reusable modules, encrypted S3 remote state with DynamoDB locking, IMDSv2 and SSH-free production (SSM).",
          "GitHub Actions pipeline with tests, SHA-tagged images in Amazon ECR and deployment to AWS App Runner through OIDC, with no static keys and dev as the production gate.",
          "FastAPI and PostgreSQL on Kubernetes with namespaces, ConfigMap/Secret, PV/PVC, probes and HPA.",
        ],
      },
      {
        name: "FlowStock",
        tag: "Application, quality and DevOps",
        bullets: [
          "Full-stack application with Python/FastAPI, React, PostgreSQL and Docker: authentication, RBAC, auditing and observability.",
          "46 automated tests (24 backend, 22 frontend), 84.97% backend coverage, dependency audits, Trivy with no HIGH/CRITICAL findings and SPDX SBOM in CI.",
        ],
      },
      {
        name: "Portfolio",
        tag: "Production system",
        bullets: [
          "Static site with quality CI (lint, unit and Playwright E2E tests, axe accessibility, Lighthouse CI), deploying the exact tested artifact to GitHub Pages.",
        ],
      },
    ],
    experience: [
      {
        company: "VDSNET",
        role: "Tier 2 Technical Support",
        period: "Oct 2024 – present",
        place: "Simões Filho, Brazil",
        bullets: [
          "Troubleshooting and diagnosing connectivity incidents, remotely and on site.",
          "Working with TCP/IP networks, routers and ONTs/ONUs, following incidents through to resolution.",
          "User support, plus opening, tracking and documenting service orders.",
        ],
      },
      {
        company: "americanas s.a.",
        role: "Logistics Operator",
        period: "Feb 2024 – Sep 2024",
        place: "Simões Filho, Brazil",
        bullets: [
          "Carried out operational routines and organization, collaborating with the team with a focus on productivity.",
        ],
      },
    ],
    education: [
      [
        "Systems Analysis and Development (associate degree)",
        "Uninter",
        "in progress, expected 07/2027",
      ],
      ["DevOps Program", "Rocketseat", "completed in 2026"],
    ],
    languages: "Portuguese (native), English (intermediate)",
  },
};
