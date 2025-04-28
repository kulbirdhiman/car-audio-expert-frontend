"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/main.png",
  //   'https://source.unsplash.com/random/800x400?city',
  //   'https://source.unsplash.com/random/800x400?technology',
  //   'https://source.unsplash.com/random/800x400?space',
];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image
              height={1000}
              width={1000}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[420px] object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
