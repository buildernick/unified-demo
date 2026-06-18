import Image from "next/image";

interface ProductBoxProps {
  productData: any;
}

const ProductBox: React.FC<ProductBoxProps> = ({ productData }) => {
  let product = productData?.data || productData?.value?.data;

  if (!product?.images?.[0]?.image) {
    console.error("[ProductBox] No image found to display");
  }

  return (
    <a className="block w-full" href={`/product/${product?.handle}`}>
      <div className="w-full h-[300px] border border-zinc-300 rounded-md overflow-hidden relative">
        <Image
          src={product?.images?.[0]?.image}
          alt={product?.images?.[0]?.altText || product?.productName || "Product image"}
          fill={true}
          style={{ objectFit: "cover" }}
          loading="lazy"
          sizes="(max-width: 768px) 200px, 300px"
        />
      </div>
      <div className="flex flex-col mt-3 w-full">
        <div className="flex gap-3 justify-between w-full text-black text-left">
          <div className="text-ellipsis overflow-hidden break-words">
            {product?.productName}
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
