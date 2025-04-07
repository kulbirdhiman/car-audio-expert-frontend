import React from 'react';
import TabComponent from './TabComponet';
import ProductCard from './Card';

const WhatWeOffer = () => {
  const androidProducts = [
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Pro - Wireless',
      price: 599,
      stock: 'Out of Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Mini - Plug & Play',
      price: 499,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Standard - Wired',
      price: 399,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Elite - For BMW Series',
      price: 699,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Lite - Compact Fit',
      price: 449,
      stock: 'Limited Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Premium - Fast Boot',
      price: 749,
      stock: 'In Stock',
    },
    {
        image: '/main.png',
        smallTitle: 'CarPlay Module',
        title: 'CarPlay Module Lite - Compact Fit',
        price: 449,
        stock: 'Limited Stock',
      },
      {
        image: '/main.png',
        smallTitle: 'CarPlay Module',
        title: 'CarPlay Module Premium - Fast Boot',
        price: 749,
        stock: 'In Stock',
      },
  ];

  const linuxProducts = [
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Pro - Wireless',
      price: 599,
      stock: 'Out of Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Mini - Plug & Play',
      price: 499,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Standard - Wired',
      price: 399,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Elite - For BMW Series',
      price: 699,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Lite - Compact Fit',
      price: 449,
      stock: 'Limited Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Premium - Fast Boot',
      price: 749,
      stock: 'In Stock',
    },
    {
        image: '/main.png',
        smallTitle: 'CarPlay Module',
        title: 'CarPlay Module Lite - Compact Fit',
        price: 449,
        stock: 'Limited Stock',
      },
      {
        image: '/main.png',
        smallTitle: 'CarPlay Module',
        title: 'CarPlay Module Premium - Fast Boot',
        price: 749,
        stock: 'In Stock',
      },
  ];

  const carplayModules = [
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Pro - Wireless',
      price: 599,
      stock: 'Out of Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Mini - Plug & Play',
      price: 499,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Standard - Wired',
      price: 399,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Elite - For BMW Series',
      price: 699,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Lite - Compact Fit',
      price: 449,
      stock: 'Limited Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Premium - Fast Boot',
      price: 749,
      stock: 'In Stock',
    },
    {
        image: '/main.png',
        smallTitle: 'CarPlay Module',
        title: 'CarPlay Module Lite - Compact Fit',
        price: 449,
        stock: 'Limited Stock',
      },
      {
        image: '/main.png',
        smallTitle: 'CarPlay Module',
        title: 'CarPlay Module Premium - Fast Boot',
        price: 749,
        stock: 'In Stock',
      },
  ];
  

  const tabDataa = [
    {
      id: 1,
      label: "Android stereo's",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {androidProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ),
    },
    {
      id: 2,
      label: "Linux headunit's",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {linuxProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ),
    },
    {
      id: 3,
      label: "Carplay Module's",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {carplayModules.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-[96%] mx-auto p-6">
      <TabComponent
        title="What We Offer"
        tabs={tabDataa}
        TabClass="float-left flex gap-4"
        TabComponentClass="flex justify-between mb-2"
      />
    </div>
  );
};

export default WhatWeOffer;
