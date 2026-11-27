"use client";

import { useId, useMemo, useState } from "react";

import { Icon } from "@/components/icons/icon";
import type { IconName } from "@/components/icons/icon-registry";
import { RichText } from "@/components/ui/rich-text";
import { cn } from "@/lib/utils";
import type {
  ArchitectureDiagram as Diagram,
  DiagramNode,
  DiagramNodeKind,
  Locale,
} from "@/types";

/** Node box size in diagram units (the canvas is diagram.width × height). */
const NODE_W = 150;
const NODE_H = 58;

const kindIcon: Record<DiagramNodeKind, IconName> = {
  edge: "globe",
  app: "box",
  data: "database",
  observability: "activity",
  automation: "settings",
  delivery: "gitBranch",
  cloud: "cloud",
};

const labels: Record<
  Locale,
  {
    kinds: Record<DiagramNodeKind, string>;
    from: string;
    to: string;
  }
> = {
  "pt-BR": {
    kinds: {
      edge: "Entrada",
      app: "Aplicação",
      data: "Dados",
      observability: "Observabilidade",
      automation: "Automação",
      delivery: "Entrega",
      cloud: "Cloud",
    },
    from: "Recebe de",
    to: "Envia para",
  },
  "en-US": {
    kinds: {
      edge: "Edge",
      app: "Application",
      data: "Data",
      observability: "Observability",
      automation: "Automation",
      delivery: "Delivery",
      cloud: "Cloud",
    },
    from: "Receives from",
    to: "Sends to",
  },
};

/** Point where the segment from `from` towards `to` leaves `from`'s box. */
function exitPoint(from: DiagramNode, to: DiagramNode, padding: number) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const halfW = NODE_W / 2 + padding;
  const halfH = NODE_H / 2 + padding;
  const t = Math.min(
    dx === 0 ? Number.POSITIVE_INFINITY : halfW / Math.abs(dx),
    dy === 0 ? Number.POSITIVE_INFINITY : halfH / Math.abs(dy),
  );
  return { x: from.x + dx * t, y: from.y + dy * t };
}

type ArchitectureDiagramProps = {
  diagram: Diagram;
  repository: string;
  locale: Locale;
  text: {
    hint: string;
    openFile: string;
    diagramLabel: string;
    componentList: string;
  };
};

export function ArchitectureDiagram({
  diagram,
  repository,
  locale,
  text,
}: ArchitectureDiagramProps) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const hintId = `${uid}-hint`;
  const l = labels[locale];

  const byId = useMemo(
    () => new Map(diagram.nodes.map((node) => [node.id, node])),
    [diagram.nodes],
  );
  const initial =
    diagram.nodes.find((node) => node.kind === "app") ?? diagram.nodes[0];
  const [selectedId, setSelectedId] = useState(initial.id);
  const selected = byId.get(selectedId) ?? initial;

  const inbound = diagram.edges.filter((edge) => edge.to === selected.id);
  const outbound = diagram.edges.filter((edge) => edge.from === selected.id);

  const nodeButton = (node: DiagramNode, layout: "canvas" | "list") => {
    const isSelected = node.id === selected.id;
    return (
      <button
        key={node.id}
        type="button"
        aria-pressed={isSelected}
        onClick={() => setSelectedId(node.id)}
        className={cn(
          "flex items-center gap-2.5 rounded-md border px-3 text-left transition-colors duration-150",
          isSelected
            ? "border-signal bg-raised"
            : "border-line-strong bg-surface hover:border-fg/40",
          layout === "canvas"
            ? "absolute -translate-x-1/2 -translate-y-1/2"
            : "w-full py-2.5",
        )}
        style={
          layout === "canvas"
            ? {
                left: `${(node.x / diagram.width) * 100}%`,
                top: `${(node.y / diagram.height) * 100}%`,
                width: `${(NODE_W / diagram.width) * 100}%`,
                height: `${(NODE_H / diagram.height) * 100}%`,
              }
            : undefined
        }
      >
        <Icon
          name={kindIcon[node.kind]}
          className={cn(
            "size-4 shrink-0",
            isSelected ? "text-signal" : "text-muted",
          )}
        />
        <span className="min-w-0">
          <span className="block text-sm font-semibold leading-tight text-fg">
            {node.label}
          </span>
          {node.sublabel ? (
            <span className="mt-0.5 block truncate font-mono text-[0.6875rem] leading-tight text-muted">
              {node.sublabel}
            </span>
          ) : null}
        </span>
      </button>
    );
  };

  return (
    <figure>
      <p id={hintId} className="mb-3 text-sm text-muted">
        {text.hint}
      </p>

      <div
        role="group"
        aria-label={text.diagramLabel}
        aria-describedby={hintId}
        className="bg-blueprint relative hidden overflow-hidden rounded-md border border-line md:block"
        style={{ aspectRatio: `${diagram.width} / ${diagram.height}` }}
      >
        <svg
          viewBox={`0 0 ${diagram.width} ${diagram.height}`}
          className="absolute inset-0 size-full"
          aria-hidden="true"
        >
          <defs>
            {(["idle", "active"] as const).map((state) => (
              <marker
                key={state}
                id={`${uid}-arrow-${state}`}
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path
                  d="M0 0 L10 5 L0 10 z"
                  className={
                    state === "active" ? "fill-signal" : "fill-line-strong"
                  }
                />
              </marker>
            ))}
          </defs>
          {diagram.edges.map((edge) => {
            const from = byId.get(edge.from);
            const to = byId.get(edge.to);
            if (!from || !to) return null;
            const start = exitPoint(from, to, 2);
            const end = exitPoint(to, from, 6);
            const isActive =
              edge.from === selected.id || edge.to === selected.id;
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2;
            // Mostly-vertical edges carry their label beside the line,
            // the rest above it, so text never sits on top of a stroke.
            const isVertical =
              Math.abs(end.y - start.y) > Math.abs(end.x - start.x);
            const label = isVertical
              ? { x: midX + 10, y: midY + 4, anchor: "start" as const }
              : { x: midX, y: midY - 8, anchor: "middle" as const };
            return (
              <g key={`${edge.from}-${edge.to}`}>
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  strokeWidth={isActive ? 2 : 1.5}
                  strokeDasharray={edge.dashed ? "6 5" : undefined}
                  markerEnd={`url(#${uid}-arrow-${isActive ? "active" : "idle"})`}
                  className={cn(
                    "transition-[stroke] duration-200",
                    isActive ? "stroke-signal" : "stroke-line-strong",
                  )}
                />
                {edge.label ? (
                  <text
                    x={label.x}
                    y={label.y}
                    textAnchor={label.anchor}
                    fontSize="12"
                    strokeWidth="6"
                    paintOrder="stroke"
                    className={cn(
                      "stroke-bg font-mono",
                      isActive ? "fill-fg" : "fill-muted",
                    )}
                  >
                    {edge.label}
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
        {diagram.nodes.map((node) => nodeButton(node, "canvas"))}
      </div>

      <ul
        aria-label={text.componentList}
        className="grid gap-2 sm:grid-cols-2 md:hidden"
      >
        {diagram.nodes.map((node) => (
          <li key={node.id}>{nodeButton(node, "list")}</li>
        ))}
      </ul>

      <figcaption
        aria-live="polite"
        className="mt-4 grid gap-x-10 gap-y-4 rounded-md border border-line bg-surface p-5 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]"
      >
        <div>
          <p className="font-semibold text-fg">{selected.label}</p>
          {selected.sublabel ? (
            <p className="mt-0.5 font-mono text-sm text-muted">
              {selected.sublabel}
            </p>
          ) : null}
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
            <Icon name={kindIcon[selected.kind]} className="size-3.5" />
            {l.kinds[selected.kind]}
          </p>
        </div>
        <div className="min-w-0">
          <p className="max-w-prose text-[0.9375rem] leading-relaxed text-fg">
            <RichText text={selected.detail[locale]} />
          </p>
          {inbound.length > 0 || outbound.length > 0 ? (
            <dl
              className={cn(
                "mt-4 grid gap-x-8 gap-y-3 text-sm",
                inbound.length > 0 && outbound.length > 0 && "sm:grid-cols-2",
              )}
            >
              {(
                [
                  [l.from, inbound, "from"],
                  [l.to, outbound, "to"],
                ] as const
              ).map(([title, edges, side]) =>
                edges.length > 0 ? (
                  <div key={side}>
                    <dt className="text-muted">{title}</dt>
                    <dd className="mt-1">
                      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-fg">
                        {edges.map((edge) => {
                          const other = byId.get(
                            side === "from" ? edge.from : edge.to,
                          );
                          return (
                            <li
                              key={`${edge.from}-${edge.to}`}
                              className="whitespace-nowrap"
                            >
                              {other?.label}
                              {edge.label ? (
                                <span className="text-muted">
                                  {" "}
                                  (<code>{edge.label}</code>)
                                </span>
                              ) : null}
                            </li>
                          );
                        })}
                      </ul>
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>
          ) : null}
          {selected.evidence ? (
            <a
              href={`${repository}/blob/HEAD/${selected.evidence}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex max-w-full items-center gap-2 rounded-sm text-sm text-signal hover:underline"
            >
              <Icon name="external" className="size-3.5 shrink-0" />
              <span className="shrink-0">{text.openFile}:</span>
              <code className="truncate">{selected.evidence}</code>
            </a>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}
