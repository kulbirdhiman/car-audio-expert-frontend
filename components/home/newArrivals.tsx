"use client"
import React, { useEffect, useState, useMemo, useRef, Suspense } from "react";
// import dynamic from "next/dynamic";
import { getHotdeals } from "@/store/actions/home";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
// import Link from "next/link";
import Image from "next/image";
// import AudioProductCard from './AudioCard';
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
 
];


const ProductCard = ({
  image,
  title,
  subtitle,
  price,
}: {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}) => {
  return (
    <div className="flex flex-col sm:flex-row border rounded-lg overflow-hidden shadow-sm bg-white w-full max-w-sm sm:max-w-none">
      {/* Image */}
      <div className="w-full sm:w-1/2 h-48 sm:h-auto">
        <Image
          height={300}
          width={300}
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-800">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          <p className="text-lg font-bold text-black mt-3">Price: ${price}</p>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button className="border border-purple-500 text-purple-500 px-4 py-1.5 rounded-full text-sm hover:bg-purple-50">
            Buy now
          </button>
          <button className="bg-purple-700 text-white px-4 py-1.5 rounded-full text-sm hover:bg-purple-800">
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
        console.log(res.data.result, "data ")
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
      {/* Responsive Product Grid */}
      <div className="flex-[1_1_70%] overflow-x-auto sm:overflow-visible">
        <div
          className="
            flex sm:grid 
            sm:grid-cols-2 
            gap-6 
            min-w-max sm:min-w-0
          "
        >
          {products.map((product: any) => (
            <div className="min-w-[250px] sm:min-w-0">
              <ProductCard key={product.id} {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>  
  );
};



export default NewArrivals;
