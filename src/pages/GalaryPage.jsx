import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/Galary.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosShareAlt, IoLogoTwitter, IoMdClose } from "react-icons/io";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { LiaPinterest } from "react-icons/lia";
import { RiDownload2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function GalaryPage() {
  const [imges, setImges] = useState([]);

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    document.title = "Galary";
    window.scrollTo(0, 0);
    fetch("./imgGalary.json")
      .then((response) => response.json())
      .then((data) => setImges(data));
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleShow = (img) => {
    document.getElementById("my_modal_5").showModal();
    document.getElementById("modalImg").src = img;
    document.getElementById("download").download = img;
  };

  const img1 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730527757/blog-01_okkr0k.jpg";
  const img2 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730527813/blog-02_q3tceo.jpg";
  const img3 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730528132/blog-03_pwk6dz.jpg";
  const img4 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730528297/blog-04_wuh46v.jpg";
  const img5 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730528599/blog-05_zzllrg.jpg";
  const img6 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730529083/blog-06_djrpce.jpg";
  const img7 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730529856/blog-07_exgaeo.jpg";
  const img8 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730530081/blog-09_nj1hwe.jpg";
  const img9 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730530248/blog-10_onsaaj.jpg";
  const img10 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730530364/blog-11_t7hz19.jpg";
  const img11 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730530552/blog-12_cfbmd5.jpg";
  const img12 =
    "https://res.cloudinary.com/dqescabbl/image/upload/v1730530598/blog-13_qzoipo.jpg";
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
          <div className="w-full lg:h-[600px] h-auto">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729965002/2022-02-01_uheect.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729966338/20220913_161321176_hbxmzh.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729966476/20220913_161604099_gp4ebs.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729966583/20220913_161528794_tvainb.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967061/cosmetics-gallery-by-magnetic-rani-bagh-delhi-cosmetic-dealers-2mb0au7_bqrima.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967170/pari-cosmetics-delhi-sk52wmvccp_zagf3q.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967283/she-care-beauty-point-new-shimlapuri-ludhiana-beauty-parlours-9m373_kxvw7m.avif"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967340/istockphoto-933154330-612x612_od8e8n.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[600px]">
            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1729967388/stock-photo-toronto-canada-december-skincare-and-cosmetic-products-on-display-in-a-department-303937541_ynqiu0.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div className="container mx-auto px-10">
        <h2 className="text-center text-3xl font-bold lg:my-14 my-8 md:my-10">
          Gallery
        </h2>
        <p className="text-center font-medium text-black">BUILD WEBSITE</p>
        <h2 className="text-center text-3xl font-bold lg:my-14 my-8 md:my-10">
          Gallery Basic
        </h2>
        {/* img grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 imgGalary my-5">
          {imges.map((img) => (
            <div onClick={() => handleShow(img.img)} key={img.id}>
              <img src={img.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      {/* modals */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className={`modal bg-[#4d4a4a94] relative`}>
        <div className="bg-white rounded-lg ">
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          <img
            id="modalImg"
            src=""
            className="lg:w-[400px] w-[300px]   rounded-lg"
            alt=""
          />
          <div className="absolute top-16 right-4">
            <form method="dialog ">
              {/* if there is a button in form, it will close the modal */}
              <button className="">
                <IoMdClose className="text-3xl text-white" />
              </button>
              {/* <a href="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/product-01-4.jpg" download=""><i class="eicon-download-bold" aria-label="Download"></i>Download image</a> */}

              <IoIosShareAlt
                onClick={() => setToggle(!toggle)}
                className="text-3xl text-white"
              />
              <div
                className={`bg-white p-4 rounded-xl absolute top-24 right-4 w-max ${
                  toggle ? "block" : "hidden"
                }`}
              >
                <Link
                  to={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Fglowing.g5plus.net%2Felementor%2Felements%2Fgallery%2F%23elementor-action%253Aaction%253Dlightbox%2526settings%253DeyJpZCI6NDczLCJ1cmwiOiJodHRwczpcL1wvZ2xvd2luZy5nNXBsdXMubmV0XC9lbGVtZW50b3JcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjFcLzEwXC9wcm9kdWN0LTAxLTQuanBnIiwic2xpZGVzaG93IjoiNzE5YzY1OSJ9`}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <BiLogoFacebookSquare className=" text-xl text-purple-500" />
                  <h2>Share on Facebook</h2>
                </Link>
                <Link
                  to={`https://twitter.com/intent/tweet?text= https%3A%2F%2Fglowing.g5plus.net%2Felementor%2Felements%2Fgallery%2F%23elementor-action%253Aaction%253Dlightbox%2526settings%253DeyJpZCI6NDczLCJ1cmwiOiJodHRwczpcL1wvZ2xvd2luZy5nNXBsdXMubmV0XC9lbGVtZW50b3JcL3dwLWNvbnRlbnRcL3VwbG9hZHNcLzIwMjFcLzEwXC9wcm9kdWN0LTAxLTQuanBnIiwic2xpZGVzaG93IjoiNzE5YzY1OSJ9`}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <IoLogoTwitter className=" text-xl text-blue-500" />
                  <h2>Share on twitter</h2>
                </Link>
                <Link
                  to={`https://www.pinterest.com/pin/create/button/?url=&amp;media=https%3A%2F%2Fglowing.g5plus.net%2Felementor%2Fwp-content%2Fuploads%2F2021%2F10%2Fproduct-01-4.jpg`}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <LiaPinterest className=" text-xl text-red-500" />
                  <h2>Share on pinterest</h2>
                </Link>
                <Link
                  to={``}
                  id="download"
                  download={``}
                  className="flex items-center gap-2"
                >
                  <RiDownload2Fill className=" text-xl text-gray-500" />
                  <h2>Download image</h2>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <div className="py-10 text-center">
          <h2 className="uppercase">Build Website</h2>
          <h2 className="text-4xl font-bold mt-6">Gallery Metro</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3  lg:gap-4 gap-2 md:gap-3 max-w-5xl p-4">
          <img src="" alt="" />

        </div>
      </div>

      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <div className="py-10 text-center">
          <h2 className="uppercase">Build Website</h2>
          <h2 className="text-4xl font-bold mt-6">Gallery Metro</h2>
        </div>
        <div className="grid grid-cols-4 grid-rows-6 lg:gap-4 gap-2 max-w-5xl p-4">
          {/* Row 1 */}
          <img
            src={img1}
            alt="Image 1"
            className="col-span-2 col-start-1 col-end-3 row-span-2 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img2}
            alt="Image 2"
            className="col-span-1 col-start-3 col-end-4 row-span-1 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img3}
            alt="Image 3"
            className="col-span-1 col-start-4 col-end-5 row-span-1 w-full h-auto rounded-lg shadow-md"
          />

          {/* Row 2 */}
          <img
            src={img4}
            alt="Image 4"
            className="col-span-2 row-start-2 col-start-3 row-end-4 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img5}
            alt="Image 5"
            className="col-span-1 row-start-3 row-end-4 row-span-1 w-full h-auto rounded-lg shadow-md"
          />

          {/* Row 3 */}
          <img
            src={img6}
            alt="Image 6"
            className="col-span-1 row-start-3 row-end-4  row-span-1 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img7}
            alt="Image 7"
            className="col-span-2 row-start-4 row-end-6  row-span-1 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img8}
            alt="Image 8"
            className="col-span-2 row-start-4 row-end-5 col-start-3 col-end-4 row-span-1 w-full h-auto rounded-lg shadow-md"
          />

          {/* Row 4 */}
          <img
            src={img9}
            alt="Image 9"
            className=" row-start-4 row-end-5 row-span-1 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img10}
            alt="Image 10"
            className="col-span-3 col-start-3 col-end-5 row-start-5 row-end-7 row-span-1 w-full h-auto rounded-lg shadow-md"
          />

          {/* Row 5 */}
          <img
            src={img11}
            alt="Image 11"
            className="col-start-1 col-end-2 row-span-1 row-start-6 row-end-7 w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={img12}
            alt="Image 12"
            className="col-start-2 col-end-3 row-start-6 row-end-7 row-span-1 w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
