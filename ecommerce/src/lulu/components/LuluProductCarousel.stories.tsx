import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  LuluProductCarousel,
  type LuluProductCarouselItem,
} from "./LuluProductCarousel";
import { luluProducts } from "@/src/lulu/sample-data";

const products: LuluProductCarouselItem[] = luluProducts.map((product) => ({
  title: product.name,
  price: product.price,
  image: product.image,
  href: "#",
}));

const meta: Meta<typeof LuluProductCarousel> = {
  title: "Lulu/Components/ProductCarousel",
  component: LuluProductCarousel,
  args: {
    products,
    ctaLabel: "Shop now",
    ctaHref: "#",
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof LuluProductCarousel>;

export const Default: Story = {};
