import React from "react";
import AccessoriesCard from "./AccessoriesCard";

const Accessories = () => {
  const data = ["Speaker","Camra ","wiring ","headrest dvd","hello","audio "]
  return (
    <div className="my-8  border rounded-lg border-gray-300 p-8">
      {/* Section Title */}
      <h1 className="text-4xl p-2 font-semibold border-b border-gray-300  text-gray-800 mb-6">
        Accessories
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
        {data.map((name, index) => (
          <AccessoriesCard data={name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
