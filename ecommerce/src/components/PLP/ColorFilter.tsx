import React from 'react';
import { Checkbox } from '@/src/components/ui/checkbox';

interface ColorFilterProps {
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const colors = [
  { name: 'Soft Blue', bgColor: 'bg-[#5b6b7b]' },
  { name: 'Rose', bgColor: 'bg-[#7b5b5d]' },
  { name: 'Moss Green', bgColor: 'bg-[#637b5b]' },
  { name: 'Soft Grey', bgColor: 'bg-[#9b9b9b]' },
  { name: 'Powder', bgColor: 'bg-slate-300' },
  { name: 'Navy', bgColor: 'bg-blue-800' },
];

export const ColorFilter: React.FC<ColorFilterProps> = ({
  selectedColors,
  setSelectedColors,
}) => {
  const handleColorChange = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  return (
    <>
      {colors.map((color) => (
        <div key={color.name} className="flex gap-3.5 mt-4 items-center">
          <Checkbox
            id={color.name.toLowerCase().replace(' ', '-')}
            checked={selectedColors.includes(color.name)}
            onCheckedChange={() => handleColorChange(color.name)}
          />
          <div className={`shrink-0 rounded-full ${color.bgColor} h-3.5 w-3.5`} />
          <label
            htmlFor={color.name.toLowerCase().replace(' ', '-')}
            className="cursor-pointer"
          >
            {color.name}
          </label>
        </div>
      ))}
    </>
  );
};
