import { afterEach, describe, expect, it, vi } from "vitest";

const BASE = "/pauloramos.github.io";

async function loadI18n(basePath: string) {
  vi.resetModules();
  vi.stubEnv("NEXT_PUBLIC_BASE_PATH", basePath);
  return import("@/i18n/config");
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("localizePathname (GitHub Pages basePath)", () => {
  it("links back to the Portuguese home inside the basePath, not the account root", async () => {
    const { localizePathname } = await loadI18n(BASE);
    expect(localizePathname("/en", "pt-BR")).toBe(`${BASE}/`);
    expect(localizePathname("/en/", "pt-BR")).toBe(`${BASE}/`);
  });

  it("keeps project routes when switching to Portuguese", async () => {
    const { localizePathname } = await loadI18n(BASE);
    expect(localizePathname("/en/projects/flowstock/", "pt-BR")).toBe(
      `${BASE}/projects/flowstock/`,
    );
  });

  it("prefixes English routes with the basePath", async () => {
    const { localizePathname } = await loadI18n(BASE);
    expect(localizePathname("/", "en-US")).toBe(`${BASE}/en/`);
    expect(localizePathname("/projects/flowstock/", "en-US")).toBe(
      `${BASE}/en/projects/flowstock/`,
    );
  });

  it("works without a basePath in local development", async () => {
    const { localizePathname } = await loadI18n("");
    expect(localizePathname("/en/", "pt-BR")).toBe("/");
    expect(localizePathname("/", "en-US")).toBe("/en/");
  });
});

describe("getLocaleFromPathname", () => {
  it("detects English with and without trailing slash", async () => {
    const { getLocaleFromPathname } = await loadI18n(BASE);
    expect(getLocaleFromPathname("/en")).toBe("en-US");
    expect(getLocaleFromPathname("/en/")).toBe("en-US");
    expect(getLocaleFromPathname("/en/projects/korp/")).toBe("en-US");
    expect(getLocaleFromPathname("/")).toBe("pt-BR");
    expect(getLocaleFromPathname("/enterprise")).toBe("pt-BR");
  });
});
