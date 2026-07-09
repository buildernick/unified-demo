const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

async function fetchEntries(query: string) {
  const response = await fetch(`${BASE_URL}/entries?${query}&access_token=${ACCESS_TOKEN}`, {
    cache: "no-store",
  });
  if (!response.ok) return { items: [], includes: {} };
  return response.json();
}

function resolveAssetUrl(link: any, includes: any): string | undefined {
  const assetId = link?.sys?.id;
  if (!assetId) return undefined;
  const asset = includes?.Asset?.find((a: any) => a.sys.id === assetId);
  const url = asset?.fields?.file?.url;
  return url ? `https:${url}` : undefined;
}

function resolveEntry(link: any, includes: any): any {
  const entryId = link?.sys?.id;
  if (!entryId) return undefined;
  return includes?.Entry?.find((e: any) => e.sys.id === entryId);
}

function toProductCardData(entry: any, includes: any) {
  return {
    id: entry?.sys?.id,
    data: {
      productName: entry?.fields?.productName,
      price: entry?.fields?.price,
      handle: entry?.fields?.handle,
      images: [
        {
          image: resolveAssetUrl(entry?.fields?.image, includes),
          altText: entry?.fields?.productName,
        },
      ],
    },
  };
}

export async function getShopHomeSections() {
  const [heroRes, textRes, splitRes, gridRes, iconSectionRes] = await Promise.all([
    fetchEntries("content_type=shopImageHero&fields.page=home&include=1"),
    fetchEntries("content_type=shopTextHero&fields.page=home"),
    fetchEntries("content_type=shopSplitHero&fields.page=home&include=1"),
    fetchEntries("content_type=shopProductGrid&fields.page=home&include=2"),
    fetchEntries("content_type=shopIconFeatureSection&fields.page=home&include=2"),
  ]);

  const sections: any[] = [];

  for (const item of heroRes.items) {
    sections.push({
      type: "imageHero",
      order: item.fields.order,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      backgroundImage: resolveAssetUrl(item.fields.backgroundImage, heroRes.includes),
      buttonText: item.fields.buttonText,
      buttonLink: item.fields.buttonLink,
      alignment: item.fields.alignment,
      makeFullBleed: item.fields.makeFullBleed,
    });
  }

  for (const item of textRes.items) {
    sections.push({
      type: "textHero",
      order: item.fields.order,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
    });
  }

  for (const item of splitRes.items) {
    sections.push({
      type: "splitHero",
      order: item.fields.order,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      image: resolveAssetUrl(item.fields.image, splitRes.includes),
      altText: item.fields.altText,
      imageAlignment: item.fields.imageAlignment,
      textAlignment: item.fields.textAlignment,
      splitWidth: item.fields.splitWidth,
      hasCta: item.fields.hasCta,
      buttonText: item.fields.buttonText,
      buttonLink: item.fields.buttonLink,
      makeFullBleed: item.fields.makeFullBleed,
    });
  }

  for (const item of gridRes.items) {
    const products = (item.fields.products ?? []).map((link: any) =>
      toProductCardData(resolveEntry(link, gridRes.includes), gridRes.includes)
    );
    sections.push({
      type: "productGrid",
      order: item.fields.order,
      heading: item.fields.heading,
      ctaText: item.fields.ctaText,
      ctaLink: item.fields.ctaLink,
      products,
    });
  }

  for (const item of iconSectionRes.items) {
    const features = (item.fields.features ?? []).map((link: any) => {
      const entry = resolveEntry(link, iconSectionRes.includes);
      return {
        title: entry?.fields?.title,
        description: entry?.fields?.description,
        altText: entry?.fields?.altText,
        icon: resolveAssetUrl(entry?.fields?.icon, iconSectionRes.includes),
      };
    });
    sections.push({
      type: "iconFeatureSection",
      order: item.fields.order,
      header: item.fields.header,
      features,
    });
  }

  return sections.sort((a, b) => a.order - b.order);
}
