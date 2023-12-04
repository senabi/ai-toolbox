import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi-sans)", ...fontFamily.sans],
        "geist-sans": ["var(--font-geist-sans)", ...fontFamily.sans],
        sans: ["var(--font-satoshi-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        // --bg-subtle: #f9fafb;
        // --bg-subtle-hover: #f3f4f6;
        // --bg-subtle-pressed: #e5e7eb;
        // --bg-base: #ffffff;
        // --bg-base-hover: #f9fafb;
        // --bg-base-pressed: #f3f4f6;
        // --bg-component: #f1f3f5;
        // --bg-switch-off: #e5e7eb;
        // --bg-switch-off-hover: #d1d5db;
        // --bg-overlay: #9a9ca0;
        // --bg-disabled: #f3f4f6;
        // --bg-highlight: #eff6ff;
        // --bg-field: #f9fafb;
        // --bg-field-hover: #f3f4f6;
        // --bg-highlight-hover: #dbeafe;
        "bg-subtle": {
          DEFAULT: "var(--bg-subtle)",
          hover: "var(--bg-subtle-hover)",
          pressed: "var(--bg-subtle-pressed)",
        },
        "bg-base": {
          DEFAULT: "var(--bg-base)",
          hover: "var(--bg-base-hover)",
          pressed: "var(--bg-base-pressed)",
        },
        // "bg-base-hover": "var(--bg-base-hover)",
        // "bg-base-pressed": "var(--bg-base-pressed)",
        "bg-component": "var(--bg-component)",
        "bg-switch-off": {
          DEFAULT: "var(--bg-switch-off)",
          hover: "var(--bg-switch-off-hover)",
        },
        // "bg-switch-off-hover": "var(--bg-switch-off-hover)",
        "bg-overlay": "var(--bg-overlay)",
        "bg-disabled": "var(--bg-disabled)",
        "bg-highlight": "var(--bg-highlight)",
        "bg-field": {
          DEFAULT: "var(--bg-field)",
          hover: "var(--bg-field-hover)",
        },
        // "bg-field-hover": "var(--bg-field-hover)",
        "bg-highlight-hover": "var(--bg-highlight-hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
