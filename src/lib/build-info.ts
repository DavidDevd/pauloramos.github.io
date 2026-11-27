/**
 * Build provenance for the "this site is a production system" panel.
 *
 * Values come from the environment GitHub Actions provides to every job, so
 * the panel always describes the build that produced the page being viewed.
 * Outside CI every CI-only field is null and the UI says it is a local build.
 */
export type BuildInfo = {
  readonly isCi: boolean;
  readonly sha: string | null;
  readonly shortSha: string | null;
  readonly commitUrl: string | null;
  readonly runId: string | null;
  readonly runUrl: string | null;
  readonly branch: string | null;
  readonly builtAt: string;
};

type Env = Readonly<Record<string, string | undefined>>;

const SHA_PATTERN = /^[0-9a-f]{40}$/i;
const RUN_ID_PATTERN = /^\d+$/;
const REPOSITORY_PATTERN = /^[\w.-]+\/[\w.-]+$/;

export function getBuildInfo(
  env: Env = process.env,
  now: Date = new Date(),
): BuildInfo {
  const server = env.GITHUB_SERVER_URL ?? "https://github.com";
  const repository = REPOSITORY_PATTERN.test(env.GITHUB_REPOSITORY ?? "")
    ? env.GITHUB_REPOSITORY
    : undefined;
  const sha = SHA_PATTERN.test(env.GITHUB_SHA ?? "") ? env.GITHUB_SHA! : null;
  const runId = RUN_ID_PATTERN.test(env.GITHUB_RUN_ID ?? "")
    ? env.GITHUB_RUN_ID!
    : null;
  const isCi = env.GITHUB_ACTIONS === "true" && Boolean(repository && sha);

  return {
    isCi,
    sha: isCi ? sha : null,
    shortSha: isCi && sha ? sha.slice(0, 7) : null,
    commitUrl: isCi && sha ? `${server}/${repository}/commit/${sha}` : null,
    runId: isCi ? runId : null,
    runUrl:
      isCi && runId ? `${server}/${repository}/actions/runs/${runId}` : null,
    branch: isCi ? (env.GITHUB_REF_NAME ?? null) : null,
    builtAt: now.toISOString(),
  };
}
