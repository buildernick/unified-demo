import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluCategoryTitle } from "./LuluCategoryTitle";

const meta: Meta<typeof LuluCategoryTitle> = {
  title: "Lulu/Components/CategoryTitle",
  component: LuluCategoryTitle,
  args: {
    children: "Polo Shirts",
  },
};

export default meta;
type Story = StoryObj<typeof LuluCategoryTitle>;

export const Default: Story = {};
