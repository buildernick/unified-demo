"use client";

import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

type CartSliderProps = {
  variant: "white" | "black";
};

export const CartSlider: React.FC<CartSliderProps> = ({ variant }) => {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="relative inline-flex items-center p-2">
      <IoCartOutline className={`h-6 w-6 text-${variant}`} />
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-[10px] font-bold leading-none">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
};
