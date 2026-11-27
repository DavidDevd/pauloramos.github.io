#!/usr/bin/env node
/**
 * Renders the Open Graph card (public/og.png, 1200×630) shown when the site
 * is shared on LinkedIn, Slack or WhatsApp. Re-run after changing identity
 * copy: node scripts/og-image.mjs
 */
import { resolve } from "node:path";

import { chromium } from "@playwright/test";

const output = resolve("public/og.png");

const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=IBM+Plex+Mono:wght@400;500&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #1A1D22; color: #E8EAED;
    font-family: Archivo, sans-serif;
    display: grid; grid-template-columns: 1fr 360px; gap: 56px;
    padding: 72px 80px;
  }
  .name { font-size: 76px; font-weight: 700; letter-spacing: -0.02em;
          font-variation-settings: "wdth" 112; line-height: 1; }
  .role { margin-top: 14px; font-size: 32px; color: #9DA6B1; }
  .thesis { margin-top: 56px; font-size: 34px; line-height: 1.25; font-weight: 550;
            font-variation-settings: "wdth" 106; max-width: 16em; }
  .url { position: absolute; left: 80px; bottom: 64px; display: flex; align-items: center;
         gap: 14px; font-family: "IBM Plex Mono", monospace; font-size: 22px; color: #9DA6B1; }
  .dot { width: 14px; height: 14px; border-radius: 3px; background: #F6A623; }
  .record { align-self: start; margin-top: 8px; border: 1px solid #323942; border-radius: 8px;
            background: #21252B; padding: 26px 28px; }
  .record h2 { font-size: 20px; font-weight: 600; margin-bottom: 18px; }
  .row { display: flex; align-items: center; gap: 14px; font-size: 21px; padding: 7px 0; }
  .check { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #4FBF85;
           display: grid; place-items: center; }
  .check::after { content: ""; width: 8px; height: 4px; border-left: 2px solid #4FBF85;
                  border-bottom: 2px solid #4FBF85; transform: rotate(-45deg) translate(1px, -1px); }
  .published { border-top: 1px solid #323942; margin-top: 10px; padding-top: 16px; font-weight: 600; }
</style>
</head>
<body>
  <main>
    <p class="name">Paulo Ramos</p>
    <p class="role">DevOps Engineer</p>
    <p class="thesis">Transformo código em sistemas reproduzíveis, observáveis e prontos para operar.</p>
  </main>
  <aside class="record">
    <h2>Registro de deploy</h2>
    <div class="row"><span class="check"></span>Testes e lint</div>
    <div class="row"><span class="check"></span>E2E e acessibilidade</div>
    <div class="row"><span class="check"></span>Lighthouse</div>
    <div class="row published"><span class="check"></span>Publicado</div>
  </aside>
  <p class="url"><span class="dot"></span>daviddevd.github.io/pauloramos.github.io</p>
</body>
</html>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
  });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: output });
  console.log(output);
} finally {
  await browser.close();
}
