/**
 * Lulu design tokens
 *
 * Extracted from a lululemon.com page reference (colors, type scale, spacing,
 * radii). This is the single source of truth for the parallel "Lulu" theme -
 * Tailwind config and CSS variables both derive from these values so they
 * never drift apart.
 *
 * Saans/Calibre are lululemon's proprietary fonts and aren't publicly
 * hosted, so the font stacks fall back to Helvetica Neue/Roboto until real
 * font files are dropped into public/fonts/lulu and wired up.
 */

export const luluColors = {
  ink: "#140F0F",
  inkMuted: "rgba(20, 15, 15, 0.6)",
  canvas: "#FAFAFA",
  surface: "#FFFFFF",
  sand: "#EFEEEC",
  bone: "#FDFDF6",
  stone: "#8D9196",
  line: "rgba(20, 15, 15, 0.3)",
  accent: "#DE212F",
  overlay: "rgba(20, 15, 15, 0.66)",
} as const;

export const luluFonts = {
  display: '"Saans", "Helvetica Neue", Helvetica, Roboto, sans-serif',
  body: '"Calibre", "Helvetica Neue", Helvetica, Roboto, sans-serif',
} as const;

export const luluFontWeights = {
  regular: 380,
  medium: 500,
  semibold: 570,
} as const;

/**
 * Type scale: [fontSize, lineHeight, letterSpacing, fontWeight]
 * Sizes/line-heights/tracking are copied verbatim from the reference so the
 * rhythm matches exactly.
 */
export const luluTypeScale = {
  displayXl: {
    fontSize: "100px",
    lineHeight: "120px",
    letterSpacing: "-4px",
    fontWeight: luluFontWeights.regular,
  },
  displayLg: {
    fontSize: "64px",
    lineHeight: "70.4px",
    letterSpacing: "-2.56px",
    fontWeight: luluFontWeights.regular,
  },
  displayMd: {
    fontSize: "40px",
    lineHeight: "48px",
    letterSpacing: "-0.8px",
    fontWeight: luluFontWeights.regular,
  },
  displaySm: {
    fontSize: "28px",
    lineHeight: "36.4px",
    letterSpacing: "-0.56px",
    fontWeight: luluFontWeights.regular,
  },
  bodyLg: {
    fontSize: "20px",
    lineHeight: "28px",
    letterSpacing: "0.2px",
    fontWeight: luluFontWeights.regular,
  },
  bodyMd: {
    fontSize: "18px",
    lineHeight: "25.2px",
    letterSpacing: "0.18px",
    fontWeight: luluFontWeights.regular,
  },
  bodySm: {
    fontSize: "14px",
    lineHeight: "19.6px",
    letterSpacing: "0px",
    fontWeight: luluFontWeights.regular,
  },
  productTitle: {
    fontSize: "19.008px",
    lineHeight: "24px",
    letterSpacing: "0px",
    fontWeight: luluFontWeights.medium,
  },
  label: {
    fontSize: "12px",
    lineHeight: "16.8px",
    letterSpacing: "0px",
    fontWeight: luluFontWeights.regular,
  },
  button: {
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "1.2px",
    fontWeight: luluFontWeights.semibold,
  },
} as const;

/**
 * Spacing scale (px). Lines up 1:1 with Tailwind's default spacing scale
 * (4 -> spacing-1, 8 -> spacing-2, ... 96 -> spacing-24) so existing utility
 * classes (p-10, gap-24, etc.) already produce the right rhythm on /lulu
 * pages - no custom spacing utilities needed.
 */
export const luluSpacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  "6xl": 56,
  "7xl": 64,
  "8xl": 80,
  "9xl": 96,
} as const;

export const luluRadii = {
  sm: "8px",
  pill: "999px",
  full: "50%",
} as const;

export const luluTokens = {
  colors: luluColors,
  fonts: luluFonts,
  fontWeights: luluFontWeights,
  typeScale: luluTypeScale,
  spacing: luluSpacing,
  radii: luluRadii,
} as const;

export type LuluTokens = typeof luluTokens;
