#!/usr/bin/env node
/**
 * Resume as code: renders scripts/resume/resume-data.mjs to A4 PDFs with
 * selectable text (ATS friendly, single column).
 *
 *   pnpm resume   ->  public/curriculo.pdf (pt-BR) and public/resume.pdf (en-US)
 */
import { resolve } from "node:path";

import { chromium } from "@playwright/test";

import { resumes } from "./resume-data.mjs";

const escape = (text) =>
  String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

function render(resume) {
  const { contact, sections } = resume;
  const list = (items) =>
    `<ul>${items.map((item) => `<li>${escape(item)}</li>`).join("")}</ul>`;

  return `<!doctype html>
<html lang="${resume.lang}">
<head>
<meta charset="utf-8">
<title>${escape(contact.name)}</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=block" rel="stylesheet">
<style>
  @page { size: A4; margin: 11mm 14mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Archivo, Arial, sans-serif; font-size: 9pt; line-height: 1.32; color: #1A1D22; }
  header { border-bottom: 1.5px solid #1A1D22; padding-bottom: 6pt; margin-bottom: 6pt; }
  h1 { font-size: 19pt; font-weight: 700; letter-spacing: -0.01em; font-variation-settings: "wdth" 110; }
  .title { margin-top: 2pt; font-size: 10pt; font-weight: 600; color: #8A5300; }
  .contact { margin-top: 2pt; color: #3D434C; font-size: 9pt; }
  h2 { font-size: 10pt; font-weight: 700; margin: 7pt 0 3pt; padding-bottom: 2pt; border-bottom: 0.6px solid #C9CDD3; }
  p { margin-bottom: 2pt; }
  ul { margin: 2pt 0 0 13pt; }
  li { margin-bottom: 0.8pt; }
  .skills { display: grid; grid-template-columns: 30% 70%; row-gap: 0.8pt; }
  .skills dt { font-weight: 600; }
  .item { margin-top: 3.5pt; break-inside: avoid; }
  .item-head { display: flex; justify-content: space-between; gap: 12pt; }
  .item-head strong { font-weight: 700; }
  .meta { color: #3D434C; white-space: nowrap; }
  .tag { color: #3D434C; font-weight: 400; }
  .edu { display: flex; justify-content: space-between; gap: 12pt; }
</style>
</head>
<body>
  <header>
    <h1>${escape(contact.name)}</h1>
    <p class="title">${escape(resume.title)}</p>
    <p class="contact">${escape(contact.location)} | ${escape(contact.phone)} | ${escape(contact.email)}</p>
    <p class="contact">${contact.links.map(escape).join(" | ")}</p>
  </header>

  <h2>${escape(sections.summary)}</h2>
  <p>${escape(resume.summary)}</p>

  <h2>${escape(sections.skills)}</h2>
  <dl class="skills">
    ${resume.skills.map(([area, items]) => `<dt>${escape(area)}</dt><dd>${escape(items)}</dd>`).join("")}
  </dl>

  <h2>${escape(sections.projects)}</h2>
  ${resume.projects
    .map(
      (project) => `<div class="item">
        <p><strong>${escape(project.name)}</strong> <span class="tag">· ${escape(project.tag)}</span></p>
        ${list(project.bullets)}
      </div>`,
    )
    .join("")}

  <h2>${escape(sections.experience)}</h2>
  ${resume.experience
    .map(
      (job) => `<div class="item">
        <div class="item-head"><p><strong>${escape(job.company)}</strong>, ${escape(job.role)}</p><p class="meta">${escape(job.period)} | ${escape(job.place)}</p></div>
        ${list(job.bullets)}
      </div>`,
    )
    .join("")}

  <h2>${escape(sections.education)}</h2>
  ${resume.education
    .map(
      ([course, school, status]) =>
        `<div class="edu"><p><strong>${escape(course)}</strong>, ${escape(school)}</p><p class="meta">${escape(status)}</p></div>`,
    )
    .join("")}

  <h2>${escape(sections.languages)}</h2>
  <p>${escape(resume.languages)}</p>
</body>
</html>`;
}

const browser = await chromium.launch();
try {
  for (const resume of Object.values(resumes)) {
    const page = await browser.newPage();
    await page.setContent(render(resume), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const output = resolve(resume.file);
    const pdf = await page.pdf({
      path: output,
      format: "A4",
      printBackground: true,
    });
    // Count real pages in the generated PDF; a resume should fit on one.
    const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page\b/g) ?? [])
      .length;
    console.log(`${output}: ${pages} page${pages === 1 ? "" : "s"}`);
    if (pages > 1) {
      console.warn(
        `  warning: ${resume.lang} resume spills onto ${pages} pages`,
      );
    }
    await page.close();
  }
} finally {
  await browser.close();
}
