import type { Preview } from "@storybook/nextjs";
import "../app/globals.css";
import "../app/lulu/lulu-theme.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "lulu-canvas",
      values: [{ name: "lulu-canvas", value: "#FAFAFA" }],
    },
  },
  decorators: [
    (Story) => (
      <div className="lulu-theme lulu-page">
        <Story />
      </div>
    ),
  ],
};

export default preview;
