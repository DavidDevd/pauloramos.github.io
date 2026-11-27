import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { caseStudies } from "@/data/case-studies";
import { caseCopy, homeCopy } from "@/data/copy";
import { education, experience, profile } from "@/data/profile";
import type { LocalizedText } from "@/types";

// Markers are case-sensitive on purpose: "Todo" is a Portuguese word.
const MARKER = /\b(TODO|TBD|FIXME|XXX)\b/;
const FILLER = /lorem ipsum|\bplaceholder\b/i;
const isPlaceholder = (text: string) => MARKER.test(text) || FILLER.test(text);

/** Walks any value and yields every string inside it. */
function* strings(value: unknown): Generator<string> {
  if (typeof value === "string") {
    yield value;
  } else if (Array.isArray(value)) {
    for (const item of value) yield* strings(item);
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value)) yield* strings(item);
  }
}

function isLocalized(value: unknown): value is LocalizedText {
  return (
    Boolean(value) &&
    typeof value === "object" &&
    "pt-BR" in (value as object) &&
    "en-US" in (value as object)
  );
}

/** Walks any value and yields every LocalizedText inside it. */
function* localized(value: unknown): Generator<LocalizedText> {
  if (isLocalized(value) && typeof value["pt-BR"] === "string") {
    yield value;
  } else if (Array.isArray(value)) {
    for (const item of value) yield* localized(item);
  } else if (value && typeof value === "object") {
    for (const item of Object.values(value)) yield* localized(item);
  }
}

const allContent = {
  caseStudies,
  homeCopy,
  caseCopy,
  profile,
  experience,
  education,
};

/** Replaces every leaf with its type so two locales can be compared. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, shape(item)]),
    );
  }
  return typeof value;
}

describe("content integrity", () => {
  it("ships no placeholder text", () => {
    const offenders = [...strings(allContent)].filter(isPlaceholder);
    expect(offenders).toEqual([]);
  });

  it("translates every bilingual string into both languages", () => {
    let count = 0;
    for (const text of localized(allContent)) {
      count += 1;
      expect(text["pt-BR"].trim(), JSON.stringify(text)).not.toBe("");
      expect(text["en-US"].trim(), JSON.stringify(text)).not.toBe("");
    }
    expect(count).toBeGreaterThan(100);
  });

  it("keeps Portuguese and English copy structurally identical", () => {
    expect(shape(homeCopy["en-US"])).toEqual(shape(homeCopy["pt-BR"]));
    expect(shape(caseCopy["en-US"])).toEqual(shape(caseCopy["pt-BR"]));
  });

  it("keeps inline code markup balanced", () => {
    const offenders = [...strings(allContent)].filter(
      (text) =>
        (text.match(/`/g) ?? []).length % 2 !== 0 || text.includes("``"),
    );
    expect(offenders).toEqual([]);
  });

  it("uses no em dash in copy (house style)", () => {
    const offenders = [...strings(allContent)].filter((text) =>
      text.includes("—"),
    );
    expect(offenders).toEqual([]);
  });
});

describe("case studies", () => {
  it("have unique, URL-safe slugs and unique short titles", () => {
    const slugs = caseStudies.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    const shortTitles = caseStudies.map((item) => item.shortTitle);
    expect(new Set(shortTitles).size).toBe(shortTitles.length);
    for (const item of caseStudies) {
      expect(item.slug).toMatch(/^[a-z0-9-]+$/);
      expect(item.shortTitle.length).toBeLessThanOrEqual(12);
    }
  });

  it("link to public GitHub repositories and repo-relative evidence", () => {
    for (const item of caseStudies) {
      expect(item.repository).toMatch(/^https:\/\/github\.com\/DavidDevd\//);
      const paths = [
        ...item.evidence.map((link) => link.path),
        ...item.diagram.nodes.flatMap((node) =>
          node.evidence ? [node.evidence] : [],
        ),
      ];
      expect(paths.length).toBeGreaterThan(0);
      for (const path of paths) {
        expect(path, `${item.slug}: ${path}`).not.toMatch(/^\/|\.\.|^https?:/);
      }
    }
  });

  it("are deep enough to be case studies, not cards", () => {
    for (const item of caseStudies) {
      expect(item.decisions.length, item.slug).toBeGreaterThanOrEqual(2);
      expect(item.tradeoffs.length, item.slug).toBeGreaterThanOrEqual(2);
      expect(item.failureModes.length, item.slug).toBeGreaterThanOrEqual(2);
      expect(item.productionNext.length, item.slug).toBeGreaterThanOrEqual(2);
    }
  });

  it("draw diagrams whose edges connect existing nodes inside the canvas", () => {
    for (const { slug, diagram } of caseStudies) {
      const ids = new Set(diagram.nodes.map((node) => node.id));
      expect(ids.size, slug).toBe(diagram.nodes.length);
      for (const edge of diagram.edges) {
        expect(ids.has(edge.from), `${slug}: ${edge.from}`).toBe(true);
        expect(ids.has(edge.to), `${slug}: ${edge.to}`).toBe(true);
      }
      for (const node of diagram.nodes) {
        expect(node.x).toBeGreaterThan(0);
        expect(node.x).toBeLessThan(diagram.width);
        expect(node.y).toBeGreaterThan(0);
        expect(node.y).toBeLessThan(diagram.height);
      }
    }
  });
});

describe("home copy", () => {
  it("points every principle and stack item at an existing case study", () => {
    const slugs = new Set(caseStudies.map((item) => item.slug));
    for (const locale of ["pt-BR", "en-US"] as const) {
      for (const principle of homeCopy[locale].principles.items) {
        expect(slugs.has(principle.proof), principle.proof).toBe(true);
      }
      for (const group of homeCopy[locale].stack.groups) {
        for (const tool of group.items) {
          expect(tool.proof.length, tool.name).toBeGreaterThan(0);
          for (const proof of tool.proof) {
            expect(proof === "experience" || slugs.has(proof), proof).toBe(
              true,
            );
          }
        }
      }
    }
  });
});

describe("profile", () => {
  it("exposes working contact channels", () => {
    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i);
    expect(profile.whatsapp.href).toMatch(/^https:\/\/wa\.me\/\d{12,13}$/);
    expect(profile.email).not.toContain("pauloramos.dev");
  });

  it("links a resume that is actually published", () => {
    expect(existsSync(join("public", profile.resume))).toBe(true);
  });

  it("dates experience with valid year-months", () => {
    for (const job of experience) {
      expect(job.start).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
    }
  });
});
