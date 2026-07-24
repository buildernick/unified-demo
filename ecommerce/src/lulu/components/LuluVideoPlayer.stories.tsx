import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluVideoPlayer } from "./LuluVideoPlayer";

const meta: Meta<typeof LuluVideoPlayer> = {
  title: "Lulu/Components/VideoPlayer",
  component: LuluVideoPlayer,
  args: {
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LuluVideoPlayer>;

export const Default: Story = {};
