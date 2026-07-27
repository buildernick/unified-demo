"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export type LuluDragSwatchItem = {
  label: string;
  image: string;
};

type LuluDragSwatchStackProps = {
  items: LuluDragSwatchItem[];
};

const FLING_THRESHOLD = 90;

export function LuluDragSwatchStack({ items }: LuluDragSwatchStackProps) {
  const [order, setOrder] = useState(() => items.map((_, index) => index));
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const startXRef = useRef(0);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (isSettling) return;
    startXRef.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragX(event.clientX - startXRef.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragX) > FLING_THRESHOLD) {
      const direction = dragX > 0 ? 1 : -1;
      setIsSettling(true);
      setDragX(direction * 600);
      window.setTimeout(() => {
        setOrder((prev) => [...prev.slice(1), prev[0]]);
        setDragX(0);
        setIsSettling(false);
      }, 220);
    } else {
      setIsSettling(true);
      setDragX(0);
      window.setTimeout(() => setIsSettling(false), 220);
    }
  };

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[360px] select-none md:h-[640px]">
      {order.map((itemIndex, stackPosition) => {
        const item = items[itemIndex];
        const isFront = stackPosition === 0;
        const peekOffset = stackPosition * 14;
        const scale = 1 - stackPosition * 0.05;
        const rotation = isFront ? dragX / 20 : (stackPosition % 2 === 0 ? -3 : 3);
        const translateX = isFront ? dragX : peekOffset;

        return (
          <div
            key={itemIndex}
            onPointerDown={isFront ? handlePointerDown : undefined}
            onPointerMove={isFront ? handlePointerMove : undefined}
            onPointerUp={isFront ? handlePointerUp : undefined}
            onPointerCancel={isFront ? handlePointerUp : undefined}
            className="absolute inset-0 overflow-hidden bg-lulu-sand"
            style={{
              zIndex: items.length - stackPosition,
              transform: `translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
              transition:
                isFront && isDragging ? "none" : "transform 220ms ease-out",
              cursor: isFront ? (isDragging ? "grabbing" : "grab") : "default",
              touchAction: isFront ? "pan-y" : undefined,
            }}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes="(min-width: 768px) 360px, 80vw"
              className="pointer-events-none object-cover"
              priority={stackPosition === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-lulu-ink/60 to-transparent p-6">
              <p className="font-lulu-display text-lulu-body-lg text-lulu-bone">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
