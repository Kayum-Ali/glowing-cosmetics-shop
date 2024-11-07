
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Blog.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
const BlogPage = () => {
    return (
        <Swiper
        // direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper lg:w-full bg-center md:w-auto md:h-[500px] lg:h-[700px] h-[300px] w-auto"
      >
        <SwiperSlide>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1730968682/2_1920x_1_gssluv.webp')] w-full h-full bg-cover bg-center relative">
            <div className="absolute top-1/2 lg:left-[60%] left-1/2 -translate-y-1/2 lg:space-y-5 space-y-2">
              
               <div className="flex gap-5" >
                    <div className="bg-[#A084BD] w-[5px]"  data-aos="zoom-in"></div>
                    <div data-aos="fade-left" data-aos-duration="500">
                        <h2 className="lg:text-5xl text-2xl font-semibold">New Collections</h2>
                        <h2 className="lg:text-5xl text-2xl font-semibold">Nature <span className="text-[#A084BD]">&</span> Nature</h2>
                    </div>
               </div>
              <p className="lg:text-sm text-xs lg:w-3/5">Integer maximus lorem nec urna elementum, eu tempor justo consectetur. Integer blandit, ex ac tristique commodo.</p>
              
              {/* <button className="lg:px-10 md:px-8 px-6 py-3 text-white bg-[#4E7661] lg:font-bold  md:font-bold font-medium rounded-md hover:bg-universe_primary hover:text-[#4E7661]">Shop Now</button> */}
              <button className="lg:px-10 md:px-8 px-6 lg:py-3 py-2 text-[#4E7661] bg-gradient-to-r from-universe_secendary to-white lg:font-bold  md:font-bold font-medium rounded-md  hover:text-[#4E7661] hover:bg-gradient-to-r hover:from-[#aed6f1] hover:to-white ">Discover More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1730970042/3_1920x_uiuzsu.webp')] w-full h-full bg-cover bg-center relative">
          <div className="absolute top-1/2 lg:left-[60%] left-1/2 -translate-y-1/2 lg:space-y-5 space-y-2">
              
              <div className="flex gap-5">
                   <div className="bg-[#87AC52] w-[5px]" data-aos="fade-left"></div>
                   <div data-aos="fade-left" data-aos-duration="1500">
                       <h2 className="lg:text-5xl text-2xl font-semibold">Hot Trending</h2>
                       <h2 className="lg:text-5xl text-2xl font-semibold"> <span className="text-[#87AC52]">Green</span> Tea</h2>
                   </div>
              </div>
             <p className="lg:text-sm text-xs lg:w-3/5">Integer maximus lorem nec urna elementum, eu tempor justo consectetur. Integer blandit, ex ac tristique commodo.</p>
             
             {/* <button className="lg:px-10 md:px-8 px-6 py-3 text-white bg-[#4E7661] lg:font-bold  md:font-bold font-medium rounded-md hover:bg-universe_primary hover:text-[#4E7661]">Shop Now</button> */}
             <button className="lg:px-10 md:px-8 px-6 lg:py-3 py-2 text-[#4E7661] bg-gradient-to-r from-universe_secendary to-white lg:font-bold  md:font-bold font-medium rounded-md  hover:text-[#4E7661] hover:bg-gradient-to-r hover:from-[#aed6f1] hover:to-white ">Discover More</button>
           </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1730970514/1_1920x_1_iclh1d.webp')] w-full h-full bg-cover bg-center relative">
          <div className="absolute top-1/2 lg:left-[60%] left-1/2 -translate-y-1/2 lg:space-y-5 space-y-2">
              
              <div className="flex gap-5">
                   <div className="bg-[#FCD814] w-[5px]" data-aos="fade-left"></div>
                   <div data-aos="fade-left" data-aos-duration="1000">
                       <h2 className="lg:text-5xl text-2xl font-semibold">Cosmetics</h2>
                       <h2 className="lg:text-5xl text-2xl font-semibold">Moisturiser</h2>
                   </div>
              </div>
             <p className="lg:text-sm text-xs lg:w-3/5">Integer maximus lorem nec urna elementum, eu tempor justo consectetur. Integer blandit, ex ac tristique commodo.</p>
             
             {/* <button className="lg:px-10 md:px-8 px-6 py-3 text-white bg-[#4E7661] lg:font-bold  md:font-bold font-medium rounded-md hover:bg-universe_primary hover:text-[#4E7661]">Shop Now</button> */}
             <button className="lg:px-10 md:px-8 px-6 lg:py-3 py-2 text-[#4E7661] bg-gradient-to-r from-universe_secendary to-white lg:font-bold  md:font-bold font-medium rounded-md  hover:text-[#4E7661] hover:bg-gradient-to-r hover:from-[#aed6f1] hover:to-white ">Discover More</button>
           </div>
          </div>
        </SwiperSlide>
    
      
      </Swiper>
    );
};

export default BlogPage;