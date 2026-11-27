import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;
const BASE_PATH = "/pauloramos.github.io";
const isCi = Boolean(process.env.CI);

/**
 * E2E runs against the static export (`out/`), built with GITHUB_PAGES=true
 * and served under the same base path GitHub Pages uses. What is tested is
 * the artifact that gets deployed.
 */
export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: isCi,
  retries: isCi ? 1 : 0,
  reporter: isCi ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${PORT}${BASE_PATH}/`,
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "node scripts/serve-static.mjs out",
    url: `http://localhost:${PORT}${BASE_PATH}/`,
    reuseExistingServer: !isCi,
    timeout: 30_000,
  },
});
