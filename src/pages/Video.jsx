import { FaHome } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Video = () => {
 

const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
    document.title= "Video";
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
 
  return (
    <div className="text-[#B88539] text-4xl font-bold space-x-3">
     <span className=" ">{timeLeft.days} :</span>
     <span className=" ">{timeLeft.hours} :</span>
     <span className=" ">{timeLeft.minutes} :</span>
     <span className=" ">{timeLeft.seconds}</span>
    </div>
  );
};



  return (
    <div>
      {/* breadcumbs */}
      <div className="breadcrumbs bg-[#FFC1CC] py-3 ">
        <ul className="container mx-auto flex justify-center">
          <li className="flex gap-2">
            <FaHome />
            <Link to={`/`}>Home</Link>{" "}
          </li>
          <li>Element</li>
          <li>Video</li>
        </ul>
      </div>
      {/* video */}
      <h3 className="text-3xl mt-12 text-center font-bold">Video</h3>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:pl-20 gap-12 my-10 px-5">
        {/* content */}
        <div className="space-y-5 flex-1 w-[300px]">
          <p className="uppercase  font-bold">new collection</p>
          <h2 className="lg:text-5xl text-3xl font-bold">Anti-aging Cream</h2>
          <p>
            Made using clean, non-toxic ingredients, our products <br className="hidden lg:block"/> are
            designed for everyone.
          </p>
          <button className="px-8 py-3 hover:bg-black bg-[#4E7661]  text-white font-bold rounded-md shadow-lg">
            Explore More
          </button>
        </div>
        {/* video */}
        <div className="flex-1">
          <div
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="relative"
          >
            <img
              className="w-full rounded-lg"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1730132377/video-02_gw5dp7.jpg"
              alt=""
            />
            <div className="border-2 border-white bg-white hover:text-black w-max p-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
              <IoLogoYoutube className="text-2xl text-red-600 " />
            </div>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box ">
            <iframe
            className="w-full h-[350px]"
             
              src="https://www.youtube.com/embed/Ij8QLLNONQc?si=0h2v1L9S3jw9Sk9w"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>
      </div>

      {/* banner */}
      <div className="container mx-auto flex gap-14 flex-col px-5 lg:flex-row  items-center">
           {/* img */}
           <div >
             <img className="w-full rounded-lg" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730135094/countdown-07-600x600_rolga1.jpg" alt="" />
           </div>
           {/* content */}
           <div className="space-y-5">
                <div className="flex gap-5">
                    <h2 className="text-gray-400 font-medium">Special offer</h2>
                    <button className="bg-[#B88539] px-3 text-white rounded-lg text-sm">-20%</button>
                </div>
                <h2 className="text-4xl font-bold">Mountain Pain Bath Oil</h2>
                <p className="text-[#7E7E7E] w-2/3 tracking-wider font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <div>
                   <CountdownTimer endDate="2024-12-31T23:59:59" />
                </div>
                <button className="px-8 py-3 hover:bg-[#B88539] bg-[#4E7661] text-white font-bold rounded-lg shadow-lg">Get Only | $58.00</button>

           </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  endDate: PropTypes.string.isRequired,
};

export default Video;
