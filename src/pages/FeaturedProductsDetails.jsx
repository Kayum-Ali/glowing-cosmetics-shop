import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";

const FeaturedProductsDetails = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="breadcrumbs bg-[#FFC1CC] py-3 ">
        <ul className="container mx-auto flex justify-center">
          <li>
            <Link to={`/`}>Home</Link>{" "}
          </li>
          <li>{products.category}</li>
          <li>{products.productName}</li>
        </ul>
      </div>

      {/* product details */}
      <div className="flex flex-col lg:flex-row container mx-auto gap-14 py-16">
        <div className="flex-1">
          <img className="w-full" src={products.img} alt="" />
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex gap-3">
            <h2 className="text-xl font-bold">${products.price}</h2>
            <p className="bg-[#4E7661] text-white font-bold px-3 rounded-md">
              -{products.discountPersentage}%
            </p>
          </div>
          {/* product name */}
          <h2 className="text-3xl font-bold">{products.productName} </h2>
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
            <label htmlFor="color" className="text-2xl font-bold">Color :</label>
            <select id="color" className="select border-2 border-[#4E7661] text-black font-medium w-full max-w-xs">
              <option  selected>
                Choose an option
              </option>
              <option>Blue</option>
              <option>Red</option>
              <option>Green</option>
              <option>Gray</option>
              <option>yellow</option>
            </select>
          </div>
          {/* size */}
          <div className="flex gap-3 items-center">
              <label htmlFor="size" className="text-2xl font-bold w-16">Size :</label>
              <select id="size" className="select border-2 border-[#4E7661] text-black font-medium w-full max-w-xs">
                <option  selected>
                  Choose an option
                </option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsDetails;
