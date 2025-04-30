"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Accessories = () => {
  const datas = [
    {
    name: "Headunit",
    image: "/headunits.webp",
    slug:"products?category=satnav-stereo"
  },
  {
    name: "audio-equipments",
    image: "/speakers.webp",
    slug:"products?category=audio-equipments"
  },
  {
    name: "sterring wheel",
    image: "/sterring-wheel.webp",
    slug:"products?category=steering-wheel"
  },
  {
    name: "Car Batteries",
    image: "/battery.webp",
    slug:"products?category=car-batteries"

  },
  {
    name: "Frames fascias",
    image: "/fa.webp",
    slug:"products?category=frames-fascias"

  },
  {
    name: "accessories",
    image: "/abc.png",
    slug:"products?category=accessories"
  },

]

  return (
    <div className="my-8 w-11/12 mx-auto border rounded-lg border-gray-300 p-6">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold border-b border-gray-300 text-gray-800 mb-6 pb-2">
        Accessories
      </h1>

      {/* Grid: Always 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        {datas.map(({ name, image, slug }, index)  => (
          <Link  href={`${slug}`}
            key={index}
            className="bg-gray-100 h-[150px] rounded-lg shadow-sm flex items-center gap-4 p-4"
          >
            {/* <Link href={`${slug}`} > */}
            <div className="w-[100px] h-[100px] flex justify-center items-center">
              <Image
                src={image}
                alt={`${name} image`}
                width={80}
                height={80}
                className="object-contain  mix-blend-darken"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-base hidden md:block sm:text-xl font-semibold">{name}</h2>
              <p className="text-xs hidden md:block sm:text-sm text-gray-600">(100) items Available</p>
            </div>
            {/* </Link> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
