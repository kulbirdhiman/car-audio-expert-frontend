import React from 'react';
import Image from 'next/image';
const AudioProductCard = ({ image, title, subtitle, price }: {
  image: string;
  title: string;
  subtitle: string;
  price: number;
}) => {
  return (
    <div className="max-w-xs border h-[340px]  shadow-sm ">
      <Image
      height={500}
      width={500}
        src={image}
        alt={title}
        className="w-full h-40  "
      />
     <div className='p-3' >
        <h2 className="font-semibold line-clamp-2 text-base text-gray-800 ">
          {title}
        </h2>
     <div className="text-xs text-gray-500">{subtitle}</div>
        <div className="text-base font-semibold text-black mb-1 my-2">Price
            :${price}</div>
        <div className="text-sm text-pink-600 font-semibold mb-2">in Stock</div>
      <div className="flex gap-2">
        <button className="px-4 py-1 border rounded-full text-sm border-purple-600 text-purple-600 hover:bg-purple-50 transition">
          Buy now
        </button>
        <button className="px-4 py-1 rounded-full text-sm bg-purple-700 text-white hover:bg-purple-800 transition">
          Add to Cart
        </button>
      </div>
     </div>
    </div>
  );
};

export default AudioProductCard;
