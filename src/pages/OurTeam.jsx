import { AiOutlineInstagram } from "react-icons/ai";
import { FaHome, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/team.css";

const OurTeam = () => {
  return (
    <div>
      {/* breadcumbs */}
      <div className="breadcrumbs bg-[#FFC1CC] py-3 ">
        <ul className="container mx-auto flex justify-center">
          <li className="flex gap-2">
            <FaHome />
            <Link to={`/`}>Home</Link>{" "}
          </li>
          <li>Our Team</li>
        </ul>
      </div>

      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold pt-10">Our Team</h2>
        <p className="font-semibold text-3xl ">
          We pride ourselves on have a <br /> team of highly skilled
        </p>
      </div>

      {/* team card  */}
      <div className="grid grid-cols-4 gap-5 container mx-auto py-10">
        {/* kayum */}
        <div>
          <div className="bg-[#DEDEE0] h-[330px] relative profile overflow-hidden rounded-md">
            <img
              className="w-full bg-cover bg-center pt-5"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1730549179/download__5_-removebg-preview_yorjwh.png"
              alt=""
            />
            <div className="bg-[#DEDEE0] social-link flex justify-center py-3 gap-4 *:text-xl *:cursor-pointer absolute  w-full">
              <Link to={`https://x.com/Maybe_Kayum`} target="_blank">
                <FaTwitter />
              </Link>
              <Link to={`https://www.facebook.com/kayumxten/`} target="_blank">
                <RiFacebookCircleFill />
              </Link>
              <Link to={`https://www.instagram.com/kayumxten/`} target="_blank">
                <AiOutlineInstagram />
              </Link>
              <Link
                to={`https://www.linkedin.com/in/kaiumali/`}
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <h2 className="text-2xl font-bold pt-4 pl-2">Kayum X Ten</h2>
          <p className="font-medium text-[#9F9F9F]">
            {" "}
            - Founder, Chief Creative
          </p>
        </div>
        {/* akdas */}
        <div>
          <div className="bg-[#DEDEE0] h-[330px] relative profile overflow-hidden rounded-md">
            <img
              className="w-full bg-cover bg-center pt-5"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1730552243/141833119_509632066685453_1054336229426008367_n-removebg-preview_lsbpg2.png"
              alt=""
            />
            <div className="bg-[#DEDEE0] social-link flex justify-center py-3 gap-4 *:text-xl *:cursor-pointer absolute  w-full">
              <Link to={`https://x.com/Maybe_Kayum`} target="_blank">
                <FaTwitter />
              </Link>
              <Link to={`https://www.facebook.com/kayumxten/`} target="_blank">
                <RiFacebookCircleFill />
              </Link>
              <Link to={`https://www.instagram.com/kayumxten/`} target="_blank">
                <AiOutlineInstagram />
              </Link>
              <Link
                to={`https://www.linkedin.com/in/kaiumali/`}
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <h2 className="text-2xl font-bold pt-4 pl-2">Qamar Iqbal</h2>
          <p className="font-medium text-[#9F9F9F]"> - Founder, CEO</p>
        </div>
        {/* irfan */}
        <div>
          <div className="bg-[#DEDEE0] h-[330px] relative profile overflow-hidden rounded-md">
            <img
              className="w-full bg-cover bg-center pt-5"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1730552890/290386860_566461888371749_6035136125170065349_n-removebg-preview_ujisxu.png"
              alt=""
            />
            <div className="bg-[#DEDEE0] social-link flex justify-center py-3 gap-4 *:text-xl *:cursor-pointer absolute  w-full">
              <Link to={`https://x.com/Maybe_Kayum`} target="_blank">
                <FaTwitter />
              </Link>
              <Link to={`https://www.facebook.com/kayumxten/`} target="_blank">
                <RiFacebookCircleFill />
              </Link>
              <Link to={`https://www.instagram.com/kayumxten/`} target="_blank">
                <AiOutlineInstagram />
              </Link>
              <Link
                to={`https://www.linkedin.com/in/kaiumali/`}
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <h2 className="text-2xl font-bold pt-4 pl-2">Irfan Pathan</h2>
          <p className="font-medium text-[#9F9F9F]">
            {" "}
            - Founder,Best Product Seller
          </p>
        </div>
        {/* rayhan */}
        <div>
          <div className="bg-[#DEDEE0] h-[330px] relative profile overflow-hidden rounded-md">
            <img
              className="w-full bg-cover bg-center pt-5"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1730553088/444123884_963872892189590_7089574703253630609_n-removebg-preview_rnwf2l.png"
              alt=""
            />
            <div className="bg-[#DEDEE0] social-link flex justify-center py-3 gap-4 *:text-xl *:cursor-pointer absolute  w-full">
              <Link to={`https://x.com/Maybe_Kayum`} target="_blank">
                <FaTwitter />
              </Link>
              <Link to={`https://www.facebook.com/kayumxten/`} target="_blank">
                <RiFacebookCircleFill />
              </Link>
              <Link to={`https://www.instagram.com/kayumxten/`} target="_blank">
                <AiOutlineInstagram />
              </Link>
              <Link
                to={`https://www.linkedin.com/in/kaiumali/`}
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <h2 className="text-2xl font-bold pt-4 pl-2">Rayhan Rony</h2>
          <p className="font-medium text-[#9F9F9F]">
            {" "}
            - Founder,Delivary Managar
          </p>
        </div>
      </div>
      <div className="flex justify-center py-10">
        {/* mamuni*/}
        <div>
          <div className="bg-[#DEDEE0] h-[330px] relative profile overflow-hidden rounded-md">
            <img
              className="w-full bg-cover bg-center pt-5"
              src="https://res.cloudinary.com/dqescabbl/image/upload/v1730554385/Screenshot_10_d7bck8.png"
              alt=""
            />
            <div className="bg-[#DEDEE0] social-link flex justify-center py-3 gap-4 *:text-xl *:cursor-pointer absolute  w-full">
              <Link to={`https://x.com/Maybe_Kayum`} target="_blank">
                <FaTwitter />
              </Link>
              <Link to={`https://www.facebook.com/kayumxten/`} target="_blank">
                <RiFacebookCircleFill />
              </Link>
              <Link to={`https://www.instagram.com/kayumxten/`} target="_blank">
                <AiOutlineInstagram />
              </Link>
              <Link
                to={`https://www.linkedin.com/in/kaiumali/`}
                target="_blank"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <h2 className="text-2xl font-bold pt-4 pl-2">Kayum X Ten</h2>
          <p className="font-medium text-[#9F9F9F]">
            {" "}
            - Founder, Chief Creative
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
