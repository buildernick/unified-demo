"use client";
import "@builder.io/widgets";
import React from "react";
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
import { DoorDashHeader } from "../app/doordash/components/DoorDashHeader";
import { DoorDashFooter } from "../app/doordash/components/DoorDashFooter";
import { DoorDashHero } from "../app/doordash/components/DoorDashHero";
import { DoorDashHeroSection } from "../app/doordash/components/DoorDashHeroSection";
import { DoorDashLeadForm } from "../app/doordash/components/DoorDashLeadForm";
import { DoorDashSplitAccordion } from "../app/doordash/components/DoorDashSplitAccordion";
import { DoorDashKPICard } from "../app/doordash/components/DoorDashKPICard";
import { DoorDashMetricsCarousel } from "../app/doordash/components/DoorDashMetricsCarousel";
import { DoorDashVerticalSections } from "../app/doordash/components/DoorDashVerticalSections";
import { DoorDashButton } from "../app/doordash/components/DoorDashButton";
import { DoorDashPillLink } from "../app/doordash/components/DoorDashPillLink";
import { DoorDashEyebrow } from "../app/doordash/components/DoorDashEyebrow";
import { DoorDashFormContainer } from "../app/doordash/components/DoorDashFormContainer";
import { DoorDashFormTextField } from "../app/doordash/components/DoorDashFormTextField";
import { DoorDashFormEmailField } from "../app/doordash/components/DoorDashFormEmailField";
import { DoorDashFormPhoneField } from "../app/doordash/components/DoorDashFormPhoneField";
import { DoorDashFormSelectField } from "../app/doordash/components/DoorDashFormSelectField";
import { DoorDashFormSubmitButton } from "../app/doordash/components/DoorDashFormSubmitButton";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true, // optional
  designTokens: {
    colors: [
      { name: "Red (Primary)", value: "var(--dd-red, #ff3008)" },
      { name: "Red Hover", value: "var(--dd-red-hover, #e02b07)" },
      { name: "Red Active", value: "var(--dd-red-active, #c42506)" },
      { name: "Red Button", value: "var(--dd-red-button, #eb1700)" },
      { name: "Red Deep", value: "var(--dd-red-deep, #570000)" },
      { name: "Red Tint", value: "var(--dd-red-tint, #ffe5df)" },
      { name: "Navy", value: "var(--dd-navy, #233069)" },
      { name: "Blue Mid", value: "var(--dd-blue-mid, #4969f5)" },
      { name: "Blue Light", value: "var(--dd-blue-light, #e4ebf7)" },
      { name: "Teal Dark", value: "var(--dd-teal-dark, #024c52)" },
      { name: "Teal Mid", value: "var(--dd-teal-mid, #4ba0a7)" },
      { name: "Burgundy", value: "var(--dd-burgundy, #810b00)" },
      { name: "Yellow Dark", value: "var(--dd-yellow-dark, #a16c00)" },
      { name: "Pink", value: "var(--dd-pink, #e97c69)" },
      { name: "Pink Background", value: "var(--dd-pink-bg, #ffe8fe)" },
      { name: "Stone", value: "var(--dd-stone, #e7e4d9)" },
      { name: "White", value: "var(--dd-white, #ffffff)" },
      { name: "Grey Light", value: "var(--dd-grey-light, #f6f6f6)" },
      { name: "Grey Dark", value: "var(--dd-grey-dark, #414141)" },
      { name: "Text Primary", value: "var(--dd-text-primary, #191919)" },
      { name: "Text Medium", value: "var(--dd-text-medium, #434343)" },
      { name: "Text Muted", value: "var(--dd-text-muted, #606060)" },
      { name: "Border", value: "var(--dd-border, #e7e4d9)" },
      { name: "Background", value: "var(--dd-background, #ffffff)" },
      { name: "Background Alt", value: "var(--dd-background-alt, #f6f6f6)" },
    ],
    spacing: [
      { name: "Space 1 (4px)", value: "var(--dd-space-1, 0.25rem)" },
      { name: "Space 2 (8px)", value: "var(--dd-space-2, 0.5rem)" },
      { name: "Space 3 (12px)", value: "var(--dd-space-3, 0.75rem)" },
      { name: "Space 4 (16px)", value: "var(--dd-space-4, 1rem)" },
      { name: "Space 5 (24px)", value: "var(--dd-space-5, 1.5rem)" },
      { name: "Space 6 (32px)", value: "var(--dd-space-6, 2rem)" },
      { name: "Space 7 (48px)", value: "var(--dd-space-7, 3rem)" },
      { name: "Space 8 (64px)", value: "var(--dd-space-8, 4rem)" },
      { name: "Space 9 (96px)", value: "var(--dd-space-9, 6rem)" },
      { name: "Space 10 (128px)", value: "var(--dd-space-10, 8rem)" },
    ],
    fontFamily: [
      { name: "Primary", value: "var(--dd-font-primary, 'TT-Norms', sans-serif)" },
      { name: "Secondary", value: "var(--dd-font-secondary, 'TT-Norms', Georgia, serif)" },
      { name: "Condensed", value: "var(--dd-font-condensed, 'DD-TTNorms Condensed', sans-serif)" },
    ],
    fontSize: [
      { name: "H1", value: "var(--dd-text-h1-size, 3rem)" },
      { name: "H2", value: "var(--dd-text-h2-size, 2.25rem)" },
      { name: "H3", value: "var(--dd-text-h3-size, 1.75rem)" },
      { name: "H4", value: "var(--dd-text-h4-size, 1.375rem)" },
      { name: "H5", value: "var(--dd-text-h5-size, 1.125rem)" },
      { name: "Body", value: "var(--dd-text-body-size, 1rem)" },
      { name: "Small", value: "var(--dd-text-small-size, 0.875rem)" },
      { name: "Caption", value: "var(--dd-text-caption-size, 0.75rem)" },
    ],
    fontWeight: [
      { name: "Regular", value: "var(--dd-text-body-weight, 400)" },
      { name: "Bold", value: "var(--dd-text-h1-weight, 700)" },
    ],
    letterSpacing: [
      { name: "Tight", value: "var(--dd-text-h1-letter-spacing, -2px)" },
      { name: "Normal", value: "0px" },
    ],
    lineHeight: [
      { name: "H1", value: "var(--dd-text-h1-lh, 1)" },
      { name: "H2", value: "var(--dd-text-h2-lh, 1.15)" },
      { name: "H3", value: "var(--dd-text-h3-lh, 1.2)" },
      { name: "H4", value: "var(--dd-text-h4-lh, 1.3)" },
      { name: "H5", value: "var(--dd-text-h5-lh, 1.4)" },
      { name: "Body", value: "var(--dd-text-body-lh, 1.5)" },
      { name: "Small", value: "var(--dd-text-small-lh, 1.4)" },
      { name: "Caption", value: "var(--dd-text-caption-lh, 1.3)" },
    ],
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

if (Builder.isBrowser) {
  if (builder.editingModel === "doordash-page") {
    Builder.register("insertMenu", {
      name: "DoorDash Components",
      priority: 2,
      items: [
        { name: "DoorDashHero" },
        { name: "DoorDashHeroSection" },
        { name: "DoorDashLeadForm" },
        { name: "DoorDashSplitAccordion" },
        { name: "DoorDashKPICard" },
        { name: "DoorDashMetricsCarousel" },
        { name: "DoorDashVerticalSections" },
        { name: "DoorDashButton" },
        { name: "DoorDashPillLink" },
        { name: "DoorDashEyebrow" },
      ],
    });
    Builder.register("insertMenu", {
      name: "Door Dash Form Components",
      priority: 2,
      items: [
        { name: "DoorDashFormContainer" },
        { name: "DoorDashFormTextField" },
        { name: "DoorDashFormEmailField" },
        { name: "DoorDashFormPhoneField" },
        { name: "DoorDashFormSelectField" },
        { name: "DoorDashFormSubmitButton" },
      ],
    });
  }
}

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

Builder.registerComponent(DoorDashHeader, {
  name: "DoorDashHeader",
  friendlyName: "Header",
  inputs: [],
});

Builder.registerComponent(DoorDashFooter, {
  name: "DoorDashFooter",
  friendlyName: "Footer",
  inputs: [],
});

Builder.registerComponent(DoorDashHero, {
  name: "DoorDashHero",
  friendlyName: "Hero",
  inputs: [
    {
      name: "eyebrow",
      type: "string",
      required: true,
      defaultValue: "DoorDash Commerce Platform",
    },
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Grow your restaurant on your website, app, and our marketplace",
    },
    {
      name: "subheading",
      type: "longText",
      defaultValue:
        "DoorDash Commerce Platform brings everything together, from online ordering to built-in marketing, so you can drive repeat orders without extra tools.",
    },
  ],
});

function DoorDashHeroSectionAdapter({
  images,
  children,
}: {
  images?: { image: string }[];
  children?: React.ReactNode;
}) {
  return React.createElement(DoorDashHeroSection, {
    images: (images ?? []).map((entry) => entry.image),
    children,
  });
}

Builder.registerComponent(withChildren(DoorDashHeroSectionAdapter), {
  name: "DoorDashHeroSection",
  friendlyName: "Hero Section",
  canHaveChildren: true,
  inputs: [
    {
      name: "images",
      type: "list",
      friendlyName: "Images (outerLeft, innerLeft, innerRight, outerRight)",
      subFields: [{ name: "image", type: "file" }],
      defaultValue: [
        { image: "https://images.ctfassets.net/trvmqu12jq2l/1zZ8Yh6m2fTMoCQHIyliXT/f1107e7a6e65f215abba4351f83d951c/hero-img-table-phones.avif?w=470&fm=webp&q=80" },
        { image: "https://images.ctfassets.net/trvmqu12jq2l/6QHALHTeb99Mps00wKoiK5/b7b0a726093b1f14f5323700785f59f5/hero-img-computer.avif?w=562&fm=webp&q=80" },
        { image: "https://images.ctfassets.net/trvmqu12jq2l/1wrdeCzkYvD6wkFdXusIRQ/967c4c73f89f74a5271e983890ceb7c2/hero-img-money.avif?w=470&fm=webp&q=80" },
        { image: "https://images.ctfassets.net/trvmqu12jq2l/6OQSDiuz2xbgTkHFl8JZYv/99bf8757a5368fc08fcf39b941d2a8b4/hero-img-delivery-app.avif?w=562&fm=webp&q=80" },
      ],
    },
  ],
});

Builder.registerComponent(DoorDashLeadForm, {
  name: "DoorDashLeadForm",
  friendlyName: "Lead Form",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Offer commission-free ordering on your own channels",
    },
    {
      name: "fields",
      type: "list",
      subFields: [
        { name: "name", type: "string", required: true },
        { name: "label", type: "string", required: true },
        {
          name: "type",
          type: "string",
          enum: ["text", "email", "tel", "select"],
          defaultValue: "text",
        },
        {
          name: "options",
          type: "list",
          subFields: [{ name: "option", type: "string" }],
          showIf: (options: any) => options.get("type") === "select",
        },
        {
          name: "span",
          type: "string",
          enum: ["half", "full"],
          defaultValue: "full",
        },
      ],
    },
    {
      name: "submitLabel",
      type: "string",
      required: true,
      defaultValue: "Talk to a growth expert",
    },
    {
      name: "consentText",
      type: "longText",
      defaultValue:
        'By clicking "Talk to a growth expert," I agree to receive marketing electronic communications from DoorDash.',
    },
    {
      name: "bare",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(DoorDashSplitAccordion, {
  name: "DoorDashSplitAccordion",
  friendlyName: "Split Accordion",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "title", type: "string", required: true },
        { name: "description", type: "longText", required: true },
        { name: "href", type: "url" },
        { name: "image", type: "file", required: true },
      ],
      defaultValue: [
        {
          title: "Commission-Free Online Ordering",
          description:
            "Add direct ordering to your website in less than a day. Your menu syncs automatically with Marketplace, checkout is optimized to convert, and every delivery is fulfilled by Dashers.",
          href: "https://merchants.doordash.com/en-us/products/online-ordering",
          image:
            "https://images.ctfassets.net/trvmqu12jq2l/68KRk8TjlmiyO3vd8bHcuV/15ef3d5d2d1d0401698698c275899f51/DCP_-_Online_ordering.png?q=60&w=1521&fm=webp",
        },
        {
          title: "Branded Mobile App",
          description:
            "A custom-branded mobile app built just for you and designed to drive repeat business with effortless reordering and built-in push notifications that keep you top of mind.",
          href: "https://merchants.doordash.com/en-us/products/mobile-apps",
          image:
            "https://images.ctfassets.net/trvmqu12jq2l/4ppkYC7KOm6DF0UhkDkJg0/77299dc5a7479b3abd4f4d4d5c5c0919/Branded_Mobile_App_-_Tomatillo_Taqueria_-_V1_-_Square.png?q=60&w=1280&fm=webp",
        },
      ],
    },
  ],
});

Builder.registerComponent(DoorDashKPICard, {
  name: "DoorDashKPICard",
  friendlyName: "KPI Card",
  inputs: [
    { name: "value", type: "string", required: true, defaultValue: "+59%" },
    { name: "label", type: "string", required: true, defaultValue: "Increase in online orders" },
    { name: "sublabel", type: "string", required: true, defaultValue: "Total online orders grew in 6 weeks" },
    { name: "name", type: "string", required: true, defaultValue: "Johnny OX Pizzeria" },
    {
      name: "image",
      type: "file",
      required: true,
      defaultValue:
        "https://images.ctfassets.net/trvmqu12jq2l/lsuCtPPA7US1p7nCnLnwT/1645738fa839f9c84cfaf1797104b417/testimonial-johnny-ox-pizzeria-3.avif?q=80&w=900&fm=webp",
    },
    { name: "personName", type: "string", defaultValue: "Frank Ostini" },
    { name: "isActive", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(DoorDashMetricsCarousel, {
  name: "DoorDashMetricsCarousel",
  friendlyName: "Metrics Carousel",
  inputs: [
    {
      name: "metrics",
      type: "list",
      subFields: [
        { name: "value", type: "string", required: true },
        { name: "label", type: "string", required: true },
        { name: "sublabel", type: "string", required: true },
        { name: "name", type: "string", required: true },
        { name: "image", type: "file", required: true },
        { name: "personName", type: "string" },
      ],
      defaultValue: [
        {
          value: "+59%",
          label: "Increase in online orders",
          sublabel: "Total online orders grew in 6 weeks",
          name: "Johnny OX Pizzeria",
          image:
            "https://images.ctfassets.net/trvmqu12jq2l/lsuCtPPA7US1p7nCnLnwT/1645738fa839f9c84cfaf1797104b417/testimonial-johnny-ox-pizzeria-3.avif?q=80&w=900&fm=webp",
          personName: "Frank Ostini",
        },
        {
          value: "$5K+",
          label: "In loyalty-attributed sales",
          sublabel: "In two months",
          name: "Bowls of Rice",
          image:
            "https://images.ctfassets.net/trvmqu12jq2l/6mwD5fxr8qgZTy30R61UPW/b3b5270a16fc505e63d0981d89067705/testimonial-bowls-of-rice-1-5.avif?q=80&w=900&fm=webp",
          personName: "Wesley Li",
        },
      ],
    },
  ],
});

Builder.registerComponent(DoorDashVerticalSections, {
  name: "DoorDashVerticalSections",
  friendlyName: "Vertical Sections",
  inputs: [
    {
      name: "sections",
      type: "list",
      subFields: [
        { name: "heading", type: "string", required: true },
        { name: "supportText", type: "string" },
        { name: "description", type: "longText", required: true },
      ],
      defaultValue: [
        {
          supportText: "Stop juggling multiple systems and comparing data manually",
          heading: "Run all your ordering channels in one place",
          description:
            "We build your branded website and mobile app, and connect them with your storepage on Marketplace so you can update your menu in one place and have it sync everywhere.",
        },
        {
          heading: "Get customer insights from Marketplace orders",
          description:
            "When Marketplace customers join your loyalty program, you can now market to them directly through DoorDash Commerce Platform, turning one-time orders into repeat visits across every channel.",
        },
      ],
    },
  ],
});

Builder.registerComponent(DoorDashButton, {
  name: "DoorDashButton",
  friendlyName: "Button",
  defaultStyles: {
    width: "fit-content",
  },
  inputs: [
    { name: "text", type: "string", defaultValue: "Talk to a growth expert" },
    {
      name: "variant",
      type: "string",
      defaultValue: "primary",
      enum: ["primary", "secondary", "tertiary"],
    },
    { name: "href", type: "url" },
  ],
});

Builder.registerComponent(DoorDashPillLink, {
  name: "DoorDashPillLink",
  friendlyName: "Pill Link",
  defaultStyles: {
    width: "fit-content",
  },
  inputs: [
    { name: "text", type: "string", defaultValue: "Learn more" },
    { name: "href", type: "url", defaultValue: "#" },
  ],
});

Builder.registerComponent(DoorDashEyebrow, {
  name: "DoorDashEyebrow",
  friendlyName: "Eyebrow Badge",
  defaultStyles: {
    width: "fit-content",
  },
  inputs: [{ name: "text", type: "string", defaultValue: "DoorDash Commerce Platform" }],
});

Builder.registerComponent(withChildren(DoorDashFormContainer), {
  name: "DoorDashFormContainer",
  friendlyName: "Form Container",
  canHaveChildren: true,
  defaultChildren: [
    { "@type": "@builder.io/sdk:Element", component: { name: "DoorDashFormTextField", options: { name: "firstName", label: "First Name" } } },
    { "@type": "@builder.io/sdk:Element", component: { name: "DoorDashFormTextField", options: { name: "lastName", label: "Last Name" } } },
    { "@type": "@builder.io/sdk:Element", component: { name: "DoorDashFormEmailField", options: { name: "email", label: "Email Address" } } },
    { "@type": "@builder.io/sdk:Element", component: { name: "DoorDashFormSubmitButton", options: { text: "Submit" } } },
  ],
  inputs: [
    { name: "heading", type: "string" },
    {
      name: "actionUrl",
      friendlyName: "Post URL (form action)",
      type: "url",
      helperText: "The URL the form data is submitted (POSTed) to when the form is sent.",
    },
    { name: "method", type: "string", defaultValue: "POST", enum: ["POST", "GET"] },
    { name: "consentText", type: "longText" },
    { name: "bare", type: "boolean", defaultValue: false },
  ],
});

Builder.registerComponent(DoorDashFormTextField, {
  name: "DoorDashFormTextField",
  friendlyName: "Form Text Field",
  inputs: [
    { name: "name", type: "string", defaultValue: "field" },
    { name: "label", type: "string", defaultValue: "Label" },
    { name: "required", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(DoorDashFormEmailField, {
  name: "DoorDashFormEmailField",
  friendlyName: "Form Email Field",
  inputs: [
    { name: "name", type: "string", defaultValue: "email" },
    { name: "label", type: "string", defaultValue: "Email Address" },
    { name: "required", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(DoorDashFormPhoneField, {
  name: "DoorDashFormPhoneField",
  friendlyName: "Form Phone Field",
  inputs: [
    { name: "name", type: "string", defaultValue: "phone" },
    { name: "label", type: "string", defaultValue: "Phone Number" },
    { name: "required", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(DoorDashFormSelectField, {
  name: "DoorDashFormSelectField",
  friendlyName: "Form Select Field",
  inputs: [
    { name: "name", type: "string", defaultValue: "field" },
    { name: "label", type: "string", defaultValue: "Select an option" },
    {
      name: "options",
      type: "list",
      subFields: [{ name: "option", type: "string" }],
      defaultValue: ["Option 1", "Option 2"],
    },
    { name: "required", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(DoorDashFormSubmitButton, {
  name: "DoorDashFormSubmitButton",
  friendlyName: "Form Submit Button",
  defaultStyles: {
    width: "fit-content",
    marginLeft: "auto",
  },
  inputs: [{ name: "text", type: "string", defaultValue: "Submit" }],
});
