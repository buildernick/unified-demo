import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluProductCard } from "./LuluProductCard";
import { luluProducts } from "@/src/lulu/sample-data";

const meta: Meta<typeof LuluProductCard> = {
  title: "Lulu/Components/ProductCard",
  component: LuluProductCard,
  args: luluProducts[0],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LuluProductCard>;

export const Default: Story = {};
