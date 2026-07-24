import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluSectionHeading } from "./LuluSectionHeading";

const meta: Meta<typeof LuluSectionHeading> = {
  title: "Lulu/Components/SectionHeading",
  component: LuluSectionHeading,
  args: {
    children: "Shop the story",
  },
};

export default meta;
type Story = StoryObj<typeof LuluSectionHeading>;

export const Default: Story = {};
