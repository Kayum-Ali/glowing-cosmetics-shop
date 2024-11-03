import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <div className="">
      {/* banner img */}
      <div className="relative w-full">
        <img className="w-full h-[130px] lg:h-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730630434/bg-breadcrumb_ou5r9k.jpg"
          alt="Shop Banner"/>
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 ">
          <h2 className="lg:text-4xl text-2xl font-bold ">Shop</h2>
          {/* breadcumbs */}
          <div className="breadcrumbs  ">
            <ul className="">
              <li className="flex gap-2">
                <FaHome />
                <Link to={`/`}>Home</Link>{" "}
              </li>
              <li>shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
