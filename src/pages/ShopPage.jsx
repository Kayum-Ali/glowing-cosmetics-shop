import { FaHome } from "react-icons/fa";
import { GrRotateRight } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ShopPage.css";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const ShopPage = () => {
  const [topSaver, setTopSaver] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/top-savers')
    .then(res => res.json())
    .then(data => setTopSaver(data))
  },[])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Video";
  }, []);

  const CountdownTimer = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function calculateTimeLeft() {
      const difference = new Date(endDate) - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
      <div className=" lg:text-2xl text-xl lg:font-bold font-medium ">
        <span className="bg-[#F85E4E] text-white px-3 py-1 rounded-lg">
          {timeLeft.days}{" "}
        </span>
        <span className="lg:m-2 m-1">:</span>
        <span className="bg-[#F85E4E] text-white px-3 py-1 rounded-lg">
          {timeLeft.hours}{" "}
        </span>
        <span className="lg:m-2 m-1">:</span>
        <span className="bg-[#F85E4E] text-white px-3 py-1 rounded-lg">
          {timeLeft.minutes}{" "}
        </span>
        <span className="lg:m-2 m-1">:</span>
        <span className=" bg-[#F85E4E] text-white px-3 py-1 rounded-lg">
          {timeLeft.seconds}
        </span>
      </div>
    );
  };

  return (
    <div className="font-customFont">
      {/* banner img */}
      <div className="relative w-full">
        <img
          className="w-full h-[120px] lg:h-auto"
          src="https://res.cloudinary.com/dqescabbl/image/upload/v1730630434/bg-breadcrumb_ou5r9k.jpg"
          alt="Shop Banner"
        />
        <div className="absolute top-1/2 left-[10%]  -translate-y-1/2 ">
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
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5 lg:items-center mt-12  lg:flex-row md:flex-row justify-between ">
          <h3 className="text-2xl font-bold ">Browse by Category</h3>
          <h2 className="flex items-center gap-2">
            View all products <GrRotateRight />
          </h2>
        </div>
        {/* slider */}
        <div className="lg:py-10 py-7 md:py-8 ">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                <img
                  className="w-[150px] bg-[#916A6A] transColor"
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1730636399/facial-massage_u9qvfu.png"
                  alt=""
                />
                <h2 className="lg:text-2xl text-xl font-bold">Facial Area</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                <img
                  className="w-[150px] bg-[#916A6A] transColor"
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1730637307/handshake_jpjsq1.png"
                  alt=""
                />
                <h2 className="lg:text-2xl text-xl font-bold">Hand zone</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                <img
                  className="w-[150px] bg-[#916A6A] transColor"
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1730637376/back_ibqqpj.png"
                  alt=""
                />
                <h2 className="lg:text-2xl text-xl font-bold">Back area</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                <img
                  className="w-[150px] bg-[#916A6A] transColor"
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1730637747/success_ics73g.png"
                  alt=""
                />
                <h2 className="lg:text-2xl text-xl font-bold">life Zone</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                <img
                  className="w-[150px] bg-[#916A6A] transColor"
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1730640114/bikini_eagjll.png"
                  alt=""
                />
                <h2 className="lg:text-2xl text-xl font-bold">Bikini Area</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#F5F5F5] p-14 space-y-5 text-center rounded-md">
                <img
                  className="w-[150px] bg-[#916A6A] transColor"
                  src="https://res.cloudinary.com/dqescabbl/image/upload/v1730640364/legs_gcuyym.png"
                  alt=""
                />
                <h2 className="lg:text-2xl text-xl font-bold">Leg Area</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* top saver */}
      <section className="container mx-auto px-5">
        <div className="flex justify-between flex-col lg:flex-row md:flex-row gap-4">
          <h2 className="text-2xl font-bold">Top Saver Today</h2>
          <div className="flex gap-2 justify-between flex-col lg:flex-row md:flex-row lg:items-center">
            <p className="font-bold lg:text-2xl text-xl">Ends in : </p>
            <CountdownTimer endDate="2024-11-31T20:59:59" />
          </div>
        </div>

        {/* top saver data */}

      </section>
    </div>
  );
};

ShopPage.propTypes = {
    endDate: PropTypes.string.isRequired,
  };



export default ShopPage;
