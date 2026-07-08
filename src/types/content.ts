import type { IconName } from "@/components/icons/icon-registry";

export type Locale = "pt-BR" | "en-US";

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
  readonly logo: {
    readonly label: string;
    readonly href: string;
    readonly ariaLabel: string;
  };
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
      readonly flag: string;
    }[];
  };
};

export type LocalizedNavigationData = Record<Locale, NavigationData>;

export type HeroData = {
  readonly eyebrow: string;
  readonly name: string;
  readonly title: string;
  readonly subtitle: string;
  readonly headline: string;
  readonly description: string;
  readonly actions: readonly ContentLink[];
  readonly workflow: {
    readonly ariaLabel: string;
    readonly items: readonly {
      readonly label: string;
      readonly icon: IconName;
    }[];
  };
};

export type MissionData = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly pillars: readonly {
    readonly icon: IconName;
    readonly title: string;
    readonly description: string;
  }[];
};

export type AboutData = {
  readonly eyebrow: string;
  readonly title: string;
  readonly story: readonly string[];
  readonly highlights: readonly string[];
  readonly professionalJourneyAriaLabel: string;
  readonly journey: {
    readonly year: string;
    readonly start: string;
    readonly steps: readonly string[];
  };
  readonly currentFocus: {
    readonly title: string;
    readonly items: readonly string[];
  };
};

export type WhatIBuildData = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly technologyLabel: string;
  readonly items: readonly {
    readonly icon: IconName;
    readonly title: string;
    readonly description: string;
    readonly badge: "Main Focus" | "Currently Building";
    readonly technologies: readonly string[];
  }[];
};

export type CaseStudyStatus = "planned" | "in-progress" | "completed";

export type CaseStudyMetric = {
  readonly label: string;
  readonly value: string;
  readonly description: string;
};

export type CaseStudyMedia = {
  readonly title: string;
  readonly src: string;
  readonly alt: string;
  readonly type: "screenshot" | "gif" | "diagram";
};

export type CaseStudyDecision = {
  readonly question: string;
  readonly decision: string;
  readonly rationale: string;
};

export type CaseStudyLinkSet = {
  readonly github: ContentLink;
  readonly demo?: ContentLink;
};

export type CaseStudyData = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly page: {
    readonly backLabel: string;
    readonly overview: string;
    readonly problem: string;
    readonly objective: string;
    readonly solution: string;
    readonly architecture: string;
    readonly architectureDiagram: string;
    readonly technologyStack: string;
    readonly engineeringDecisions: string;
    readonly challenges: string;
    readonly lessonsLearned: string;
    readonly futureImprovements: string;
    readonly metrics: string;
    readonly github: string;
    readonly demo: string;
    readonly previousCase: string;
    readonly nextCase: string;
    readonly unavailableDemo: string;
  };
  readonly labels: {
    readonly featured: string;
    readonly problem: string;
    readonly solution: string;
    readonly architecture: string;
    readonly technologies: string;
    readonly engineeringDecisions: string;
    readonly learnings: string;
  };
  readonly cases: readonly {
    readonly slug: string;
    readonly title: string;
    readonly category: string;
    readonly status: CaseStudyStatus;
    readonly year: string;
    readonly duration: string;
    readonly problem: string;
    readonly objective: string;
    readonly solution: string;
    readonly architecture: readonly string[];
    readonly flow: readonly string[];
    readonly technologies: readonly string[];
    readonly engineeringDecisions: readonly CaseStudyDecision[];
    readonly screenshots: readonly CaseStudyMedia[];
    readonly metrics: readonly CaseStudyMetric[];
    readonly challenges: readonly string[];
    readonly lessonsLearned: readonly string[];
    readonly futureImprovements: readonly string[];
    readonly links: CaseStudyLinkSet;
    readonly featured: boolean;
  }[];
};

export type Experience = {
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly description: string;
  readonly achievements: readonly string[];
  readonly technologies: readonly string[];
};

export type Education = {
  readonly institution: string;
  readonly degree: string;
  readonly field: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly description: string;
};

export type Certification = {
  readonly name: string;
  readonly issuer: string;
  readonly issueDate: string;
  readonly credentialUrl?: string;
  readonly skills: readonly string[];
};

export type Project = {
  readonly title: string;
  readonly slug: string;
  readonly category: string;
  readonly problem: string;
  readonly solution: string;
  readonly result: readonly string[];
  readonly technologies: readonly string[];
  readonly repositoryUrl?: string;
  readonly liveUrl?: string;
  readonly featured: boolean;
};

export type Article = {
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly publishedAt: string;
  readonly readingTime: string;
  readonly url: string;
  readonly tags: readonly string[];
};

export type TechItem = {
  readonly name: string;
  readonly level?: "learning" | "working" | "advanced";
};

export type TechCategory = {
  readonly name: string;
  readonly description: string;
  readonly items: readonly TechItem[];
};

export type SocialLink = {
  readonly label: string;
  readonly href: string;
  readonly icon: IconName;
  readonly target: LinkTarget;
};

export type ContactData = {
  readonly title: string;
  readonly description: string;
  readonly email: string;
  readonly links: readonly SocialLink[];
};

export type TimelineItem = {
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly tags: readonly string[];
};

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
    readonly image?: string;
  };
  readonly twitter: {
    readonly card: "summary" | "summary_large_image";
    readonly title: string;
    readonly description: string;
    readonly image?: string;
  };
};

export type SiteConfig = {
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly domain: string;
  readonly url: string;
  readonly locale: Locale;
  readonly locales: readonly Locale[];
  readonly social: readonly SocialLink[];
  readonly seo: SeoData;
  readonly seoByLocale: Record<Locale, SeoData>;
};
