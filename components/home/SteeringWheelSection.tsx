"use client";
import React, { useState } from "react";
import Link from "next/link";
import SteeringWheelSlider from "./SteeringWheelSlider";

const SteeringWheelSection = () => {
  const [makes, setMakes] = useState<any[]>([
    { id: 1, name: "Toyota", slug: "toyota" },
    { id: 2, name: "Honda", slug: "honda" },
  ]);
  const [models, setModels] = useState<any[]>([]);
  const [selectedMake, setSelectedMake] = useState<any>(null);
  const [selectedModel, setSelectedModel] = useState<any>(null);

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const make = makes.find((m) => m.id == e.target.value);
    setSelectedMake(make);
    setModels([
      { id: 1, name: "Model A", slug: "model-a" },
      { id: 2, name: "Model B", slug: "model-b" },
    ]); // Mocked data
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = models.find((m) => m.id == e.target.value);
    setSelectedModel(model);
  };

  return (
    <section
      className="relative text-gray-900 py-16 px-6 md:px-12 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/pexels-albinberlin-919073.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10">
        {/* Left Side - Image Slider */}
        <SteeringWheelSlider />

        {/* Right Side - Details */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Let's Find Steering Wheel
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Experience superior grip and comfort with our high-quality steering
            wheels. Designed for performance and style, they enhance driving
            precision and control.
          </p>

          {/* Dropdown Selectors (Horizontal Layout) */}
          <div className="flex flex-wrap gap-4">
            {/* Make Selector */}
            <div>
              <label className="text-white font-medium text-sm block w-[200px]">
                Select Make:
              </label>
              <select
                className="p-3 bg-white w-full text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                value={selectedMake?.id || ""}
                onChange={handleMakeChange}
              >
                <option value="">Choose a Make</option>
                {makes.map((make) => (
                  <option key={make.id} value={make.id}>
                    {make.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Model Selector */}
          
              <div>
                <label className="text-white font-medium text-sm block w-[200px]">
                  Select Model:
                </label>
                <select
                  className="p-3 bg-white w-full text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  value={selectedModel?.id || ""}
                  onChange={handleModelChange}
                  disabled={models.length === 0}
                >
                  <option value="">Choose a Model</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
          
          </div>

          {/* Explore Button */}
          <Link
            href={
              selectedModel
                ? `/products/${selectedMake.slug}/${selectedModel.slug}?category=steering-wheel`
                : "#"
            }
            className={`px-6 mx-[100px] py-3 mt-4 rounded-lg shadow-md text-lg font-semibold block w-[200px] text-center transition-all ${
              selectedModel
                ? "bg-blue-500 hover:bg-blue-600 text-white scale-105"
                : "bg-gray-300 cursor-not-allowed text-gray-600"
            }`}
          >
            Explore {selectedModel?.name || "More"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SteeringWheelSection;
