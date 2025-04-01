"use client"; // If using Next.js App Router

import React from "react";
import Card from "@/components/home/Card";

const Page = () => {
  const data = [
    {
      id: 1,
      name: "Car Stereo with SatNav for BMW 8",
      image: "/1740980989367_15.webp",
      price: 2000,
      inStock: true,
      paymentMethods: ["paypal", "stripe", "googlepay", "applepay"],
    },
    {
      id: 2,
      name: "Android Car Stereo for Toyota",
      image: "/1740980989367_15.webp",
      price: 1500,
      inStock: false,
      paymentMethods: ["stripe", "googlepay"],
    },
    {
      id: 3,
      name: "Touchscreen Car Stereo for Honda",
      image: "/1740980989367_15.webp",
      price: 1800,
      inStock: true,
      paymentMethods: ["paypal", "applepay"],
    },
    {
      id: 4,
      name: "Car Stereo with SatNav for BMW 8",
      image: "/1740980989367_15.webp",
      price: 2000,
      inStock: true,
      paymentMethods: ["paypal", "stripe", "googlepay", "applepay"],
    },
    {
      id: 5,
      name: "Android Car Stereo for Toyota",
      image: "/1740980989367_15.webp",
      price: 1500,
      inStock: false,
      paymentMethods: ["stripe", "googlepay"],
    },
    {
      id: 6,
      name: "Touchscreen Car Stereo for Honda",
      image: "/1740980989367_15.webp",
      price: 1800,
      inStock: true,
      paymentMethods: ["paypal", "applepay"],
    },
    {
      id: 7,
      name: "Android Car Stereo for Toyota",
      image: "/1740980989367_15.webp",
      price: 1500,
      inStock: false,
      paymentMethods: ["stripe", "googlepay"],
    },
    {
      id: 8,
      name: "Touchscreen Car Stereo for Honda",
      image: "/1740980989367_15.webp",
      price: 1800,
      inStock: true,
      paymentMethods: ["paypal", "applepay"],
    },
  ];

  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Page;
