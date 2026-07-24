import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluHero } from "./LuluHero";
import { luluStories } from "@/src/lulu/sample-data";

const story = luluStories[0];

const meta: Meta<typeof LuluHero> = {
  title: "Lulu/Components/Hero",
  component: LuluHero,
  args: {
    image: story.image,
    imageAlt: story.headline,
    title: story.headline,
    subtitle: story.copy,
    ctaLabel: story.cta,
    ctaHref: "#",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LuluHero>;

export const Default: Story = {};
