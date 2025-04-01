"use client";
import Image from "next/image";

const PhoneAccessories = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-80">
        <Image
          src="/pexels-albinberlin-919073.jpg"
          alt="Phone Accessories"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Phone Accessories</h2>
        <ul className="space-y-2">
          <li className="font-bold">Glass screen protector</li>
          <li className="underline">Phone charger</li>
          <li className="font-semibold">Power bank</li>
          <li className="underline">Universal Item Finder</li>
        </ul>
      </div>
    </div>
  );
};

export default PhoneAccessories;
