"use client";

import React from "react";
import ProductCard from "@/components/home/Card"; 

const Page = () => {
  const data = [
    {
      id: 1,
      image: "/main.png",
      smallTitle: "BMW Series 8",
      title: "Car Stereo with SatNav",
      price: 2000,
      stock: "In Stock",
    },
    {
      id: 2,
      image: "/main.png",
      smallTitle: "Toyota",
      title: "Android Car Stereo",
      price: 1500,
      stock: "Out of Stock",
    },
    {
      id: 3,
      image: "/main.png",
      smallTitle: "Honda",
      title: "Touchscreen Car Stereo",
      price: 1800,
      stock: "In Stock",
    },
    {
      id: 4,
      image: "/main.png",
      smallTitle: "BMW Series 8",
      title: "Car Stereo with SatNav",
      price: 2000,
      stock: "In Stock",
    },
    {
      id: 5,
      image: "/main.png",
      smallTitle: "Toyota",
      title: "Android Car Stereo",
      price: 1500,
      stock: "Out of Stock",
    },
    {
      id: 6,
      image: "/main.png",
      smallTitle: "Honda",
      title: "Touchscreen Car Stereo",
      price: 1800,
      stock: "In Stock",
    },
    {
      id: 7,
      image: "/main.png",
      smallTitle: "Toyota",
      title: "Android Car Stereo",
      price: 1500,
      stock: "Out of Stock",
    },
    {
      id: 8,
      image: "/main.png",
      smallTitle: "Honda",
      title: "Touchscreen Car Stereo",
      price: 1800,
      stock: "In Stock",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;
