// "use client";
import React from "react";
import { FaTshirt, FaLaptop, FaHome } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg w-72 min-h-screen border-r border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Filters</h2>
      
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-600">Category</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
            <FaLaptop className="text-blue-500" />
            <span className="text-gray-700">Electronics</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
            <FaTshirt className="text-red-500" />
            <span className="text-gray-700">Fashion</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
            <FaHome className="text-green-500" />
            <span className="text-gray-700">Home</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
