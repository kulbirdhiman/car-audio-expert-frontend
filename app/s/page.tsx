"use client"
import { useState } from 'react';
import Image from 'next/image';

const product = {
  name: 'Car Stereo with SatNav For Mercedes Vito 2014-2020 | V6 | 9 Inch',
  price: 1465.0,
  images: [
    '/images/product1.jpg',
    '/images/product2.jpg',
    '/images/product3.jpg',
    '/images/product4.jpg',
  ],
  options: ['Activate Factory Amp', 'Activate Subwoofer'],
  addons: [
    { name: 'Kayhan 360° Camera Kit (V6)', price: 199 },
    { name: 'Regular HD DashCam', price: 95 },
    { name: 'HD Reversing Camera', price: 75 },
  ],
};

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedOption, setSelectedOption] = useState('');
  const [addons, setAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleAddon = (name) => {
    setAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  return (
    <section className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-10">
        {/* Left Side: Images */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="relative aspect-square w-full border rounded-xl overflow-hidden">
            <Image
              src={activeImage}
              alt="product"
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex gap-3 justify-center">
            {product.images.map((img, i) => (
              <div
                key={i}
                className={`w-20 h-20 border-2 rounded-lg overflow-hidden cursor-pointer ${activeImage === img ? 'border-blue-600' : 'border-gray-200'}`}
                onClick={() => setActiveImage(img)}
              >
                <Image src={img} alt={`thumb-${i}`} width={80} height={80} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">{product.name}</h2>
          <p className="text-2xl font-semibold text-blue-600">${product.price.toFixed(2)}</p>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Choose Option</label>
            <select
              className="w-full border px-4 py-2 rounded-md focus:ring focus:ring-blue-300"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Select option to activate factory Amp or Sub</option>
              {product.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-2">Add-Ons</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.addons.map((addon, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 p-4 border rounded-lg hover:shadow-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={addons.includes(addon.name)}
                    onChange={() => toggleAddon(addon.name)}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{addon.name}</p>
                    <p className="text-green-600 text-sm font-semibold">+${addon.price}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="font-medium text-gray-700">Quantity</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >-
              </button>
              <span className="px-5 text-lg">{quantity}</span>
              <button
                className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity((q) => q + 1)}
              >+
              </button>
            </div>
          </div>

          <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
