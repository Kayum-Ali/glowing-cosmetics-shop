import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full lg:h-[400px] bg-center bg-cover"
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
          <h2 className="text-5xl font-bold">  Keep In Touch with Us</h2>
          <p className="text-xl font-medium opacity-80">We’re talking about clean beauty gift sets, of course – and we’ve got a <br /> bouquet of beauties for yourself or someone you love.</p>
      </div>

      <div className="flex container mx-auto justify-evenly gap-10">
        {/* 1st */}
          <div className="flex gap-4">
              <div>
                 <FaLocationDot className="text-4xl" />
              </div>
              <div className="text-gray-800 space-y-3">
                <h2 className="text-3xl font-bold">Address</h2>
                <p className="font-medium opacity-80 text-xl">3245 Abbot Kinney BLVD - <br /> PH Venice, CA 124</p>
                <p className="font-medium opacity-80 text-xl">Saidpur, Rangpur Division, Bangladesh.</p>
              </div>
          </div>
          {/* 2nd */}
          <div className="flex gap-4">
             <div>
                 <LuPhoneCall className="text-4xl"  />
             </div>
             <div className="text-gray-800 space-y-3"> 
                <h2 className="text-3xl font-bold">Contact</h2>
                <p className="font-medium text-xl opacity-80">Mobile : <span className="text-black font-bold">01867217084</span></p>
                <p className="font-medium text-xl opacity-80">Hotline: <span className="text-black font-bold">01779596173</span></p>
                <p className="font-medium text-xl opacity-80">Email: <span className="text-black font-bold">loge_asi@gmail.com</span></p>
             </div>
          </div>
          {/* 3rd */}
          <div className="flex gap-4 ">
            <div>
              <MdAccessTime className="text-4xl"/>
            </div>
            <div className="text-gray-800 space-y-3">
                <h2 className="text-3xl font-bold">Hour of operation</h2>
                <div className="space-y-3">
                     <p className="font-medium text-xl text-black">Monday to Friday : <span className="opacity-80"> 08:00 AM - 18:00 PM</span></p>
                     <p className="font-medium text-xl text-black">Saturday & Sunday : <span className="opacity-80"> 09:00 AM - 21:00 PM</span></p>
 
                </div>
            </div>
          </div>
      </div>


    </div>
  );
};

export default ContactUs;
