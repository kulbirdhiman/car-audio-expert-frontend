import React from 'react';
import Image from 'next/image'; 
import carBg from '@/public/car-banner.png'; 
const SteeringMatchFinder = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src={carBg}
        alt="Steering Match Finder"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-between py-7 text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-serif mb-4">
          Steering Wheel Match Finder
        </h1>
       <div>
       <p className="text-lg md:text-xl mb-6 max-w-xl">
          Let Your Steering Wheel Lead the Way! Find What Fits
        </p>
        <button className="bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
          Explore more
        </button>
       </div>
      </div>
    </div>
  );
};

export default SteeringMatchFinder;
