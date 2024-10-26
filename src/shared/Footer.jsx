import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";





const Footer = () => {
    const subLogo = "https://res.cloudinary.com/dqescabbl/image/upload/v1729913258/logo_trial-HaXHLEZwN-transformed-removebg-preview_qkw38r.png";
    return (
        <div className='bg-[#154360] mt-3'>
            <div className='container mx-auto py-10 px-10 text-white'>
                <div className='grid grid-cols-1 lg:grid-cols-12 justify-center '>
                    {/* 1st */}
                    <div className="lg:col-span-4 ">
                        <img className='w-[200px]  ' src={subLogo} alt="" />

                        <div className="mt-5">
                            <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot> 5/A, Ga-130/B, Progoti Sharani, Middle</p>
                            <p>Badda, Gulshan, Badda, Dhaka-1212.</p>
                            <p className="flex items-center gap-2"><IoCall></IoCall>  +88 01616 500515</p>
                            <p className="flex items-center gap-2"> <IoMdMailUnread></IoMdMailUnread> info@nimusoft.com</p>


                        </div>
                    </div>

                  <div className="col-span-8 grid lg:grid-cols-8 grid-cols-2 md:grid-cols-4 justify-center items-center py-10 lg:py-0">
                          {/* 2nd */}
                    <div className="lg:col-span-2 col-span-1 *:list-none mt-10 lg:mt-0">
                        <h2 className="text-xl">Company</h2>
                        <div className="mt-5 leading-4">
                            <li><Link>Home</Link></li>
                            <li><Link>Case Studies</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Careers</Link></li>
                            <li><Link>Contact Us</Link></li>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div  className="lg:col-span-2 col-span-1 *:list-none mt-10 lg:mt-0">
                        <h2  className="text-xl">Products</h2>
                        <div className="mt-5 leading-4">
                            <li><Link>Nimu HRM</Link></li>
                            <li><Link>Nimu Attendance</Link></li>
                            <li><Link>Nimu CRM</Link></li>
                            <li><Link>Nimu POS</Link></li>
                            <li><Link>Nimu Inventory</Link></li>
                        </div>
                    </div>
                    {/* 4th */}
                    <div  className="lg:col-span-2 col-span-1 *:list-none mt-10 lg:mt-0 ">
                        <h2  className="text-xl">Services</h2>
                        <div className="mt-5 leading-4">
                            <li><Link>ERP Solution</Link></li>
                            <li><Link>Mobile Appication</Link></li>
                            <li><Link>E-Commerse</Link></li>
                            <li><Link>IOT & VR</Link></li>
                            <li><Link>Data Analytics</Link></li>
                        </div>
                    </div>
                    {/* 5th */}
                    <div  className="lg:col-span-2 col-span-1 *:list-none mt-10 lg:mt-0">
                        <h2  className="text-xl">Learn More</h2>
                        <div className="mt-5 leading-4">
                            <li><Link>Real Estate</Link></li>
                            <li><Link>Medical Care</Link></li>
                            <li><Link>Education</Link></li>
                            <li><Link>Home Automation</Link></li>
                            <li><Link>Robotics & Ai</Link></li>
                        </div>
                    </div>
                  </div>

                     
                </div>
                <hr className="mt-5 opacity-80
                 border-white"/>

                {/* &copy */}
               <div>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 text-center my-5">
                            <p>Privacy & Policy</p>
                            {/* icon */}
                            <div className="flex justify-center gap-5 text-2xl lg:pr-5 pr-0">
                                <FaFacebook></FaFacebook>
                                <IoLogoLinkedin></IoLogoLinkedin>
                                <FaYoutube></FaYoutube>
                            </div>
                        </div>
                        <div className="my-5 text-center">
                            <p>© 2024 Nimusoft Technologies Ltd.</p>
                        </div>

               </div>

            </div>
            
        </div>
    );
};

export default Footer;