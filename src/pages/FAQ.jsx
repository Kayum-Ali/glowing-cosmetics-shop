import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQ = () => {
  
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "FAQ";
  },[])
  return (
    <div className="">
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
      <div className="flex gap-10 container mx-auto lg:py-16 py-8 px-5 flex-col lg:flex-row">
        {/* left side */}
        <div className=" lg:w-40">
          <h1 className="text-2xl font-bold lg:mr-6">Orders & Shipping</h1>
        </div>
        {/* right side */}
        <div className="lg:w-3/5 flex-1">
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

      {/* 2nd FAq */}
      <div className="flex gap-10 container mx-auto lg:py-12 py-8 px-5 flex-col lg:flex-row">
        {/* left side */}
        <div  className=" lg:w-40">
          <h1 className="text-2xl font-bold">Returns & Exchanges</h1>
        </div>
        {/* right side */}
        <div className="lg:w-3/5 flex-1">
        {/* 1st */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             How do I know my package has shipped?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 2nd */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             Why are certain products unavailable to ship to Internationally?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 3rd */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             Why is my tracking number not updating?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
        
        </div>
         

        
      </div>

      {/* img div grid*/}
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 container mx-auto w-full px-5 my-12">
        <div className="lg:col-span-4 bg-[#F6EFF7] px-12 py-16 w-full rounded-lg space-y-4">
           <h2 className="lg:text-5xl text-3xl font-bold">25% off Everything</h2>
           <p>Makeup with extended range in colors for every human</p>
           <button className=" text-white font-bold rounded-md hover:bg-black duration-300 bg-[#82588D] px-12 py-2.5">Shop Sale</button>
        </div>
        <div className="lg:col-span-8 overflow-hidden rounded-md">
            <img className="w-full lg:h-[450px] transform scale-100 hover:scale-110 duration-700" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730290691/banner-48_k8tm52.jpg" alt="" />
        </div>
           
      </div>

      {/* img div grid lg hidden*/}
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 lg:hidden container mx-auto w-full px-5 my-12">
        <div className="lg:col-span-4  px-12 py-16 w-full rounded-lg space-y-4">
           <h2 className="lg:text-5xl text-3xl font-bold">Get The Skin You Want To Feel</h2>
           <p>Makeup with extended range in colors for every human</p>
           <button className=" text-white font-bold rounded-md hover:bg-black duration-300 bg-[#82588D] px-12 py-2.5">Shop Sale</button>
        </div>
        <div className="lg:col-span-8 overflow-hidden rounded-md">
            <img className="w-full lg:h-[450px] transform scale-100 hover:scale-110 duration-700" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730295183/banner-49_xvkal7.jpg" alt="" />
        </div>
           
      </div>
      {/* img div sm hidden */}
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 container mx-auto w-full px-5 my-12">
        <div className="lg:col-span-8 overflow-hidden rounded-md">
            <img className="w-full lg:h-[450px] transform scale-100 hover:scale-110 duration-700" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730295183/banner-49_xvkal7.jpg" alt="" />
        </div>
        <div className="lg:col-span-4  px-8 py-16 w-full rounded-lg space-y-4">
           <h2 className="lg:text-4xl text-3xl font-bold">Get The Skin You Want To Feel</h2>
           <p>Makeup with extended range in colors for every human</p>
           <button className=" text-white font-bold rounded-md hover:bg-black duration-300 bg-[#82588D] px-12 py-2.5">Shop Sale</button>
        </div>
       
           
      </div>

       {/* 2nd FAq */}
       <div className="flex gap-10 container mx-auto lg:py-12 py-8 px-5 flex-col lg:flex-row">
        {/* left side */}
        <div  className=" lg:w-40">
          <h1 className="text-2xl font-bold">Discounts</h1>
        </div>
        {/* right side */}
        <div className="lg:w-3/5 flex-1">
        {/* 1st */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             How do I know my package has shipped?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 2nd */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             Why are certain products unavailable to ship to Internationally?

            </div>
              <div className="collapse-content space-y-3">
            <p>tabindex={0}Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.</p>
            <p>Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.</p>
            </div>
          </div>
          {/* 3rd */}
           <div tabIndex={0} className="collapse collapse-arrow border-base-300  border">
             <div className="collapse-title text-xl font-medium">
             Why is my tracking number not updating?

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
