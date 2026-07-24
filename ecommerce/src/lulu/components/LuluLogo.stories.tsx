import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluLogo } from "./LuluLogo";

const meta: Meta<typeof LuluLogo> = {
  title: "Lulu/Components/Logo",
  component: LuluLogo,
  args: {
    className: "h-6 w-auto text-lulu-ink",
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof LuluLogo>;

export const Default: Story = {};
