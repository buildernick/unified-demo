"use client";
import "@builder.io/widgets";
import { builder, Builder, withChildren } from "@builder.io/react";
import Accordion from "./components/Accordion/accordion";
import AlgoliaSearchBox from "./components/AlgoliaSearchBox/AlgoliaSearchBox";
import { Button } from "./components/ui/button";
import BynderImage from "./components/Blocks/BynderImage";
import CloudinaryImage from "./components/Blocks/CloudinaryImage";
import { Collection } from "./components/Collection/Collection";
import Counter from "./components/Counter/Counter";
import HeroWithChildren from "./components/Hero/HeroWithChildren";
import IconCard from "./components/Card/IconCard";
import ImageHero from "./components/Hero/ImageHero";
import ProductCard from "./components/Card/ProductCard";
import SplitHero from "./components/Hero/SplitHero";
import TextHero from "./components/Hero/TextHero";
import UpsellPopup from "./components/Popup/UpsellPopup";
import CustomText from "./components/CustomText";
import { LuluHero } from "./lulu/components/LuluHero";
import { LuluProductCard } from "./lulu/components/LuluProductCard";
import { LuluCategoryCard } from "./lulu/components/LuluCategoryCard";
import { LuluButton } from "./lulu/components/LuluButton";
import { LuluHeadline } from "./lulu/components/LuluHeadline";
import { LuluCategoryTitle } from "./lulu/components/LuluCategoryTitle";
import { LuluText } from "./lulu/components/LuluText";
import { LuluVideoCard } from "./lulu/components/LuluVideoCard";
import { LuluHlsVideoCard } from "./lulu/components/LuluHlsVideoCard";
import {
  luluColors,
  luluFonts,
  luluFontWeights,
  luluSpacing,
  luluTypeScale,
} from "./lulu/tokens";

function luluTokenLabel(key: string) {
  const spaced = key.replace(/([A-Z])/g, " $1");
  return `Lulu ${spaced.charAt(0).toUpperCase()}${spaced.slice(1)}`;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true, // optional
  designTokens: {
    colors: Object.entries(luluColors).map(([key, value]) => ({
      name: luluTokenLabel(key),
      value,
    })),
    spacing: Object.entries(luluSpacing).map(([key, px]) => ({
      name: `Lulu ${key}`,
      value: `${px}px`,
    })),
    fontFamily: [
      { name: "Lulu Display", value: luluFonts.display },
      { name: "Lulu Body", value: luluFonts.body },
    ],
    fontSize: Object.entries(luluTypeScale).map(([key, scale]) => ({
      name: luluTokenLabel(key),
      value: scale.fontSize,
    })),
    fontWeight: Object.entries(luluFontWeights).map(([key, weight]) => ({
      name: luluTokenLabel(key),
      value: String(weight),
    })),
    letterSpacing: Object.entries(luluTypeScale).map(([key, scale]) => ({
      name: luluTokenLabel(key),
      value: scale.letterSpacing,
    })),
    lineHeight: Object.entries(luluTypeScale).map(([key, scale]) => ({
      name: luluTokenLabel(key),
      value: scale.lineHeight,
    })),
  },
});
Builder.register("insertMenu", {
  name: "Heros",
  items: [
    { name: "TextHero" },
    { name: "ImageHero" },
    { name: "SplitHero" },
    { name: "HeroWithChildren" },
  ],
  // priority: 2,
});
Builder.register("insertMenu", {
  name: "Cards",
  items: [{ name: "IconCard" }, { name: "ProductCard" }],
  // priority: 3,
});
if (Builder.isBrowser) {
  if (builder.editingModel === "homepage") {
    Builder.register("insertMenu", {
      name: "Layout",
      items: [
        { name: "Columns" },
        { name: "Builder:Carousel" },
        { name: "Collection" },
        { name: "Accordion" },
        { name: "AlgoliaSearchBox" },
      ],
    });
    Builder.register("insertMenu", {
      name: "Blocks",
      items: [
        { name: "CloudinaryImage" },
        { name: "BynderImage" },
        { name: "Core:Button" },
        { name: "Counter" },
      ],
    });
  }
}

Builder.registerComponent(AlgoliaSearchBox, {
  name: "AlgoliaSearchBox",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F03b586220c6c453cbbb24f329b2b9c15",
  inputs: [],
});

Builder.register("insertMenu", {
  name: "Popups",
  items: [{ name: "UpsellPopup" }],
});

Builder.registerComponent(Counter, {
  name: "Counter",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F000c4b516154412498592db34d340789",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(SplitHero, {
  name: "SplitHero",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F87697e0b85624a38a7535fff9bdb744b",
  inputs: [
    {
      name: "imageAlignment",
      type: "string",
      defaultValue: "right",
      enum: ["left", "right"],
      required: true,
    },
    {
      name: "textAlignment",
      type: "string",
      defaultValue: "left",
      enum: ["left", "center", "right"],
      required: true,
    },
    {
      name: "splitWidth",
      type: "string",
      defaultValue: "1/2",
      enum: [
        {
          label: "50 : 50",
          value: "1/2",
        },
        {
          label: "1 : 3",
          value: "1/3",
        },
      ],
      required: true,
    },
    {
      name: "image",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F0cde6f8ddd9d482fad53266f8ee0f3ce",
      required: true,
    },
    {
      name: "altText",
      type: "string",
      defaultValue: "blue jeans",
      required: true,
    },
    {
      name: "title",
      type: "longText",
      defaultValue: "OUR COMMITMENT TO SUSTAINABILITY",
      required: true,
    },
    {
      name: "subTitle",
      type: "richText",
      defaultValue:
        "<p>Create impactful, bold silhouettes in our chic, cozy classics</p>",
    },
    {
      name: "hasCTA",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "buttonLink",
      type: "url",
      showIf: (options) => {
        return options.get("hasCTA") == true;
      },
      defaultValue: "/",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Learn More",
      showIf: (options) => {
        return options.get("hasCTA") == true;
      },
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(IconCard, {
  name: "IconCard",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fa1602969eefa459cbc1cc4e9bff96555",
  inputs: [
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
      defaultValue: "center",
    },
    {
      name: "altText",
      type: "string",
    },
    {
      name: "coloredBackground",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "<p>Give developers and marketers an AI-powered platform to quickly transform designs into optimized web and mobile experiences.</p>",
    },
    {
      name: "icon",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/static/media/builder-logo.bff0faae.png",
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Builder.io",
      required: true,
    },
  ],
});

Builder.registerComponent(TextHero, {
  name: "TextHero",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F6c33301bb9e94d46ad293b704457b991",
  inputs: [
    {
      name: "subTitle",
      type: "richText",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "STEP INTO FRESH STYLES",
      required: true,
    },
  ],
});
// const isProd = (process.env.NEXT_PUBLIC_BUILDER_API_KEY! === "a87584e551b6472fa0f0a2eb10f2c0ff")
// const defaultProductID = `${isProd ? "" : process.env.NEXT_PUBLIC_BUILDER_API_KEY!+"_"}b0196147be5d4e6388bbdff62ee3ae7d`;

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fb408305f7a2b481690ef9bea53e42db1",
  inputs: [
    {
      name: "dataSource",
      type: "text",
      enum: ["Shopify", "Commercetools", "Builder", "Swell", "Emporix"],
      defaultValue: "Builder",
    },
    {
      name: "product",
      type: "reference",
      model: "product-data",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Builder";
      },
      // defaultValue: {
      //   "@type": "@builder.io/core:Reference",
      //   "id": defaultProductID,
      //   "model": "product-data"
      // }
    },
    {
      name: "shopifyProductHandle",
      friendlyName: "Shopify Product",
      type: "ShopifyProductHandle",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Shopify";
      },
    },
    {
      name: "swellProductHandle",
      friendlyName: "Swell Product",
      type: "SwellProductHandle",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Swell";
      },
    },
    {
      name: "commercetoolsProduct",
      friendlyName: "Commercetools Product",
      type: "CommercetoolsProduct",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Commercetools";
      },
    },
    {
      name: "emporixProductHandle",
      friendlyName: "Emporix Product",
      type: "EmporixProductHandle",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Emporix";
      },
    },
  ],
});

Builder.registerComponent(ImageHero, {
  name: "ImageHero",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F1da6aa719e0648b481ccd964186a4bcb",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "SHOP ESSENTIALS",
    },
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
      required: true,
      defaultValue: "center",
    },
    {
      name: "backgroundImage",
      type: "file",
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a",
    },
    {
      name: "buttonLink",
      type: "url",
      required: true,
      defaultValue: "/",
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      defaultValue: "Shop Now",
    },
    {
      name: "subTitle",
      type: "richText",
      defaultValue: "<p>Shoppable essentials for your every day life.</p>",
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(withChildren(HeroWithChildren), {
  name: "HeroWithChildren",
  canHaveChildren: true,
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F2bbe97f46ba14868a6925faf5cbb8d18",
  inputs: [
    {
      name: "childBlocks",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: [],
      onChange: (options: any) => {
        const items = options.get("childBlocks");
        if (Array.isArray(items) && items.length > 3) {
          options.set("childBlocks", items.slice(0, 3));
          alert("You can add maximum 3 items");
        }
      },
    },
    {
      name: "header",
      type: "string",
      defaultValue: "WHAT'S DIFFERENT ABOUT SHOPAHOLIC",
      broadcast: true,
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      defaultValue: false,
      broadcast: true,
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Core:Button",
  override: true,
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: { name: "Text", options: { text: "<p>Click Me</p>" } },
    },
  ],
  childRequirements: {
    message: "You can only put Text or Image Icons inside a Button",
    query: {
      "component.name": { $in: ["Text"] },
    },
  },
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F5803f6cb27764a339296458c0056dc33",
  inputs: [
    {
      name: "variant",
      type: "string",
      defaultValue: "default",
      enum: ["default", "secondary", "tertiary", "outline", "link"],
    },
  ],
});

Builder.registerComponent(Collection, {
  name: "Collection",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F1ae5db0ccbdb4f3caab13e10dc6d7e0c",
  inputs: [
    {
      name: "collection",
      type: "string",
      defaultValue: "all",
      enum: [
        {
          label: "Featured / All",
          value: "all",
        },
        {
          label: "Women",
          value: "women",
        },
        {
          label: "Men",
          value: "men",
        },
        {
          label: "Accessories",
          value: "accessories",
        },
      ],
    },
  ],
});

Builder.registerComponent(UpsellPopup, {
  name: "UpsellPopup",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fec614fc3c6674967a2368226efcf62b9",
  inputs: [
    { name: "title", type: "string", defaultValue: "Special Offer" },
    { name: "subTitle", type: "string", defaultValue: "Save up to 50%" },
    { name: "delay", type: "number", defaultValue: 1000 },
    {
      name: "discountLabel",
      type: "string",
      defaultValue: "Select your discount:",
    },
    {
      name: "discounts",
      type: "list",
      subFields: [
        { name: "label", type: "string" },
        { name: "icon", type: "file" },
        { name: "iconAlt", type: "string" },
      ],
    },
    {
      name: "imageSrc",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F692369ff646645349e68a86b43fc7a38",
    },
    { name: "imageAlt", type: "string", defaultValue: "Promotional Image" },
  ],
});

Builder.registerComponent(CloudinaryImage, {
  name: "CloudinaryImage",
  image:
    "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
  inputs: [
    {
      name: "cloudinaryOptions",
      type: "cloudinaryImageEditor",
    },
  ],
});

Builder.registerComponent(BynderImage, {
  name: "BynderImage",
  friendlyName: "Custom Image Using Bynder",
  image: "https://unpkg.com/css.gg@2.0.0/icons/svg/image.svg",
  inputs: [
    {
      name: "bynderAsset",
      type: "BynderAsset",
    },
    {
      name: "imageFit",
      type: "string",
      defaultValue: "cover",
      enum: ["cover", "contain", "fill", "none"],
    },
  ],
});

Builder.registerComponent(Accordion, {
  name: "Accordion",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2FagZ9n5CUKRfbL9t6CaJOyVSK4Es2%2Ffab6c1fd3fe542408cbdec078bca7f35",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "title", type: "string", defaultValue: "Accordion Title" },
        {
          name: "content",
          type: "longText",
          defaultValue: "Accordion Content",
        },
      ],
      defaultValue: [
        { title: "Sample Title 1", content: "Sample Content 1" },
        { title: "Sample Title 2", content: "Sample Content 2" },
        { title: "Sample Title 3", content: "Sample Content 3" },
      ],
    },
  ],
});

Builder.registerComponent(CustomText, {
  name: "Custom Text",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F2bbe97f46ba14868a6925faf5cbb8d18",
  inputs: [
    {
      name: "text",
      type: "html",
    },
    {
      name: "links",
      type: "list",
      subFields: [
        // The key to match on
        { name: "key", type: "string" },
        // The link body text
        { name: "label", type: "string" },
        // The reference to a Data Model
        { name: "product", type: "reference", model: "product-data" },
        // Example "open in a new tab" using Enum, could be a boolean value instead
        { name: "target", type: "string", enum: ["_blank", "_self"] },
        { name: "rel", type: "string" },
      ],
    },
  ],
});

Builder.register("insertMenu", {
  name: "Lulu Components",
  items: [
    { name: "LuluHero" },
    { name: "LuluProductCard" },
    { name: "LuluCategoryCard" },
    { name: "LuluButton" },
    { name: "LuluHeadline" },
    { name: "LuluCategoryTitle" },
    { name: "LuluText" },
    { name: "LuluVideoCard" },
    { name: "LuluHlsVideoCard" },
  ],
});

Builder.registerComponent(LuluHero, {
  name: "LuluHero",
  inputs: [
    {
      name: "image",
      type: "file",
      required: true,
      defaultValue:
        "https://images.lululemon.com/is/image/lululemon/NA_July26_Wk3_M_Train_Hero_Carousel_D_WhatsNew_MLP?wid=1600&fmt=webp&qlt=80",
    },
    { name: "imageAlt", type: "string", defaultValue: "lululemon" },
    { name: "title", type: "string", defaultValue: "Lock in. Level up." },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "The seamless Metal Vent Tech Shirt lets you find your focus, then your limit.",
    },
    { name: "ctaLabel", type: "string", defaultValue: "Shop What's New" },
    { name: "ctaHref", type: "url", defaultValue: "/lulu/products" },
  ],
});

Builder.registerComponent(LuluProductCard, {
  name: "LuluProductCard",
  inputs: [
    {
      name: "name",
      type: "string",
      required: true,
      defaultValue: "Metal Vent Tech Short-Sleeve Shirt",
    },
    { name: "price", type: "string", required: true, defaultValue: "$78" },
    {
      name: "image",
      type: "file",
      required: true,
      defaultValue:
        "https://images.lululemon.com/is/image/lululemon/LM3FT0S_074134_1?wid=800&fmt=webp&qlt=80",
    },
    { name: "colorCount", type: "number", defaultValue: 6 },
  ],
});

Builder.registerComponent(LuluCategoryCard, {
  name: "LuluCategoryCard",
  inputs: [
    { name: "label", type: "string", required: true, defaultValue: "Shorts" },
    {
      name: "image",
      type: "file",
      required: true,
      defaultValue:
        "https://images.lululemon.com/is/image/lululemon/NA_July26_Wk3_M_Train_6UP_Feature_D_PaceBreaker?wid=600&fmt=webp&qlt=80",
    },
    { name: "href", type: "url", defaultValue: "/lulu/products" },
  ],
});

// Note: the Lulu text-based components below (Button/Headline/CategoryTitle/
// Text) render their "children" prop as plain text. Registering them with
// `canHaveChildren`/`withChildren` instead would make Builder insert a
// nested Text block inside a wrapper box when dragged into the canvas -
// a plain "children" string input renders as flat text with no extra
// nesting.
Builder.registerComponent(LuluButton, {
  name: "LuluButton",
  inputs: [
    { name: "children", type: "string", defaultValue: "Shop now" },
    { name: "href", type: "url", defaultValue: "/lulu" },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary"],
      defaultValue: "primary",
    },
  ],
});

Builder.registerComponent(LuluHeadline, {
  name: "LuluHeadline",
  inputs: [
    { name: "children", type: "string", defaultValue: "Lock in. Level up." },
    {
      name: "size",
      type: "string",
      enum: ["xl", "lg", "md", "sm"],
      defaultValue: "lg",
    },
    {
      name: "as",
      type: "string",
      enum: ["h1", "h2", "h3", "h4"],
      defaultValue: "h2",
    },
  ],
});

Builder.registerComponent(LuluCategoryTitle, {
  name: "LuluCategoryTitle",
  inputs: [{ name: "children", type: "string", defaultValue: "Shorts" }],
});

Builder.registerComponent(LuluText, {
  name: "LuluText",
  inputs: [
    { name: "children", type: "string", defaultValue: "Body copy goes here." },
    {
      name: "size",
      type: "string",
      enum: ["lg", "md", "sm"],
      defaultValue: "md",
    },
    {
      name: "tone",
      type: "string",
      enum: ["ink", "stone"],
      defaultValue: "ink",
    },
    {
      name: "as",
      type: "string",
      enum: ["p", "span", "div"],
      defaultValue: "p",
    },
  ],
});

Builder.registerComponent(LuluVideoCard, {
  name: "LuluVideoCard",
  inputs: [
    {
      name: "youtubeUrl",
      type: "url",
      required: true,
      defaultValue: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    { name: "overlayText", type: "string", defaultValue: "Train harder" },
    {
      name: "fit",
      type: "string",
      enum: ["fitHeight", "pictureBox"],
      defaultValue: "fitHeight",
    },
  ],
  defaultStyles: { width: "25%" },
});

Builder.registerComponent(LuluHlsVideoCard, {
  name: "LuluHlsVideoCard",
  defaultStyles: { width: "25%" },
  inputs: [
    {
      name: "videoEntry",
      friendlyName: "Video (from Lulu Videos library)",
      type: "reference",
      model: "lulu-video",
      required: false,
      defaultValue: {
        "@type": "@builder.io/core:Reference",
        id: "63f2ce2bdfab4e1fa0343b7d8a43d1d9_b001e0a6859841489704bc7c051b97a8",
        model: "lulu-video",
      },
    },
    {
      name: "videoUrl",
      friendlyName: "Or paste a custom video URL",
      type: "string",
      required: false,
      defaultValue: "",
    },
    { name: "posterUrl", type: "file" },
    { name: "overlayText", type: "string", defaultValue: "Train harder" },
    {
      name: "fit",
      type: "string",
      enum: ["fitHeight", "pictureBox"],
      defaultValue: "fitHeight",
    },
  ],
});
