/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Accordion from "@/src/components/Accordion/accordion";
import AlgoliaSearchBox from "@/src/components/AlgoliaSearchBox/AlgoliaSearchBox";
import BynderImage from "@/src/components/Blocks/BynderImage";
import CloudinaryImage from "@/src/components/Blocks/CloudinaryImage";
import IconCard from "@/src/components/Card/IconCard";
import ProductCard from "@/src/components/Card/ProductCard";
import { Collection } from "@/src/components/Collection/Collection";
import Counter from "@/src/components/Counter/Counter";
import CustomText from "@/src/components/CustomText";
import HeroWithChildren from "@/src/components/Hero/HeroWithChildren";
import ImageHero from "@/src/components/Hero/ImageHero";
import SplitHero from "@/src/components/Hero/SplitHero";
import TextHero from "@/src/components/Hero/TextHero";
import UpsellPopup from "@/src/components/Popup/UpsellPopup";
import { Button } from "@/src/components/ui/button";
import CategoryLanding from "@/src/components/PLP/CategoryLanding";
import { CategoryFilter } from "@/src/components/PLP/CategoryFilter";
import { ColorFilter } from "@/src/components/PLP/ColorFilter";
import { SizeFilter } from "@/src/components/PLP/SizeFilter";
import { Accordion as UIAccordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/src/components/ui/accordion";

const heroImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a";
const denimImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F0cde6f8ddd9d482fad53266f8ee0f3ce";
const headerLogo =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F692369ff646645349e68a86b43fc7a38";
const iconCardImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fa6b9b54b817a4350b286bb6daebbad80";

const sampleProduct = {
  data: {
    handle: "gallery-sample-product",
    productName: "Studio Denim Jacket",
    price: 128,
    colors: [{ label: "Light wash" }],
    images: [{ image: denimImage, altText: "Denim jacket product preview" }],
  },
};

const sampleProduct2 = {
  data: {
    handle: "gallery-sample-product-2",
    productName: "Classic White Tee",
    price: 48,
    colors: [{ label: "White" }, { label: "Black" }],
    images: [{ image: heroImage, altText: "White tee product preview" }],
  },
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ─── Example wrapper ──────────────────────────────────────────────────────────

function Example({
  label,
  hint,
  children,
  fullWidth = false,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-5 items-center rounded border border-zinc-200 bg-zinc-100 px-2 text-[11px] font-medium text-zinc-600">
          {label}
        </span>
        {hint && <span className="text-xs text-zinc-400">{hint}</span>}
      </div>
      <div className={fullWidth ? "" : "rounded-lg border border-zinc-200 bg-white overflow-hidden"}>
        {children}
      </div>
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({
  name,
  group,
  description,
  inputs,
  exampleCount,
}: {
  name: string;
  group: string;
  description: string;
  inputs: string;
  exampleCount: number;
}) {
  return (
    <div className="border-b border-zinc-200 bg-white px-8 py-7">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-zinc-400">
        <span>{group}</span>
        <span>/</span>
        <span className="text-zinc-600 font-medium">{name}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">{name}</h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-500">{description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Inputs </span>
          <span className="text-xs text-zinc-600">{inputs}</span>
        </div>
        <span className="h-3 w-px bg-zinc-200" />
        <span className="text-xs text-zinc-400">{exampleCount} example{exampleCount !== 1 ? "s" : ""}</span>
      </div>
    </div>
  );
}

// ─── Placeholder ──────────────────────────────────────────────────────────────

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[180px] items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-400">
      {children}
    </div>
  );
}

// ─── Token swatch ─────────────────────────────────────────────────────────────

function ColorSwatch({ name, value, cssVar }: { name: string; value: string; cssVar: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-md border border-zinc-200 shadow-sm"
        style={{ background: value }}
      />
      <p className="text-xs font-medium text-zinc-800">{name}</p>
      <p className="font-mono text-[10px] text-zinc-400">{cssVar}</p>
      <p className="font-mono text-[10px] text-zinc-400">{value}</p>
    </div>
  );
}

// ─── Individual component views ───────────────────────────────────────────────

function ImageHeroSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Alignment: right" hint="default storefront layout">
        <ImageHero
          title="SHOP ESSENTIALS"
          subTitle="<p>Shoppable essentials for your every day life.</p>"
          buttonText="Shop Now"
          buttonLink="/category/accessories"
          backgroundImage={heroImage}
          alignment="right"
          makeFullBleed={false}
        />
      </Example>
      <Example label="Alignment: left">
        <ImageHero
          title="NEW ARRIVALS"
          subTitle="<p>Fresh styles landing every week. Be the first to shop.</p>"
          buttonText="Explore Now"
          buttonLink="/category/new"
          backgroundImage={denimImage}
          alignment="left"
          makeFullBleed={false}
        />
      </Example>
      <Example label="Alignment: center">
        <ImageHero
          title="SUMMER SALE"
          subTitle="<p>Up to 40% off select styles. Limited time only.</p>"
          buttonText="See Deals"
          buttonLink="/sale"
          backgroundImage={heroImage}
          alignment="center"
          makeFullBleed={false}
        />
      </Example>
      <Example label="Full bleed" hint="makeFullBleed: true — extends edge-to-edge">
        <ImageHero
          title="FULL-BLEED HERO"
          subTitle="<p>Edge-to-edge layout with no border radius.</p>"
          buttonText="Shop Now"
          buttonLink="/"
          backgroundImage={denimImage}
          alignment="right"
          makeFullBleed={true}
        />
      </Example>
    </div>
  );
}

function SplitHeroSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Image left, text left">
        <SplitHero
          imageAlignment="left"
          textAlignment="left"
          splitWidth="1/2"
          title="OUR COMMITMENT TO SUSTAINABILITY"
          subTitle="<p>Create impactful, bold silhouettes in our chic, cozy classics.</p>"
          image={denimImage}
          altText="Blue denim apparel"
          hasCTA={true}
          buttonText="Learn More"
          buttonLink="/about"
          makeFullBleed={false}
        />
      </Example>
      <Example label="Image right, text right">
        <SplitHero
          imageAlignment="right"
          textAlignment="right"
          splitWidth="1/2"
          title="MADE FOR MOVEMENT"
          subTitle="<p>Performance fabrics designed to move with you all day.</p>"
          image={heroImage}
          altText="Hero apparel"
          hasCTA={true}
          buttonText="Shop Active"
          buttonLink="/category/active"
          makeFullBleed={false}
        />
      </Example>
      <Example label="No CTA" hint="hasCTA: false">
        <SplitHero
          imageAlignment="left"
          textAlignment="center"
          splitWidth="1/3"
          title="EDITORIAL MOMENT"
          subTitle="<p>A full-width statement piece with no button distraction.</p>"
          image={denimImage}
          altText="Editorial shot"
          hasCTA={false}
          buttonText=""
          buttonLink=""
          makeFullBleed={false}
        />
      </Example>
    </div>
  );
}

function TextHeroSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Standard centered text hero">
        <TextHero
          title="STEP INTO FRESH STYLES"
          subTitle="<p>Lightweight layers, polished basics, and accessories made for everyday wear.</p>"
        />
      </Example>
      <Example label="Short punchy headline">
        <TextHero
          title="THE DROP"
          subTitle="<p>Limited quantities. Weekly releases. Don't miss out.</p>"
        />
      </Example>
      <Example label="Longer editorial copy">
        <TextHero
          title="CRAFTED FOR REAL LIFE"
          subTitle="<p>Each piece is designed to go from the office to the weekend without missing a beat. Quality that holds up, style that stands out.</p>"
        />
      </Example>
    </div>
  );
}

function HeroWithChildrenSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Basic header, no child blocks">
        <HeroWithChildren
          header="WHAT'S DIFFERENT ABOUT SHOPAHOLIC"
          childBlocks={[]}
          makeFullBleed={false}
        />
      </Example>
      <Example label="Alternative headline">
        <HeroWithChildren
          header="WHY CUSTOMERS LOVE US"
          childBlocks={[]}
          makeFullBleed={false}
        />
      </Example>
    </div>
  );
}

function IconCardSection() {
  return (
    <div className="px-8 py-8">
      <Example label="3-up grid — center aligned">
        <div className="grid gap-4 p-6 md:grid-cols-3">
          <IconCard
            icon={iconCardImage}
            altText="Star icon"
            title="Composable Content"
            description="<p>Give teams reusable blocks that match the storefront experience.</p>"
            alignment="center"
            coloredBackground={false}
          />
          <IconCard
            icon={iconCardImage}
            altText="Star icon"
            title="Visual Editing"
            description="<p>Preview components exactly as shoppers will see them.</p>"
            alignment="center"
            coloredBackground={false}
          />
          <IconCard
            icon={iconCardImage}
            altText="Star icon"
            title="Reusable Systems"
            description="<p>Build pages from well-defined component primitives.</p>"
            alignment="center"
            coloredBackground={false}
          />
        </div>
      </Example>
      <Example label="Left aligned with colored background">
        <div className="grid gap-4 p-6 md:grid-cols-2">
          <IconCard
            icon={iconCardImage}
            altText="Star icon"
            title="Free Returns"
            description="<p>No-hassle returns within 30 days of purchase.</p>"
            alignment="left"
            coloredBackground={true}
          />
          <IconCard
            icon={iconCardImage}
            altText="Star icon"
            title="Sustainable Packaging"
            description="<p>We ship in 100% recycled materials.</p>"
            alignment="left"
            coloredBackground={true}
          />
        </div>
      </Example>
      <Example label="Single card — right aligned">
        <div className="p-6 max-w-sm">
          <IconCard
            icon={iconCardImage}
            altText="Star icon"
            title="Express Shipping"
            description="<p>Get your order in 2 business days.</p>"
            alignment="right"
            coloredBackground={false}
          />
        </div>
      </Example>
    </div>
  );
}

function ProductCardSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Single product card">
        <div className="p-6 max-w-xs">
          <ProductCard product={sampleProduct} dataSource="Builder" />
        </div>
      </Example>
      <Example label="Side-by-side cards">
        <div className="flex gap-4 p-6 flex-wrap">
          <div className="w-56">
            <ProductCard product={sampleProduct} dataSource="Builder" />
          </div>
          <div className="w-56">
            <ProductCard product={sampleProduct2} dataSource="Builder" />
          </div>
        </div>
      </Example>
    </div>
  );
}

function CollectionSection() {
  return (
    <div className="px-8 py-8">
      <Example label="All products collection" fullWidth>
        <Collection collection="all" />
      </Example>
    </div>
  );
}

function AlgoliaSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Default search box" fullWidth>
        <AlgoliaSearchBox />
      </Example>
    </div>
  );
}

function CloudinarySection() {
  return (
    <div className="px-8 py-8">
      <Example label="Cloudinary image asset">
        <div className="p-6">
          <CloudinaryImage
            cloudinaryOptions={{
              url: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
              width: 160,
              height: 120,
              alt: "Cloudinary logo",
              name: "Cloudinary logo",
            }}
          />
        </div>
      </Example>
      <Example label="Constrained width with border">
        <div className="max-w-sm overflow-hidden p-6">
          <CloudinaryImage
            cloudinaryOptions={{
              url: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
              width: 240,
              height: 180,
              alt: "Cloudinary logo large",
              name: "Cloudinary logo large",
            }}
          />
        </div>
      </Example>
    </div>
  );
}

function BynderSection() {
  return (
    <div className="px-8 py-8">
      <Example label="imageFit: cover">
        <div className="max-w-md overflow-hidden">
          <BynderImage
            imageFit="cover"
            bynderAsset={{
              assets: [
                {
                  description: "Builder storefront asset",
                  files: {
                    webImage: { url: heroImage, width: 900, height: 600 },
                  },
                } as any,
              ],
            }}
          />
        </div>
      </Example>
      <Example label="imageFit: contain">
        <div className="max-w-md overflow-hidden">
          <BynderImage
            imageFit="contain"
            bynderAsset={{
              assets: [
                {
                  description: "Denim asset",
                  files: {
                    webImage: { url: denimImage, width: 900, height: 600 },
                  },
                } as any,
              ],
            }}
          />
        </div>
      </Example>
    </div>
  );
}

function AccordionSection() {
  return (
    <div className="px-8 py-8">
      <Example label="FAQ style">
        <div className="p-6">
          <Accordion
            items={[
              { title: "What can be edited?", content: "Titles, body content, images, and layout options." },
              { title: "Where is it registered?", content: "This component is registered in src/builder-registry.ts." },
              { title: "How is it used?", content: "Add it from Builder's insert menu and configure the item list." },
            ]}
          />
        </div>
      </Example>
      <Example label="Product detail style">
        <div className="p-6">
          <Accordion
            items={[
              { title: "Materials & Care", content: "100% organic cotton. Machine wash cold, tumble dry low." },
              { title: "Fit & Sizing", content: "This style runs true to size. Model is 5'10\" wearing a Medium." },
              { title: "Shipping & Returns", content: "Free shipping on orders over $75. Returns accepted within 30 days." },
              { title: "Sustainability", content: "Made in a Fair Trade certified factory using low-impact dyes." },
            ]}
          />
        </div>
      </Example>
    </div>
  );
}

function CounterSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Initial count: 0">
        <div className="p-6">
          <Counter initialCount={0} />
        </div>
      </Example>
      <Example label="Initial count: 3">
        <div className="p-6">
          <Counter initialCount={3} />
        </div>
      </Example>
      <Example label="Initial count: 10">
        <div className="p-6">
          <Counter initialCount={10} />
        </div>
      </Example>
    </div>
  );
}

function UpsellSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Timed popup (delay: 9999999ms)" hint="Does not interrupt gallery browsing">
        <div className="p-6">
          <Placeholder>
            UpsellPopup renders as a timed modal overlay. It is mounted below with an extreme delay so it won't fire during gallery browsing.
          </Placeholder>
          <UpsellPopup
            title="Special Offer"
            subTitle="Save up to 50%"
            delay={9999999}
            discountLabel="Select your discount:"
            discounts={[{ label: "15% Off" }, { label: "Free Shipping" }]}
            imageSrc={heroImage}
            imageAlt="Hero image"
          />
        </div>
      </Example>
    </div>
  );
}

function ButtonSection() {
  return (
    <div className="px-8 py-8">
      <Example label="All variants">
        <div className="flex flex-wrap gap-3 p-6">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
      </Example>
      <Example label="Sizes">
        <div className="flex flex-wrap items-center gap-3 p-6">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </Example>
      <Example label="Disabled state">
        <div className="flex flex-wrap gap-3 p-6">
          <Button variant="default" disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="outline" disabled>Outline</Button>
        </div>
      </Example>
    </div>
  );
}

function CustomTextSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Inline product link rewrite">
        <div className="p-6 text-base leading-7">
          <CustomText
            text={'<p>Build content with inline product links like <a href="#featured-product">this featured product</a>.</p>'}
            links={[
              {
                key: "featured-product",
                label: "Studio Denim Jacket",
                target: "_self",
                product: { value: { data: { handle: "gallery-sample-product" } } },
              },
            ]}
          />
        </div>
      </Example>
      <Example label="Multiple link rewrites">
        <div className="p-6 text-base leading-7">
          <CustomText
            text={'<p>Pair the <a href="#jacket">denim jacket</a> with our <a href="#tee">classic white tee</a> for a clean everyday look.</p>'}
            links={[
              {
                key: "jacket",
                label: "Denim Jacket",
                target: "_self",
                product: { value: { data: { handle: "gallery-sample-product" } } },
              },
              {
                key: "tee",
                label: "Classic White Tee",
                target: "_blank",
                product: { value: { data: { handle: "gallery-sample-product-2" } } },
              },
            ]}
          />
        </div>
      </Example>
    </div>
  );
}

// ─── PLP sample data ──────────────────────────────────────────────────────────

const plpProducts = [
  { data: { handle: "p1", productName: "Studio Denim Jacket", price: 128, subCategory: "Jackets", colors: [{ label: "blue" }], sizes: [{ label: "Small" }, { label: "Medium" }, { label: "Large" }], images: [{ image: denimImage, altText: "Denim jacket" }] } },
  { data: { handle: "p2", productName: "Classic White Tee", price: 48, subCategory: "Shirts", colors: [{ label: "white" }], sizes: [{ label: "X-Small" }, { label: "Small" }, { label: "Medium" }], images: [{ image: heroImage, altText: "White tee" }] } },
  { data: { handle: "p3", productName: "Tailored Pea Coat", price: 225, subCategory: "Pea Coats", colors: [{ label: "black" }], sizes: [{ label: "Small" }, { label: "Medium" }, { label: "Large" }, { label: "X-Large" }], images: [{ image: denimImage, altText: "Pea coat" }] } },
  { data: { handle: "p4", productName: "Relaxed Linen Shirt", price: 75, subCategory: "Shirts", colors: [{ label: "gray" }], sizes: [{ label: "Medium" }, { label: "Large" }], images: [{ image: heroImage, altText: "Linen shirt" }] } },
  { data: { handle: "p5", productName: "Vintage Leather Vest", price: 160, subCategory: "Vests", colors: [{ label: "black" }], sizes: [{ label: "Small" }, { label: "Medium" }], images: [{ image: denimImage, altText: "Leather vest" }] } },
  { data: { handle: "p6", productName: "Canvas Field Jacket", price: 195, subCategory: "Jackets", colors: [{ label: "green" }], sizes: [{ label: "Medium" }, { label: "Large" }, { label: "X-Large" }], images: [{ image: heroImage, altText: "Field jacket" }] } },
];

function PLPGridSection() {
  return (
    <div className="px-8 py-8">
      <Example label="Full PLP layout — filters + product grid" fullWidth>
        <div className="border rounded-lg overflow-hidden">
          <CategoryLanding products={plpProducts} plpTiles={[]} />
        </div>
      </Example>
      <Example label="Filtered state — Jackets only" fullWidth>
        <div className="border rounded-lg overflow-hidden">
          <CategoryLanding
            products={plpProducts.filter((p) => p.data.subCategory === "Jackets")}
            plpTiles={[]}
          />
        </div>
      </Example>
    </div>
  );
}

function PLPFiltersSection() {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>(["blue"]);
  const [selectedSizes, setSelectedSizes] = React.useState<string[]>([]);
  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large"];

  return (
    <div className="px-8 py-8">
      <Example label="CategoryFilter — all categories">
        <div className="p-6 max-w-xs">
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
      </Example>
      <Example label="ColorFilter — preset selection (blue active)">
        <div className="p-6 max-w-xs">
          <ColorFilter
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
          />
        </div>
      </Example>
      <Example label="SizeFilter — toggle buttons">
        <div className="p-6 max-w-xs">
          <SizeFilter
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            availableSizes={sizes}
          />
        </div>
      </Example>
      <Example label="All three filters in accordion — matches PLP sidebar">
        <div className="p-6 max-w-xs">
          <UIAccordion type="multiple" className="w-full" defaultValue={["category", "color", "size"]}>
            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                <CategoryFilter
                  selectedCategories={[]}
                  setSelectedCategories={() => {}}
                  availableCategories={["Jackets", "Shirts", "Vests"]}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="color">
              <AccordionTrigger>Color</AccordionTrigger>
              <AccordionContent>
                <ColorFilter
                  selectedColors={[]}
                  setSelectedColors={() => {}}
                  availableColors={["blue", "black", "green", "gray"]}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger>Size</AccordionTrigger>
              <AccordionContent>
                <SizeFilter
                  selectedSizes={[]}
                  setSelectedSizes={() => {}}
                  availableSizes={sizes}
                />
              </AccordionContent>
            </AccordionItem>
          </UIAccordion>
        </div>
      </Example>
    </div>
  );
}

// ─── Typography & Spacing tokens ──────────────────────────────────────────────

const colorTokens = [
  { name: "primary", value: "#000000", cssVar: "--primary" },
  { name: "primary-foreground", value: "#ffffff", cssVar: "--primary-foreground" },
  { name: "secondary", value: "#ffffff", cssVar: "--secondary" },
  { name: "accent", value: "#F35959", cssVar: "--accent" },
  { name: "muted", value: "#18B4F4", cssVar: "--muted" },
  { name: "energetic", value: "#A97FF2", cssVar: "--energetic" },
  { name: "tertiary", value: "#C8E2EE", cssVar: "--tertiary" },
  { name: "destructive", value: "#C8E2EE", cssVar: "--destructive" },
  { name: "border", value: "#e2e8f0", cssVar: "--border" },
  { name: "background", value: "#ffffff", cssVar: "--background" },
];

const typeSizes = [
  { label: "text-xs", size: "0.75rem / 12px", className: "text-xs" },
  { label: "text-sm", size: "0.875rem / 14px", className: "text-sm" },
  { label: "text-base", size: "1rem / 16px", className: "text-base" },
  { label: "text-lg", size: "1.125rem / 18px", className: "text-lg" },
  { label: "text-xl", size: "1.25rem / 20px", className: "text-xl" },
  { label: "text-2xl", size: "1.5rem / 24px", className: "text-2xl" },
  { label: "text-3xl", size: "1.875rem / 30px", className: "text-3xl" },
  { label: "text-4xl", size: "2.25rem / 36px", className: "text-4xl" },
  { label: "text-5xl", size: "3rem / 48px", className: "text-5xl" },
];

const fontWeights = [
  { label: "font-light", value: 300, className: "font-light" },
  { label: "font-normal", value: 400, className: "font-normal" },
  { label: "font-medium", value: 500, className: "font-medium" },
  { label: "font-semibold", value: 600, className: "font-semibold" },
  { label: "font-bold", value: 700, className: "font-bold" },
];

const spacingTokens = [
  { label: "1", px: 4 },
  { label: "2", px: 8 },
  { label: "3", px: 12 },
  { label: "4", px: 16 },
  { label: "5", px: 20 },
  { label: "6", px: 24 },
  { label: "8", px: 32 },
  { label: "10", px: 40 },
  { label: "12", px: 48 },
  { label: "16", px: 64 },
  { label: "20", px: 80 },
  { label: "24", px: 96 },
];

const radiusTokens = [
  { label: "rounded-sm", className: "rounded-sm", description: "calc(var(--radius) - 4px)" },
  { label: "rounded-md", className: "rounded-md", description: "calc(var(--radius) - 2px)" },
  { label: "rounded-lg", className: "rounded-lg", description: "var(--radius) — 0.5rem" },
  { label: "rounded-xl", className: "rounded-xl", description: "0.75rem" },
  { label: "rounded-full", className: "rounded-full", description: "9999px" },
];

function TokensSection() {
  return (
    <div className="px-8 py-8 space-y-12">

      {/* Colors */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-zinc-800">Color tokens</h3>
        <p className="mb-5 text-xs text-zinc-400">CSS variables defined in globals.css, consumed via Tailwind</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {colorTokens.map((t) => (
            <ColorSwatch key={t.cssVar} name={t.name} value={t.value} cssVar={t.cssVar} />
          ))}
        </div>
      </div>

      {/* Typography — size */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-zinc-800">Type scale</h3>
        <p className="mb-5 text-xs text-zinc-400">Font family: Poppins (set in globals.css)</p>
        <div className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white overflow-hidden">
          {typeSizes.map((t) => (
            <div key={t.label} className="flex items-baseline gap-4 px-5 py-3">
              <span className="w-20 shrink-0 font-mono text-[11px] text-zinc-400">{t.label}</span>
              <span className="w-28 shrink-0 font-mono text-[11px] text-zinc-400">{t.size}</span>
              <span className={`${t.className} text-zinc-900 leading-none`}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </div>

      {/* Typography — weight */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-zinc-800">Font weights</h3>
        <p className="mb-5 text-xs text-zinc-400">Available weights via Tailwind utility classes</p>
        <div className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white overflow-hidden">
          {fontWeights.map((w) => (
            <div key={w.label} className="flex items-baseline gap-4 px-5 py-3">
              <span className="w-36 shrink-0 font-mono text-[11px] text-zinc-400">{w.label}</span>
              <span className="w-8 shrink-0 font-mono text-[11px] text-zinc-400">{w.value}</span>
              <span className={`${w.className} text-xl text-zinc-900`}>Shopaholic</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-zinc-800">Spacing scale</h3>
        <p className="mb-5 text-xs text-zinc-400">Tailwind default scale (1 unit = 4px)</p>
        <div className="space-y-2.5">
          {spacingTokens.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="w-8 shrink-0 text-right font-mono text-[11px] text-zinc-400">{s.label}</span>
              <span className="w-14 shrink-0 font-mono text-[11px] text-zinc-400">{s.px}px</span>
              <div
                className="h-4 rounded-sm bg-rose-400"
                style={{ width: s.px }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Border radius */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-zinc-800">Border radius</h3>
        <p className="mb-5 text-xs text-zinc-400">Radius tokens from tailwind.config.ts extending --radius</p>
        <div className="flex flex-wrap gap-6">
          {radiusTokens.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div className={`h-14 w-14 border-2 border-zinc-300 bg-zinc-100 ${r.className}`} />
              <span className="font-mono text-[10px] text-zinc-500">{r.label}</span>
              <span className="font-mono text-[10px] text-zinc-400 text-center max-w-[80px]">{r.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Nav config ───────────────────────────────────────────────────────────────

const navSections = [
  {
    title: "Heros",
    items: [
      { name: "ImageHero", examples: 4, group: "Heros", description: "Full-width image hero with headline, rich text subtitle, alignment options, and a CTA button.", inputs: "title, alignment, backgroundImage, buttonText, buttonLink, subTitle, makeFullBleed", component: ImageHeroSection },
      { name: "SplitHero", examples: 3, group: "Heros", description: "Two-column hero pairing editorial text with an image, configurable image side, split width, text alignment, and CTA.", inputs: "imageAlignment, textAlignment, splitWidth, image, altText, title, subTitle, hasCTA, buttonText, buttonLink, makeFullBleed", component: SplitHeroSection },
      { name: "TextHero", examples: 3, group: "Heros", description: "Centered text-only hero for short editorial statements or page introductions.", inputs: "title, subTitle", component: TextHeroSection },
      { name: "HeroWithChildren", examples: 2, group: "Heros", description: "Hero wrapper that accepts up to three Builder child blocks underneath a header.", inputs: "header, childBlocks, makeFullBleed", component: HeroWithChildrenSection },
    ],
  },
  {
    title: "Cards",
    items: [
      { name: "IconCard", examples: 3, group: "Cards", description: "Small marketing card with icon, title, rich text description, alignment, and optional colored background.", inputs: "icon, altText, title, description, alignment, coloredBackground", component: IconCardSection },
      { name: "ProductCard", examples: 2, group: "Cards", description: "Product tile that can render products from Builder, Shopify, Swell, Commercetools, or Emporix.", inputs: "dataSource, product, shopifyProductHandle, swellProductHandle, commercetoolsProduct, emporixProductHandle", component: ProductCardSection },
    ],
  },
  {
    title: "Commerce",
    items: [
      { name: "Collection", examples: 1, group: "Commerce", description: "Horizontally scrolling product collection sourced from Builder product data and filtered by collection.", inputs: "collection", component: CollectionSection },
      { name: "AlgoliaSearchBox", examples: 1, group: "Commerce", description: "Algolia-powered product search with category, color, and size refinements.", inputs: "none", component: AlgoliaSection },
    ],
  },
  {
    title: "PLP",
    items: [
      { name: "PLP Grid", examples: 2, group: "PLP", description: "Full product listing page layout with sidebar filters and a responsive product grid. Accepts a list of products and applies category, color, and size filters client-side.", inputs: "products, plpTiles, colorIdToName", component: PLPGridSection },
      { name: "PLP Filters", examples: 4, group: "PLP", description: "Sidebar filter controls for the product listing page: CategoryFilter (checkboxes), ColorFilter (color swatches with checkboxes), and SizeFilter (toggle buttons). Shown individually and composed in an accordion.", inputs: "selectedCategories, setSelectedCategories, availableCategories, selectedColors, setSelectedColors, availableColors, selectedSizes, setSelectedSizes, availableSizes", component: PLPFiltersSection },
    ],
  },
  {
    title: "Media",
    items: [
      { name: "CloudinaryImage", examples: 2, group: "Media", description: "Custom image block that renders a selected Cloudinary asset from Builder's Cloudinary image editor input.", inputs: "cloudinaryOptions", component: CloudinarySection },
      { name: "BynderImage", examples: 2, group: "Media", description: "Custom image block that renders a selected Bynder asset with configurable image fit.", inputs: "bynderAsset, imageFit", component: BynderSection },
    ],
  },
  {
    title: "Utility",
    items: [
      { name: "Accordion", examples: 2, group: "Utility", description: "Simple expandable content list for FAQs or dense page sections.", inputs: "items", component: AccordionSection },
      { name: "Counter", examples: 3, group: "Utility", description: "Interactive counter component with a configurable initial value.", inputs: "initialCount", component: CounterSection },
      { name: "UpsellPopup", examples: 1, group: "Utility", description: "Timed promotional modal with discount options, image, title, subtitle, and dismiss action.", inputs: "title, subTitle, delay, discountLabel, discounts, imageSrc, imageAlt", component: UpsellSection },
      { name: "Core:Button", examples: 3, group: "Utility", description: "Project-styled Button override registered for Builder content with common storefront variants.", inputs: "variant, size, children", component: ButtonSection },
    ],
  },
  {
    title: "Text",
    items: [
      { name: "Custom Text", examples: 2, group: "Text", description: "Rich text renderer that rewrites configured placeholder links to referenced product URLs.", inputs: "text, links", component: CustomTextSection },
    ],
  },
  {
    title: "Design Tokens",
    items: [
      { name: "Typography & Spacing", examples: 5, group: "Design Tokens", description: "Color tokens, type scale, font weights, spacing scale, and border radius tokens used across this project.", inputs: "n/a", component: TokensSection },
    ],
  },
];

const allItems = navSections.flatMap((s) => s.items);

// ─── Gallery ──────────────────────────────────────────────────────────────────

export default function Gallery() {
  const [activeId, setActiveId] = useState(slugify(allItems[0].name));

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && allItems.some((i) => slugify(i.name) === hash)) {
      setActiveId(hash);
    }
  }, []);

  const active = allItems.find((i) => slugify(i.name) === activeId) ?? allItems[0];
  const ActiveComponent = active.component;

  function navigate(name: string) {
    const id = slugify(name);
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  const totalComponents = allItems.filter((i) => i.group !== "Design Tokens").length;

  return (
    <div className="flex min-h-screen rounded-md border border-zinc-200 bg-white mb-12">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-zinc-200 bg-zinc-50 md:flex md:flex-col">
        <div className="sticky top-0 flex flex-col h-screen">
          <div className="px-5 pt-6 pb-4 border-b border-zinc-200">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-rose-500">Builder CMS</p>
            <p className="text-xs text-zinc-500 mt-0.5">Component Gallery</p>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Component gallery">
            {navSections.map((section) => (
              <div key={section.title} className="mb-5">
                <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[2px] text-zinc-400">
                  {section.title}
                </p>
                <div className="space-y-0.5">
                  {section.items.map((item) => {
                    const isActive = slugify(item.name) === activeId;
                    return (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.name)}
                        className={`w-full text-left flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                          isActive
                            ? "bg-rose-50 text-rose-600 font-medium"
                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                        }`}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main */}
      <main className="min-w-0 flex-1 flex flex-col">
        {/* Top bar */}
        <div className="border-b border-zinc-200 bg-white px-8 py-5 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div>
              <p className="text-[10px] uppercase tracking-[3px] text-zinc-400">Gallery</p>
              <h1 className="text-lg font-semibold tracking-tight text-zinc-900 leading-tight">Component Gallery</h1>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500">
            {totalComponents} components
          </span>
        </div>

        {/* Component view */}
        <div className="flex-1 overflow-y-auto">
          <SectionHeader
            name={active.name}
            group={active.group}
            description={active.description}
            inputs={active.inputs}
            exampleCount={active.examples}
          />
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
