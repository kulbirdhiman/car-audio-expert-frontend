"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
      {/* Background Image */}
      <Image
        src="/pexels-albinberlin-919073.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-evenly text-white text-center px-4">
        <div>
        <h1 className="text-3xl sm:text-4xl ">Computer</h1>

{/* Navigation Links */}
<div className="flex gap-4 mt-2 text-lg sm:text-xl">
  <a href="#" className="hover:underline">Cables</a>
  <a href="#" className="hover:underline">Cables</a>
  <a href="#" className="hover:underline">Cables</a>
</div>
        </div>

        {/* Product Description */}
       <div>
       <p className="mt-4 text-2xl max-w-lg">
          Bluetooth Mouse plastic body PC+ABS+Aluminum Alloy with 500mAh Battery
        </p>

        {/* Button */}
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
          Buy now
        </button>
       </div>
      </div>
    </div>
  );
};

export default HeroSection;
