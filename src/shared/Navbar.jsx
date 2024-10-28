import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { TbJewishStar } from "react-icons/tb";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="font-medium bg-gradient-to-r from-[#E6E6FA] to-[#aed6f1] fixed top-0 w-full z-50 ">
      <nav className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {toggle ? (
                <RxCross1
                  onClick={() => setToggle(!toggle)}
                  className="text-xl"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setToggle(!toggle)}
                  className="text-xl"
                />
              )}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content lg:bg-white bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                toggle || "hidden"
              }`}
            >
              <li>
                <NavLink to={`/`}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={`/element`}>ELEMENT</NavLink>
              </li>
              <li>
                <NavLink to={`/shop`}>SHOP</NavLink>
              </li>
              <li>
                <NavLink to={`/blog`}>BLOG</NavLink>
              </li>
              <li className="page">
                <p  to={`/page`}>
                  PAGE
                </p>
                {/* pages content */}
              <div className="w-[150px] h-[120px] text-white font-medium p-3 absolute  top-4 left-14 pages">
                <div className="">
                  
                <li><Link to={`/about-us`} className="block">About Us</Link></li>
                <li> <Link to={`/contact`} className="block">Contact</Link></li>
                <li><Link to={`/faq`} className="block">FAQ</Link></li>

                </div>
               
              </div>
              </li>
              <li>
                <NavLink to={`/galary`}>GALARY</NavLink>
              </li>
            </ul>
          </div>
          <Link to={`/`} className="text-xl font-bold text-[#C5A3FF]">
             GLOWING
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={`/`}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={`/element`}>ELEMENT</NavLink>
            </li>
            <li>
              <NavLink to={`/shop`}>SHOP</NavLink>
            </li>
            <li>
              <NavLink to={`/blog`}>BLOG</NavLink>
            </li>
            <li className="page">
              {/* <NavLink to={`/page`}>PAGE</NavLink> */}
              <p>PAGE</p>

              {/* pages content */}
              <div className="w-[150px] h-[120px] text-white font-medium p-3 absolute bottom-0 top-9  pages">
                <div className="">
                  
                <li><Link to={`/about-us`} className="block">About Us</Link></li>
                <li> <Link to={`/contact`} className="block">Contact</Link></li>
                <li><Link to={`/faq`} className="block">FAQ</Link></li>

                </div>
               
              </div>
            </li>
            <li>
                <NavLink to={`/galary`}>GALARY</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end text-2xl flex lg:gap-8 gap-5 font-bold text-[#4e7661]">
          <div>
            <CiSearch />
          </div>
          <div>
            <GoPerson />
          </div>
          <div className="flex relative">
            <TbJewishStar className="wishlist" />
            <span className="absolute -top-3 text-center text-white -right-2 bg-black h-[20px] overflow-hidden text-sm w-[20px] rounded-full mx-auto">
              0
            </span>
          </div>
          <div className="flex relative">
            <PiShoppingBagOpenBold />
            <span className="absolute -top-3 text-center text-white -right-2 bg-black h-[20px] overflow-hidden text-sm w-[20px] rounded-full mx-auto">
              0
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
