import type { IconName } from "@/components/icons/icon-registry";

export type Locale = "pt-BR" | "en-US";

/**
 * A string that must exist in every supported locale. Using this instead of
 * parallel per-locale objects makes a missing translation a type error.
 */
export type LocalizedText = Readonly<Record<Locale, string>>;

export type LinkTarget = "_self" | "_blank";

export type ContentLink = {
  readonly label: string;
  readonly href: string;
  readonly target?: LinkTarget;
  readonly ariaLabel?: string;
  readonly icon?: IconName;
  readonly variant?: "primary" | "secondary" | "outline" | "ghost" | "subtle";
};

export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

export type NavigationData = {
  readonly links: readonly NavigationItem[];
  readonly resume: ContentLink;
  readonly social: readonly ContentLink[];
  readonly mobile: {
    readonly openLabel: string;
    readonly closeLabel: string;
    readonly menuLabel: string;
  };
  readonly languageSwitcher: {
    readonly ariaLabel: string;
    readonly options: readonly {
      readonly locale: Locale;
      readonly label: string;
      readonly shortLabel: string;
      readonly ariaLabel: string;
    }[];
  };
};

export type LocalizedNavigationData = Record<Locale, NavigationData>;

/* ---------------------------------------------------------------- Cases -- */

export type DiagramNodeKind =
  | "edge"
  | "app"
  | "data"
  | "observability"
  | "automation"
  | "delivery"
  | "cloud";

export type DiagramNode = {
  readonly id: string;
  readonly label: string;
  readonly sublabel?: string;
  readonly kind: DiagramNodeKind;
  /** Centre of the node in diagram units (see ArchitectureDiagram size). */
  readonly x: number;
  readonly y: number;
  readonly detail: LocalizedText;
  /** Path inside the case repository that proves this node. */
  readonly evidence?: string;
};

export type DiagramEdge = {
  readonly from: string;
  readonly to: string;
  readonly label?: string;
  readonly dashed?: boolean;
};

export type ArchitectureDiagram = {
  readonly width: number;
  readonly height: number;
  readonly nodes: readonly DiagramNode[];
  readonly edges: readonly DiagramEdge[];
};

export type Decision = {
  readonly title: LocalizedText;
  readonly context: LocalizedText;
  readonly decision: LocalizedText;
  readonly alternatives: LocalizedText;
  readonly consequence: LocalizedText;
};

export type FailureMode = {
  readonly symptom: LocalizedText;
  readonly cause: LocalizedText;
  readonly diagnose: LocalizedText;
  readonly fix: LocalizedText;
};

export type EvidenceLink = {
  readonly label: LocalizedText;
  /** Path inside the repository, rendered as /blob/HEAD/<path>. */
  readonly path: string;
};

export type CaseStudy = {
  readonly slug: string;
  /** Compact name for tables and navigation. */
  readonly shortTitle: string;
  readonly title: LocalizedText;
  readonly tagline: LocalizedText;
  readonly category: LocalizedText;
  readonly repository: string;
  readonly problem: LocalizedText;
  readonly proves: LocalizedText;
  readonly stack: readonly string[];
  readonly highlights: readonly LocalizedText[];
  readonly diagram: ArchitectureDiagram;
  readonly decisions: readonly Decision[];
  readonly tradeoffs: readonly LocalizedText[];
  readonly failureModes: readonly FailureMode[];
  readonly productionNext: readonly LocalizedText[];
  readonly evidence: readonly EvidenceLink[];
};

/* -------------------------------------------------------------- Profile -- */

export type Experience = {
  readonly company: string;
  readonly role: LocalizedText;
  readonly segment: LocalizedText;
  /** ISO year-month, e.g. "2024-09". */
  readonly start: string;
  /** ISO year-month, or null while current. */
  readonly end: string | null;
  readonly summary: LocalizedText;
  readonly responsibilities: readonly LocalizedText[];
  readonly skills: readonly string[];
};

export type Education = {
  readonly title: LocalizedText;
  readonly institution: string;
  readonly kind: LocalizedText;
  readonly status: LocalizedText;
};

/* ------------------------------------------------------------------ SEO -- */

export type SeoData = {
  readonly title: string;
  readonly titleTemplate: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly canonicalPath: string;
  readonly openGraph: {
    readonly title: string;
    readonly description: string;
    readonly type: "website";
    readonly locale: Locale;
  };
  readonly twitter: {
    readonly card: "summary" | "summary_large_image";
    readonly title: string;
    readonly description: string;
  };
};
