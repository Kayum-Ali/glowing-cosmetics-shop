import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { IoEyeOutline, IoStarOutline } from "react-icons/io5";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
//   console.log(products[0].img)
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/featured-products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      setLoading(false);
    
  }, []);
  if (loading) {
    return <div className="loading loading-bars loading-lg text-green-500 mx-auto flex justify-between my-5"></div>
  }
  return (
    <div className="py-16 ">
      <div className="text-center space-y-3 ">
        <h2 className="text-4xl font-bold">Our Featured Products</h2>
        <p className="font-medium">Get the skin you want to feel</p>
      </div>
    

      <div className="container mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
            {
                products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-[440px] ">
                        <div className={`relative`}>
                          
                           <div  className="absolute hover:z-50  hover:cursor-pointer w-full h-full left-0 duration-1000 ease-in-out" >
                               <img className=" " src={product.hoverImg} alt="" />
                               {/* icon and tooltip */}
                               <div className="absolute top-36 right-8 space-y-3">
                                   <div data-tip='View Products' className="bg-white hover:bg-gray-800  hover:text-white rounded-[60px] flex items-center w-[50px] h-[50px] tooltip hover:tooltip-open tooltip-left shadow-lg">
                                      <PiShoppingBagOpenBold className="m-3 text-2xl"/>
                                  </div>
                                   <div data-tip='Quick View' className="bg-white hover:bg-gray-800  hover:text-white rounded-[60px] flex items-center w-[50px] h-[50px] tooltip hover:tooltip-open tooltip-left shadow-lg">
                                   <IoEyeOutline className="m-3 text-2xl"/>
                                  </div>
                                   <div data-tip='Add Wishlist' className="bg-white hover:bg-gray-800  hover:text-white rounded-[60px] flex items-center w-[50px] h-[50px] tooltip hover:tooltip-open tooltip-left shadow-lg">
                                   <IoStarOutline className="m-3 text-2xl"/>
                                  </div>
                               </div>
                           </div>
                           <div className="absolute hover:w-0 w-full z-10  hover:-z-0  h-full duration-1000  ease-in-out">
                              <img className=""  src={product.img} alt="" />
                              
                           </div>
                             
                        </div>

                    </div>
                  </SwiperSlide>
                ))
            }
         
         
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
