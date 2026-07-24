import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluFooter } from "./LuluFooter";

const meta: Meta<typeof LuluFooter> = {
  title: "Lulu/Components/Footer",
  component: LuluFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LuluFooter>;

export const Default: Story = {};
