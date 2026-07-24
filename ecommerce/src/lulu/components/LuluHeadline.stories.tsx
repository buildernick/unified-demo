import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluHeadline } from "./LuluHeadline";

const meta: Meta<typeof LuluHeadline> = {
  title: "Lulu/Components/Headline",
  component: LuluHeadline,
  args: {
    children: "Unrestrict your training.",
  },
  argTypes: {
    size: { control: "select", options: ["xl", "lg", "md", "sm"] },
  },
};

export default meta;
type Story = StoryObj<typeof LuluHeadline>;

export const ExtraLarge: Story = { args: { size: "xl" } };
export const Large: Story = { args: { size: "lg" } };
export const Medium: Story = { args: { size: "md" } };
export const Small: Story = { args: { size: "sm" } };
