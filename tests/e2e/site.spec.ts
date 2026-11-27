import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const BASE = "/pauloramos.github.io";
const EMAIL = "davifd642@gmail.com";
const CASE_SLUGS = [
  "projeto-korp",
  "aws-multi-environment-iac",
  "aws-ci-cd-pipeline",
  "kubernetes-application-stack",
  "flowstock",
];

/** On small screens the rail collapses behind a menu button. */
async function openMenuIfCollapsed(page: Page) {
  const toggle = page.locator('button[aria-controls="rail-panel"]');
  if (await toggle.isVisible()) {
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
  }
}

test.describe("pages", () => {
  test("Portuguese home renders with the right language and identity", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto("./");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    await expect(page).toHaveTitle("Paulo Ramos | DevOps Engineer");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Transformo código",
    );
    await expect(page.locator("#projects")).toBeVisible();
    expect(errors).toEqual([]);
  });

  test("English home renders in English", async ({ page }) => {
    await page.goto("en/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en-US");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "I turn code",
    );
  });

  for (const slug of CASE_SLUGS) {
    test(`case study ${slug} renders in both languages`, async ({ page }) => {
      for (const prefix of ["", "en/"]) {
        const response = await page.goto(`${prefix}projects/${slug}/`);
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
        for (const id of [
          "problem",
          "architecture",
          "decisions",
          "tradeoffs",
          "runbook",
          "production",
          "evidence",
        ]) {
          await expect(page.locator(`#${id}`)).toHaveCount(1);
        }
      }
    });
  }

  test("unknown paths get the bilingual 404 page", async ({ page }) => {
    const response = await page.goto("does-not-exist/");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Página não encontrada",
    );
    await expect(
      page.getByRole("link", { name: "Ir para o início" }),
    ).toHaveAttribute("href", `${BASE}/`);
  });
});

test.describe("navigation", () => {
  test("language switch keeps the page and stays inside the base path", async ({
    page,
  }) => {
    await page.goto("en/projects/flowstock/");
    await openMenuIfCollapsed(page);
    await page
      .getByRole("link", { name: "Ver portfólio em português" })
      .click();
    await expect(page).toHaveURL(new RegExp(`${BASE}/projects/flowstock/$`));
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  });

  test("regression: Portuguese link never points at the account root", async ({
    page,
  }) => {
    await page.goto("en/");
    // Attribute check, so query the anchor directly: on mobile it sits in
    // the collapsed menu and is not in the accessibility tree.
    const href = await page.locator('a[hreflang="pt-BR"]').getAttribute("href");
    expect(href).toBe(`${BASE}/`);
  });

  test("case page back link returns to the case study list", async ({
    page,
  }) => {
    await page.goto("projects/projeto-korp/");
    await openMenuIfCollapsed(page);
    await page.getByRole("link", { name: "Todos os estudos de caso" }).click();
    await expect(page).toHaveURL(new RegExp(`${BASE}/#projects$`));
  });

  test("every internal link and asset on every page resolves", async ({
    page,
    request,
  }) => {
    const pages = [
      "./",
      "en/",
      ...CASE_SLUGS.flatMap((slug) => [
        `projects/${slug}/`,
        `en/projects/${slug}/`,
      ]),
    ];
    const targets = new Set<string>();
    for (const path of pages) {
      await page.goto(path);
      const hrefs = await page
        .locator(`a[href^="${BASE}/"], link[href^="${BASE}/"]`)
        .evaluateAll((elements) =>
          elements.map((element) => element.getAttribute("href") ?? ""),
        );
      hrefs.forEach((href) => targets.add(href.split("#")[0]));
    }
    expect(targets.size).toBeGreaterThan(10);
    for (const target of targets) {
      const response = await request.get(target);
      expect(response.status(), target).toBe(200);
    }
  });
});

test.describe("interactions", () => {
  test("architecture diagram explains the selected component", async ({
    page,
  }) => {
    await page.goto("projects/projeto-korp/");
    const section = page.locator("#architecture");
    // Canvas (desktop) and list (mobile) render the same buttons; the one
    // hidden by the breakpoint is out of the accessibility tree.
    const prometheus = section.getByRole("button", { name: /Prometheus/ });
    await prometheus.click();
    await expect(prometheus).toHaveAttribute("aria-pressed", "true");

    const detail = section.locator("figcaption");
    await expect(detail).toContainText("Scrape de /metrics a cada 5s");
    await expect(
      detail.getByRole("link", { name: /Abrir arquivo/ }),
    ).toHaveAttribute(
      "href",
      "https://github.com/DavidDevd/http-server-projeto-korp/blob/HEAD/prometheus/prometheus.yml",
    );
  });

  test("copy button puts the email on the clipboard", async ({
    page,
    context,
    browserName,
  }) => {
    test.skip(
      browserName !== "chromium",
      "clipboard permissions are Chromium-only",
    );
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("./#contact");
    await page.getByRole("button", { name: "Copiar" }).click();
    await expect(page.getByRole("status")).toHaveText("Copiado");
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
      EMAIL,
    );
  });

  test("deploy record states honestly when it was a local build", async ({
    page,
  }) => {
    test.skip(Boolean(process.env.GITHUB_ACTIONS), "CI builds show real data");
    await page.goto("./");
    const record = page.locator("figure", {
      hasText: "Registro de deploy desta página",
    });
    await expect(record).toContainText("Build local, fora do CI");
    await expect(record.getByRole("link")).toHaveCount(0);
  });
});

test("deploy record links the exact commit and run that built the page", async ({
  page,
}) => {
  const sha = process.env.GITHUB_SHA;
  const repository = process.env.GITHUB_REPOSITORY;
  const runId = process.env.GITHUB_RUN_ID;
  test.skip(
    !process.env.GITHUB_ACTIONS || !sha,
    "only CI builds carry provenance",
  );
  const server = process.env.GITHUB_SERVER_URL ?? "https://github.com";

  await page.goto("./");
  const record = page.locator("figure", {
    hasText: "Registro de deploy desta página",
  });
  await expect(
    record.getByRole("link", { name: sha!.slice(0, 7) }),
  ).toHaveAttribute("href", `${server}/${repository}/commit/${sha}`);
  await expect(record.getByRole("link", { name: `#${runId}` })).toHaveAttribute(
    "href",
    `${server}/${repository}/actions/runs/${runId}`,
  );
  await expect(record).toContainText("Publicado no GitHub Pages");
});

test.describe("accessibility", () => {
  for (const path of [
    "./",
    "en/",
    "projects/projeto-korp/",
    "en/projects/kubernetes-application-stack/",
    "does-not-exist/",
  ]) {
    test(`no serious axe violations on ${path}`, async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      const serious = results.violations.filter((violation) =>
        ["serious", "critical"].includes(violation.impact ?? ""),
      );
      expect(
        serious.map(
          (v) => `${v.id}: ${v.nodes.map((n) => n.target).join(" | ")}`,
        ),
      ).toEqual([]);
    });
  }
});
