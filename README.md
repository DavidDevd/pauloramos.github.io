# Paulo Ramos — DevOps & Cloud Portfolio

Portfolio bilíngue (PT-BR/EN) orientado a DevOps, Cloud Infrastructure, Infrastructure as Code, CI/CD, automação e observabilidade. A experiência profissional em Suporte Técnico N2 é apresentada separadamente dos projetos práticos.

## Evidências em destaque

- Projeto Korp: Go, Docker Compose, NGINX, Ansible, Prometheus e Grafana;
- AWS multi-environment: Terraform modular para dev, staging e prod;
- AWS CI/CD: GitHub Actions, Pytest, Docker, ECR e App Runner;
- Kubernetes: Deployments, Services, ConfigMap, Secrets de exemplo, PV/PVC, probes e HPA;
- FlowStock: aplicação, containers, supply-chain security e observabilidade.

As afirmações do conteúdo foram conferidas nos repositórios públicos correspondentes. Métricas visuais da homepage são abstratas e não representam telemetria de produção.

## Stack do site

Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide, ESLint e Prettier.

## Execução local

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Quality gates:

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

## Estrutura

```text
src/app          rotas, metadata e export estático
src/components   layout, UI e elementos visuais reutilizáveis
src/data         conteúdo localizado e dados dos cases
src/sections     composição das seções da homepage e páginas de case
src/styles       tokens e estilos globais
src/types        contratos de conteúdo
```

## Deploy

O workflow `.github/workflows/deploy.yml` executa instalação congelada, lint, typecheck e build. O site usa `output: "export"`, `basePath` e `assetPrefix` quando `GITHUB_PAGES=true`, e publica `out/` no GitHub Pages.

## Currículo

Os PDFs existentes foram preservados. A atualização para uma versão explicitamente orientada a DevOps/Cloud deve ser feita quando o arquivo final correto estiver disponível.
