# Case study framework

Every project on the site follows the same structure, defined by the
`CaseStudy` type in `src/types/content.ts`. A case is evidence, not a card.

1. **Problem.** The operational or engineering problem in one paragraph.
2. **What it proves.** The capability the project demonstrates.
3. **Architecture.** An interactive diagram. Each component explains its
   responsibility and links to the file that proves it.
4. **Verified highlights.** Facts checked against the repository.
5. **Decisions.** Context, decision, alternatives considered, consequence.
6. **Trade-offs and known limits.** Including bugs found during review.
7. **Failure modes and runbook.** Symptom, likely cause, how to diagnose,
   fix, with real commands.
8. **In production, I would.** The next steps, stated as intent, never as
   something already done.
9. **Evidence.** Links to specific files.

## Verification policy

- Every claim is checked against the current code of the linked repository
  before it is published. When a repository changes, its case is reviewed.
- Evidence paths are repository-relative and rendered as
  `<repository>/blob/HEAD/<path>`.
- Projects are presented as hands-on work, separate from professional
  experience.

## Current cases

| Slug                           | Repository                                              |
| ------------------------------ | ------------------------------------------------------- |
| `projeto-korp`                 | DavidDevd/http-server-projeto-korp                      |
| `aws-multi-environment-iac`    | DavidDevd/Configuracao-de-Infraestrutura-Multi-Ambiente |
| `aws-ci-cd-pipeline`           | DavidDevd/devops.ci.api                                 |
| `kubernetes-application-stack` | DavidDevd/desafio-kubernetes                            |
| `flowstock`                    | DavidDevd/flowstock-public                              |
