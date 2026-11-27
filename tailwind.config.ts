import type { Config } from "tailwindcss";

const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: channel("bg"),
        surface: channel("surface"),
        raised: channel("raised"),
        line: {
          DEFAULT: channel("line"),
          strong: channel("line-strong"),
        },
        fg: channel("fg"),
        muted: channel("muted"),
        signal: {
          DEFAULT: channel("signal"),
          fg: channel("signal-fg"),
        },
        ok: channel("ok"),
      },
      fontFamily: {
        sans: [
          "var(--font-archivo)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "4px",
        md: "6px",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
