const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID as string;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN as string;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";

const CONTENTFUL_CDA_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

export interface DoorDashFeature {
  title: string;
  description: string;
  href?: string;
  image: string;
}

export interface DoorDashProductLanding {
  internalName: string;
  slug: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImages: string[];
  formSubmitLabel?: string;
  sectionHeading: string;
  sectionDescription: string;
  features: DoorDashFeature[];
}

interface ContentfulEntry<TFields> {
  sys: { id: string };
  fields: TFields;
}

interface ContentfulEntryLink {
  sys: { type: "Link"; linkType: "Entry"; id: string };
}

interface ContentfulResponse<TFields> {
  items: ContentfulEntry<TFields>[];
  includes?: {
    Entry?: ContentfulEntry<Record<string, unknown>>[];
  };
}

async function fetchContentful<T>(path: string, searchParams: Record<string, string>) {
  const url = new URL(`${CONTENTFUL_CDA_URL}${path}`);
  url.searchParams.set("access_token", CONTENTFUL_ACCESS_TOKEN);
  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!response.ok) {
    throw new Error(`Contentful request failed: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export async function getDoorDashProductLanding(
  slug: string
): Promise<DoorDashProductLanding | null> {
  const data = await fetchContentful<ContentfulResponse<any>>("/entries", {
    content_type: "doorDashProductLanding",
    "fields.slug": slug,
    include: "2",
    limit: "1",
  });

  const entry = data.items[0];
  if (!entry) return null;

  const linkedEntries = data.includes?.Entry ?? [];
  const resolveFeature = (link: ContentfulEntryLink): DoorDashFeature | null => {
    const linked = linkedEntries.find((e) => e.sys.id === link.sys.id);
    if (!linked) return null;
    const fields = linked.fields as Record<string, string>;
    return {
      title: fields.title,
      description: fields.description,
      href: fields.href,
      image: fields.image,
    };
  };

  const features: DoorDashFeature[] = (entry.fields.features ?? [])
    .map(resolveFeature)
    .filter((f: DoorDashFeature | null): f is DoorDashFeature => f !== null);

  return {
    internalName: entry.fields.internalName,
    slug: entry.fields.slug,
    heroEyebrow: entry.fields.heroEyebrow,
    heroHeadline: entry.fields.heroHeadline,
    heroSubheadline: entry.fields.heroSubheadline,
    heroImages: entry.fields.heroImages ?? [],
    formSubmitLabel: entry.fields.formSubmitLabel,
    sectionHeading: entry.fields.sectionHeading,
    sectionDescription: entry.fields.sectionDescription,
    features,
  };
}
