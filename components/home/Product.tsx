import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  const product = {
    slug: "kayhan-amplifier-4000w",
    name: "Kayhan Amplifier 4000 Watt Mono Block",
    wholesale_price: 120,
    images: ["/pexels-albinberlin-919073.jpg"],
  };

  const currentUrl = `https://your-website.com/product/${product.slug}`;

  return (
    <Link
      href={`/product/${product.slug}`}
      prefetch={true}
      className="flex w-[80%] mx-auto justify-center font-serif items-center px-4"
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Product Image */}
        <div className="w-full md:w-1/2 p-5">
          <Image
            priority
            alt={product.name}
            className="w-full -mx-3 min-w-[10rem] max-w-[35rem] h-[20rem] md:h-[30rem] object-contain"
            height={300}
            width={500}
            src={product.images[0]}
          />
        </div>

        {/* Product Details */}
        <div className="font-light text-center md:text-left w-full md:w-1/2 px-4">
          <h1 className="text-lg sm:text-3xl w-[87%] font-semibold">{product.name}</h1>

          <p className="text-lg mt-2 text-gray-600">
            Price: <span className="text-green-600 font-bold">${product.wholesale_price}</span>
          </p>

          {/* Social Share */}
          <div className="flex items-center justify-center md:justify-start space-x-3 mt-4 text-gray-700">
            <span>Share On:</span>
            <Link href={`https://api.whatsapp.com/send?text=Check%20out%20this%20product:%20${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-green-500 cursor-pointer" />
            </Link>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
            </Link>
            <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20out%20this%20product!`} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-2xl hover:text-pink-500 cursor-pointer" />
            </Link>
          </div>

          {/* Buy Now Button */}
          <div className="flex md:flex-row flex-col justify-center md:justify-start gap-4 mt-4">
            <button className="bg-blue-900 shadow-md hover:bg-green-700 transition text-white text-center flex justify-center px-6 md:py-2 rounded-lg p-2 items-center">
              <BsCart4 className="text-lg mr-2" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductSection;
