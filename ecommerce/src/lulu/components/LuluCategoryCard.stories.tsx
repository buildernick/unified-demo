import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluCategoryCard } from "./LuluCategoryCard";
import { luluCategories } from "@/src/lulu/sample-data";

const meta: Meta<typeof LuluCategoryCard> = {
  title: "Lulu/Components/CategoryCard",
  component: LuluCategoryCard,
  args: {
    label: luluCategories[0].label,
    image: luluCategories[0].image,
    href: "#",
  },
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
type Story = StoryObj<typeof LuluCategoryCard>;

export const Default: Story = {};
