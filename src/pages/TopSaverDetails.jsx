import { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ReactStars from "react-stars";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TopSaverDetails = () => {
  const { user, data, setData, refetc,setRefetc } = useContext(AuthContext);
  const photo = user.photoURL;
  const products = useLoaderData();
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [activeIMG, setActiveIMG] = useState(products.img);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState([]);
  const [refetch, setRefetch] = useState(false);
  // console.log(typeof review[0].rating);

  const handleClear = () => {
    setSize("");
    setColor("");
  };

  // dynamic title
  useEffect(() => {
    window.scrollTo({ top: 80, behavior: "smooth" });
    document.title = "Top Saver Details";
  }, []);
  // fetch review
  useEffect(() => {
    fetch("https://glowing-cosmetics-shop-server.vercel.app/top-Saver-Review", {
      withCredentials: true,
    })
      .then((response) => response.json())
      .then((review) => setReview(review));
  }, [refetch]);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (rating === 0) {
      return toast.error("Please select a rating");
    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    const newReview = { name, email, review, rating, photo, formattedDate };

    console.log(newReview);
    fetch("https://glowing-cosmetics-shop-server.vercel.app/top-Saver-Review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Your Review Submitted successfully");

          setRefetch(!refetch);
          // setReview([...review, newReview]);
          form.reset();
        }
      });
  };

  // handleaddToCart
  const handleAddToCart = () => {
    let added = [];
    for (let item of data) {
      if (item.productName === products.productName) {
        added.push(item);
      }
    }
    console.log(added);
    if (added.length > 0) {
       return toast.error('Item is already Added in the cart')

    }

    const cartData = {
      productName: products.productName,
      price: products.discountPrice,
      quantity: 1,
      photo: products.img,
      email: user.email,
    };
    fetch("http://localhost:5000/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(" added to Cart Successfully");
          setData(...data, cartData)
          setRefetc(!refetc);
        }
      });
  };

  return (
    <div>
      {/* breadcumbs */}
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
      <div className="flex flex-col lg:flex-row md:flex-row container mx-auto gap-14 lg:py-16 py-3 md:py-14 px-5">
        <div className="flex-1">
          <img className="w-full lg:h-[400px] h-auto" src={activeIMG} alt="" />
          <div className="flex flex-wrap lg:gap-5 gap-2 mt-3">
            <img
              onClick={() => setActiveIMG(products.img)}
              className="lg:w-32 w-20 hover:border-2 hover:border-[#FFC1CC] rounded-lg"
              src={products.img}
              alt=""
            />
            <img
              onClick={() => setActiveIMG(products.hoverImg)}
              className="lg:w-32 w-20 hover:border-2 hover:border-[#FFC1CC] rounded-lg"
              src={products.hoverImg}
              alt=""
            />
            <img
              onClick={() => setActiveIMG(products.extraImg[0])}
              className="lg:w-32 w-20  hover:border-2 hover:border-[#FFC1CC] rounded-lg"
              src={products.extraImg[0]}
              alt=""
            />
            <img
              onClick={() => setActiveIMG(products.extraImg[1])}
              className="lg:w-32 w-20  hover:border-2 hover:border-[#FFC1CC] rounded-lg"
              src={products.extraImg[1]}
              alt=""
            />
            <img
              onClick={() => setActiveIMG(products.extraImg[2])}
              className="lg:w-32 w-20  hover:border-2 hover:border-[#FFC1CC] rounded-lg"
              src={products.extraImg[2]}
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex gap-3">
            <div className="flex gap-2">
              <h2 className="text-xl text-gray-300 line-through font-bold">
                ${products.price}
              </h2>
              <h2 className="text-xl font-bold">${products.discountPrice}</h2>
            </div>
            <p className="bg-[#4E7661] text-white font-bold px-3 rounded-md">
              -{products.discountPersentage}%
            </p>
          </div>
          {/* product name */}
          <h2 className="lg:text-3xl text-2xl font-bold">
            {products.productName}{" "}
          </h2>
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
              | ({review.length} customer review)
            </h2>
          </div>
          {/* description */}
          <p className="text-lg font-medium">
            {products.description.slice(0, 50)}
          </p>
          {/* stock and sold */}
          <div className="flex gap-3 items-center">
            <p className="text-[#007D71]"> {products.stock} In stock</p>
            <p className=" ">Sold: {products.sold}</p>
          </div>
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
          <div className="flex lg:gap-3 gap-2 items-center">
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
                size === "" && "hidden"
              } bg-[#4E7661] text-white  text-xs lg:text-base lg:font-bold px-3 rounded-md py-2.5  `}
              onClick={handleClear}
            >
              clear
            </button>
          </div>

          {/* all price here */}
          <div>
            {size == "Small" && (
              <h2 className="text-xl font-bold">{products.smallPrice}</h2>
            )}
          </div>
          <div>
            {size == "Medium" && (
              <h2 className="text-xl font-bold">{products.price}</h2>
            )}
          </div>
          <div>
            {size == "Large" && (
              <h2 className="text-xl font-bold">{products.largePrice}</h2>
            )}
          </div>
          <div>
            {size == "Extra Large" && (
              <h2 className="text-xl font-bold">{products.extraLargePrice}</h2>
            )}
          </div>
          {/* quantity */}
          <h2 className="text-xl font-bold">Quantity </h2>
          {/* add to cart */}
          <div className="flex gap-5">
            <button className="bg-[#F8D7DA] hover:bg-[#FFC1CC] duration-300 lg:px-20 px-8 md:px-10 py-4 rounded-lg font-bold">
              1
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-[#4E7661] hover:bg-black duration-300 lg:px-16 px-10 py-4 text-white  rounded-lg font-bold "
            >
              Add To Cart
            </button>
          </div>
          {/* add to wishlist */}
          <Link to={``} className=" flex items-center gap-2 text-xl font-bold ">
            <IoStarOutline></IoStarOutline>
            <h2 className="">Add to wishlist</h2>
          </Link>

          <hr className="" />
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
              <p>
                {products.Tags.map((item, idx) => {
                  return <span key={idx}>{item} </span>;
                })}
              </p>
            </div>
            <div className="flex items-center gap-10">
              <h2 className="text-black font-bold w-20">Brand : </h2>
              <p>{products.brand}</p>
            </div>

            <div className="flex gap-10 ">
              <h2 className="text-black font-bold w-20">Share : </h2>
              <div className="flex gap-3 opacity-70">
                <a href={``} className=" ">
                  <FaFacebookF></FaFacebookF>
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
          <hr className="" />
          {/* safe checkout */}
          <fieldset className="border-2 text-center border-[#885E5E] rounded-md">
            <legend className="bg-[#885E5E] text-white lg:font-bold py-1 px-2 rounded-lg">
              Guaranteed SAFE Checkout
            </legend>
            <div className="flex  justify-center my-5">
              <img
                className="lg:w-3/5 w-4/5 "
                src="https://res.cloudinary.com/dqescabbl/image/upload/v1730709199/safe-checkout_3_miogt1.png"
                alt=""
              />
            </div>
            {/* free, 100%, 30 day */}
            <div className="bg-[#885E5E] text-white flex flex-col lg:flex-row md:flex-row  px-5 gap-5 py-5 justify-center">
              <div>
                <h3 className="font-bold">Free</h3>
                <p>Worldwide Shopping</p>
              </div>
              <div>
                <h3 className="font-bold">100%</h3>
                <p>Guaranteed Satisfaction</p>
              </div>
              <div>
                <h3 className="font-bold">30 Day</h3>
                <p>Guaranteed Money Back</p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      {/* description, info, reviews */}
      <div className="text-center text-sm lg:text-xl container mx-auto ">
        <Tabs>
          <TabList>
            <Tab>
              <h2 className="font-bold">Description</h2>
            </Tab>
            <Tab>
              <h2 className="font-bold">Additional Information</h2>
            </Tab>
            <Tab>
              <h2 className="font-bold">Reviews({review.length})</h2>
            </Tab>
          </TabList>

          <TabPanel className={`w-2/3 mx-auto`}>
            <h2>
              Achieve a flawless complexion with our Radiant Glow Foundation.
              This lightweight, buildable formula offers medium to full
              coverage, perfect for everyday wear or special occasions. Infused
              with skin-loving ingredients, it hydrates and nourishes while
              providing a natural, luminous finish.
            </h2>
          </TabPanel>
          <TabPanel className={`lg:w-2/3 mx-auto`}>
            <div>
              <div className="flex justify-between px-5">
                <h2>Color</h2>
                <div className="flex lg:gap-5 gap-3">
                  <p>Blue</p>
                  <p>Green</p>
                  <p>Red</p>
                  <p>yellow</p>
                  <p>Gray</p>
                </div>
              </div>
              <hr className="my-5" />
              <div className="flex justify-between px-5">
                <h2>Size</h2>
                <div className="flex lg:gap-5 gap-3">
                  <p>Small</p>
                  <p>Medium</p>
                  <p>Large</p>
                  <p>Extra Large</p>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="px-3">
              <h2 className="font-bold flex justify-start">
                {review.length} review for {products.productName}
              </h2>
              {/* right side */}
              <div className="">
                {review.map((rev, idx) => (
                  <div
                    className="flex gap-5 items-center  lg:space-y-8 space-y-5"
                    key={idx}
                  >
                    <div className="w-24 rounded-full">
                      <img
                        src={
                          rev?.photo
                            ? rev?.photo
                            : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        className="rounded-full"
                        alt="user Image"
                      />
                    </div>

                    <div className="text-start lg:space-y-2 space-y-1">
                      {/* react star rating */}
                      <div className="text-sm">
                        <StarRatings
                          starRatedColor="yellow"
                          starEmptyColor="#4e7661"
                          changeRating={changeRating}
                          numberOfStars={rev.rating}
                          name="rating"
                          starDimension="20px"
                          starSpacing="5px"
                        />
                      </div>
                      {/* userName and date */}
                      <div className="lg:flex items-center gap-2">
                        <h2 className="font-bold">{rev.name}-</h2>
                        <p className="text-sm opacity-90">
                          {rev.formattedDate}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-sm ">{rev.review}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* add review */}
              <div className="lg:w-2/3 md:w-2/3  mx-auto my-10 px-8 md:px-3 lg:px-0">
                <h2 className="text-xl font-bold">Add a review</h2>
                <p className="text-sm opacity-80">
                  Your email address will not be published. Required fields are
                  marked *
                </p>

                {/* rating form */}
                <form
                  onSubmit={handleReview}
                  className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-5"
                >
                  <div className="text-start lg:col-span-6">
                    <label htmlFor="name" className="block font-medium">
                      Name{" "}
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="bg-slate-300 focus:border-2 focus:border-green-500  outline-none py-1 px-4 rounded-md focus:bg-white duration-300 w-full"
                    />
                  </div>
                  <div className="text-start lg:col-span-6">
                    <label htmlFor="email" className="block font-medium">
                      Email{" "}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      required
                      className="bg-slate-300 focus:border-2 focus:border-green-500  outline-none py-1 px-4 rounded-md focus:bg-white duration-300 w-full"
                    />
                  </div>
                  <div className="text-start lg:col-span-12">
                    <label htmlFor="review" className="block font-medium">
                      Your Review{" "}
                    </label>
                    <textarea
                      name="review"
                      id="review"
                      cols="30"
                      required
                      className="bg-slate-300 focus:border-2 focus:border-green-500  outline-none py-1 px-4 rounded-md focus:bg-white duration-300 w-full"
                    ></textarea>
                  </div>
                  <div className="text-start lg:col-span-12">
                    <label htmlFor="rating" className="block font-medium">
                      Your Rating{" "}
                    </label>
                    <StarRatings
                      rating={rating}
                      starRatedColor="gold"
                      changeRating={changeRating}
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="5px"
                    />
                  </div>
                  <div className=" text-center mx-auto">
                    <button
                      type="submit"
                      className="text-white font-bold rounded-md hover:bg-black duration-300 bg-[#82588D] px-12 py-2.5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TopSaverDetails;
