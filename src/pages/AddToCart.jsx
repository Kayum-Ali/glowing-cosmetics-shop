import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddToCart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "AddToCart";
  }, []);
  const {
    user,
    // loading,
    setLoading,
    cartUpdate: [isCartUpdated, setIsCartUpdated],
  } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const totalPrice = data.reduce((acc, item) => acc + item.price, 0);
  //  console.log(totalPrice);

  useEffect(() => {
    // fetch("https://glowing-cosmetics-shop-server.vercel.app/addToCart")//-

    fetch(
      `https://glowing-cosmetics-shop-server.vercel.app/addToCart?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [user, isCartUpdated, setLoading]);
  // console.log(data);

  // Quantity বাড়ানোর ফাংশন
  const handleIncrease = (id) => {
    const updatedData = data.map((item) => {
      if (item.prodId === id) {
        const newQuantity = item.quantity + 1;

        // সার্ভারে আপডেট পাঠানো
        fetch(
          `https://glowing-cosmetics-shop-server.vercel.app/addToCart/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: newQuantity }),
          }
        )
          .then((res) => res.json())
          .then((data) => toast.success(data.message));

        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setData(updatedData);
  };

  // Quantity কমানোর ফাংশন
  const handleDecrease = (id) => {
    const updatedData = data.map((item) => {
      if (item.prodId === id && item.quantity > 1) {
        // Quantity 1 এর নিচে নামতে পারবে না
        const newQuantity = item.quantity - 1;

        // সার্ভারে আপডেট পাঠানো
        fetch(
          `https://glowing-cosmetics-shop-server.vercel.app/addToCart/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: newQuantity }),
          }
        )
          .then((res) => res.json())
          .then((data) => toast.success(data.message));

        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleDelete = (prodId, photo) => {
    const deleteData = {
      email: user?.email,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      imageUrl: `${photo}`,
      imageHeight: "100px",
      imageWidth: "100px",
      confirmButtonColor: "#82588D",
      cancelButtonColor: "#87AC52",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   delete fetch
        // setLoading(true);
        fetch(
          `https://glowing-cosmetics-shop-server.vercel.app/addToCart/${prodId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(deleteData),
          }
        )
          .then((response) => response.json())
          .then(({ message, data: { exists } }) => {
            // setLoading(false);
            if (exists) {
              toast.error(message);
            } else {
              toast.success(message);
              setIsCartUpdated(!isCartUpdated);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Products has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="flex items-center gap-x-3 relative">
        <img
          className="mx-auto lg:h-[400px]  lg:w-full"
          src="https://res.cloudinary.com/dqescabbl/image/upload/v1730877454/1_1920x_gk8nmu.webp"
          alt=""
        />

        {/* breadcumbs */}
        <div className="breadcrumbs absolute left-[10%] py-3 ">
          <h3 className="lg:text-5xl text-4xl font-bold my-5">Cart</h3>
          <ul className="container mx-auto flex justify-center">
            <li className="flex gap-2">
              <FaHome />
              <Link to={`/`}>Home</Link>{" "}
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      {data.length === 0 ? (
        <div className="text-center font-bold text-xl px-5 py-12">
          Your cart is currently <span className="text-red-500">empty!</span>{" "}
          Please add some products to the cart, and they will appear here.
        </div>
      ) : (
        <section className="container px-4 mx-auto lg:pt-12 py-6">
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 font-semibold text-left rtl:text-right text-xl "
                        >
                          {/* <div className='flex items-center gap-x-3'>
                        <span></span>
                      </div> */}
                          Product
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 font-semibold text-xl text-left rtl:text-right "
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 font-semibold text-xl text-left rtl:text-right "
                        >
                          Qty
                        </th>

                        <th className="px-4 py-3.5 font-semibold text-xl text-left rtl:text-right ">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {data.map((job) => (
                        <tr key={job._id} className="">
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            <div className="flex items-center gap-5 w-max">
                              <img className="size-20" src={job.photo} alt="" />
                              <h2 className="lg:text-xl text-sm font-bold">
                                {job.productName}
                              </h2>
                            </div>
                          </td>

                          <td className="px-4 py-4 font-semibold  whitespace-nowrap">
                            ${job.price}
                          </td>

                          <td>
                            {/* <input type="number" min="1" value={job.quantity} onChange={(e) => handleQuantityChange(e, job._id)} /> */}
                            {/* <input type="number" min="1" max={50} className="border-2 p-2 rounded-md"  /> */}
                            <div
                              key={job.prodId}
                              className="flex gap-3 border-2 rounded-md w-max px-3 py-2 bg-[#F5F5F5]"
                            >
                              <span
                                onClick={() => handleDecrease(job.prodId)}
                                className="cursor-pointer"
                              >
                                -
                              </span>
                              <span>{job.quantity}</span>
                              <span
                                onClick={() => handleIncrease(job.prodId)}
                                className="cursor-pointer"
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            ${job.price * job.quantity}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button
                                onClick={() =>
                                  handleDelete(job.prodId, job.photo)
                                }
                                className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* continue shopping */}
      <div className="container mx-auto px-5  my-5">
        <div className="flex justify-between">
          <div>
            <Link to={`/shop`}>
              <button className="bg-[#00766B] px-5 py-2.5 text-white rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
          <div>
            <button className="bg-[#00766B] px-5 py-2.5 text-white rounded-md">
              Update Cart
            </button>
          </div>
        </div>
        {totalPrice === 2000 ? (
          <div>
            Congratulations! You get free shipping with your order greater{" "}
            <span className="text-[#00766B]">$ 2000</span>
          </div>
        ) : (
          <div className="text-center mt-5">
            <p>
              Spend{" "}
              <span className="text-[#00766B]">$ {2000 - totalPrice}</span> more
              to reach FREE SHIPPING!
            </p>
            <p className="">
              to add more products to your cart and receive free shipping for
              order <span className="text-[#00766B]">$ 2000</span>
            </p>
          </div>
        )}
      </div>

      {/* apply coupon,  cart total and proced checkout */}
      <div className="container mx-auto px-5  my-5 grid grid-cols-3 gap-5">
        <div>
          <h3 className="text-xl font-bold">Coupon</h3>
          <div className=" mt-6">
            <input type="text" name="" id="" className="bg-[#F5F5F5] py-2.5 px-6 text-gray-900 rounded-tl-lg rounded-bl-lg" placeholder="Enter Your Coupon hare" />
            <button className="bg-[#007D71] text-white py-2.5 px-3 ">Apply Coupon</button>
          </div>
        </div>
        <div>
          <h2  className="text-xl font-bold">Cart Totals</h2>
          <hr className=" mt-6  border-black opacity-40" />
        </div>
        <div>
          <button className="bg-[#00766B] text-white py-2.5 rounded-md text-center w-full mt-5">Procced to checkout</button>
        </div>

      </div>
    </>
  );
};

export default AddToCart;
