import Image from "next/image";

interface ProductBoxProps {
  productData: any;
}

function getLocalizedText(value: any) {
  if (!value || typeof value !== "object") {
    return value ?? "";
  }

  return value["en-US"] ?? value.Default ?? Object.values(value).find((item) => typeof item === "string") ?? "";
}

const COLOR_MAP: Record<string, string> = {
  white: "#FFFFFF",
  black: "#111111",
  red: "#EF4444",
  blue: "#3B82F6",
  navy: "#1E3A5F",
  green: "#22C55E",
  yellow: "#EAB308",
  orange: "#F97316",
  pink: "#EC4899",
  purple: "#A855F7",
  gray: "#9CA3AF",
  grey: "#9CA3AF",
  brown: "#92400E",
  beige: "#D4B896",
  cream: "#FFF8E7",
  ivory: "#FFFFF0",
  tan: "#D2B48C",
  khaki: "#C3B091",
  "light wash": "#B8D4E8",
  "dark wash": "#2C4A6E",
  "medium wash": "#7BA7C4",
  denim: "#4A7BA7",
  indigo: "#4338CA",
  teal: "#14B8A6",
  mint: "#6EE7B7",
  lavender: "#C4B5FD",
  rose: "#FB7185",
  coral: "#FB923C",
  salmon: "#FCA5A5",
  charcoal: "#374151",
  slate: "#64748B",
  stone: "#78716C",
  sand: "#D4B896",
  camel: "#C19A6B",
  olive: "#6B7C3F",
  rust: "#C2410C",
  burgundy: "#7F1D1D",
  wine: "#7F1D1D",
  mustard: "#CA8A04",
  forest: "#14532D",
  sky: "#7DD3FC",
  cobalt: "#1D4ED8",
  mauve: "#C8A2C8",
  nude: "#E8C9A0",
};

function labelToColor(label: string | undefined): string {
  if (!label) return "#D1D5DB";
  const key = label.toLowerCase().trim();
  return COLOR_MAP[key] ?? "#D1D5DB";
}

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

const MAX_SWATCHES = 5;

const ProductBox: React.FC<ProductBoxProps> = ({ productData }) => {
  let product = productData?.data || productData?.value?.data;

  const image = product?.images?.[0];
  const productName = getLocalizedText(product?.productName);
  const colors: { label?: string }[] = (product?.colors ?? []).filter(
    (c: any) => c && typeof c.label === "string"
  );

  if (!image?.image) {
    return null;
  }

  const visibleColors = colors.slice(0, MAX_SWATCHES);
  const overflow = colors.length - MAX_SWATCHES;

  return (
    <a className="block w-full" href={`/product/${product?.handle}`}>
      <div className="w-full h-[300px] border border-zinc-300 rounded-md overflow-hidden relative">
        <Image
          src={image.image}
          alt={image.altText || productName || "Product image"}
          fill={true}
          style={{ objectFit: "cover" }}
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
        />
      </div>
      <div className="flex flex-col mt-3 w-full">
        <div className="flex gap-3 justify-between w-full text-black text-left">
          <div className="text-ellipsis overflow-hidden break-words">
            {productName}
          </div>
          <p className="font-semibold">${product?.price}</p>
        </div>
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            {visibleColors.map((color, i) => {
              const bg = labelToColor(color.label);
              const light = isLight(bg);
              return (
                <span
                  key={i}
                  title={color.label}
                  className="inline-block w-5 h-5 rounded-full border"
                  style={{
                    backgroundColor: bg,
                    borderColor: light ? "#D1D5DB" : "transparent",
                  }}
                />
              );
            })}
            {overflow > 0 && (
              <span className="text-xs text-stone-500">+{overflow}</span>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProductBox;
