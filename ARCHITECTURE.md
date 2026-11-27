# Architecture

## Rendering and routing

Next.js 15 App Router with `output: "export"`. Every page is static HTML.

- **One root layout per locale.** `src/app/(pt)/layout.tsx` renders
  `<html lang="pt-BR">` and `src/app/(en)/en/layout.tsx` renders
  `<html lang="en-US">`, so the language is correct in the static HTML
  without client-side patching. Both delegate to
  `components/layout/root-document.tsx`.
- **404.** With multiple root layouts, `app/global-not-found.tsx`
  (`experimental.globalNotFound`) provides one bilingual 404 page, which
  GitHub Pages serves for any unknown path.
- **Case studies** are generated with `generateStaticParams` and
  `dynamicParams = false`.

## Base path: one source of truth

The site is a GitHub Pages _project_ site served under `/pauloramos.github.io`.
`next.config.ts` derives `basePath` from `GITHUB_PAGES=true` and exposes the
same value to client code as `NEXT_PUBLIC_BASE_PATH` through `env`. Client
links therefore cannot drift from what Next uses. `withBasePath` and
`localizePathname` in `src/i18n/config.ts` build every internal href, and
unit tests cover them with and without a base path.

Metadata URLs (canonical, hreflang, Open Graph) are absolute: a root-relative
`/` resolved against `metadataBase` would point at the account root.

## Content model

- `LocalizedText = Record<Locale, string>` is used for every bilingual
  string, so a missing translation is a type error rather than a
  half-translated page.
- `src/data/case-studies.ts` holds the five cases: problem, what it proves,
  highlights, an architecture diagram (nodes, edges, evidence paths),
  decisions (context, decision, alternatives, consequence), trade-offs,
  failure modes (symptom, cause, diagnosis, fix), next steps and evidence.
- Inline code in content uses backticks and is rendered by `RichText`.
- `tests/unit/content.test.ts` enforces: no placeholders, both languages
  present, identical PT/EN structure, balanced code markup, valid diagram
  edges, minimum case-study depth, and a published resume file.

## Build provenance

`src/lib/build-info.ts` reads `GITHUB_ACTIONS`, `GITHUB_SHA`,
`GITHUB_RUN_ID`, `GITHUB_REPOSITORY` and `GITHUB_REF_NAME` at build time.
Values are validated by pattern before they become links; anything
malformed falls back to "local build". The deploy record in the hero and the
footer render it. In CI, an E2E test asserts the record links the commit and
run that produced the page.

## Client JavaScript

Only four components are client components: the navigation rail (menu,
active section), the architecture diagram (selection), the email copy button
and the live tenure counter. Everything else is a server component rendered
at build time. There is no animation library; the single load animation is
CSS and is disabled under `prefers-reduced-motion`.

## Delivery

See the README for the pipeline. `ci.yml` is a reusable workflow used by pull
requests and by `deploy.yml`, which only deploys the artifact CI uploaded.
