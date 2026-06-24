"use client";

import { useCart } from "@/src/context/CartContext";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Trash2, Minus, Plus } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-6">
        <p className="text-2xl font-semibold tracking-widest">YOUR CART IS EMPTY</p>
        <Button asChild className="bg-black text-white px-8 py-3">
          <Link href="/">CONTINUE SHOPPING</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold tracking-widest mb-10">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Item list */}
        <div className="flex-1 flex flex-col divide-y divide-zinc-200">
          {items.map((item) => (
            <div key={item.id} className="flex gap-5 py-6">
              {/* Thumbnail */}
              <div className="w-28 h-36 shrink-0 overflow-hidden border border-zinc-200">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-100" />
                )}
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-semibold text-base tracking-wider">
                      {item.productName}
                    </p>
                    {item.selectedColor && (
                      <p className="text-sm text-zinc-500 mt-1">
                        Color: {item.selectedColor}
                      </p>
                    )}
                    {item.selectedSize && (
                      <p className="text-sm text-zinc-500">
                        Size: {item.selectedSize}
                      </p>
                    )}
                  </div>
                  <p className="font-semibold text-base whitespace-nowrap">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity controls */}
                  <div className="flex items-center border border-zinc-300">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-zinc-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-4 py-2 text-sm font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-zinc-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-zinc-400 hover:text-black transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:w-80 shrink-0">
          <div className="border border-zinc-200 p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold tracking-widest">ORDER SUMMARY</h2>

            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">
                Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Shipping</span>
              <span className="text-zinc-500">Calculated at checkout</span>
            </div>

            <div className="border-t border-zinc-200 pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Button
              className="w-full bg-black text-white py-4 text-sm font-semibold tracking-widest mt-2"
              onClick={() => {}}
            >
              CONTINUE TO CHECKOUT
            </Button>

            <Button asChild variant="link" className="text-sm text-zinc-500 underline">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
