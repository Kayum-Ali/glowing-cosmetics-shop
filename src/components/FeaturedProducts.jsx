import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { IoEyeOutline, IoStarOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(products)
  useEffect(() => {
    setLoading(true);
    fetch("https://glowing-cosmetics-shop-server.vercel.app/featured-products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      setLoading(false);
    
  }, []);

  if(loading){
    return <div className="loading loading-bars loading-lg text-green-500 mx-auto flex justify-between my-5"></div>
  }
 
  return (
    <div className="py-16 ">
      <div className="text-center space-y-3 ">
        <h2 className="lg:text-4xl text-2xl font-bold">Our Featured Products</h2>
        <p className="font-medium">Get the skin you want to feel</p>
      </div>
    
       {
        loading && <div className="loading loading-bars loading-lg text-green-500 mx-auto flex justify-between my-5"></div>
       }
      <div className="container mx-auto py-12">
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
                    <div className="w-full lg:h-[540px] h-[300px] relative ">
                        <Link to={`/featured-products/${product._id}`} className={`relative block w-full`}>
                          
                           <div  className="absolute hover:z-50  hover:cursor-pointer w-full h-full left-0 duration-1000 ease-in-out" >
                               <img className="w-full " src={product.hoverImg} alt="" />
                               {/* icon and tooltip */}
                               <div className="absolute lg:top-36 top-5 right-2 lg:right-8 space-y-3">
                                   <div data-tip='View Products' className="bg-white hover:bg-gray-800  hover:text-white rounded-[60px] flex items-center lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] tooltip hover:tooltip-open tooltip-left shadow-lg">
                                      <PiShoppingBagOpenBold className="lg:m-3 m-2 text-2xl "/>
                                  </div>
                                   <div data-tip='Quick View' className="bg-white hover:bg-gray-800  hover:text-white rounded-[60px] flex items-center lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] tooltip hover:tooltip-open tooltip-left shadow-lg">
                                   <IoEyeOutline className="lg:m-3 m-2 text-2xl "/>
                                  </div>
                                   <div data-tip='Add Wishlist'className="bg-white hover:bg-gray-800  hover:text-white rounded-[60px] flex items-center lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] tooltip hover:tooltip-open tooltip-left shadow-lg">
                                   <IoStarOutline className="lg:m-3 m-2 text-2xl "/>
                                  </div>
                               </div>
                              {/* price and name */}
                               <div className="absolute top-3 lg:left-6 left-2 text-black lg:space-y-2 space-y-1
                               ">
                                   <h2 className="lg:text-2xl text-sm text-black lg:font-bold">${product.price}</h2>
                                   <p className="lg:text-xl text-xs hover:underline lg:font-medium">{product.productName}</p>
                                  <div className="flex lg:gap-2 ">
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                  </div>
                               </div>
                               
                           </div>
                           <div className="absolute hover:w-0 w-full z-10  hover:-z-0  h-full duration-1000  ease-in-out">
                              <img className="w-full"  src={product.img} alt="" />
                              
                              <div className="absolute top-3 lg:left-6 left-2 text-black lg:space-y-2 space-y-1
                               ">
                                   <h2 className="lg:text-2xl text-sm text-black lg:font-bold">${product.price}</h2>
                                   <p className="lg:text-xl text-xs hover:underline lg:font-medium">{product.productName}</p>
                                  <div className="flex lg:gap-2 ">
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl text-sm text-[#4e7661]" />
                                     <IoIosStar className="lg:text-xl hidden lg:block md:block text-sm text-[#4e7661]" />
                                  </div>
                               </div>
                              
                           </div>
                             
                        </Link>

                        
                       
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
