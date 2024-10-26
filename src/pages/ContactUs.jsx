import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full lg:h-[400px] bg-center bg-cover"
          src="https://res.cloudinary.com/dqescabbl/image/upload/v1729940264/high-angle-beauty-products-with-copy-space_haiuf3.jpg"
          alt=""
        />
            <div className="breadcrumbs text-xl font-medium text-gray-800 absolute top-5   left-1/2  -translate-x-1/2">
                <ul>
                    <li>
                    <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                    <p>Page</p>
                    </li>
                    <li>Contact Us</li>
                </ul>
            </div>
      </div>
      {/* get in touch section */}


    </div>
  );
};

export default ContactUs;
