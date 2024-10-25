import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to={`/`}>HOME</NavLink></li>
    <li><NavLink to={`/element`}>ELEMENT</NavLink></li>
    <li><NavLink to={`/b`}>SHOP</NavLink></li>
    <li><NavLink to={`/v`}>BLOG</NavLink></li>
    <li><NavLink to={`/j`}>PAGE</NavLink></li>
   
    </>
  return (
    <nav className="container mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >  
            {navLinks}
             
            </ul>
          </div>
          <a className="text-xl">GLOWING</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
