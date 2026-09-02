# Design System

## Direction

Dark, high-contrast engineering interface with restrained cloud, infrastructure and observability cues. The visual language avoids terminal cosplay, neon overload and fake dashboards.

## Tokens

Tokens live in `src/styles/globals.css` and are exposed to Tailwind in `tailwind.config.ts`.

- background: near-black navy;
- surface: layered blue-black panels;
- primary: controlled violet for actions and infrastructure paths;
- accent: cool blue for cloud signals;
- success: green reserved for verified/healthy conceptual states;
- border: low-contrast structural separation.

Spacing uses `--space-section-sm`, `--space-section` and `--space-section-lg`. The base radius is `0.75rem`. Inter is the reading face and JetBrains Mono is reserved for identifiers, sequence numbers and compact system labels.

## Components

Cards use borders and surface hierarchy instead of heavy glass effects. Badges identify categories such as DevOps, IaC and Observability without making production or SLA claims. Architecture diagrams are CSS grids that collapse vertically on mobile without horizontal scrolling.

## Motion

Durations and easing are tokenized. Motion is limited to reveal, hover and delivery-flow context, and is disabled effectively for reduced-motion users.

## Accessibility

Visible focus rings, semantic headings/lists, labeled navigation, adequate touch targets and high contrast are required. Decorative monitoring bars are hidden from assistive technology and explicitly labeled as architecture visualization rather than live data.
