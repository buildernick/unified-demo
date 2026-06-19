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

const ProductBox: React.FC<ProductBoxProps> = ({ productData }) => {
  let product = productData?.data || productData?.value?.data;

  const image = product?.images?.[0];
  const productName = getLocalizedText(product?.productName);

  if (!image?.image) {
    return null;
  }

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
        <p className="mt-1 text-left text-stone-500">
          {product?.colors?.[0]?.label}
        </p>
      </div>
    </a>
  );
};

export default ProductBox;
