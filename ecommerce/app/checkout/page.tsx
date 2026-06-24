"use client";

import { useState } from "react";
import { useCart } from "@/src/context/CartContext";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";
import { ChevronRight, Lock } from "lucide-react";

const SHIPPING_OPTIONS = [
  { id: "standard", label: "Standard Shipping", eta: "5–7 business days", price: 0 },
  { id: "express", label: "Express Shipping", eta: "2–3 business days", price: 12 },
  { id: "overnight", label: "Overnight Shipping", eta: "Next business day", price: 25 },
];

function SectionHeader({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-xs font-bold">
        {step}
      </span>
      <h2 className="text-base font-semibold tracking-widest uppercase">{title}</h2>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  half,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  half?: boolean;
}) {
  return (
    <div className={half ? "flex flex-col gap-1.5" : "flex flex-col gap-1.5 col-span-2"}>
      <Label htmlFor={id} className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-zinc-300 focus-visible:ring-black rounded-none h-11"
      />
    </div>
  );
}

export default function CheckoutPage() {
  const { items } = useCart();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("United States");
  const [shipping, setShipping] = useState("standard");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const selectedShipping = SHIPPING_OPTIONS.find((o) => o.id === shipping)!;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + selectedShipping.price;

  function formatCardNumber(val: string) {
    return val
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function formatExpiry(val: string) {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  }

  return (
    <div className="py-10 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
        <Link href="/cart" className="hover:text-black transition-colors">Cart</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-black font-medium">Checkout</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: form */}
        <div className="flex-1 flex flex-col gap-10">

          {/* Contact */}
          <section>
            <SectionHeader step={1} title="Contact Information" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Email" id="email" type="email" placeholder="you@example.com" value={email} onChange={setEmail} />
              <Field label="Phone (optional)" id="phone" type="tel" placeholder="+1 (555) 000-0000" value={phone} onChange={setPhone} />
            </div>
          </section>

          <div className="border-t border-zinc-100" />

          {/* Shipping address */}
          <section>
            <SectionHeader step={2} title="Shipping Address" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="First name" id="firstName" placeholder="Jane" value={firstName} onChange={setFirstName} half />
              <Field label="Last name" id="lastName" placeholder="Smith" value={lastName} onChange={setLastName} half />
              <Field label="Address" id="address" placeholder="123 Main St" value={address} onChange={setAddress} />
              <Field label="Apartment, suite, etc. (optional)" id="apartment" placeholder="Apt 4B" value={apartment} onChange={setApartment} />
              <Field label="City" id="city" placeholder="New York" value={city} onChange={setCity} half />
              <Field label="State" id="state" placeholder="NY" value={state} onChange={setState} half />
              <Field label="ZIP / Postal code" id="zip" placeholder="10001" value={zip} onChange={setZip} half />
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="country" className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Country
                </Label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="h-11 border border-zinc-300 px-3 text-sm rounded-none focus:outline-none focus:ring-2 focus:ring-black bg-white"
                >
                  {["United States", "Canada", "United Kingdom", "Australia", "Germany", "France"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <div className="border-t border-zinc-100" />

          {/* Shipping method */}
          <section>
            <SectionHeader step={3} title="Shipping Method" />
            <div className="flex flex-col gap-3">
              {SHIPPING_OPTIONS.map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center justify-between border px-4 py-4 cursor-pointer transition-colors ${
                    shipping === opt.id
                      ? "border-black bg-zinc-50"
                      : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      value={opt.id}
                      checked={shipping === opt.id}
                      onChange={() => setShipping(opt.id)}
                      className="accent-black"
                    />
                    <div>
                      <p className="text-sm font-medium">{opt.label}</p>
                      <p className="text-xs text-zinc-400">{opt.eta}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {opt.price === 0 ? "Free" : `$${opt.price.toFixed(2)}`}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <div className="border-t border-zinc-100" />

          {/* Payment */}
          <section>
            <SectionHeader step={4} title="Payment" />
            <div className="flex items-center gap-2 mb-4 text-xs text-zinc-400">
              <Lock className="h-3 w-3" />
              <span>All transactions are encrypted and secure.</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="Card number"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(v) => setCardNumber(formatCardNumber(v))}
              />
              <Field
                label="Name on card"
                id="cardName"
                placeholder="Jane Smith"
                value={cardName}
                onChange={setCardName}
              />
              <Field
                label="Expiry date"
                id="expiry"
                placeholder="MM/YY"
                value={expiry}
                onChange={(v) => setExpiry(formatExpiry(v))}
                half
              />
              <Field
                label="Security code (CVV)"
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={(v) => setCvv(v.replace(/\D/g, "").slice(0, 4))}
                half
              />
            </div>
          </section>

          <Button
            className="w-full bg-black text-white py-4 text-sm font-semibold tracking-widest mt-2"
            onClick={() => {}}
          >
            PLACE ORDER · ${total.toFixed(2)}
          </Button>
        </div>

        {/* Right: order summary */}
        <div className="lg:w-96 shrink-0">
          <div className="sticky top-6">
            <h2 className="text-base font-semibold tracking-widest uppercase mb-5">
              Order Summary
            </h2>

            {/* Items */}
            <div className="flex flex-col gap-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 shrink-0 border border-zinc-200 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-100" />
                    )}
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-500 text-white text-[10px] font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium leading-snug">{item.productName}</p>
                      {item.selectedColor && (
                        <p className="text-xs text-zinc-400">{item.selectedColor}</p>
                      )}
                      {item.selectedSize && (
                        <p className="text-xs text-zinc-400">{item.selectedSize}</p>
                      )}
                    </div>
                    <p className="text-sm font-medium whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-200 pt-4 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Shipping</span>
                <span>
                  {selectedShipping.price === 0
                    ? "Free"
                    : `$${selectedShipping.price.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-zinc-200 pt-3 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
