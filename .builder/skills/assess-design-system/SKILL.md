---
name: assess-design-system
description: Assess the page the user is currently viewing to explain what counts as Lulu standard tokens/components and what is custom, page-specific implementation. Use when the user asks to "assess design system" for the current page.
---

# Assess Design System

Analyze the page currently open in the preview iframe and report back on how much of it comes from the Lulu design system versus custom, page-specific code.

## Steps

1. Identify the current page's route from the iframe context (e.g. `/lulu/lounge`) and find its source file (e.g. `ecommerce/app/lulu/**/page.tsx`).
2. Read that page file and trace every import.
3. Classify each piece of UI on the page:
   - **Lulu components**: anything imported from `ecommerce/src/lulu/components/*` (e.g. `LuluVideoPlayer`, `LuluProductCarousel`, `LuluHeader`, `LuluSiteFooter`, `LuluHeadline`, `LuluText`, `LuluButton`, etc.), plus shared layout pieces like the header/footer.
   - **Custom**: markup, sections, copy, images, and layout written directly in the page file that is not a reusable Lulu component (hero text blocks, one-off image grids, category tile grids, banners, etc.).
4. Text, spacing, and design tokens (colors, fonts, spacing scale, radii from `tailwind.config.ts` / `lulu-*` classes) are always Lulu standard tokens — do not spend analysis time on these beyond stating this baseline.

## Response format

Always reply in this exact structure:

- **What is Lulu standard?** Split into two clearly labeled sub-sections:
  - **Tokens** — a standout, prominent statement that all text, fonts, spacing, tokens, and colors on the page are standard Lulu design tokens. Give this its own line/heading so it cannot be missed.
  - **Components** — a list of the specific reusable Lulu components used on this page, with file paths.
- **What is custom?** List the page-specific sections/markup built directly in the page file that are not reusable Lulu components, with brief descriptions (e.g. hero copy block, category tile grid, image banner).
- **Recommendations** For each custom section identified above, evaluate and note under one of the following:
  - **Should remain custom** — one-off content tied specifically to this page's narrative (unique copy, imagery, or layout unlikely to be reused elsewhere).
  - **Could adopt an existing standard component** — the section could be rebuilt using an existing Lulu component (name the component and briefly explain the fit).
  - **Candidate for a new standard component** — the section follows a reusable pattern (e.g. appears more than once across pages, or is generic enough to be reused) and could be extracted into a new Lulu component (propose a name and describe its props/shape).

Use formal language throughout. Do not use the word "stuff" or other casual phrasing.

Keep the reply focused on the components-vs-custom distinction — don't re-litigate tokens beyond the one-line baseline statement.
