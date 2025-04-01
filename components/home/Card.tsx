import Image from "next/image";
import React from "react";
import { FaCcPaypal } from "react-icons/fa";
import { SiApplepay, SiGooglepay, SiStripe } from "react-icons/si";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  inStock: boolean;
  paymentMethods: string[];
}

interface CardProps {
  product: Product; 
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="text-black mt-4 max-w-[400px]">
      <Image
        className="w-full h-[150px] sm:h-[280px] object-cover"
        src={product.image} // Use product.image
        alt={product.name}
        width={400} // Adjust width
        height={280} // Adjust height
      />
      <div className="p-2 bg-gray-200">
        <p className="text-sm my-1 text-gray-600 line-clamp-1">{product.name}</p>
        <h2 className="mb-2 font-stretch-90% text-xl line-clamp-1 font-semibold">
          {product.name}
        </h2>
        <div className="flex gap-2 text-base sm:text-lg">
          {product.paymentMethods.includes("paypal") && (
            <FaCcPaypal className="text-blue-400" />
          )}
          {product.paymentMethods.includes("stripe") && (
            <SiStripe className="text-purple-500" />
          )}
          {product.paymentMethods.includes("googlepay") && (
            <SiGooglepay className="text-gray-800" />
          )}
          {product.paymentMethods.includes("applepay") && (
            <SiApplepay className="text-black" />
          )}
        </div>
        <h3 className="font-bold">{product.inStock ? "In stock" : "Out of stock"}</h3>
        <p className="text-lg">
          <span className="font-bold">Price</span>: ${product.price}
        </p>
        <button
          className={`text-white px-7 my-2 py-2 rounded-full ${
            product.inStock ? "bg-orange-500" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? "Buy Now" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

export default Card;
