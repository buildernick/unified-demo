import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluHlsVideoCard } from "./LuluHlsVideoCard";

const meta: Meta<typeof LuluHlsVideoCard> = {
  title: "Lulu/Components/HlsVideoCard",
  component: LuluHlsVideoCard,
  args: {
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    overlayText: "Explore Golf",
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
type Story = StoryObj<typeof LuluHlsVideoCard>;

export const FitHeight: Story = { args: { fit: "fitHeight" } };
export const PictureBox: Story = { args: { fit: "pictureBox" } };
