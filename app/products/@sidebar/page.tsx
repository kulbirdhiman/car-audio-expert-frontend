"use client"
import React, { useState } from "react";
import { X } from "lucide-react"; // Optional, you can replace with a simple × if no icons

const SidebarFilters = () => {
  const [selectedTags, setSelectedTags] = useState(["Spring", "Smart", "Modern"]);
  const [colors, setColors] = useState(["Black", "Blue", "Green"]);
  const [sizes, setSizes] = useState(["10.1", "12.5", "16"]);
  const [price, setPrice] = useState(100);

  const handleTagRemove = (tag:any) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <aside className="w-full max-w-xs border border-gray-200 h-full  p-4 bg-white space-y-6 text-sm">
      {/* Tag Filters */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Filter</h2>
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full"
            >
              {tag}
              <button onClick={() => handleTagRemove(tag)} className="text-gray-600">
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Example Checkboxes */}
      <div className="space-y-2">
        {["Headunit","linux","car moudle","streeing Wheel"].map((i) => (
          <label key={i} className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium text-base">{i}</p>
              {/* <p className="text-xs text-gray-500">Description</p> */}
            </div>
          </label>
        ))}
      </div>

      {/* Price Slider */}
      <div className="space-y-2">
        <label className="font-medium text-lg">Price</label>
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e:any) => setPrice(e.target.value)}
          className="w-full"
        />
        <div className="text-base text-gray-600">${price} / $100</div>
      </div>

      {/* Color Filter */}
      <div className="space-y-1">
        <p className="font-medium text-lg">Color</p>
        {colors.map((color) => (
          <label key={color} className="flex text-base items-center gap-2 capitalize">
            <input type="checkbox" />
            {color}
          </label>
        ))}
      </div>

      {/* Size Filter */}
      <div className="space-y-1">
        <p className="font-medium text-lg">Size</p>
        {sizes.map((size) => (
          <label key={size} className="flex text-base items-center gap-2">
            <input type="checkbox" />
            {size}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default SidebarFilters;
