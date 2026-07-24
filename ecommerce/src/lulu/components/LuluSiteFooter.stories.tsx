import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluSiteFooter } from "./LuluSiteFooter";

const meta: Meta<typeof LuluSiteFooter> = {
  title: "Lulu/Components/SiteFooter",
  component: LuluSiteFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LuluSiteFooter>;

export const Default: Story = {};
