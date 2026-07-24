import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluImagePlaceholder } from "./LuluImagePlaceholder";

const meta: Meta<typeof LuluImagePlaceholder> = {
  title: "Lulu/Components/ImagePlaceholder",
  component: LuluImagePlaceholder,
  args: {
    className: "h-40 w-64",
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof LuluImagePlaceholder>;

export const Default: Story = {};
