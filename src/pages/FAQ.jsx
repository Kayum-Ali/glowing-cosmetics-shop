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
      <h2 className="lg:text-3xl text-2xl text-center py-8 font-bold">
        Frequently Asked Questions
      </h2>
      <div className="container mx-auto px-5 ">
        <div className="">
          <img
            className="lg:h-[500px] w-full"
            src="https://res.cloudinary.com/dqescabbl/image/upload/v1730207170/freepik__upload__86565_zit2yk.jpg"
            alt=""
          />
        </div>
      </div>

      {/*1st faq */}
      <div className="flex gap-5 container mx-auto py-12 px-5 flex-col lg:flex-row">
        {/* left side */}
        <div>
          <h1 className="text-2xl font-bold">Orders & Shipping</h1>
        </div>
        {/* right side */}
        <div>
        {/* 1st */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
                 How did my package ship?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 2nd */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             Why does my USPS tracking number state 1-Day, 2-Day, 3-Day Delivery?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 3rd */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             How long will my package take to arrive?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 4th */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
                What are business days?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 5th */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
               How do I know my package has shipped?


            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          

        </div>
         

        
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
