# Design system: Control Plane

The interface borrows from operations consoles: a graphite panel, one signal
colour, a persistent navigation rail and diagrams drawn on engineering paper.
Decoration is avoided; structure carries information.

## Colour

Tokens are RGB channel triplets in `src/styles/globals.css`, exposed to
Tailwind in `tailwind.config.ts` so opacity modifiers work.

| Token                  | Hex                   | Use                                                           |
| ---------------------- | --------------------- | ------------------------------------------------------------- |
| `bg`                   | `#1A1D22`             | Page background (graphite)                                    |
| `surface`              | `#21252B`             | Panels, hovered rows                                          |
| `raised`               | `#282D34`             | Selected items, inline code                                   |
| `line` / `line-strong` | `#323942` / `#464E5A` | Dividers, borders, diagram edges                              |
| `fg`                   | `#E8EAED`             | Primary text (14.0:1 on `bg`)                                 |
| `muted`                | `#9DA6B1`             | Secondary text (6.9:1 on `bg`)                                |
| `signal`               | `#F6A623`             | The only accent: primary action, focus, selection, active nav |
| `ok`                   | `#4FBF85`             | Only for states that really passed (CI gates, availability)   |

## Type

- **Archivo** (variable, with a width axis): all text. The expanded width
  (`.font-wide`, `wdth 112`) is reserved for identity and headings.
- **IBM Plex Mono**: only for code identifiers, such as SHAs, ports, paths
  and commands. Never for decorative labels.
- Body is 17px with a 68ch maximum measure. Labels are sentence case, with
  no all-caps eyebrows.

## Structure

- No section numbering: the sections are not a sequence. Numbers appear only
  where order is the content (the deploy record's gates).
- Radius has a hierarchy: 6px for panels and buttons, 3 to 4px for chips and
  code. No shadows; depth comes from surface steps and borders.
- The blueprint grid appears only inside architecture diagrams.

## Motion

One orchestrated moment: the deploy record replays its gates once on load.
Everything else moves only in response to the user (diagram selection
highlights the connected edges). `prefers-reduced-motion` disables all of it.

## Accessibility

Visible amber focus rings, a skip link, semantic landmarks and headings,
real buttons with `aria-pressed` in the diagram, a live region for the
selection detail, relationships repeated as text, and accessible names that
contain the visible label (WCAG 2.5.3). Automated axe checks run in CI.
