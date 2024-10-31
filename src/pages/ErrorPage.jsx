import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      {/* breadcumbs */}
      <div className="breadcrumbs bg-[#FFC1CC] py-3 ">
        <ul className="container mx-auto flex justify-center">
          <li className="flex gap-2">
            <FaHome />
            <Link to={`/`}>Home</Link>{" "}
          </li>
          <li>Page Not Found</li>
         
        </ul>
      </div>

       <h2 className="text-center font-bold text-3xl">Page Not Found</h2>
       <div>
            <h3 className="bg-black text-4xl text-white text-center w-max">404</h3>
       </div>
    </div>
  );
};

export default ErrorPage;
