#!/usr/bin/env node
/**
 * Serves the static export the way GitHub Pages does for a project site:
 *   - everything lives under BASE_PATH (default /pauloramos.github.io)
 *   - a directory without a trailing slash redirects to the slash form
 *   - unknown paths return 404.html with status 404
 *
 * Used by the Playwright E2E suite and Lighthouse CI so both test the exact
 * artifact that gets deployed, at the exact URLs it will have.
 *
 * Usage: node scripts/serve-static.mjs [dir]   (PORT, BASE_PATH via env)
 */
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(process.argv[2] ?? "out");
const basePath = process.env.BASE_PATH ?? "/pauloramos.github.io";
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

async function isDirectory(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}

function send(res, status, file) {
  res.writeHead(status, {
    "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(file).pipe(res);
}

async function notFound(res) {
  const page = join(root, "404.html");
  if (await isFile(page)) return send(res, 404, page);
  res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return res.writeHead(400).end("Bad request");
  }

  if (pathname === "/" || pathname === basePath) {
    return res.writeHead(301, { Location: `${basePath}/` }).end();
  }
  if (!pathname.startsWith(`${basePath}/`)) return notFound(res);

  const relative = pathname.slice(basePath.length);
  const target = normalize(join(root, relative));
  // Refuse anything that escapes the export directory.
  if (target !== root && !target.startsWith(root + sep)) {
    return res.writeHead(403).end("Forbidden");
  }

  if (await isDirectory(target)) {
    if (!pathname.endsWith("/")) {
      return res
        .writeHead(301, { Location: `${pathname}/${url.search}` })
        .end();
    }
    const index = join(target, "index.html");
    return (await isFile(index)) ? send(res, 200, index) : notFound(res);
  }
  if (await isFile(target)) return send(res, 200, target);
  if (await isFile(`${target}.html`)) return send(res, 200, `${target}.html`);
  return notFound(res);
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}${basePath}/`);
});
