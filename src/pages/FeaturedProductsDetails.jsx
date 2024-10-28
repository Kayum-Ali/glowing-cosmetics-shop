import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";

const FeaturedProductsDetails = () => {
  const products = useLoaderData();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [activeIMG, setActiveIMG] = useState(products.img);
  window.scrollTo({ top: 80, behavior: "smooth" });
  const handleClear = () => {
    setSize("");
    setColor("");
  };
  //   console.log(active)
  console.log(products);
  return (
    <div>
      <div className="breadcrumbs bg-[#FFC1CC] py-3 ">
        <ul className="container mx-auto flex justify-center">
          <li className="flex gap-2">
          <FaHome />
            <Link to={`/`}>Home</Link>{" "}
          </li>
          <li>{products.category}</li>
          <li>{products.productName}</li>
        </ul>
      </div>

      {/* product details */}
      <div className="flex flex-col lg:flex-row md:flex-row container mx-auto gap-14 py-16 px-5">
        <div className="flex-1">
          <img className="w-full h-[600px]" src={activeIMG} alt="" />
          <div className="flex gap-5 mt-3">
              <img onClick={()=> setActiveIMG(products.img)} className="lg:w-32 w-24 hover:border-2 hover:border-[#FFC1CC] rounded-lg" src={products.img} alt="" />
              <img onClick={()=> setActiveIMG(products.hoverImg)} className="lg:w-32 w-24 hover:border-2 hover:border-[#FFC1CC] rounded-lg" src={products.hoverImg} alt="" />
              <img onClick={()=> setActiveIMG(products.extraImg[0])} className="lg:w-32 w-24  hover:border-2 hover:border-[#FFC1CC] rounded-lg" src={products.extraImg[0]} alt="" />

          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex gap-3">
            <h2 className="text-xl font-bold">${products.price}</h2>
            <p className="bg-[#4E7661] text-white font-bold px-3 rounded-md">
              -{products.discountPersentage}%
            </p>
          </div>
          {/* product name */}
          <h2 className="lg:text-3xl text-2xl font-bold">{products.productName} </h2>
          {/* rating and review */}
          <div className="flex  items-center gap-3">
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              color1={"#4E7661"}
            />
            <h2 className="opacity-70 hover:opacity-100">
              {" "}
              | (5 customer review)
            </h2>
          </div>
          {/* description */}
          <p className="text-lg font-medium">{products.description}</p>
          {/* color */}
          <div className="flex gap-3 items-center">
            <label htmlFor="color" className="text-2xl font-bold">
              Color :
            </label>
            <select
              onChange={(e) => setColor(e.target.value)}
              value={color}
              id="color"
              className="select border-2 border-[#4E7661] text-black font-medium lg:w-full lg:max-w-64"
            >
              <option selected>Choose an option</option>
              <option>Blue</option>
              <option>Red</option>
              <option>Green</option>
              <option>Gray</option>
              <option>yellow</option>
            </select>
          </div>
          {/* size */}
          <div className="flex gap-3 items-center">
            <label htmlFor="size" className="text-2xl font-bold w-16">
              Size :
            </label>
            <select
              onChange={(e) => setSize(e.target.value)}
              value={size}
              id="size"
              className="select border-2 border-[#4E7661] text-black font-medium lg:w-full lg:max-w-64"
            >
              <option selected>Choose an option</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
            <button
              className={`${
                ( size) === "" && "hidden"
              } bg-[#4E7661] text-white font-bold px-3 rounded-md py-2.5  `}
              onClick={handleClear}
            >
              clear
            </button>
          </div>

          {/* all price here */}
          <div>{size == "Small" && <h2 className="text-xl font-bold">{products.smallPrice}</h2>}</div>
          <div>{size == "Medium" && <h2 className="text-xl font-bold">{products.price}</h2>}</div>
          <div>{size == "Large" && <h2 className="text-xl font-bold">{products.largePrice}</h2>}</div>
          <div>{size == "Extra Large" && <h2 className="text-xl font-bold">{products.extraLargePrice}</h2>}</div>
          {/* quantity */}
          <h2 className="text-xl font-bold">Quantity </h2>
          {/* add to cart */}
          <div className="flex gap-5">
              <button className="bg-[#F8D7DA] hover:bg-[#FFC1CC] duration-300 lg:px-20 px-10 md:px-10 py-4 rounded-lg font-bold">1</button>
              <button className="bg-[#4E7661] hover:bg-black duration-300 px-16 py-4 text-white  rounded-lg font-bold ">Add To Cart</button>
          </div>
          {/* add to wishlist */}
          <Link to={``} className=" flex items-center gap-2 text-xl font-bold ">
            <IoStarOutline></IoStarOutline>
            <h2 className="">Add to wishlist</h2>
              
          </Link>

          <hr className=""/>
          {/* sku category, tags share */}
          <div className="space-y-2">
             <div className="flex items-center gap-10">
                <h2 className="text-black font-bold w-20">SKU : </h2>
                <p>{products.SKU}</p>
             </div>
             <div className="flex items-center gap-10">
                <h2 className="text-black font-bold w-20">Category : </h2>
                <p>{products.category}</p>
             </div>
             <div className="flex items-center gap-10">
                <h2 className="text-black font-bold w-20">Tags : </h2>
                <p>{products.Tags.map((item,idx)=>{
                   return <span key={idx}>{item} </span>
 
                })}</p>
             </div>
             <div className="flex gap-10 ">
                 <h2 className="text-black font-bold w-20">Share : </h2>
                 <div className="flex gap-3 opacity-70">
                     <a href={``} className=" ">
                         <FaFacebookF ></FaFacebookF>
                     </a>
                     <a href={``} className=" ">
                         <FaInstagram></FaInstagram>
                     </a>
                     <a href={``} className=" ">
                         <FaTwitter></FaTwitter>
                     </a>
                 </div>
             </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsDetails;
