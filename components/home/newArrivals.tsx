"use client"
import React, { useEffect, useState, useMemo, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { getHotdeals } from "@/store/actions/home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Link from "next/link";
import Image from "next/image";
import AudioProductCard from './AudioCard';
const products = [
  {
    image: '/car-banner.png',
    title: 'Car Stereo with SatNav For Mercedes Vito',
    subtitle: '',
    price: 877,
  },
  {
    image: '/car-banner.png',
    title: 'Car Stereo with SatNav For Mercedes Vito',
    subtitle: '',
    price: 877,
  },
  {
    image: '/car-banner.png',
    title: 'Car Stereo with SatNav For Mercedes Vito',
    subtitle: '',
    price: 877,
  },
  {
    image: '/car-banner.png',
    title: 'Car Stereo with SatNav For Mercedes Vito',
    subtitle: '',
    price: 877,
  },
  // {
  //   image: '/speaker.jpg',
  //   title: 'Composite Cone Coaxial Car Speaker 6 X 9 inch',
  //   subtitle: 'Coaxial Car Speaker 6 X 9 inch',
  //   price: 800,
  // },
];

const ProductCard = ({ image, title, subtitle, price }:{ image:string, title:string, subtitle:string, price:number }) => {
  return (
    <div className="flex border rounded-md overflow-hidden shadow-sm bg-white">
      <div className="w-1/2">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-sm font-medium text-gray-700">{title}</h2>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
          <p className="text-lg font-semibold text-black mt-2">Price: ${price}</p>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="border border-purple-500 text-purple-500 px-3 py-1 rounded-full text-sm hover:bg-purple-50">
            Buy now
          </button>
          <button className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
   const list = async () => {
      try {
        const res = await dispatch(getHotdeals({})).unwrap();
        if (res.success) {
          setData(res.data.result);
          console.log(res.data.result,"data ")
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      list();
    }, []);
  return (
    <div className="px-4 md:px-10 py-8">
      <h2 className="text-2xl font-serif font-bold mb-6">NEW ARRIVALS</h2>

      <div className="flex flex-wrap gap-6">
        {/* Product Grid */}
      <div className="flex-[1_1_70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
  {products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))}
</div>


        {/* Audio Product Card */}
        <div className="flex-[1_1_25%] mt-2 sm:mt-6">
          <AudioProductCard
            image="/main.png"
            title="CarPlay Module Pro - Wireless"
            subtitle="Connect wirelessly with ease"
            price={599}
          />
        </div>
      </div>
    </div>
  );
};



export default NewArrivals;
