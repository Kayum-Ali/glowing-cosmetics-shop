import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { TbJewishStar } from "react-icons/tb";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user,logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const handleLogout = () =>{
  
    logout()
    .then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully logged out",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')

      
    })
  }

  useEffect(()=>{
    fetch('https://glowing-cosmetics-shop-server.vercel.app/addToCart')
    .then(res => res.json())
    .then(data => setData(data))
},[])

  return (
    <div className="font-medium bg-gradient-to-r from-[#E6E6FA] to-[#aed6f1] fixed top-0 w-full z-50 ">
      <nav className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {toggle ? (
                <RxCross1 onClick={() => setToggle(!toggle)} className="text-xl" />
              ) : (
                <RxHamburgerMenu  onClick={() => setToggle(!toggle)}  className="text-xl"
                />
              )}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content lg:bg-white bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                toggle || "hidden"
              }`}
            >
              {/* sm screen */}
              <li><NavLink to={`/`}>HOME</NavLink></li>
              <li className="page">
                <p>ELEMENT</p>
                <div className="w-[180px] h-[120px] text-white font-medium p-3 absolute top-4 left-20  pages">
                <div className="">
                  <li><Link to={`/video`} className="block"> Video</Link></li>
                  <li>{" "}<Link to={`/best-selling`} className="block">Best Selling Products</Link></li>
                  <li> <Link to={`/faq`} className="block"> FAQ </Link>
                  </li>
                </div>
              </div>
              </li>
              <li> <NavLink to={`/shop`}>SHOP</NavLink> </li>
              <li><NavLink to={`/blog`}>BLOG</NavLink> </li>
              <li className="page">
                <p>PAGE</p>
                {/* pages content */}
                <div className="w-[150px] h-[120px] text-white font-medium p-3 absolute  top-4 left-14 pages">
                  <div className="">
                    <li> <Link to={`/about-us`} className="block">About Us</Link>
                    </li>
                    <li> {" "}<Link to={`/contact`} className="block">Contact</Link>
                    </li>
                    <li><Link to={`/faq`} className="block"> FAQ</Link>
                    </li>
                  </div>
                </div>
              </li>
              <li><NavLink to={`/galary`}>GALARY</NavLink></li>
            </ul>
          </div>
          <Link to={`/`} className="lg:text-xl lg:font-bold font-medium text-[#C5A3FF]">
            Madina Bag
            {/* <img className="w-28" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730136673/WhatsApp_Image_2024-10-28_at_18.53.06_16c27229-removebg-preview_d4bfo5.png" alt="" /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* lg screen */}
            <li> <NavLink to={`/`}>HOME</NavLink> </li>
            <li className="page">
              <p>ELEMENT</p>
              {/* pages content */}
              <div className="w-[180px] h-[120px] text-white font-medium p-3 absolute bottom-0 top-9  pages">
                <div className="">
                  <li> <Link to={`/video`} className="block"> Video </Link> </li>
                  <li>{" "}<Link to={`/best-selling`} className="block">Best Selling Products</Link>      </li>
                  <li> <Link to={`/faq`} className="block"> FAQ </Link></li>
                </div>
              </div>
            </li>
            <li> <NavLink to={`/shop`}>SHOP</NavLink> </li>
            <li><NavLink to={`/blog`}>BLOG</NavLink></li>
            <li className="page">
              <p>PAGE</p>
              {/* pages content */}
              <div className="w-[150px] h-[120px] text-white font-medium p-3 absolute bottom-0 top-9  pages">
                <div className="">
                  <li><Link to={`/about-us`} className="block"> About Us </Link>
                  </li>
                  <li> {" "}<Link to={`/contact`} className="block">Contact</Link>
                  </li>
                  <li><Link to={`/faq`} className="block"> FAQ</Link></li>
                </div>
              </div>
            </li>
            <li><NavLink to={`/galary`}>GALARY</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end text-2xl flex lg:gap-8 gap-3 font-bold text-[#4e7661]">
          <div>
            <CiSearch className="" />
          </div>
          <NavLink
            to={`/login`}
            className={`tooltip  tooltip-left dropdown  `}
            data-tip={`${user ? user.email : "login"}`}
          >
            <GoPerson className="" />
            <ul
              tabIndex={0}
              
              className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${user || 'hidden'}`}
            >
              <li className="flex justify-between">
                <p>Setting</p>
              </li>
              <li><p onClick={handleLogout}>Logout</p></li>
            </ul>
          </NavLink>
          <div className="flex relative">
            <TbJewishStar className="wishlist " />
            <span className="absolute -top-3 text-center text-white -right-2 bg-black h-[20px] overflow-hidden text-sm w-[20px] rounded-full mx-auto">
              0
            </span>
          </div>
          <NavLink to={`/addToCart`} className="flex relative">
            <PiShoppingBagOpenBold  className=""/>
            <span className="absolute -top-3 text-center text-white -right-2 bg-black h-[20px] overflow-hidden text-sm w-[20px] rounded-full mx-auto">
              {data.length}
            </span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
