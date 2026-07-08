export const designTokens = {
  colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: "hsl(var(--primary))",
    accent: "hsl(var(--accent))",
    surface: "hsl(var(--surface))",
    border: "hsl(var(--border))",
  },
  spacing: {
    sectionSm: "var(--space-section-sm)",
    section: "var(--space-section)",
    sectionLg: "var(--space-section-lg)",
  },
  typography: {
    sans: "var(--font-inter)",
    mono: "var(--font-jetbrains-mono)",
  },
  radius: {
    base: "var(--radius)",
  },
  animations: {
    fast: "var(--duration-fast)",
    normal: "var(--duration-normal)",
    slow: "var(--duration-slow)",
    standard: "var(--ease-standard)",
    emphasized: "var(--ease-emphasized)",
  },
} as const;
