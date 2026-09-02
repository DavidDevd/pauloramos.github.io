# Architecture

## Rendering and deployment

The portfolio uses Next.js App Router with static export. PT-BR lives at `/`, English at `/en`, and project case pages are generated through `generateStaticParams`. GitHub Pages configuration is enabled only when `GITHUB_PAGES=true`.

## Content architecture

- `src/data/hero.ts`: localized first-impression positioning;
- `src/data/devops.ts`: localized homepage toolchain, pipeline, verified project evidence, observability, IaC, background and contact copy;
- `src/data/case-studies.ts`: data-driven internal case routes;
- `src/config/site.ts`: global identity and SEO metadata.

Content distinguishes professional N2 support experience from hands-on DevOps/Cloud projects.

## Component strategy

Existing UI primitives (`Section`, `Container`, `Card`, `Badge`, `Button`) remain the visual foundation. `devops-sections.tsx` composes focused sections instead of turning `page.tsx` into a monolith. Architecture and monitoring visuals use React and CSS; no chart or diagram dependency is added.

## Motion and accessibility

Framer Motion is limited to section reveals and pipeline/card progression. Global CSS disables effective animation under `prefers-reduced-motion`. Semantic sections, headings, lists, focus-visible styles, external-link attributes and responsive grids are preserved.

## Performance

The experience remains image-light and statically generated. No video, WebGL, charting library or new runtime dependency was introduced.

## Quality gates

`pnpm lint`, `pnpm typecheck`, `pnpm format:check` and `pnpm build` are the repository gates. No automated test script is currently defined.
