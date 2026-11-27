"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/icons/icon";

type CopyEmailProps = {
  email: string;
  labels: { copy: string; copied: string; copyFailed: string };
};

type CopyState = "idle" | "copied" | "failed";

export function CopyEmail({ email, labels }: CopyEmailProps) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  const message =
    state === "copied"
      ? labels.copied
      : state === "failed"
        ? labels.copyFailed
        : "";

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-9 items-center gap-2 rounded-md border border-line-strong px-3 text-sm font-medium text-fg transition-colors hover:border-fg/50 hover:bg-surface"
      >
        <Icon
          name={state === "copied" ? "check" : "copy"}
          className={state === "copied" ? "size-4 text-ok" : "size-4"}
        />
        {state === "copied" ? labels.copied : labels.copy}
      </button>
      <span role="status" className="sr-only">
        {message}
      </span>
    </>
  );
}
