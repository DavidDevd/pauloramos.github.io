import { describe, expect, it } from "vitest";

import { getBuildInfo } from "@/lib/build-info";

const SHA = "a3f9c1e2b4d5f60718293a4b5c6d7e8f90a1b2c3";
const NOW = new Date("2026-11-26T12:00:00.000Z");

describe("getBuildInfo", () => {
  it("describes the exact GitHub Actions run that built the page", () => {
    const info = getBuildInfo(
      {
        GITHUB_ACTIONS: "true",
        GITHUB_SHA: SHA,
        GITHUB_RUN_ID: "1234567890",
        GITHUB_REPOSITORY: "DavidDevd/pauloramos.github.io",
        GITHUB_SERVER_URL: "https://github.com",
        GITHUB_REF_NAME: "main",
      },
      NOW,
    );

    expect(info).toEqual({
      isCi: true,
      sha: SHA,
      shortSha: "a3f9c1e",
      commitUrl: `https://github.com/DavidDevd/pauloramos.github.io/commit/${SHA}`,
      runId: "1234567890",
      runUrl:
        "https://github.com/DavidDevd/pauloramos.github.io/actions/runs/1234567890",
      branch: "main",
      builtAt: "2026-11-26T12:00:00.000Z",
    });
  });

  it("reports a local build without inventing CI data", () => {
    const info = getBuildInfo({}, NOW);
    expect(info.isCi).toBe(false);
    expect(info.sha).toBeNull();
    expect(info.commitUrl).toBeNull();
    expect(info.runUrl).toBeNull();
    expect(info.builtAt).toBe("2026-11-26T12:00:00.000Z");
  });

  it("rejects malformed values instead of rendering them into links", () => {
    const info = getBuildInfo(
      {
        GITHUB_ACTIONS: "true",
        GITHUB_SHA: "not-a-sha",
        GITHUB_RUN_ID: "1; rm -rf",
        GITHUB_REPOSITORY: "evil/repo/../x",
      },
      NOW,
    );
    expect(info.isCi).toBe(false);
    expect(info.commitUrl).toBeNull();
    expect(info.runUrl).toBeNull();
  });
});
