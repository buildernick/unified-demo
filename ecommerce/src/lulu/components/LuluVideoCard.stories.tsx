import type { Meta, StoryObj } from "@storybook/nextjs";
import { LuluVideoCard } from "./LuluVideoCard";

const meta: Meta<typeof LuluVideoCard> = {
  title: "Lulu/Components/VideoCard",
  component: LuluVideoCard,
  args: {
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    overlayText: "Explore Train",
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
type Story = StoryObj<typeof LuluVideoCard>;

export const FitHeight: Story = { args: { fit: "fitHeight" } };
export const PictureBox: Story = { args: { fit: "pictureBox" } };
