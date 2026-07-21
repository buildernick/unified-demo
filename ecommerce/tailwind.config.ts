import type { Config } from "tailwindcss";
import { luluColors, luluTypeScale, luluRadii } from "./src/lulu/tokens";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1560px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        tertiary: "var(--tertiary)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        energetic: {
          DEFAULT: "var(--energetic)",
          foreground: "var(--energetic-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        lulu: luluColors,
      },
      fontFamily: {
        "lulu-display": ["Saans", "Helvetica Neue", "Helvetica", "Roboto", "sans-serif"],
        "lulu-body": ["Calibre", "Helvetica Neue", "Helvetica", "Roboto", "sans-serif"],
      },
      fontSize: {
        "lulu-display-xl": [luluTypeScale.displayXl.fontSize, { lineHeight: luluTypeScale.displayXl.lineHeight, letterSpacing: luluTypeScale.displayXl.letterSpacing, fontWeight: String(luluTypeScale.displayXl.fontWeight) }],
        "lulu-display-lg": [luluTypeScale.displayLg.fontSize, { lineHeight: luluTypeScale.displayLg.lineHeight, letterSpacing: luluTypeScale.displayLg.letterSpacing, fontWeight: String(luluTypeScale.displayLg.fontWeight) }],
        "lulu-display-md": [luluTypeScale.displayMd.fontSize, { lineHeight: luluTypeScale.displayMd.lineHeight, letterSpacing: luluTypeScale.displayMd.letterSpacing, fontWeight: String(luluTypeScale.displayMd.fontWeight) }],
        "lulu-display-sm": [luluTypeScale.displaySm.fontSize, { lineHeight: luluTypeScale.displaySm.lineHeight, letterSpacing: luluTypeScale.displaySm.letterSpacing, fontWeight: String(luluTypeScale.displaySm.fontWeight) }],
        "lulu-body-lg": [luluTypeScale.bodyLg.fontSize, { lineHeight: luluTypeScale.bodyLg.lineHeight, letterSpacing: luluTypeScale.bodyLg.letterSpacing, fontWeight: String(luluTypeScale.bodyLg.fontWeight) }],
        "lulu-body-md": [luluTypeScale.bodyMd.fontSize, { lineHeight: luluTypeScale.bodyMd.lineHeight, letterSpacing: luluTypeScale.bodyMd.letterSpacing, fontWeight: String(luluTypeScale.bodyMd.fontWeight) }],
        "lulu-body-sm": [luluTypeScale.bodySm.fontSize, { lineHeight: luluTypeScale.bodySm.lineHeight, letterSpacing: luluTypeScale.bodySm.letterSpacing, fontWeight: String(luluTypeScale.bodySm.fontWeight) }],
        "lulu-product-title": [luluTypeScale.productTitle.fontSize, { lineHeight: luluTypeScale.productTitle.lineHeight, fontWeight: String(luluTypeScale.productTitle.fontWeight) }],
        "lulu-label": [luluTypeScale.label.fontSize, { lineHeight: luluTypeScale.label.lineHeight, fontWeight: String(luluTypeScale.label.fontWeight) }],
        "lulu-button": [luluTypeScale.button.fontSize, { lineHeight: luluTypeScale.button.lineHeight, letterSpacing: luluTypeScale.button.letterSpacing, fontWeight: String(luluTypeScale.button.fontWeight) }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "lulu-sm": luluRadii.sm,
        "lulu-pill": luluRadii.pill,
        "lulu-full": luluRadii.full,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      flexBasis: {
        "1/2-gap-2": "calc(50% - (0.5 * 0.5rem))",
        "1/2-gap-3": "calc(50% - (0.5 * 0.75rem))",
        "1/2-gap-4": "calc(50% - (0.5 * 1rem))",
        "1/2-gap-6": "calc(50% - (0.5 * 1.5rem))",
        "1/3-gap-2": "calc(33.333% - (2/3 * 0.5rem))",
        "1/3-gap-3": "calc(33.333% - (2/3 * 0.75rem))",
        "1/3-gap-4": "calc(33.333% - (2/3 * 1rem))",
        "1/3-gap-6": "calc(33.333% - (2/3 * 1.5rem))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
