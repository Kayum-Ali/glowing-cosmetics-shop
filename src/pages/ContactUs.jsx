import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactUs = () => {

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Contact Us";
  },[])
  return (
    <div>
      <div className="relative">
        <img
          className="w-auto lg:w-full lg:h-[400px] bg-center bg-cover"
          src="https://res.cloudinary.com/dqescabbl/image/upload/v1729940264/high-angle-beauty-products-with-copy-space_haiuf3.jpg"
          alt=""
        />
            <div className="breadcrumbs text-xl font-medium text-gray-800 absolute top-5   left-1/2  -translate-x-1/2">
                <ul>
                    <li>
                    <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                    <p>Page</p>
                    </li>
                    <li>Contact Us</li>
                </ul>
            </div>
      </div>
      {/* get in touch section */}
      <div className="text-center text-gray-800 py-16 space-y-4">
          <h2 className="lg:text-5xl text-2xl font-bold">  Keep In Touch with Us</h2>
          <p className="text-lg px-5 font-medium opacity-80">We’re talking about clean beauty gift sets, of course – and we’ve got a <br /> bouquet of beauties for yourself or someone you love.</p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row container lg:my-10 my-3 pb-5 mx-auto lg:justify-evenly  justify-center lg:gap-10 gap-5 md:px-3">
        {/* 1st */}
          <div className="flex gap-4 justify-center lg:justify-start ">
              <div>
                 <FaLocationDot className="lg:text-4xl text-2xl md:text-3xl" />
              </div>
              <div className="text-gray-800 space-y-3">
                <h2 className="md:text-2xl text-2xl  font-bold">Address</h2>
                <p className="font-medium opacity-80 lg:text-xl">3245 Abbot Kinney BLVD - <br /> PH Venice, CA 124</p>
                <p className="font-medium opacity-80 lg:text-xl">Saidpur, Rangpur Division.</p>
              </div>
          </div>
          {/* 2nd */}
          <div className="flex gap-4 justify-center lg:justify-start">
             <div>
                 <LuPhoneCall className="lg:text-4xl text-2xl md:text-3xl "  />
             </div>
             <div className="text-gray-800 space-y-3"> 
                <h2 className="md:text-2xl text-3xl font-bold">Contact</h2>
                <p className="font-medium lg:text-xl opacity-80">Mobile : <span className="text-black font-bold">01867217084</span></p>
                <p className="font-medium lg:text-xl opacity-80">Hotline: <span className="text-black font-bold">01779596173</span></p>
                <p className="font-medium lg:text-xl opacity-80">Email: <span className="text-black font-bold">loge_asi@gmail.com</span></p>
             </div>
          </div>
          {/* 3rd */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <div>
              <MdAccessTime className="lg:text-4xl text-2xl md:text-3xl"/>
            </div>
            <div className="text-gray-800 space-y-3">
                <h2 className="md:text-2xl text-2xl font-bold">Hour of operation</h2>
                <div className="space-y-3">
                     <p className="font-medium lg:text-xl text-black">Monday to Friday : <span className="opacity-80"> 08:00 AM - 18:00 PM</span></p>
                     <p className="font-medium lg:text-xl text-black">Saturday & Sunday : <span className="opacity-80"> 09:00 AM - 21:00 PM</span></p>
 
                </div>
            </div>
          </div>
      </div>

      {/* google map */}
      <div className="my-5">
       

        <iframe className="w-4/5 lg:h-[550px] h-auto mx-auto rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.6374368118386!2d88.89393651744383!3d25.782536499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e351004e11d2ab%3A0x41fabd72f76122d4!2sModina%20Bag%20and%20Varieties%20Store!5e0!3m2!1sen!2sbd!4v1730639064600!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="pt-8">
          <h2 className="lg:text-4xl text-2xl mx-auto text-center">Sent A Message</h2>
          <form className=" text-center lg:w-1/2 mx-auto py-5 lg:py-10 px-8 lg:px-0">
              <div className="flex lg:gap-8 gap-5 flex-col lg:flex-row">
                <input type="text" placeholder="Name" className="border-none outline-none text-gray-800 rounded-lg bg-[#ABD6D4] px-5 py-2 lg:py-3 lg:text-2xl text-xl w-full"/>
                <input type="email" placeholder="Email"  className="border-none outline-none text-gray-800 rounded-lg bg-[#ABD6D4] px-5 py-2 lg:py-3 lg:text-2xl text-xl w-full"/>
              </div>
                <textarea name="" id="" rows={5} placeholder="Message"  className="border-none outline-none text-gray-800 rounded-lg bg-[#ABD6D4] px-5 py-2 lg:py-3 lg:text-2xl text-xl w-full lg:mt-8 mt-5"></textarea>
                <button className="text-xl bg-[#ABD6D4] text-black mt-8 rounded-lg px-8 lg:py-3 py-2 hover:bg-[#4E7661] hover:text-white">Submit</button>
          </form>
      </div>


    </div>
  );
};

export default ContactUs;
