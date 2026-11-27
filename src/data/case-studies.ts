import type { CaseStudy, Locale } from "@/types";

/*
 * Every claim below was checked against the public repository it links to.
 * Known limits are stated as such; nothing here describes production traffic.
 */

const korp: CaseStudy = {
  slug: "projeto-korp",
  shortTitle: "Korp",
  title: { "pt-BR": "Projeto Korp", "en-US": "Project Korp" },
  tagline: {
    "pt-BR":
      "Do host vazio à stack observável, com um deploy que só passa se tudo for verificado.",
    "en-US":
      "From an empty host to an observable stack, with a deploy that only passes once everything is verified.",
  },
  category: {
    "pt-BR": "Automação · Containers · Observabilidade",
    "en-US": "Automation · Containers · Observability",
  },
  repository: "https://github.com/DavidDevd/http-server-projeto-korp",
  problem: {
    "pt-BR":
      'Um serviço Go precisa ser provisionado, exposto e observado de forma repetível. "O container subiu" não prova que o serviço funciona, nem que está sendo monitorado.',
    "en-US":
      'A Go service has to be provisioned, exposed and observed repeatably. "The container started" proves neither that the service works nor that it is being monitored.',
  },
  proves: {
    "pt-BR":
      "Que eu trato verificação como parte do deploy: o playbook só termina com sucesso quando a aplicação, o Prometheus e o Grafana confirmam o estado esperado.",
    "en-US":
      "That I treat verification as part of the deploy: the playbook only succeeds once the application, Prometheus and Grafana confirm the expected state.",
  },
  stack: [
    "Go",
    "Docker",
    "Docker Compose",
    "NGINX",
    "Ansible",
    "Prometheus",
    "Grafana",
  ],
  highlights: [
    {
      "pt-BR":
        "Imagem multi-stage com binário estático, usuário non-root, rootfs read-only e HEALTHCHECK.",
      "en-US":
        "Multi-stage image with a static binary, non-root user, read-only rootfs and HEALTHCHECK.",
    },
    {
      "pt-BR":
        "Graceful shutdown em SIGINT/SIGTERM e timeouts de leitura, escrita e idle no http.Server.",
      "en-US":
        "Graceful shutdown on SIGINT/SIGTERM and read, write and idle timeouts on http.Server.",
    },
    {
      "pt-BR":
        "Healthcheck nos 4 serviços; NGINX e Prometheus só sobem com a aplicação saudável.",
      "en-US":
        "Health checks on all 4 services; NGINX and Prometheus only start once the app is healthy.",
    },
    {
      "pt-BR":
        "Datasource e dashboard do Grafana provisionados como código, sem clique manual.",
      "en-US":
        "Grafana datasource and dashboard provisioned as code, with no manual clicks.",
    },
    {
      "pt-BR":
        "Playbook verifica /health, o contrato JSON, target up==1 no Prometheus e o dashboard no Grafana.",
      "en-US":
        "Playbook verifies /health, the JSON contract, target up==1 in Prometheus and the Grafana dashboard.",
    },
  ],
  diagram: {
    width: 800,
    height: 400,
    nodes: [
      {
        id: "client",
        label: "Client",
        sublabel: "HTTP :80",
        kind: "edge",
        x: 90,
        y: 220,
        detail: {
          "pt-BR":
            "Todo tráfego externo entra por uma única porta, a 80. Prometheus e Grafana não são publicados para fora do host.",
          "en-US":
            "All external traffic enters through a single port, 80. Prometheus and Grafana are not published outside the host.",
        },
      },
      {
        id: "nginx",
        label: "NGINX",
        sublabel: "reverse proxy",
        kind: "edge",
        x: 270,
        y: 220,
        detail: {
          "pt-BR":
            "nginx 1.29 alpine com server_tokens off e timeouts de connect/read/send. Tem healthcheck próprio e só inicia depois que a aplicação está healthy.",
          "en-US":
            "nginx 1.29 alpine with server_tokens off and connect/read/send timeouts. Has its own health check and only starts once the app is healthy.",
        },
        evidence: "nginx/conf.d/default.conf",
      },
      {
        id: "app",
        label: "Go service",
        sublabel: ":8080",
        kind: "app",
        x: 470,
        y: 220,
        detail: {
          "pt-BR":
            "Binário estático (CGO off, -trimpath) rodando como non-root em filesystem read-only. Expõe /projeto-korp, /health e /metrics (counter de requisições), com graceful shutdown e testes de handler.",
          "en-US":
            "Static binary (CGO off, -trimpath) running as non-root on a read-only filesystem. Serves /projeto-korp, /health and /metrics (request counter), with graceful shutdown and handler tests.",
        },
        evidence: "main.go",
      },
      {
        id: "ansible",
        label: "Ansible",
        sublabel: "provision + verify",
        kind: "automation",
        x: 470,
        y: 70,
        detail: {
          "pt-BR":
            "Instala o Docker se faltar (Ubuntu), cria a rede, valida o compose e sobe com --wait. Depois prova o resultado: /health, contrato JSON, up==1 no Prometheus, métrica presente e dashboard no Grafana.",
          "en-US":
            "Installs Docker if missing (Ubuntu), creates the network, validates the compose file and starts with --wait. Then proves the result: /health, JSON contract, up==1 in Prometheus, metric present and Grafana dashboard.",
        },
        evidence: "ansible/playbook.yml",
      },
      {
        id: "prometheus",
        label: "Prometheus",
        sublabel: "127.0.0.1:9090",
        kind: "observability",
        x: 690,
        y: 150,
        detail: {
          "pt-BR":
            "Scrape de /metrics a cada 5s, retenção de 7 dias e porta publicada somente em loopback.",
          "en-US":
            "Scrapes /metrics every 5s, keeps 7 days of retention and publishes its port on loopback only.",
        },
        evidence: "prometheus/prometheus.yml",
      },
      {
        id: "grafana",
        label: "Grafana",
        sublabel: "127.0.0.1:3000",
        kind: "observability",
        x: 690,
        y: 300,
        detail: {
          "pt-BR":
            "Datasource e dashboard provisionados por arquivo. Formulário de login desabilitado, acesso anônimo somente leitura e telemetria externa desligada.",
          "en-US":
            "Datasource and dashboard provisioned from files. Login form disabled, anonymous read-only access and outbound telemetry turned off.",
        },
        evidence: "grafana/provisioning/datasources/prometheus.yml",
      },
    ],
    edges: [
      { from: "client", to: "nginx" },
      { from: "nginx", to: "app", label: "proxy" },
      { from: "prometheus", to: "app", label: "scrape" },
      { from: "grafana", to: "prometheus", label: "query" },
      { from: "ansible", to: "app", label: "up --wait", dashed: true },
    ],
  },
  decisions: [
    {
      title: {
        "pt-BR": "O gate do deploy é a verificação ponta a ponta",
        "en-US": "The deploy gate is end-to-end verification",
      },
      context: {
        "pt-BR":
          "Exit code 0 no `docker compose up` só diz que os processos iniciaram.",
        "en-US":
          "Exit code 0 from `docker compose up` only says the processes started.",
      },
      decision: {
        "pt-BR":
          "O playbook consulta a aplicação, a API do Prometheus e a API do Grafana, e falha com asserts explícitos.",
        "en-US":
          "The playbook queries the app, the Prometheus API and the Grafana API, and fails on explicit asserts.",
      },
      alternatives: {
        "pt-BR": "Só compose up; smoke test manual depois do deploy.",
        "en-US": "Compose up only; a manual smoke test after deploying.",
      },
      consequence: {
        "pt-BR":
          "Falhas aparecem no deploy, não no primeiro incidente. Custo: o playbook conhece nomes de métrica e UID do dashboard.",
        "en-US":
          "Failures surface during the deploy, not at the first incident. Cost: the playbook knows metric names and the dashboard UID.",
      },
    },
    {
      title: {
        "pt-BR": "Ordem de subida por saúde, não por sequência",
        "en-US": "Start order by health, not by sequence",
      },
      context: {
        "pt-BR":
          "`depends_on` simples só garante que o container iniciou, não que está pronto.",
        "en-US":
          "Plain `depends_on` only guarantees the container started, not that it is ready.",
      },
      decision: {
        "pt-BR":
          "Healthcheck em todos os serviços e `depends_on` com `condition: service_healthy`.",
        "en-US":
          "Health checks on every service and `depends_on` with `condition: service_healthy`.",
      },
      alternatives: {
        "pt-BR": "Retry dentro do proxy; sleeps em scripts.",
        "en-US": "Retries inside the proxy; sleeps in scripts.",
      },
      consequence: {
        "pt-BR":
          "Nada recebe tráfego antes de estar saudável, e o `--wait` do Compose vira um gate real.",
        "en-US":
          "Nothing receives traffic before it is healthy, and Compose `--wait` becomes a real gate.",
      },
    },
    {
      title: {
        "pt-BR": "Painéis de operação fora da superfície pública",
        "en-US": "Operations dashboards off the public surface",
      },
      context: {
        "pt-BR":
          "Prometheus e Grafana expostos são alvos comuns e não precisam estar na internet.",
        "en-US":
          "Exposed Prometheus and Grafana are common targets and do not need to be on the internet.",
      },
      decision: {
        "pt-BR":
          "Portas publicadas só em 127.0.0.1; Grafana sem formulário de login e com papel anônimo Viewer.",
        "en-US":
          "Ports published on 127.0.0.1 only; Grafana without a login form and an anonymous Viewer role.",
      },
      alternatives: {
        "pt-BR": "Publicar em 0.0.0.0 protegido por senha.",
        "en-US": "Publish on 0.0.0.0 behind a password.",
      },
      consequence: {
        "pt-BR":
          "Zero exposição externa; o acesso remoto é feito por túnel SSH.",
        "en-US":
          "Zero external exposure; remote access goes through an SSH tunnel.",
      },
    },
  ],
  tradeoffs: [
    {
      "pt-BR":
        "O NGINX encaminha `location /` inteiro, então `/metrics` também responde na porta 80. Em produção eu criaria uma location dedicada restringindo `/metrics` à rede interna.",
      "en-US":
        "NGINX forwards the whole `location /`, so `/metrics` also answers on port 80. In production I would add a dedicated location restricting `/metrics` to the internal network.",
    },
    {
      "pt-BR":
        "A rede Docker é externa e criada pelo playbook: o Compose sozinho não sobe sem ela. É um acoplamento intencional com a automação.",
      "en-US":
        "The Docker network is external and created by the playbook, so Compose alone will not start without it. It is an intentional coupling with the automation.",
    },
    {
      "pt-BR":
        "Host único, sem redundância: é um ambiente reprodutível, não alta disponibilidade.",
      "en-US":
        "Single host with no redundancy: it is a reproducible environment, not high availability.",
    },
  ],
  failureModes: [
    {
      symptom: {
        "pt-BR": "NGINX responde 502 Bad Gateway",
        "en-US": "NGINX returns 502 Bad Gateway",
      },
      cause: {
        "pt-BR":
          "Aplicação unhealthy, reiniciando, ou nome de serviço errado no `proxy_pass`.",
        "en-US":
          "App unhealthy or restarting, or a wrong service name in `proxy_pass`.",
      },
      diagnose: {
        "pt-BR":
          "`docker compose ps` → `docker compose logs http-server-projeto-korp` → `wget` no `/health` de dentro do container do NGINX.",
        "en-US":
          "`docker compose ps` → `docker compose logs http-server-projeto-korp` → `wget /health` from inside the NGINX container.",
      },
      fix: {
        "pt-BR":
          "Corrigir a aplicação ou o upstream; a dependência por saúde evita que o proxy suba antes.",
        "en-US":
          "Fix the app or the upstream; the health dependency keeps the proxy from starting first.",
      },
    },
    {
      symptom: {
        "pt-BR": "Target DOWN no Prometheus (`up == 0`)",
        "en-US": "Target DOWN in Prometheus (`up == 0`)",
      },
      cause: {
        "pt-BR":
          "Target com nome ou porta errados, ou serviço fora da mesma rede.",
        "en-US":
          "Wrong target name or port, or the service is not on the same network.",
      },
      diagnose: {
        "pt-BR":
          "Página `/targets` e `curl 127.0.0.1:9090/api/v1/query?query=up`.",
        "en-US":
          "The `/targets` page and `curl 127.0.0.1:9090/api/v1/query?query=up`.",
      },
      fix: {
        "pt-BR":
          "Ajustar `scrape_configs`. O playbook já falha nesse cenário em vez de declarar sucesso.",
        "en-US":
          "Adjust `scrape_configs`. The playbook already fails in this scenario instead of reporting success.",
      },
    },
    {
      symptom: {
        "pt-BR":
          "Compose falha: `network declared as external, but could not be found`",
        "en-US":
          "Compose fails: `network declared as external, but could not be found`",
      },
      cause: {
        "pt-BR":
          "Compose executado manualmente, sem o playbook que cria a rede.",
        "en-US":
          "Compose run by hand, without the playbook that creates the network.",
      },
      diagnose: {
        "pt-BR": "`docker network ls`",
        "en-US": "`docker network ls`",
      },
      fix: {
        "pt-BR":
          "Rodar o playbook ou `docker network create --driver bridge projeto-korp-network`.",
        "en-US":
          "Run the playbook or `docker network create --driver bridge projeto-korp-network`.",
      },
    },
  ],
  productionNext: [
    {
      "pt-BR": "Restringir `/metrics` no NGINX e terminar TLS no edge.",
      "en-US": "Restrict `/metrics` in NGINX and terminate TLS at the edge.",
    },
    {
      "pt-BR": "Regras de alerta (`up == 0`, taxa de 5xx) com Alertmanager.",
      "en-US": "Alert rules (`up == 0`, 5xx rate) with Alertmanager.",
    },
    {
      "pt-BR":
        "CI no repositório: `go test`, `go vet`, `ansible-lint`, build e scan da imagem.",
      "en-US":
        "CI in the repository: `go test`, `go vet`, `ansible-lint`, image build and scan.",
    },
    {
      "pt-BR": "Imagem publicada em registry com tag imutável por SHA.",
      "en-US": "Image published to a registry with an immutable SHA tag.",
    },
  ],
  evidence: [
    {
      label: {
        "pt-BR": "Playbook com verificação",
        "en-US": "Verifying playbook",
      },
      path: "ansible/playbook.yml",
    },
    {
      label: {
        "pt-BR": "Compose com healthchecks",
        "en-US": "Compose with health checks",
      },
      path: "compose.yaml",
    },
    {
      label: {
        "pt-BR": "Dockerfile endurecido",
        "en-US": "Hardened Dockerfile",
      },
      path: "Dockerfile",
    },
    {
      label: { "pt-BR": "Testes dos handlers", "en-US": "Handler tests" },
      path: "main_test.go",
    },
    {
      label: { "pt-BR": "Dashboard como código", "en-US": "Dashboard as code" },
      path: "grafana/dashboards/projeto-korp.json",
    },
  ],
};

const terraform: CaseStudy = {
  slug: "aws-multi-environment-iac",
  shortTitle: "AWS IaC",
  title: {
    "pt-BR": "AWS Multi-Environment IaC",
    "en-US": "AWS Multi-Environment IaC",
  },
  tagline: {
    "pt-BR":
      "Uma arquitetura, três ambientes, zero estado compartilhado: as diferenças entre dev e prod são explícitas no código.",
    "en-US":
      "One architecture, three environments, zero shared state: the differences between dev and prod are explicit in code.",
  },
  category: {
    "pt-BR": "Terraform · AWS · Segurança",
    "en-US": "Terraform · AWS · Security",
  },
  repository:
    "https://github.com/DavidDevd/Configuracao-de-Infraestrutura-Multi-Ambiente",
  problem: {
    "pt-BR":
      "Dev, staging e prod precisam da mesma arquitetura com custos, acesso e proteção diferentes, sem que um apply em dev consiga tocar o estado de produção.",
    "en-US":
      "Dev, staging and prod need the same architecture with different cost, access and protection, without a dev apply being able to touch production state.",
  },
  proves: {
    "pt-BR":
      "Que eu desenho infraestrutura com limites de blast radius, acesso sem SSH em produção e segurança da instância por padrão.",
    "en-US":
      "That I design infrastructure with blast-radius boundaries, SSH-free production access and instance security by default.",
  },
  stack: [
    "Terraform",
    "AWS",
    "VPC",
    "ALB",
    "EC2 Auto Scaling",
    "IAM",
    "SSM",
    "CloudWatch",
    "S3",
    "DynamoDB",
  ],
  highlights: [
    {
      "pt-BR":
        "4 módulos reutilizáveis (vpc, security_groups, alb, ec2) consumidos por 3 ambientes.",
      "en-US":
        "4 reusable modules (vpc, security_groups, alb, ec2) consumed by 3 environments.",
    },
    {
      "pt-BR":
        "Remote state em S3 criptografado, com chave por ambiente e lock em DynamoDB.",
      "en-US":
        "Remote state in encrypted S3, one key per environment and a DynamoDB lock.",
    },
    {
      "pt-BR":
        "IMDSv2 obrigatório, EBS gp3 criptografado e instâncias sem IP público em subnets privadas.",
      "en-US":
        "IMDSv2 required, encrypted gp3 EBS and instances without public IPs in private subnets.",
    },
    {
      "pt-BR":
        "Produção sem SSH (somente SSM Session Manager), com deletion protection e monitoramento detalhado.",
      "en-US":
        "Production without SSH (SSM Session Manager only), with deletion protection and detailed monitoring.",
    },
    {
      "pt-BR":
        "default_tags com Project, Environment, Owner e CostCenter para rastrear custo.",
      "en-US":
        "default_tags with Project, Environment, Owner and CostCenter for cost tracking.",
    },
  ],
  diagram: {
    width: 800,
    height: 400,
    nodes: [
      {
        id: "internet",
        label: "Internet",
        sublabel: "HTTP/HTTPS",
        kind: "edge",
        x: 90,
        y: 170,
        detail: {
          "pt-BR":
            "Usuários chegam apenas pelo ALB. Nenhuma instância tem IP público.",
          "en-US": "Users only reach the ALB. No instance has a public IP.",
        },
      },
      {
        id: "alb",
        label: "ALB",
        sublabel: "public subnets",
        kind: "edge",
        x: 280,
        y: 170,
        detail: {
          "pt-BR":
            "Health check no path da aplicação. Com certificado, HTTP redireciona para HTTPS. Em prod: deletion protection e access logs em S3 quando o bucket é informado.",
          "en-US":
            "Health check on the application path. With a certificate, HTTP redirects to HTTPS. In prod: deletion protection and S3 access logs when a bucket is provided.",
        },
        evidence: "terraform-project/modules/alb/main.tf",
      },
      {
        id: "asg",
        label: "EC2 Auto Scaling",
        sublabel: "private subnets",
        kind: "app",
        x: 490,
        y: 170,
        detail: {
          "pt-BR":
            "Launch template Amazon Linux 2023 com IMDSv2 obrigatório, EBS gp3 criptografado, health check do tipo ELB e create_before_destroy.",
          "en-US":
            "Amazon Linux 2023 launch template with IMDSv2 required, encrypted gp3 EBS, ELB-type health checks and create_before_destroy.",
        },
        evidence: "terraform-project/modules/ec2/main.tf",
      },
      {
        id: "cloudwatch",
        label: "CloudWatch",
        sublabel: "CPU alarms",
        kind: "observability",
        x: 690,
        y: 80,
        detail: {
          "pt-BR":
            "Alarmes de CPU acionam políticas de scaling de ±1 instância (prod: sobe com ≥60%, desce com ≤25%). O agent é instalado via user_data.",
          "en-US":
            "CPU alarms trigger ±1-instance scaling policies (prod: up at ≥60%, down at ≤25%). The agent is installed through user_data.",
        },
        evidence: "terraform-project/modules/ec2/main.tf",
      },
      {
        id: "ssm",
        label: "SSM",
        sublabel: "no SSH in prod",
        kind: "automation",
        x: 690,
        y: 250,
        detail: {
          "pt-BR":
            "Acesso administrativo via Session Manager com IAM, auditável. Em prod, `enable_ssh = false`; em dev o SSH fica restrito a CIDRs de desenvolvedores.",
          "en-US":
            "Admin access through Session Manager with IAM, auditable. In prod `enable_ssh = false`; in dev SSH is limited to developer CIDRs.",
        },
        evidence: "terraform-project/environments/prod/main.tf",
      },
      {
        id: "nat",
        label: "NAT Gateway",
        sublabel: "egress",
        kind: "cloud",
        x: 490,
        y: 330,
        detail: {
          "pt-BR":
            "Saída para a internet das subnets privadas. Ligado em prod e desligado em dev para economizar custo.",
          "en-US":
            "Internet egress for private subnets. On in prod and off in dev to save cost.",
        },
        evidence: "terraform-project/modules/vpc/main.tf",
      },
      {
        id: "state",
        label: "S3 + DynamoDB",
        sublabel: "state + lock",
        kind: "data",
        x: 190,
        y: 330,
        detail: {
          "pt-BR":
            "Backend por ambiente (dev/, staging/, prod/ como chaves), state criptografado e lock contra applies concorrentes.",
          "en-US":
            "Per-environment backend (dev/, staging/, prod/ keys), encrypted state and a lock against concurrent applies.",
        },
        evidence: "terraform-project/environments/prod/main.tf",
      },
    ],
    edges: [
      { from: "internet", to: "alb" },
      { from: "alb", to: "asg", label: "app_port" },
      { from: "cloudwatch", to: "asg", label: "scale ±1" },
      { from: "ssm", to: "asg", label: "session", dashed: true },
      { from: "asg", to: "nat", label: "egress" },
    ],
  },
  decisions: [
    {
      title: {
        "pt-BR": "Isolamento por diretório e state próprio",
        "en-US": "Isolation by directory and dedicated state",
      },
      context: {
        "pt-BR":
          "Um state compartilhado transforma qualquer erro em dev em risco para prod.",
        "en-US": "A shared state turns any dev mistake into a risk for prod.",
      },
      decision: {
        "pt-BR":
          "Um diretório e uma chave de backend por ambiente, todos consumindo os mesmos módulos.",
        "en-US":
          "One directory and one backend key per environment, all consuming the same modules.",
      },
      alternatives: {
        "pt-BR":
          "Terraform workspaces; um único state com for_each por ambiente.",
        "en-US":
          "Terraform workspaces; a single state with for_each per environment.",
      },
      consequence: {
        "pt-BR":
          "Blast radius limitado a um ambiente e diferenças visíveis no review. Custo: um pouco de repetição entre os main.tf.",
        "en-US":
          "Blast radius limited to one environment and differences visible in review. Cost: some repetition across main.tf files.",
      },
    },
    {
      title: {
        "pt-BR": "Produção sem porta 22",
        "en-US": "Production without port 22",
      },
      context: {
        "pt-BR":
          "Chaves SSH e bastions são superfície de ataque e difíceis de auditar.",
        "en-US": "SSH keys and bastions are attack surface and hard to audit.",
      },
      decision: {
        "pt-BR":
          "SSM Session Manager via role IAM da instância, mais IMDSv2 obrigatório.",
        "en-US":
          "SSM Session Manager through the instance IAM role, plus mandatory IMDSv2.",
      },
      alternatives: {
        "pt-BR": "Bastion host; SSH com key pair restrito por IP.",
        "en-US": "Bastion host; SSH with an IP-restricted key pair.",
      },
      consequence: {
        "pt-BR":
          "Nenhuma porta administrativa aberta e acesso registrado por identidade.",
        "en-US": "No admin port open, and access is logged per identity.",
      },
    },
    {
      title: {
        "pt-BR": "Custo e proteção como parâmetros explícitos",
        "en-US": "Cost and protection as explicit parameters",
      },
      context: {
        "pt-BR":
          "Ambientes iguais em tudo custam caro; diferentes por acaso causam surpresas.",
        "en-US":
          "Identical environments are expensive; accidentally different ones cause surprises.",
      },
      decision: {
        "pt-BR":
          "NAT, deletion protection, log level e detailed monitoring são variáveis com valor declarado em cada ambiente.",
        "en-US":
          "NAT, deletion protection, log level and detailed monitoring are variables with a declared value per environment.",
      },
      alternatives: {
        "pt-BR": "Copiar e editar recursos por ambiente.",
        "en-US": "Copy and edit resources per environment.",
      },
      consequence: {
        "pt-BR": "Cada diferença é intencional, comentada e revisável no diff.",
        "en-US":
          "Every difference is intentional, commented and reviewable in the diff.",
      },
    },
  ],
  tradeoffs: [
    {
      "pt-BR":
        "Um único NAT Gateway economiza custo, mas é ponto único de falha por AZ. Em produção real eu usaria um NAT por AZ.",
      "en-US":
        "A single NAT Gateway saves cost but is a single point of failure per AZ. In real production I would run one NAT per AZ.",
    },
    {
      "pt-BR":
        "Em dev, sem NAT, as subnets privadas ficam sem rota de saída e o `yum update` do `user_data` não alcança os repositórios. Correção barata: VPC endpoint (gateway S3).",
      "en-US":
        "In dev, without NAT, private subnets have no egress route and the `user_data` `yum update` cannot reach the repositories. Cheap fix: a VPC endpoint (S3 gateway).",
    },
    {
      "pt-BR":
        "O segredo lido via data source do Secrets Manager fica gravado no state. Por isso o state é criptografado e o acesso ao bucket precisa ser restrito.",
      "en-US":
        "The secret read through the Secrets Manager data source ends up in state. That is why state is encrypted and bucket access must be restricted.",
    },
    {
      "pt-BR":
        "O ASG usa launch template `$Latest` sem instance refresh: uma nova versão não substitui as instâncias que já estão rodando.",
      "en-US":
        "The ASG uses launch template `$Latest` without instance refresh: a new version does not replace running instances.",
    },
  ],
  failureModes: [
    {
      symptom: {
        "pt-BR": "`terraform init` falha no backend",
        "en-US": "`terraform init` fails on the backend",
      },
      cause: {
        "pt-BR": "Bucket S3 ou tabela DynamoDB do backend ainda não existem.",
        "en-US": "The backend S3 bucket or DynamoDB table does not exist yet.",
      },
      diagnose: {
        "pt-BR": "`aws s3api head-bucket` e `aws dynamodb describe-table`.",
        "en-US": "`aws s3api head-bucket` and `aws dynamodb describe-table`.",
      },
      fix: {
        "pt-BR":
          "Criar o backend numa stack de bootstrap separada, antes dos ambientes.",
        "en-US":
          "Create the backend in a separate bootstrap stack, before the environments.",
      },
    },
    {
      symptom: {
        "pt-BR": "Targets unhealthy e instâncias substituídas em loop",
        "en-US": "Unhealthy targets and instances replaced in a loop",
      },
      cause: {
        "pt-BR":
          "App não responde no `health_check_path`, SG não libera o ALB ou o grace period é curto.",
        "en-US":
          "App not answering on `health_check_path`, SG not allowing the ALB, or a short grace period.",
      },
      diagnose: {
        "pt-BR":
          "`aws elbv2 describe-target-health`; sessão SSM e `curl localhost:$APP_PORT` na instância.",
        "en-US":
          "`aws elbv2 describe-target-health`; SSM session and `curl localhost:$APP_PORT` on the instance.",
      },
      fix: {
        "pt-BR":
          "Corrigir path, porta ou SG. Com health check tipo ELB, o ASG amplifica o problema.",
        "en-US":
          "Fix the path, port or SG. With ELB health checks the ASG amplifies the problem.",
      },
    },
    {
      symptom: {
        "pt-BR": "`Error acquiring the state lock`",
        "en-US": "`Error acquiring the state lock`",
      },
      cause: {
        "pt-BR": "Apply concorrente ou execução anterior interrompida.",
        "en-US": "A concurrent apply or an interrupted previous run.",
      },
      diagnose: {
        "pt-BR": "Lock ID na mensagem e o item correspondente no DynamoDB.",
        "en-US": "The lock ID in the message and the matching DynamoDB item.",
      },
      fix: {
        "pt-BR":
          "Confirmar que nada está rodando e só então `terraform force-unlock <ID>`.",
        "en-US":
          "Confirm nothing is running, and only then `terraform force-unlock <ID>`.",
      },
    },
  ],
  productionNext: [
    {
      "pt-BR":
        "CI com fmt, validate, tflint e checkov, e o plan comentado no pull request.",
      "en-US":
        "CI with fmt, validate, tflint and checkov, and the plan posted on the pull request.",
    },
    {
      "pt-BR":
        "Target tracking no lugar de step scaling, mais instance refresh no ASG.",
      "en-US":
        "Target tracking instead of step scaling, plus ASG instance refresh.",
    },
    {
      "pt-BR":
        "Um NAT por AZ em prod e VPC endpoints para tráfego AWS interno.",
      "en-US":
        "One NAT per AZ in prod and VPC endpoints for internal AWS traffic.",
    },
    {
      "pt-BR": "Applies via OIDC a partir do CI, sem credenciais locais.",
      "en-US": "Applies through OIDC from CI, without local credentials.",
    },
  ],
  evidence: [
    {
      label: {
        "pt-BR": "Ambiente de produção",
        "en-US": "Production environment",
      },
      path: "terraform-project/environments/prod/main.tf",
    },
    {
      label: { "pt-BR": "Ambiente de dev", "en-US": "Dev environment" },
      path: "terraform-project/environments/dev/main.tf",
    },
    {
      label: { "pt-BR": "Módulo EC2 / ASG", "en-US": "EC2 / ASG module" },
      path: "terraform-project/modules/ec2/main.tf",
    },
    {
      label: { "pt-BR": "Módulo VPC", "en-US": "VPC module" },
      path: "terraform-project/modules/vpc/main.tf",
    },
    {
      label: { "pt-BR": "Módulo ALB", "en-US": "ALB module" },
      path: "terraform-project/modules/alb/main.tf",
    },
  ],
};

const cicd: CaseStudy = {
  slug: "aws-ci-cd-pipeline",
  shortTitle: "AWS CI/CD",
  title: { "pt-BR": "AWS CI/CD Pipeline", "en-US": "AWS CI/CD Pipeline" },
  tagline: {
    "pt-BR":
      "Do push ao App Runner sem nenhuma chave AWS no repositório, e produção só depois de dev provar saúde.",
    "en-US":
      "From push to App Runner without a single AWS key in the repository, and production only after dev proves it is healthy.",
  },
  category: {
    "pt-BR": "CI/CD · AWS · Supply chain",
    "en-US": "CI/CD · AWS · Supply chain",
  },
  repository: "https://github.com/DavidDevd/devops.ci.api",
  problem: {
    "pt-BR":
      "Entrega manual não é rastreável nem repetível, e credenciais estáticas no CI são o vazamento mais comum de contas cloud.",
    "en-US":
      "Manual delivery is neither traceable nor repeatable, and static CI credentials are the most common cloud account leak.",
  },
  proves: {
    "pt-BR":
      "Que eu construo pipelines com promoção condicionada, credenciais de curta duração e artefatos rastreáveis até o commit.",
    "en-US":
      "That I build pipelines with gated promotion, short-lived credentials and artifacts traceable to the commit.",
  },
  stack: [
    "GitHub Actions",
    "AWS IAM (OIDC)",
    "Amazon ECR",
    "AWS App Runner",
    "Docker",
    "Pytest",
    "FastAPI",
  ],
  highlights: [
    {
      "pt-BR":
        "6 jobs encadeados: test → build dev → deploy dev → health dev → build prod → deploy prod.",
      "en-US":
        "6 chained jobs: test → build dev → deploy dev → health dev → build prod → deploy prod.",
    },
    {
      "pt-BR":
        "Autenticação AWS por OIDC, com roles separadas para dev e prod. Nenhum secret de longa duração.",
      "en-US":
        "AWS authentication via OIDC, with separate dev and prod roles. No long-lived secret.",
    },
    {
      "pt-BR":
        "Imagem com tag do SHA curto do commit: cada deploy é rastreável até a mudança que o gerou.",
      "en-US":
        "Image tagged with the short commit SHA: every deploy traces back to the change that produced it.",
    },
    {
      "pt-BR":
        "Deploy idempotente: cria o serviço se não existir, senão atualiza, e espera RUNNING com timeout.",
      "en-US":
        "Idempotent deploy: creates the service if missing, otherwise updates it, and waits for RUNNING with a timeout.",
    },
    {
      "pt-BR": "Filtro de paths: mudanças só em docs não disparam deploy.",
      "en-US": "Path filters: docs-only changes do not trigger a deploy.",
    },
  ],
  diagram: {
    width: 800,
    height: 400,
    nodes: [
      {
        id: "push",
        label: "git push",
        sublabel: "main · paths filter",
        kind: "delivery",
        x: 90,
        y: 110,
        detail: {
          "pt-BR":
            "O workflow só dispara para mudanças em app/, tests/, Dockerfile ou no próprio workflow.",
          "en-US":
            "The workflow only runs for changes in app/, tests/, the Dockerfile or the workflow itself.",
        },
        evidence: ".github/workflows/ci-cd.yml",
      },
      {
        id: "test",
        label: "pytest",
        sublabel: "gate",
        kind: "delivery",
        x: 250,
        y: 110,
        detail: {
          "pt-BR":
            "Os testes rodam antes de qualquer build. Falhou, nada é publicado.",
          "en-US":
            "Tests run before any build. If they fail, nothing is published.",
        },
        evidence: "tests/test_main.py",
      },
      {
        id: "ecrdev",
        label: "ECR dev",
        sublabel: "tag = short SHA",
        kind: "cloud",
        x: 410,
        y: 110,
        detail: {
          "pt-BR":
            "Build e push da imagem com a tag do commit, usando a role dev-ecr-role assumida via OIDC.",
          "en-US":
            "Image build and push with the commit tag, using dev-ecr-role assumed through OIDC.",
        },
      },
      {
        id: "runnerdev",
        label: "App Runner dev",
        sublabel: "create or update",
        kind: "cloud",
        x: 570,
        y: 110,
        detail: {
          "pt-BR":
            "Cria ou atualiza o serviço e faz polling até `RUNNING`. Estados `*_FAILED` derrubam o job.",
          "en-US":
            "Creates or updates the service and polls until `RUNNING`. `*_FAILED` states fail the job.",
        },
      },
      {
        id: "health",
        label: "Health check",
        sublabel: "GET /health = 200",
        kind: "observability",
        x: 710,
        y: 230,
        detail: {
          "pt-BR":
            "Valida a URL real do serviço em dev. Sem 200, produção não começa.",
          "en-US":
            "Validates the real dev service URL. Without a 200, production does not start.",
        },
      },
      {
        id: "runnerprod",
        label: "App Runner prod",
        sublabel: "prod-ecr-role",
        kind: "cloud",
        x: 470,
        y: 330,
        detail: {
          "pt-BR":
            "Build, push e deploy de produção com role e repositório ECR próprios.",
          "en-US":
            "Production build, push and deploy with its own role and ECR repository.",
        },
      },
      {
        id: "oidc",
        label: "GitHub OIDC",
        sublabel: "→ IAM roles",
        kind: "automation",
        x: 200,
        y: 300,
        detail: {
          "pt-BR":
            "`permissions: id-token: write`. Cada job troca o token OIDC por credenciais temporárias da role do ambiente.",
          "en-US":
            "`permissions: id-token: write`. Each job exchanges the OIDC token for temporary credentials of the environment role.",
        },
        evidence: ".github/workflows/ci-cd.yml",
      },
    ],
    edges: [
      { from: "push", to: "test" },
      { from: "test", to: "ecrdev" },
      { from: "ecrdev", to: "runnerdev" },
      { from: "runnerdev", to: "health" },
      { from: "health", to: "runnerprod", label: "gate" },
      { from: "oidc", to: "ecrdev", label: "assume role", dashed: true },
      { from: "oidc", to: "runnerprod", dashed: true },
    ],
  },
  decisions: [
    {
      title: {
        "pt-BR": "OIDC em vez de chaves estáticas",
        "en-US": "OIDC instead of static keys",
      },
      context: {
        "pt-BR":
          "AWS_ACCESS_KEY em secrets do CI não expira e vale para tudo que a chave permite.",
        "en-US":
          "AWS_ACCESS_KEY in CI secrets never expires and is valid for everything the key allows.",
      },
      decision: {
        "pt-BR": "Federação OIDC do GitHub com uma role por ambiente.",
        "en-US": "GitHub OIDC federation with one role per environment.",
      },
      alternatives: {
        "pt-BR":
          "Access keys de um usuário IAM; uma role única para todos os ambientes.",
        "en-US": "IAM user access keys; a single role for every environment.",
      },
      consequence: {
        "pt-BR":
          "Não existe segredo para vazar, e o job de dev não consegue escrever em prod.",
        "en-US":
          "There is no secret to leak, and the dev job cannot write to prod.",
      },
    },
    {
      title: {
        "pt-BR": "Dev como gate de produção",
        "en-US": "Dev as the production gate",
      },
      context: {
        "pt-BR":
          "Build verde não garante que o serviço sobe e responde no ambiente real.",
        "en-US":
          "A green build does not guarantee the service starts and answers in a real environment.",
      },
      decision: {
        "pt-BR": "Os jobs de produção dependem (needs) do health check de dev.",
        "en-US": "Production jobs depend (needs) on the dev health check.",
      },
      alternatives: {
        "pt-BR": "Deploy paralelo dos ambientes; deploy direto em prod.",
        "en-US": "Parallel environment deploys; deploying straight to prod.",
      },
      consequence: {
        "pt-BR":
          "Uma imagem quebrada para em dev. Custo: o lead time de prod inclui a espera de dev.",
        "en-US":
          "A broken image stops at dev. Cost: prod lead time includes the dev wait.",
      },
    },
  ],
  tradeoffs: [
    {
      "pt-BR":
        "Prod faz um novo build em vez de promover a imagem validada em dev, então o artefato de prod não é byte a byte o testado. A correção é build once, promote by digest.",
      "en-US":
        "Prod runs a fresh build instead of promoting the image validated in dev, so the prod artifact is not byte-for-byte the tested one. The fix is build once, promote by digest.",
    },
    {
      "pt-BR":
        "O health check espera um `sleep 60` fixo; polling com timeout seria mais rápido e mais confiável.",
      "en-US":
        "The health check waits on a fixed `sleep 60`; polling with a timeout would be faster and more reliable.",
    },
    {
      "pt-BR":
        "Produção não tem health check pós-deploy nem aprovação manual (environment protection).",
      "en-US":
        "Production has no post-deploy health check and no manual approval (environment protection).",
    },
    {
      "pt-BR": "O Dockerfile roda como root e sem multi-stage.",
      "en-US": "The Dockerfile runs as root and without multi-stage.",
    },
  ],
  failureModes: [
    {
      symptom: {
        "pt-BR": "`Not authorized to perform sts:AssumeRoleWithWebIdentity`",
        "en-US": "`Not authorized to perform sts:AssumeRoleWithWebIdentity`",
      },
      cause: {
        "pt-BR":
          "Trust policy não bate com o repositório/branch (claim `sub`) ou falta `id-token: write`.",
        "en-US":
          "Trust policy does not match the repository/branch (`sub` claim), or `id-token: write` is missing.",
      },
      diagnose: {
        "pt-BR":
          "Comparar a condição `token.actions.githubusercontent.com:sub` da role com o contexto do job.",
        "en-US":
          "Compare the role's `token.actions.githubusercontent.com:sub` condition with the job context.",
      },
      fix: {
        "pt-BR":
          "Ajustar a trust policy, sempre restrita ao repositório e ao branch.",
        "en-US":
          "Fix the trust policy, always scoped to the repository and branch.",
      },
    },
    {
      symptom: {
        "pt-BR": "App Runner em `OPERATION_FAILED`",
        "en-US": "App Runner in `OPERATION_FAILED`",
      },
      cause: {
        "pt-BR": "Porta errada, app que não sobe ou role sem acesso ao ECR.",
        "en-US":
          "Wrong port, an app that fails to start, or a role without ECR access.",
      },
      diagnose: {
        "pt-BR": "Logs de serviço e de aplicação do App Runner no CloudWatch.",
        "en-US": "App Runner service and application logs in CloudWatch.",
      },
      fix: {
        "pt-BR":
          "Corrigir e reexecutar. O job falha explicitamente em vez de seguir para prod.",
        "en-US":
          "Fix and re-run. The job fails explicitly instead of moving on to prod.",
      },
    },
    {
      symptom: {
        "pt-BR": "Health check de dev ≠ 200",
        "en-US": "Dev health check ≠ 200",
      },
      cause: {
        "pt-BR": "Regressão funcional ou serviço ainda inicializando.",
        "en-US": "A functional regression, or the service is still starting.",
      },
      diagnose: {
        "pt-BR": "curl na URL de dev e logs do serviço.",
        "en-US": "curl the dev URL and read the service logs.",
      },
      fix: {
        "pt-BR":
          "Comportamento esperado: produção fica bloqueada até a correção.",
        "en-US": "Expected behaviour: production stays blocked until the fix.",
      },
    },
  ],
  productionNext: [
    {
      "pt-BR":
        "Build once, promote: copiar a imagem por digest de dev para prod.",
      "en-US":
        "Build once, promote: copy the image by digest from dev to prod.",
    },
    {
      "pt-BR":
        "Environment protection com aprovação, mais health check e rollback em prod.",
      "en-US":
        "Environment protection with approval, plus prod health check and rollback.",
    },
    {
      "pt-BR":
        "Dockerfile multi-stage non-root e scan com Trivy antes do push.",
      "en-US": "Multi-stage non-root Dockerfile and a Trivy scan before push.",
    },
    {
      "pt-BR": "Contas AWS separadas por ambiente (AWS Organizations).",
      "en-US": "Separate AWS accounts per environment (AWS Organizations).",
    },
  ],
  evidence: [
    {
      label: { "pt-BR": "Workflow completo", "en-US": "Full workflow" },
      path: ".github/workflows/ci-cd.yml",
    },
    {
      label: { "pt-BR": "Testes da API", "en-US": "API tests" },
      path: "tests/test_main.py",
    },
    {
      label: { "pt-BR": "Dockerfile", "en-US": "Dockerfile" },
      path: "Dockerfile",
    },
  ],
};

const kubernetes: CaseStudy = {
  slug: "kubernetes-application-stack",
  shortTitle: "Kubernetes",
  title: {
    "pt-BR": "Kubernetes Application Stack",
    "en-US": "Kubernetes Application Stack",
  },
  tagline: {
    "pt-BR":
      "API e banco orquestrados em Kind. Inclui o bug que eu encontrei revisando os próprios probes.",
    "en-US":
      "API and database orchestrated on Kind, including the bug I found reviewing my own probes.",
  },
  category: {
    "pt-BR": "Kubernetes · Confiabilidade",
    "en-US": "Kubernetes · Reliability",
  },
  repository: "https://github.com/DavidDevd/desafio-kubernetes",
  problem: {
    "pt-BR":
      "Rodar aplicação, banco, configuração e persistência num cluster com descoberta de serviço, limites de recurso e escala automática.",
    "en-US":
      "Run an application, database, configuration and persistence on a cluster with service discovery, resource limits and autoscaling.",
  },
  proves: {
    "pt-BR":
      "Que eu entendo as primitivas do Kubernetes e sei auditar se elas realmente protegem o serviço, não só declarar YAML.",
    "en-US":
      "That I understand Kubernetes primitives and can audit whether they actually protect the service, not just declare YAML.",
  },
  stack: [
    "Kubernetes",
    "Kind",
    "Docker",
    "FastAPI",
    "PostgreSQL",
    "HPA",
    "ConfigMap",
    "Secret",
    "PV/PVC",
  ],
  highlights: [
    {
      "pt-BR": "Cluster Kind com 1 control-plane e 2 workers.",
      "en-US": "Kind cluster with 1 control plane and 2 workers.",
    },
    {
      "pt-BR":
        "API e banco em namespaces separados, com DNS entre namespaces (`postgres-svc.desafio-db.svc.cluster.local`).",
      "en-US":
        "API and database in separate namespaces, using cross-namespace DNS (`postgres-svc.desafio-db.svc.cluster.local`).",
    },
    {
      "pt-BR":
        "Requests e limits definidos: pré-requisito para o HPA por CPU (65%, de 1 a 5 réplicas).",
      "en-US":
        "Requests and limits defined: a prerequisite for CPU-based HPA (65%, 1 to 5 replicas).",
    },
    {
      "pt-BR":
        "Secrets fora do Git: só arquivos `*.example.yaml` são versionados.",
      "en-US":
        "Secrets kept out of Git: only `*.example.yaml` files are committed.",
    },
  ],
  diagram: {
    width: 800,
    height: 400,
    nodes: [
      {
        id: "client",
        label: "Client",
        sublabel: "port-forward",
        kind: "edge",
        x: 90,
        y: 170,
        detail: {
          "pt-BR":
            "Acesso de laboratório via kubectl port-forward para o Service da API.",
          "en-US":
            "Lab access through kubectl port-forward to the API Service.",
        },
      },
      {
        id: "apisvc",
        label: "api-svc",
        sublabel: "ClusterIP :80",
        kind: "edge",
        x: 260,
        y: 170,
        detail: {
          "pt-BR":
            "Service ClusterIP que encaminha a porta 80 para o containerPort 8000 dos pods da API.",
          "en-US":
            "ClusterIP Service forwarding port 80 to the API pods' containerPort 8000.",
        },
        evidence: "api-deployment.yaml",
      },
      {
        id: "api",
        label: "FastAPI",
        sublabel: "desafio-api",
        kind: "app",
        x: 450,
        y: 170,
        detail: {
          "pt-BR":
            "Deployment com requests/limits e liveness/readiness em `/status`. Configuração via ConfigMap e credenciais via Secret (envFrom).",
          "en-US":
            "Deployment with requests/limits and liveness/readiness on `/status`. Config from a ConfigMap and credentials from a Secret (envFrom).",
        },
        evidence: "api-deployment.yaml",
      },
      {
        id: "hpa",
        label: "HPA",
        sublabel: "CPU 65% · 1–5",
        kind: "observability",
        x: 450,
        y: 50,
        detail: {
          "pt-BR":
            "autoscaling/v2 por utilização de CPU. Depende do metrics-server, que o Kind não instala por padrão.",
          "en-US":
            "autoscaling/v2 on CPU utilisation. Depends on metrics-server, which Kind does not install by default.",
        },
        evidence: "api-hpa.yaml",
      },
      {
        id: "dbsvc",
        label: "postgres-svc",
        sublabel: "desafio-db",
        kind: "data",
        x: 640,
        y: 170,
        detail: {
          "pt-BR":
            "Service ClusterIP no namespace do banco, resolvido pela API via FQDN.",
          "en-US":
            "ClusterIP Service in the database namespace, resolved by the API through its FQDN.",
        },
        evidence: "db-deployment.yaml",
      },
      {
        id: "pvc",
        label: "PostgreSQL + PVC",
        sublabel: "hostPath (lab)",
        kind: "data",
        x: 640,
        y: 320,
        detail: {
          "pt-BR":
            "postgres:15 como Deployment, com dados num PV hostPath. Adequado ao laboratório, não a produção.",
          "en-US":
            "postgres:15 as a Deployment, with data on a hostPath PV. Fine for a lab, not for production.",
        },
        evidence: "db-pv.yaml",
      },
      {
        id: "config",
        label: "ConfigMap + Secret",
        sublabel: "envFrom",
        kind: "automation",
        x: 260,
        y: 320,
        detail: {
          "pt-BR":
            "DB_HOST, porta e nome via ConfigMap; usuário e senha via Secret, que não é versionado.",
          "en-US":
            "DB_HOST, port and name from a ConfigMap; user and password from a Secret that is not committed.",
        },
        evidence: "api-configmap.yaml",
      },
    ],
    edges: [
      { from: "client", to: "apisvc" },
      { from: "apisvc", to: "api", label: ":8000" },
      { from: "api", to: "dbsvc", label: "DNS" },
      { from: "dbsvc", to: "pvc" },
      { from: "hpa", to: "api", label: "scale", dashed: true },
      { from: "config", to: "api", label: "env", dashed: true },
    ],
  },
  decisions: [
    {
      title: {
        "pt-BR": "Namespaces separados para API e banco",
        "en-US": "Separate namespaces for API and database",
      },
      context: {
        "pt-BR":
          "Aplicação e dados têm ciclos de vida e permissões diferentes.",
        "en-US":
          "Application and data have different lifecycles and permissions.",
      },
      decision: {
        "pt-BR":
          "desafio-api e desafio-db, ligados por DNS de Service entre namespaces.",
        "en-US":
          "desafio-api and desafio-db, connected through cross-namespace Service DNS.",
      },
      alternatives: {
        "pt-BR": "Tudo no namespace default.",
        "en-US": "Everything in the default namespace.",
      },
      consequence: {
        "pt-BR":
          "Base pronta para NetworkPolicy e RBAC por namespace. Custo: o FQDN precisa ser explícito.",
        "en-US":
          "Ready for per-namespace NetworkPolicy and RBAC. Cost: the FQDN must be explicit.",
      },
    },
    {
      title: {
        "pt-BR": "Requests e limits antes do autoscaling",
        "en-US": "Requests and limits before autoscaling",
      },
      context: {
        "pt-BR":
          "Sem requests, o HPA não tem base para calcular a utilização de CPU.",
        "en-US":
          "Without requests, the HPA has no baseline to compute CPU utilisation.",
      },
      decision: {
        "pt-BR":
          "requests de 100m/128Mi e limits de 500m/256Mi; HPA de 1 a 5 réplicas a 65%.",
        "en-US":
          "100m/128Mi requests and 500m/256Mi limits; HPA from 1 to 5 replicas at 65%.",
      },
      alternatives: {
        "pt-BR": "Réplicas fixas; pods sem limites.",
        "en-US": "Fixed replicas; pods without limits.",
      },
      consequence: {
        "pt-BR": "Agendamento previsível e escala com base real.",
        "en-US": "Predictable scheduling and scaling on a real baseline.",
      },
    },
  ],
  tradeoffs: [
    {
      "pt-BR":
        "Bug que encontrei revisando: em `/status`, `return ({...}, 500)` no FastAPI não devolve HTTP 500, e sim 200 com uma lista JSON. Os probes nunca falham, mesmo com o banco fora. Correção: `JSONResponse(status_code=503)`.",
      "en-US":
        "Bug I found while reviewing: in `/status`, `return ({...}, 500)` in FastAPI does not send HTTP 500, it sends 200 with a JSON list. The probes never fail, even with the database down. Fix: `JSONResponse(status_code=503)`.",
    },
    {
      "pt-BR":
        "Liveness e readiness usam o mesmo endpoint, que depende do banco. Se o probe funcionasse, uma queda do PostgreSQL reiniciaria todos os pods da API em cascata. A liveness deve checar só o processo; a readiness, as dependências.",
      "en-US":
        "Liveness and readiness share one endpoint that depends on the database. If the probe worked, a PostgreSQL outage would restart every API pod in a cascade. Liveness should check only the process; readiness should check dependencies.",
    },
    {
      "pt-BR":
        "PostgreSQL como Deployment com hostPath e sem probes: aceitável no laboratório; produção pede StatefulSet/operador ou banco gerenciado.",
      "en-US":
        "PostgreSQL as a Deployment on hostPath without probes: acceptable for a lab; production calls for a StatefulSet/operator or a managed database.",
    },
  ],
  failureModes: [
    {
      symptom: {
        "pt-BR": "HPA mostra `<unknown>/65%`",
        "en-US": "HPA shows `<unknown>/65%`",
      },
      cause: {
        "pt-BR": "metrics-server não instalado no Kind.",
        "en-US": "metrics-server not installed on Kind.",
      },
      diagnose: {
        "pt-BR": "`kubectl get hpa -n desafio-api`; `kubectl top pods`.",
        "en-US": "`kubectl get hpa -n desafio-api`; `kubectl top pods`.",
      },
      fix: {
        "pt-BR":
          "Instalar o metrics-server (no Kind, com `--kubelet-insecure-tls`).",
        "en-US":
          "Install metrics-server (on Kind, with `--kubelet-insecure-tls`).",
      },
    },
    {
      symptom: {
        "pt-BR": "Pod em `ErrImageNeverPull`",
        "en-US": "Pod in `ErrImageNeverPull`",
      },
      cause: {
        "pt-BR":
          "`imagePullPolicy: Never` e imagem não carregada nos nós do Kind.",
        "en-US":
          "`imagePullPolicy: Never` and the image not loaded into the Kind nodes.",
      },
      diagnose: {
        "pt-BR": "`kubectl describe pod`",
        "en-US": "`kubectl describe pod`",
      },
      fix: {
        "pt-BR":
          "`kind load docker-image desafio-api:v1 --name desafio-cluster`",
        "en-US":
          "`kind load docker-image desafio-api:v1 --name desafio-cluster`",
      },
    },
    {
      symptom: {
        "pt-BR": "API em `CrashLoopBackOff` na subida",
        "en-US": "API in `CrashLoopBackOff` on startup",
      },
      cause: {
        "pt-BR":
          "A tabela é criada no import do módulo: se o banco não está pronto, o processo morre.",
        "en-US":
          "The table is created at module import: if the database is not ready, the process dies.",
      },
      diagnose: {
        "pt-BR": "`kubectl logs --previous`",
        "en-US": "`kubectl logs --previous`",
      },
      fix: {
        "pt-BR":
          "Retry com backoff ou init container que espera o banco; migrations num Job separado.",
        "en-US":
          "Retry with backoff or an init container that waits for the database; migrations in a separate Job.",
      },
    },
  ],
  productionNext: [
    {
      "pt-BR":
        "Corrigir o status code do `/status` e separar liveness de readiness.",
      "en-US": "Fix the `/status` code and split liveness from readiness.",
    },
    {
      "pt-BR":
        "NetworkPolicy permitindo só API → banco, e securityContext non-root com rootfs read-only.",
      "en-US":
        "NetworkPolicy allowing only API → database, plus a non-root securityContext with read-only rootfs.",
    },
    {
      "pt-BR": "StatefulSet com probes para o PostgreSQL, ou banco gerenciado.",
      "en-US":
        "A StatefulSet with probes for PostgreSQL, or a managed database.",
    },
    {
      "pt-BR": "Namespaces declarativos, Kustomize/Helm e External Secrets.",
      "en-US": "Declarative namespaces, Kustomize/Helm and External Secrets.",
    },
  ],
  evidence: [
    {
      label: {
        "pt-BR": "Deployment e Service da API",
        "en-US": "API Deployment and Service",
      },
      path: "api-deployment.yaml",
    },
    { label: { "pt-BR": "HPA", "en-US": "HPA" }, path: "api-hpa.yaml" },
    {
      label: {
        "pt-BR": "Endpoint /status (o bug)",
        "en-US": "/status endpoint (the bug)",
      },
      path: "api/main.py",
    },
    {
      label: { "pt-BR": "Cluster Kind", "en-US": "Kind cluster" },
      path: "kind-cluster.yaml",
    },
  ],
};

const flowstock: CaseStudy = {
  slug: "flowstock",
  shortTitle: "FlowStock",
  title: { "pt-BR": "FlowStock", "en-US": "FlowStock" },
  tagline: {
    "pt-BR":
      "Uma aplicação full stack tratada como sistema de produção: ADRs, supply chain no CI e rede segmentada.",
    "en-US":
      "A full-stack application treated as a production system: ADRs, supply chain in CI and a segmented network.",
  },
  category: {
    "pt-BR": "Supply chain · Segurança · Plataforma",
    "en-US": "Supply chain · Security · Platform",
  },
  repository: "https://github.com/DavidDevd/flowstock-public",
  problem: {
    "pt-BR":
      "Quem opera precisa entender o que está empacotando. Uma base de produto precisa nascer com qualidade, segurança e observabilidade, não recebê-las depois.",
    "en-US":
      "Whoever operates software must understand what they package. A product foundation must be born with quality, security and observability, not get them later.",
  },
  proves: {
    "pt-BR":
      "Que eu consigo levar padrões de plataforma (gates, SBOM, scan, menor privilégio) para uma aplicação real e documentar as decisões.",
    "en-US":
      "That I can bring platform standards (gates, SBOM, scanning, least privilege) to a real application and document the decisions.",
  },
  stack: [
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Docker",
    "Caddy",
    "GitHub Actions",
    "Trivy",
    "Syft (SBOM)",
    "Prometheus",
    "Grafana",
  ],
  highlights: [
    {
      "pt-BR":
        "CI com 3 trilhas: backend (ruff, mypy, pytest, pip-audit), frontend (lint, types, testes com coverage, pnpm audit) e containers.",
      "en-US":
        "CI with 3 tracks: backend (ruff, mypy, pytest, pip-audit), frontend (lint, types, tests with coverage, pnpm audit) and containers.",
    },
    {
      "pt-BR":
        "Trivy bloqueia vulnerabilidades HIGH/CRITICAL e um SBOM SPDX é gerado por imagem.",
      "en-US":
        "Trivy blocks HIGH/CRITICAL vulnerabilities and an SPDX SBOM is generated per image.",
    },
    {
      "pt-BR":
        "Imagens fixadas por digest sha256; API como usuário 10001; edge, web, API e Prometheus read-only com no-new-privileges.",
      "en-US":
        "Images pinned by sha256 digest; API running as user 10001; edge, web, API and Prometheus read-only with no-new-privileges.",
    },
    {
      "pt-BR":
        "Redes internal: o PostgreSQL só existe na rede data, inalcançável a partir do edge.",
      "en-US":
        "Internal networks: PostgreSQL only lives on the data network, unreachable from the edge.",
    },
    {
      "pt-BR":
        "3 ADRs versionados: monólito modular, sessões opacas e controles de supply chain.",
      "en-US":
        "3 versioned ADRs: modular monolith, opaque sessions and supply-chain controls.",
    },
  ],
  diagram: {
    width: 800,
    height: 400,
    nodes: [
      {
        id: "edge",
        label: "Caddy",
        sublabel: "edge · host-access",
        kind: "edge",
        x: 110,
        y: 170,
        detail: {
          "pt-BR":
            "Ponto de entrada da aplicação, publicado só em 127.0.0.1. Roteia `/api/*` e `/metrics` para a API e o resto para a web, com headers de segurança (nosniff, DENY, Permissions-Policy).",
          "en-US":
            "The application entry point, published on 127.0.0.1 only. Routes `/api/*` and `/metrics` to the API and everything else to the web app, with security headers (nosniff, DENY, Permissions-Policy).",
        },
        evidence: "deployment/docker/Caddyfile",
      },
      {
        id: "web",
        label: "Web",
        sublabel: "React · application",
        kind: "app",
        x: 330,
        y: 80,
        detail: {
          "pt-BR":
            "Build estático servido por nginx em container read-only com no-new-privileges, tmpfs só para cache e run, numa rede internal.",
          "en-US":
            "Static build served by nginx in a read-only container with no-new-privileges, tmpfs only for cache and run, on an internal network.",
        },
        evidence: "deployment/docker/web.Dockerfile",
      },
      {
        id: "api",
        label: "FastAPI",
        sublabel: "application + data",
        kind: "app",
        x: 330,
        y: 260,
        detail: {
          "pt-BR":
            "Monólito modular (identity, master data) com logs estruturados, correlation IDs, security headers e /metrics.",
          "en-US":
            "Modular monolith (identity, master data) with structured logs, correlation IDs, security headers and /metrics.",
        },
        evidence: "apps/api/src/flowstock_api/main.py",
      },
      {
        id: "db",
        label: "PostgreSQL 17",
        sublabel: "data (internal)",
        kind: "data",
        x: 560,
        y: 260,
        detail: {
          "pt-BR":
            "Imagem fixada por digest, com healthcheck. Conectado só à rede data e com migrations via Alembic.",
          "en-US":
            "Digest-pinned image with a health check. Attached only to the data network, with Alembic migrations.",
        },
        evidence: "deployment/docker/compose.yaml",
      },
      {
        id: "prom",
        label: "Prometheus",
        sublabel: "profile: observability",
        kind: "observability",
        x: 560,
        y: 80,
        detail: {
          "pt-BR":
            "Coleta /metrics da API pela rede application, ativado por profile do Compose.",
          "en-US":
            "Scrapes the API's /metrics over the application network, enabled through a Compose profile.",
        },
        evidence: "deployment/observability/prometheus.yml",
      },
      {
        id: "ci",
        label: "CI gate",
        sublabel: "Trivy · SBOM · audit",
        kind: "delivery",
        x: 720,
        y: 340,
        detail: {
          "pt-BR":
            "Build de candidatos imutáveis por SHA, digests registrados, scan HIGH/CRITICAL que bloqueia e SBOMs SPDX como artefato.",
          "en-US":
            "Immutable SHA-tagged candidates, recorded digests, a blocking HIGH/CRITICAL scan and SPDX SBOMs as artifacts.",
        },
        evidence: ".github/workflows/ci.yml",
      },
    ],
    edges: [
      { from: "edge", to: "web", label: "/" },
      { from: "edge", to: "api", label: "/api/*" },
      { from: "api", to: "db", label: "SQL" },
      { from: "prom", to: "api", label: "scrape" },
    ],
  },
  decisions: [
    {
      title: {
        "pt-BR": "ADR 001 · Monólito modular",
        "en-US": "ADR 001 · Modular monolith",
      },
      context: {
        "pt-BR":
          "Microsserviços cedo demais trazem custo operacional sem evidência de necessidade.",
        "en-US":
          "Microservices too early bring operational cost with no evidence of need.",
      },
      decision: {
        "pt-BR":
          "Uma API implantável, com fronteiras de módulo claras (identity, master data).",
        "en-US":
          "One deployable API with clear module boundaries (identity, master data).",
      },
      alternatives: {
        "pt-BR": "Serviços distribuídos desde o início.",
        "en-US": "Distributed services from day one.",
      },
      consequence: {
        "pt-BR":
          "Transações simples e um único pipeline. A separação só acontece com evidência.",
        "en-US":
          "Simple transactions and a single pipeline. Splitting only happens with evidence.",
      },
    },
    {
      title: {
        "pt-BR": "ADR 003 · Controles de supply chain",
        "en-US": "ADR 003 · Supply-chain controls",
      },
      context: {
        "pt-BR":
          "Dependências e imagens base são a principal porta de entrada de vulnerabilidades.",
        "en-US":
          "Dependencies and base images are the main entry point for vulnerabilities.",
      },
      decision: {
        "pt-BR":
          "Locks auditados, imagens multi-stage fixadas por digest, read-only, scan bloqueante e SBOM no CI.",
        "en-US":
          "Audited locks, digest-pinned multi-stage images, read-only filesystems, a blocking scan and SBOM in CI.",
      },
      alternatives: {
        "pt-BR": "Scan só informativo; imagens por tag mutável.",
        "en-US": "Report-only scanning; images by mutable tag.",
      },
      consequence: {
        "pt-BR":
          "Uma CVE crítica nova quebra o build. Custo: exige triagem rápida de CVEs de upstream.",
        "en-US":
          "A new critical CVE breaks the build. Cost: upstream CVEs need fast triage.",
      },
    },
    {
      title: {
        "pt-BR": "ADR 002 · Sessões opacas no servidor",
        "en-US": "ADR 002 · Opaque server-side sessions",
      },
      context: {
        "pt-BR": "Tokens autocontidos são difíceis de revogar imediatamente.",
        "en-US": "Self-contained tokens are hard to revoke immediately.",
      },
      decision: {
        "pt-BR":
          "Credencial opaca, só o hash armazenado, expiração idle e absoluta, CSRF e autorização no servidor.",
        "en-US":
          "Opaque credential, only its hash stored, idle and absolute expiry, CSRF and server-side authorization.",
      },
      alternatives: {
        "pt-BR": "JWT stateless no browser.",
        "en-US": "Stateless JWT in the browser.",
      },
      consequence: {
        "pt-BR":
          "Revogação instantânea em mudanças sensíveis, ao custo de um lookup por request.",
        "en-US":
          "Instant revocation on sensitive changes, at the cost of one lookup per request.",
      },
    },
  ],
  tradeoffs: [
    {
      "pt-BR":
        "Gap que encontrei revisando: o ADR 003 promete usuários non-root, mas a imagem web não define `USER`, então o master do nginx roda como root. Correção: imagem `nginx-unprivileged` ou `USER nginx` com pid em `/tmp`.",
      "en-US":
        "Gap I found while reviewing: ADR 003 promises non-root users, but the web image sets no `USER`, so the nginx master runs as root. Fix: an `nginx-unprivileged` image, or `USER nginx` with the pid in `/tmp`.",
    },
    {
      "pt-BR":
        "O Caddy encaminha `/metrics` na mesma porta de entrada da aplicação. Em produção eu serviria métricas apenas na rede interna.",
      "en-US":
        "Caddy forwards `/metrics` on the same entry port as the application. In production I would serve metrics on the internal network only.",
    },
    {
      "pt-BR":
        "Um gate HIGH/CRITICAL estrito pode bloquear por CVE sem correção disponível; isso exige exceções documentadas com prazo.",
      "en-US":
        "A strict HIGH/CRITICAL gate can block on CVEs with no fix available; that requires documented, time-boxed exceptions.",
    },
    {
      "pt-BR":
        "Os digests ficam registrados, mas as imagens ainda não são assinadas.",
      "en-US": "Digests are recorded, but images are not signed yet.",
    },
  ],
  failureModes: [
    {
      symptom: {
        "pt-BR": "Job de containers falha no Trivy",
        "en-US": "Container job fails on Trivy",
      },
      cause: {
        "pt-BR": "Nova CVE HIGH/CRITICAL na imagem base ou numa dependência.",
        "en-US": "A new HIGH/CRITICAL CVE in the base image or a dependency.",
      },
      diagnose: {
        "pt-BR": "SARIF no artefato `container-evidence-<sha>`.",
        "en-US": "The SARIF in the `container-evidence-<sha>` artifact.",
      },
      fix: {
        "pt-BR":
          "Atualizar a base/lock; sem correção upstream, exceção documentada com validade.",
        "en-US":
          "Update the base/lock; with no upstream fix, a documented exception with an expiry.",
      },
    },
    {
      symptom: {
        "pt-BR": "`Read-only file system` no runtime",
        "en-US": "`Read-only file system` at runtime",
      },
      cause: {
        "pt-BR": "Processo tentando escrever fora dos tmpfs permitidos.",
        "en-US": "A process writing outside the allowed tmpfs mounts.",
      },
      diagnose: {
        "pt-BR": "`docker compose logs` do serviço.",
        "en-US": "`docker compose logs` for the service.",
      },
      fix: {
        "pt-BR": "Mapear o caminho como tmpfs, sem relaxar o `read_only`.",
        "en-US": "Map the path as tmpfs instead of relaxing `read_only`.",
      },
    },
    {
      symptom: {
        "pt-BR": "API sem acesso ao banco",
        "en-US": "API cannot reach the database",
      },
      cause: {
        "pt-BR": "Serviço sem a rede data ou banco ainda não saudável.",
        "en-US":
          "The service is missing the data network, or the database is not healthy yet.",
      },
      diagnose: {
        "pt-BR":
          "`docker compose ps` (health) e `docker network inspect` na rede `data`.",
        "en-US":
          "`docker compose ps` (health) and `docker network inspect` on the `data` network.",
      },
      fix: {
        "pt-BR":
          "Ajustar as redes do serviço; a dependência por saúde cobre a ordem de subida.",
        "en-US":
          "Fix the service networks; the health dependency covers start order.",
      },
    },
  ],
  productionNext: [
    {
      "pt-BR": "Assinar imagens com cosign e gerar provenance (SLSA).",
      "en-US": "Sign images with cosign and generate provenance (SLSA).",
    },
    {
      "pt-BR": "Publicar o SARIF no GitHub code scanning.",
      "en-US": "Publish SARIF to GitHub code scanning.",
    },
    {
      "pt-BR": "SLOs de disponibilidade e latência com alertas por burn rate.",
      "en-US": "Availability and latency SLOs with burn-rate alerts.",
    },
  ],
  evidence: [
    {
      label: { "pt-BR": "Pipeline de CI", "en-US": "CI pipeline" },
      path: ".github/workflows/ci.yml",
    },
    {
      label: {
        "pt-BR": "Compose com redes internal",
        "en-US": "Compose with internal networks",
      },
      path: "deployment/docker/compose.yaml",
    },
    {
      label: {
        "pt-BR": "ADR 001 · Monólito modular",
        "en-US": "ADR 001 · Modular monolith",
      },
      path: "docs/decisions/001-modular-monolith.md",
    },
    {
      label: {
        "pt-BR": "ADR 003 · Supply chain",
        "en-US": "ADR 003 · Supply chain",
      },
      path: "docs/decisions/003-container-supply-chain.md",
    },
    {
      label: { "pt-BR": "Edge (Caddyfile)", "en-US": "Edge (Caddyfile)" },
      path: "deployment/docker/Caddyfile",
    },
  ],
};

export const caseStudies: readonly CaseStudy[] = [
  korp,
  terraform,
  cicd,
  kubernetes,
  flowstock,
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getCaseStudyNavigation(slug: string) {
  const index = caseStudies.findIndex((item) => item.slug === slug);
  return {
    previous: index > 0 ? caseStudies[index - 1] : undefined,
    next:
      index >= 0 && index < caseStudies.length - 1
        ? caseStudies[index + 1]
        : undefined,
  };
}

export function evidenceUrl(caseStudy: CaseStudy, path: string) {
  return `${caseStudy.repository}/blob/HEAD/${path}`;
}

export function casePath(slug: string, locale: Locale) {
  return locale === "en-US" ? `/en/projects/${slug}/` : `/projects/${slug}/`;
}
