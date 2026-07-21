import { LuluFooter } from "@/src/lulu/components/LuluFooter";
import { LuluButton } from "@/src/lulu/components/LuluButton";
import { LuluHeadline } from "@/src/lulu/components/LuluHeadline";
import { LuluText } from "@/src/lulu/components/LuluText";
import { luluColors, luluSpacing, luluTypeScale } from "@/src/lulu/tokens";

const typeSpecimens: Array<{
  label: string;
  className: string;
  token: keyof typeof luluTypeScale;
}> = [
  { label: "Display XL", className: "text-lulu-display-xl", token: "displayXl" },
  { label: "Display LG", className: "text-lulu-display-lg", token: "displayLg" },
  { label: "Display MD", className: "text-lulu-display-md", token: "displayMd" },
  { label: "Display SM", className: "text-lulu-display-sm", token: "displaySm" },
  { label: "Body LG", className: "text-lulu-body-lg", token: "bodyLg" },
  { label: "Body MD", className: "text-lulu-body-md", token: "bodyMd" },
  { label: "Body SM", className: "text-lulu-body-sm", token: "bodySm" },
  { label: "Product Title", className: "text-lulu-product-title", token: "productTitle" },
  { label: "Label", className: "text-lulu-label", token: "label" },
  { label: "Button", className: "text-lulu-button uppercase", token: "button" },
];

export default function LuluStyleGuidePage() {
  const spacingEntries = Object.entries(luluSpacing);
  const colorEntries = Object.entries(luluColors);

  return (
    <>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <LuluHeadline as="h1" size="lg">
            Lulu design tokens
          </LuluHeadline>
          <LuluText size="lg" className="mt-4 max-w-2xl">
            Colors, type, spacing, and radii pulled from the lululemon
            reference page, defined once in{" "}
            <code className="text-lulu-body-md">src/lulu/tokens.ts</code> and
            wired into Tailwind under the <code>lulu-</code> namespace.
          </LuluText>
        </div>
      </section>

      <section className="bg-lulu-surface px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
            Color
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {colorEntries.map(([name, value]) => (
              <div key={name} className="flex flex-col gap-3">
                <div
                  className="h-24 w-full rounded-lulu-sm border border-lulu-line"
                  style={{ backgroundColor: value }}
                />
                <div>
                  <p className="font-lulu-display text-lulu-body-md text-lulu-ink">
                    lulu-{name}
                  </p>
                  <p className="font-lulu-display text-lulu-label text-lulu-stone">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="type-scale" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
            Type scale
          </h2>
          <div className="flex flex-col gap-8">
            {typeSpecimens.map((specimen) => {
              const scale = luluTypeScale[specimen.token];
              return (
                <div
                  key={specimen.label}
                  className="flex flex-col gap-2 border-b border-lulu-line pb-8 last:border-none md:flex-row md:items-baseline md:justify-between"
                >
                  <p className={`font-lulu-display text-lulu-ink ${specimen.className}`}>
                    Lock in. Level up.
                  </p>
                  <p className="whitespace-nowrap font-lulu-display text-lulu-label text-lulu-stone">
                    {specimen.label} — {scale.fontSize} / {scale.lineHeight} /{" "}
                    {scale.letterSpacing} tracking / {scale.fontWeight} weight
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-lulu-surface px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
            Spacing scale
          </h2>
          <div className="flex flex-col gap-3">
            {spacingEntries.map(([name, value]) => (
              <div key={name} className="flex items-center gap-4">
                <span className="w-16 shrink-0 font-lulu-display text-lulu-label text-lulu-stone">
                  {name}
                </span>
                <div
                  className="h-4 bg-lulu-accent"
                  style={{ width: `${value}px` }}
                />
                <span className="font-lulu-display text-lulu-label text-lulu-stone">
                  {value}px
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <LuluButton href="/lulu/style-guide">Primary button</LuluButton>
            <LuluButton href="/lulu/style-guide" variant="secondary">
              Secondary button
            </LuluButton>
          </div>
        </div>
      </section>

      <LuluFooter />
    </>
  );
}
