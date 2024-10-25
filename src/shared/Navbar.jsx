import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { TbJewishStar } from "react-icons/tb";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const navLinks = (
    <>
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
      <li>
        <NavLink to={`/page`}>PAGE</NavLink>
      </li>
    </>
  );
  return (
    <div className=" font-medium ">
      <div className="navbar bg-base-200 lg:bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {
                toggle? (
                  <RxCross1 onClick={()=>setToggle(!toggle)}  className="text-xl"/>
                ) : (
                  <RxHamburgerMenu  onClick={()=>setToggle(!toggle)} className="text-xl" />
                )
              }
            
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content lg:bg-white bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow ${toggle || 'hidden'}`}
            >
              {navLinks}
            </ul>
          </div>
          <Link to={`/`} className="text-xl font-bold text-[#4e7661]">GLOWING</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end text-2xl flex lg:gap-8 gap-5 font-bold text-[#4e7661]">
          <div>
            <CiSearch />
          </div>
          <div >
            <GoPerson />
          </div>
          <div className="flex relative">
            <TbJewishStar className="wishlist" />
            <span className="absolute -top-3 text-center text-white -right-2 bg-black h-[20px] overflow-hidden text-sm w-[20px] rounded-full mx-auto">0</span>
          </div>
          <div  className="flex relative">
            <PiShoppingBagOpenBold />
            <span className="absolute -top-3 text-center text-white -right-2 bg-black h-[20px] overflow-hidden text-sm w-[20px] rounded-full mx-auto">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
