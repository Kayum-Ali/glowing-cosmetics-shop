import  { useEffect, useRef, useState, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Galary.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function GalaryPage() {
  const [imges,setImges] = useState([])
  useEffect(()=>{
    fetch('./imgGalary.json')
     .then(response => response.json())
     .then(data => setImges(data))
  },[])

 
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    
     <div>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729965002/2022-02-01_uheect.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729966338/20220913_161321176_hbxmzh.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729966476/20220913_161604099_gp4ebs.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729966583/20220913_161528794_tvainb.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967061/cosmetics-gallery-by-magnetic-rani-bagh-delhi-cosmetic-dealers-2mb0au7_bqrima.webp" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967170/pari-cosmetics-delhi-sk52wmvccp_zagf3q.webp" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967283/she-care-beauty-point-new-shimlapuri-ludhiana-beauty-parlours-9m373_kxvw7m.avif" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967340/istockphoto-933154330-612x612_od8e8n.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full lg:h-[600px]'>
                 <img className='w-full h-full' src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967388/stock-photo-toronto-canada-december-skincare-and-cosmetic-products-on-display-in-a-department-303937541_ynqiu0.jpg" alt="" />
            </div>
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div className='container mx-auto px-10'>
          <h2 className='text-center text-3xl font-bold my-14'>Gallery</h2>
          <p className='text-center font-medium text-black'>BUILD WEBSITE</p>
          <h2 className='text-center text-3xl font-bold my-14'>Gallery Basic</h2>
          {/* img grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 imgGalary my-5'>
             {
              imges.map(img => (
                <div key={img.id}>
                <img src={img.img} alt="" />
               </div>
              ))
             }
           

              
          </div>
      </div>
         
     </div>
    
  );
}
