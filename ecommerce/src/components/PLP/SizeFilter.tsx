import React from 'react';

interface SizeFilterProps {
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  availableSizes?: string[];
}

export const SizeFilter: React.FC<SizeFilterProps> = ({
  selectedSizes,
  setSelectedSizes,
  availableSizes = [],
}) => {
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  if (availableSizes.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {availableSizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeChange(size)}
          className={`px-3 py-1.5 text-xs border rounded cursor-pointer transition-colors ${
            selectedSizes.includes(size)
              ? 'bg-black text-white border-black'
              : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-500'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
