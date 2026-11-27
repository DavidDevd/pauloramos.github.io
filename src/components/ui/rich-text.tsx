import { Fragment } from "react";

/**
 * Renders text where `backtick` segments are inline code. Content strings
 * use this for commands and identifiers inside prose (see content tests,
 * which keep the markup balanced).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split("`");
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <code
            key={index}
            className="rounded-sm bg-raised px-1 py-px text-[0.85em] text-fg"
          >
            {part}
          </code>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
