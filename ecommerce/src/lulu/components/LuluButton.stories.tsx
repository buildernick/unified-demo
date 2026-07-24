import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluButton } from "./LuluButton";

const meta: Meta<typeof LuluButton> = {
  title: "Lulu/Components/Button",
  component: LuluButton,
  args: {
    href: "#",
    children: "Shop now",
  },
};

export default meta;
type Story = StoryObj<typeof LuluButton>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};
