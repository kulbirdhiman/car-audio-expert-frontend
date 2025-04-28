import React from 'react';
import TabComponent from './TabComponet';
import AudioProductCard from './AudioCard';

const AudioSection = () => {
  const products = [
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Pro - Wireless',
      subtitle: 'Connect wirelessly with ease',
      price: 599,
      stock: 'Out of Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Mini - Plug & Play',
      subtitle: 'Easy setup for all cars',
      price: 499,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Standard - Wired',
      subtitle: 'Stable wired connection',
      price: 399,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Elite - For BMW Series',
      subtitle: 'Specially made for BMW models',
      price: 699,
      stock: 'In Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Lite - Compact Fit',
      subtitle: 'Fits in tight spaces easily',
      price: 449,
      stock: 'Limited Stock',
    },
    {
      image: '/main.png',
      smallTitle: 'CarPlay Module',
      title: 'CarPlay Module Premium - Fast Boot',
      subtitle: 'Boots up in seconds',
      price: 749,
      stock: 'In Stock',
    },
  ];

  const tabDataa = [
    {
      id: 1,
      label: "Speaker's",
      content: (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 overflow-x-auto sm:overflow-x-visible flex sm:flex-none space-x-4 sm:space-x-0 px-1">
          {products.map((product, idx) => (
            <div key={idx} className="min-w-[80%] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
              <AudioProductCard  {...product} />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      label: "SubWoofer's",
      content: (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 overflow-x-auto sm:overflow-x-visible flex sm:flex-none space-x-4 sm:space-x-0 px-1">
          {products.map((product, idx) => (
            <div key={idx} className="min-w-[80%] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
              <AudioProductCard  {...product} />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      label: "Amplifier's",
      content: (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 overflow-x-auto sm:overflow-x-visible flex sm:flex-none space-x-4 sm:space-x-0 px-1">
          {products.map((product, idx) => (
            <div key={idx} className="min-w-[80%] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
              <AudioProductCard  {...product} />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 4,
      label: "Equalizer's",
      content: (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6 overflow-x-auto sm:overflow-x-visible flex sm:flex-none space-x-4 sm:space-x-0 px-1">
          {products.map((product, idx) => (
            <div key={idx}  className="min-w-[80%] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
              <AudioProductCard {...product} />
            </div>
          ))}
        </div>
      ),
    },
  ];
  

  return (
    <div className="w-[96%] mx-auto p-6">
      <TabComponent
        title=""
        tabs={tabDataa}
        TabClass=""
        TabComponentClass="flex justify-between mb-4"
      />
    </div>
  );
};

export default AudioSection;
