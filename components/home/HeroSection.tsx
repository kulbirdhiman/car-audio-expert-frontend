import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-[300px] sm:h-[360px] md:h-[400px] lg:h-[500px] w-full mx-auto rounded-4xl mt-7  bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/pexels-albinberlin-919073.jpg')" }} // Replace with your image path
    >
      <h1 className="text-white text-lg sm:text-xl md:3xl lg:text-3xl xl:text-6xl font-stretch-95% font-bol">WELCOME TO car Audio Expert</h1>
    </div>
  );
};

export default HeroSection;
