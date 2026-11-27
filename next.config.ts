import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/pauloramos.github.io" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Single source of truth: client code reads the same basePath that Next
  // uses, instead of a second env var that could drift from it.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // One 404 page for both locale root layouts (see app/global-not-found).
    globalNotFound: true,
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
