import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import '../styles/footer.css'
import icon from '../assets/icon-pay-300x27.png'





const Footer = () => {
    const subLogo = "https://res.cloudinary.com/dqescabbl/image/upload/v1730136673/WhatsApp_Image_2024-10-28_at_18.53.06_16c27229-removebg-preview_d4bfo5.png";
    return (
        <div className='bg-[#154360] mt-3'>
            <footer className='container mx-auto py-10 px-10 text-white'>
                <div className='grid grid-cols-1 lg:grid-cols-12 justify-center '>
                    {/* 1st */}
                    <div className="lg:col-span-4 col-span-1">
                        <img className='w-[200px]  ' src={subLogo} alt="" />

                        <div className="mt-5 opacity-80 space-y-2 lg:space-y-0">
                            <p className="flex items-center  gap-2"><FaLocationDot></FaLocationDot>1st floor, right side, Saidpur Plaza</p>
                            <p className="">Saidpur, Rangpur Division, Bangladesh.</p>
                            <p className="flex items-center gap-2"><IoCall></IoCall>  +88 01867217084</p>
                            <p className="flex items-center text-xs lg:text-base lg:gap-2 gap-1"> <IoMdMailUnread></IoMdMailUnread> madinabag&varaitisestore@gmail.com</p>


                        </div>
                    </div>

                  <div className="col-span-8 grid lg:grid-cols-8 grid-cols-2 md:grid-cols-4 justify-center gap-5 lg:gap-2 items-center py-10 lg:py-0">
                          {/* 2nd */}
                    <div className="lg:col-span-2 col-span-1 *:list-none mt-10 lg:mt-0">
                        <h2 className="text-xl">Useful links</h2>
                        <div className="mt-5  leading-4 space-y-3 opacity-80">
                            <li className="li"><Link>New Products</Link></li>
                            <li className="li"><Link>Best Sellers</Link></li>
                            <li className="li"><Link>Bundle & Save</Link></li>
                            <li className="li"><Link>Online Gift Card</Link></li>
                            <li className="li"><Link>Online Gift Card</Link></li>
                          
                        </div>
                    </div>
                    {/* 3rd */}
                    <div  className="lg:col-span-2 col-span-1 *:list-none mt-10 lg:mt-0">
                        <h2  className="text-xl">Infomation
                        </h2>
                        <div className="mt-5 leading-4 space-y-3 opacity-80">
                            <li className="li"><Link>Start a Return</Link></li>
                            <li className="li"><Link to={`/contact`}>Contact Us</Link></li>
                            <li className="li"><Link>Shipping FAQ</Link></li>
                            <li className="li"><Link>Terms & Conditions</Link></li>
                            <li className="li"><Link to={`our-team`}>Our Team</Link></li>
                        </div>
                    </div>
                    {/* 4th */}
                    <div  className="lg:col-span-4 col-span-2 *:list-none mt-10 lg:-mt-4 ">
                        <h2  className="text-xl ">Good emails.</h2>
                        <p className="mt-3 leading-4 py-3 opacity-80">Enter your email below to be the first to know about new collections and product launches.</p>
                        <div className="flex py-2">
                            <input type="email" placeholder="email address" className="py-2 px-2 border-none rounded-tl-lg rounded-bl-lg outline-none text-black w-32 lg:w-auto"/>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-tr-lg rounded-br-lg opacity-80">Subscribe</button>
                        </div>
                    </div>
                  
                  </div>

                     
                </div>
                <hr className="mt-5 opacity-80
                 border-white"/>

                {/* &copy */}
               <div>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5 text-center my-5">
                            <p>Glowing 2024</p>
                            {/* icon */}
                            <div className="flex justify-center gap-5 text-2xl lg:pr-5 pr-0">
                                <FaFacebook></FaFacebook>
                                <IoLogoLinkedin></IoLogoLinkedin>
                                <FaYoutube></FaYoutube>
                            </div>
                        </div>
                        <div className="my-5 text-center">
                          <img  className="mx-auto" src={icon} alt="" />
                        </div>

               </div>

            </footer>
            
        </div>
    );
};

export default Footer;