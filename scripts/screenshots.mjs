#!/usr/bin/env node
/**
 * Captures review screenshots of the static export.
 * Expects scripts/serve-static.mjs to be running on PORT (default 4173).
 *
 * Usage: node scripts/screenshots.mjs <output-dir>
 */
import { mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";

import { chromium, devices } from "@playwright/test";

const outDir = resolve(process.argv[2] ?? "docs/screenshots");
const port = Number(process.env.PORT ?? 4173);
const base = `http://localhost:${port}/pauloramos.github.io/`;

const shots = [
  { name: "home-desktop", path: "", viewport: { width: 1440, height: 900 } },
  {
    name: "architecture-desktop",
    path: "projects/projeto-korp/",
    anchor: "architecture",
    viewport: { width: 1440, height: 900 },
  },
  { name: "home-mobile", path: "", device: "iPhone 13" },
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
try {
  for (const shot of shots) {
    const context = await browser.newContext(
      shot.device
        ? { ...devices[shot.device], reducedMotion: "reduce" }
        : { viewport: shot.viewport, reducedMotion: "reduce" },
    );
    const page = await context.newPage();
    await page.goto(base + shot.path, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    if (shot.anchor) {
      await page.evaluate((id) => {
        document.documentElement.style.scrollBehavior = "auto";
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      }, shot.anchor);
    }
    const file = join(outDir, `${shot.name}.png`);
    await page.screenshot({ path: file, fullPage: Boolean(shot.fullPage) });
    console.log(file);
    await context.close();
  }
} finally {
  await browser.close();
}
