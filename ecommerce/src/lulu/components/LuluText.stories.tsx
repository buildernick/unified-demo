import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluText } from "./LuluText";

const meta: Meta<typeof LuluText> = {
  title: "Lulu/Components/Text",
  component: LuluText,
  args: {
    children: "This gear wicks, blocks, and breathes away distractions.",
  },
  argTypes: {
    size: { control: "select", options: ["lg", "md", "sm"] },
    tone: { control: "select", options: ["ink", "stone"] },
  },
};

export default meta;
type Story = StoryObj<typeof LuluText>;

export const Large: Story = { args: { size: "lg", tone: "ink" } };
export const Medium: Story = { args: { size: "md", tone: "ink" } };
export const Small: Story = { args: { size: "sm", tone: "ink" } };
export const Stone: Story = { args: { size: "md", tone: "stone" } };
