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

       <h2 className="text-center font-bold text-3xl py-12">Page Not Found</h2>
       <div className="flex justify-center">
            <h3 className=" font-bold text-8xl text-center w-max">404</h3>
       </div>
       <p className="text-center text-xl pt-10">Oops! That page can’t be found.</p>
       <p className="text-center opacity-80">Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.</p>
       <Link to={`/`} className="bg-[#4E7661] text-white block text-center w-max mx-auto px-8 py-2.5 mt-10 rounded-md">Go to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
