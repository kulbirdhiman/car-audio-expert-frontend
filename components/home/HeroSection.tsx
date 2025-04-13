import React from 'react';
import ImageSlider from './ImageSlider';
import Image from 'next/image';
import sideImage from '@/public/mian-sideimage.png';

const HeroSection = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-col md:flex-row p-3 gap-4">
      <div className="w-full md:w-[70%]">
        <ImageSlider />
      </div>
      <div className="w-full md:w-[30%] flex md:flex-col gap-4">
        <Image
          src={sideImage}
          alt="this is side image"
          className="w-full h-[100px] md:h-[200px] object-cover "
        />
        <Image
          src={sideImage}
          alt="this is side image"
          className="w-full h-[100px] md:h-[200px] object-cover "
        />
      </div>
    </div>
  );
};

export default HeroSection;
