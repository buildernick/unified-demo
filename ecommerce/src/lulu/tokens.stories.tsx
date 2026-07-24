import type { Meta, StoryObj } from "@storybook/nextjs";
import { luluColors, luluSpacing, luluTypeScale } from "./tokens";

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

function TokensSpecimen() {
  const colorEntries = Object.entries(luluColors);
  const spacingEntries = Object.entries(luluSpacing);

  return (
    <div className="flex flex-col gap-16 p-10">
      <section>
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
      </section>

      <section>
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
      </section>

      <section>
        <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
          Spacing scale
        </h2>
        <div className="flex flex-col gap-3">
          {spacingEntries.map(([name, value]) => (
            <div key={name} className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-lulu-display text-lulu-label text-lulu-stone">
                {name}
              </span>
              <div className="h-4 bg-lulu-accent" style={{ width: `${value}px` }} />
              <span className="font-lulu-display text-lulu-label text-lulu-stone">
                {value}px
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof TokensSpecimen> = {
  title: "Lulu/Tokens",
  component: TokensSpecimen,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TokensSpecimen>;

export const Default: Story = {};
