import React from 'react';
import { Checkbox } from '@/src/components/ui/checkbox';

interface ColorFilterProps {
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  availableColors?: string[];
}

const colors = [
  { name: 'red',   hex: '#cc2222' },
  { name: 'blue',  hex: '#1e40af' },
  { name: 'white', hex: '#e5e7eb', border: true },
  { name: 'black', hex: '#111111' },
  { name: 'gray',  hex: '#9b9b9b' },
  { name: 'pink',  hex: '#e879a0' },
  { name: 'green', hex: '#637b5b' },
];

export const ColorFilter: React.FC<ColorFilterProps> = ({
  selectedColors,
  setSelectedColors,
  availableColors,
}) => {
  const visibleColors = availableColors
    ? colors.filter(c => availableColors.includes(c.name))
    : colors;
  const handleColorChange = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  return (
    <>
      {visibleColors.map((color) => (
        <div key={color.name} className="flex gap-3.5 mt-4 items-center">
          <Checkbox
            id={color.name}
            checked={selectedColors.includes(color.name)}
            onCheckedChange={() => handleColorChange(color.name)}
          />
          <div
            className={`shrink-0 rounded-full h-3.5 w-3.5 ${color.border ? 'border border-zinc-300' : ''}`}
            style={{ backgroundColor: color.hex }}
          />
          <label htmlFor={color.name} className="cursor-pointer capitalize">
            {color.name}
          </label>
        </div>
      ))}
    </>
  );
};
