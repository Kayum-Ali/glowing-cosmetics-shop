import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      {/* breadcumbs */}
      <div className="breadcrumbs bg-[#FFC1CC] py-3 ">
        <ul className="container mx-auto flex justify-center">
          <li className="flex gap-2">
            <FaHome />
            <Link to={`/`}>Home</Link>{" "}
          </li>
          <li>Page</li>
          <li>Frequently Asked Questions</li>
        </ul>
      </div>

      {/*  */}
      <h2 className="lg:text-3xl text-2xl text-center py-8 font-bold">Frequently Asked Questions</h2>
      <div className="container mx-auto px-5">
           <div className="h-[500px]">
              <img className="lg:h-[500px] w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730207170/freepik__upload__86565_zit2yk.jpg" alt="" />
           </div>
      </div>
    </div>
  );
};

export default FAQ;
