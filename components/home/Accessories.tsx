import React from "react";
import Image from "next/image";
import CardImage from "@/public/abc.png";

const Accessories = () => {
  const data = ["Speaker", "Camera", "Wiring", "Headrest DVD", "Hello", "Audio"];

  return (
    <div className="my-8 w-11/12 mx-auto border rounded-lg border-gray-300 p-6">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold border-b border-gray-300 text-gray-800 mb-6 pb-2">
        Accessories
      </h1>

      {/* Grid: Always 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        {data.map((name, index) => (
          <div
            key={index}
            className="bg-gray-100 h-[150px] rounded-lg shadow-sm flex items-center gap-4 p-4"
          >
            <div className="w-[100px] h-[100px] flex justify-center items-center">
              <Image
                src={CardImage}
                alt={`${name} image`}
                width={80}
                height={80}
                className="object-contain mix-blend-darken"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-base sm:text-xl font-semibold">{name}</h2>
              <p className="text-xs sm:text-sm text-gray-600">(2) items Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
