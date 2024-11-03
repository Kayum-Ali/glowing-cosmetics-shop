import { FaHome } from "react-icons/fa";
import { GrRotateRight } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/ShopPage.css'
import { Pagination } from 'swiper/modules';

const ShopPage = () => {
  return (
    <div className="">
      {/* banner img */}
      <div className="relative w-full">
        <img
          className="w-full h-[120px] lg:h-auto"
          src="https://res.cloudinary.com/dqescabbl/image/upload/v1730630434/bg-breadcrumb_ou5r9k.jpg"
          alt="Shop Banner"
        />
        <div className="absolute top-1/2 left-[10%] xl:left-1/2 -translate-y-1/2 ">
          <h2 className="lg:text-4xl text-2xl font-bold ">Shop</h2>
          {/* breadcumbs */}
          <div className="breadcrumbs  ">
            <ul className="">
              <li className="flex gap-2">
                <FaHome />
                <Link to={`/`}>Home</Link>{" "}
              </li>
              <li>shop</li>
            </ul>
          </div>
        </div>
      </div>

      {/* browser by category  */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 lg:items-center mt-12  lg:flex-row md:flex-row justify-between ">
          <h3 className="lg:text-2xl font-bold ">Browse by Category</h3>
          <h2 className="flex items-center gap-2">
            View all products <GrRotateRight />
          </h2>
        </div>
        {/* slider */}
        <div className="lg:py-10 py-7 md:py-8 ">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                    <img className="w-[150px] bg-[#916A6A] transColor" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730636399/facial-massage_u9qvfu.png" alt="" />
                    <h2 className="text-2xl font-bold">Facial Area</h2>
                      
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                    <img className="w-[150px] bg-[#916A6A] transColor" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730637307/handshake_jpjsq1.png" alt="" />
                    <h2 className="text-2xl font-bold">Hand zone</h2>
                      
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                    <img className="w-[150px] bg-[#916A6A] transColor" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730637376/back_ibqqpj.png" alt="" />
                    <h2 className="text-2xl font-bold">Back area</h2>
                      
                </div>
            </SwiperSlide>
          
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
