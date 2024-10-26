// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

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
        className="mySwiper lg:w-full bg-center md:w-auto md:h-[500px] lg:h-[700px] h-[300px] w-auto"
      >
        <SwiperSlide>
          <div className="bg1 w-full h-full bg-cover bg-center relative">
            <div className="absolute top-1/2 lg:left-10 left-5 -translate-y-1/2 lg:space-y-5 space-y-2">
              <h2 className="lg:text-2xl text-xl text-gray-800 font-medium">
              Your Skin, Our Passion
              </h2>
              <div>
                <h1 className="lg:text-6xl text-4xl text-gray-800 lg:font-semibold font-bold">
                  Beauty Inspired{" "}
                </h1>
                <h1 className="lg:text-6xl text-4xl mt-2 text-gray-800 font-semibold">
                  by Real Life{" "}
                </h1>
              </div>
              <p className="w-2/3 lg:w-auto md:w-auto md:text-xl lg:text-xl text-gray-800 lg:leading-7 md:leading-7 opacity-80">
                Made using clean, non-toxic ingredients, our products <br className="hidden lg:block md:block" /> are
                designed for everyone.
              </p>
              {/* <button className="lg:px-10 md:px-8 px-6 py-3 text-white bg-[#4E7661] lg:font-bold  md:font-bold font-medium rounded-md hover:bg-universe_primary hover:text-[#4E7661]">Shop Now</button> */}
              <button className="lg:px-10 md:px-8 px-6 py-3 text-[#4E7661] bg-gradient-to-r from-white to-[#aed6f1] lg:font-bold  md:font-bold font-medium rounded-md hover:bg-universe_primary hover:text-[#4E7661] hover:bg-gradient-to-r hover:from-universe_secendary hover:to-white ">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg2 w-full h-full bg-cover bg-center relative">
            <div className="absolute top-1/2 lg:left-10 left-5 -translate-y-1/2 lg:space-y-5 space-y-2">
              <h2 className="lg:text-2xl text-xl text-gray-800 font-medium">
              Glow Brighter, Shine Longer
              </h2>
              <div>
                <h1 className="lg:text-6xl text-4xl text-gray-800 lg:font-semibold font-bold">
                  Get the Perfectly{" "}
                </h1>
                <h1 className="lg:text-6xl text-4xl mt-2 text-gray-800 font-semibold">
                  Hydrated Skin{" "}
                </h1>
              </div>
              <p className=" w-2/3 lg:w-auto md:w-auto lg:text-xl text-gray-800 lg:leading-7 opacity-80">
                Made using clean, non-toxic ingredients, our products <br className="hidden lg:block md:block" /> are
                designed for everyone.
              </p>
              <button className="lg:px-10 md:px-8 px-6 py-3 text-white bg-black  lg:font-bold  md:font-bold font-medium rounded-md hover:bg-[#4E7661]">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="bg3 w-full h-full bg-cover bg-center relative">
            <div className="absolute top-1/2 lg:left-10 left-5 -translate-y-1/2 lg:space-y-5 space-y-2">
              <h2 className="lg:text-2xl text-xl text-gray-800 font-medium">
                GET THE GLOW
              </h2>
              <div>
                <h1 className="lg:text-6xl text-4xl text-gray-800 lg:font-semibold font-bold">
                  Be Your Kid{" "}
                </h1>
                <h1 className="lg:text-6xl text-4xl mt-2 text-gray-800 font-semibold">
                  of Beauty{" "}
                </h1>
              </div>
              <p className=" w-2/3 lg:w-auto md:w-auto lg:text-xl text-gray-800 lg:leading-7 opacity-80">
                Made using clean, non-toxic ingredients, our products <br className="hidden lg:block md:block" /> are
                designed for everyone.
              </p>
              <button className="lg:px-10 md:px-8 px-6 py-3 text-white bg-black  lg:font-bold  md:font-bold font-medium rounded-md hover:bg-[#4E7661]">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
    
      
      </Swiper>
    </>
  );
}
