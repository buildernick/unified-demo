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

export async function getShopHeroes() {
  const { items, includes } = await fetchEntries(
    "content_type=shopImageHero&fields.page=home&order=fields.order&include=2"
  );
  return items.map((item: any) => ({
    ...item.fields,
    backgroundImage: resolveAssetUrl(item.fields.backgroundImage, includes),
  }));
}

export async function getShopFeaturedProducts() {
  const { items, includes } = await fetchEntries(
    "content_type=shopProduct&fields.featuredOnHome=true&order=fields.featuredOrder&include=2"
  );
  return items.map((item: any) => ({
    id: item.sys.id,
    data: {
      productName: item.fields.productName,
      price: item.fields.price,
      handle: item.fields.handle,
      images: [
        {
          image: resolveAssetUrl(item.fields.image, includes),
          altText: item.fields.productName,
        },
      ],
    },
  }));
}

export async function getShopIconFeatures() {
  const { items, includes } = await fetchEntries(
    "content_type=shopIconFeature&fields.page=home&order=fields.order&include=2"
  );
  return items.map((item: any) => ({
    ...item.fields,
    icon: resolveAssetUrl(item.fields.icon, includes),
  }));
}
