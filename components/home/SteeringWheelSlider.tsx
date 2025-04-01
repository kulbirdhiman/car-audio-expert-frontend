"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const SteeringWheelSlider = () => {
  const images = [
    "/steering_wheel_PNG102831.png",
    "/steering_wheel_PNG102831.png",
    "/steering_wheel_PNG102831.png",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        // navigation
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              height={500}
              width={600}
              src={img}
              alt={`Steering Wheel ${index + 1}`}
              className="w-full mix-blend-color-burn h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SteeringWheelSlider;
