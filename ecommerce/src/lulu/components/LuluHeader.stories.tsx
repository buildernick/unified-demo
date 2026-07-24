import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluHeader } from "./LuluHeader";

const meta: Meta<typeof LuluHeader> = {
  title: "Lulu/Components/Header",
  component: LuluHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LuluHeader>;

export const Default: Story = {};
