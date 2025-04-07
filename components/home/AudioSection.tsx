import React from 'react'
import TabComponent from './TabComponet';
import AudioProductCard from './AudioCard';
const AudioSection = () => {
    const androidProducts = [
        {
          image: '/main.png',
          smallTitle: 'CarPlay Module',
          title: 'CarPlay Module Pro - Wireless',
          subtitle: 'Connect wirelessly with ease', // <- NEW
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
      
    
      const linuxProducts = [
        {
          image: '/main.png',
          smallTitle: 'CarPlay Module',
          title: 'CarPlay Module Pro - Wireless',
          subtitle: 'Connect wirelessly with ease', // <- NEW
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
    
      const carplayModules = [
        {
          image: '/main.png',
          smallTitle: 'CarPlay Module',
          title: 'CarPlay Module Pro - Wireless',
          subtitle: 'Connect wirelessly with ease', // <- NEW
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
          label: "Android stereo's",
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {androidProducts.map((product, idx) => (
                <AudioProductCard key={idx} {...product} />
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
                <AudioProductCard key={idx} {...product} />
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
                <AudioProductCard key={idx} {...product} />
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
}

export default AudioSection