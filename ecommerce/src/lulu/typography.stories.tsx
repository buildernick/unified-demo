import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluHeadline } from "./components/LuluHeadline";
import { LuluText } from "./components/LuluText";
import { luluTypeScale } from "./tokens";

const headlineSpecimens: Array<{
  size: "xl" | "lg" | "md" | "sm";
  token: keyof typeof luluTypeScale;
  className: string;
}> = [
  { size: "xl", token: "displayXl", className: "text-lulu-display-xl" },
  { size: "lg", token: "displayLg", className: "text-lulu-display-lg" },
  { size: "md", token: "displayMd", className: "text-lulu-display-md" },
  { size: "sm", token: "displaySm", className: "text-lulu-display-sm" },
];

const textSpecimens: Array<{
  size: "lg" | "md" | "sm";
  token: keyof typeof luluTypeScale;
  className: string;
}> = [
  { size: "lg", token: "bodyLg", className: "text-lulu-body-lg" },
  { size: "md", token: "bodyMd", className: "text-lulu-body-md" },
  { size: "sm", token: "bodySm", className: "text-lulu-body-sm" },
];

function TokenMeta({
  className,
  token,
}: {
  className: string;
  token: keyof typeof luluTypeScale;
}) {
  const scale = luluTypeScale[token];
  return (
    <p className="mt-2 whitespace-nowrap font-lulu-display text-lulu-label text-lulu-stone">
      {className} — {scale.fontSize} / {scale.lineHeight} /{" "}
      {scale.letterSpacing} tracking / {scale.fontWeight} weight
    </p>
  );
}

function TypographySpecimen() {
  return (
    <div className="flex flex-col gap-16 p-10">
      <section>
        <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
          Headline — LuluHeadline
        </h2>
        <div className="flex flex-col gap-8">
          {headlineSpecimens.map((specimen) => (
            <div
              key={specimen.size}
              className="border-b border-lulu-line pb-8 last:border-none"
            >
              <LuluHeadline size={specimen.size}>
                Unrestrict your training.
              </LuluHeadline>
              <TokenMeta className={specimen.className} token={specimen.token} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-10 font-lulu-display text-lulu-display-md text-lulu-ink">
          Body — LuluText
        </h2>
        <div className="flex flex-col gap-8">
          {textSpecimens.map((specimen) => (
            <div
              key={specimen.size}
              className="border-b border-lulu-line pb-8 last:border-none"
            >
              <LuluText size={specimen.size} tone="ink">
                This gear wicks, blocks, and breathes away distractions on
                the pro tour, and your local muni.
              </LuluText>
              <TokenMeta className={specimen.className} token={specimen.token} />
            </div>
          ))}
          <div className="pb-8">
            <LuluText size="md" tone="stone">
              This gear wicks, blocks, and breathes away distractions on the
              pro tour, and your local muni.
            </LuluText>
            <p className="mt-2 font-lulu-display text-lulu-label text-lulu-stone">
              text-lulu-stone — muted tone for secondary copy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof TypographySpecimen> = {
  title: "Lulu/Typography",
  component: TypographySpecimen,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TypographySpecimen>;

export const Default: Story = {};
