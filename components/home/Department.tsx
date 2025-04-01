import React from "react";
import TabComponent from "./TabComponet";
import ListCard from "./ListCard";

const Department = () => {
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
    id: 4, // Unique ID
    name: "Car Stereo with SatNav for BMW 8",
    image: "/1740980989367_15.webp",
    price: 2000,
    inStock: true,
    paymentMethods: ["paypal", "stripe", "googlepay", "applepay"],
  },
  {
    id: 5, // Unique ID
    name: "Android Car Stereo for Toyota",
    image: "/1740980989367_15.webp",
    price: 1500,
    inStock: false,
    paymentMethods: ["stripe", "googlepay"],
  },
  {
    id: 6, // Unique ID
    name: "Touchscreen Car Stereo for Honda",
    image: "/1740980989367_15.webp",
    price: 1800,
    inStock: true,
    paymentMethods: ["paypal", "applepay"],
  },
  {
    id: 7, // Unique ID
    name: "Android Car Stereo for Toyota",
    image: "/1740980989367_15.webp",
    price: 1500,
    inStock: false,
    paymentMethods: ["stripe", "googlepay"],
  },
  {
    id: 8, // Unique ID
    name: "Touchscreen Car Stereo for Honda",
    image: "/1740980989367_15.webp",
    price: 1800,
    inStock: true,
    paymentMethods: ["paypal", "applepay"],
  },
];

  console.log(data,"this is data")
  const tabDataa = [
    {
      id: 2,
      label: "Android Stereo's",
      content: <ListCard products={data}  />,
    },
    {
      id: 1,
      label: "Linux Headunit's",
      content: <ListCard products={data}  />,
    },
    {
      label: "Carplay Module's",
      id: 3,
      content: <ListCard products={data}  />,
    },
  ];

  return (
    <div>
      <TabComponent title="" tabs={tabDataa} buttonClass="text-black rounded-full bg-gray-400 py-2 px-3 hover:text-blue-700 text-xl" TabClass="flex gap-2"/>
    </div>
  );
};

export default Department;
