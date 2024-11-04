import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const BestSelling = () => {
  useEffect(()=>{
    window.scrollTo({ top: 80, behavior: "smooth" });
    document.title = "Best Selling Products";
  },[])
    return (
        <div>
           {/* banner img */}
      <div className="relative w-full">
        <img
          className="w-full h-[120px] lg:h-auto"
          src="https://res.cloudinary.com/dqescabbl/image/upload/v1730651184/breadcrumb-page_vt2aqg.jpg"
          alt="Shop Banner"
        />
        <div className="absolute top-1/2 left-[10%]  -translate-y-1/2 ">
          <h2 className="lg:text-4xl text-2xl font-bold ">Best Selling Products</h2>
          {/* breadcumbs */}
          <div className="breadcrumbs  ">
            <ul className="text-xs lg:text-base md:text-base">
              <li className="flex gap-2">
                <FaHome />
                <Link to={`/`}>Home</Link>{" "}
              </li>
              <li>Element</li>
              <li>Best Selling Products </li>
            </ul>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default BestSelling;