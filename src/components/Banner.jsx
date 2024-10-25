// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg1 w-full h-full bg-cover relative">
            <div className="absolute top-1/2 left-10 -translate-y-1/2 space-y-5">
              <h2 className="text-2xl text-gray-800 font-medium">
                ESSENTIAL ITEMS
              </h2>
              <div>
                <h1 className="text-6xl text-gray-800 font-semibold">
                  Beauty Inspired{" "}
                </h1>
                <h1 className="text-6xl mt-2 text-gray-800 font-semibold">
                  by Real Life{" "}
                </h1>
              </div>
              <p className=" text-xl text-gray-800 leading-7 opacity-80">
                Made using clean, non-toxic ingredients, our products <br /> are
                designed for everyone.
              </p>
              <button className="px-10 py-3 text-white bg-black  font-bold rounded-md hover:bg-[#4E7661]">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
