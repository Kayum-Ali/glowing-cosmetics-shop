import "../styles/AboutUs.css";
const AboutUsPage = () => {
  return (
    <div>
      <div className="bg1 w-full lg:h-[600px] h-[300px] bg-cover bg-center relative">
        <div className="absolute top-1/2 lg:left-24 md:left-16 left-5 -translate-y-1/2 lg:space-y-5 space-y-2">
          <h2 className="text-gray-800 font-medium text-xl">INTRODUCING</h2>
          <h2 className="lg:text-6xl text-2xl text-gray-800 font-bold">
            About Glowing
          </h2>
        </div>
      </div>

      {/* about us healthy glow */}
      <div className="text-center  lg:my-20 my-14 space-y-3 px-10">
          <img className="mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729876367/image-box-11_z9ykt6.jpg" alt="" />
          <h2 className="lg:text-4xl text-3xl text-gray-800 font-bold mx-auto lg:w-[600px]">We strive to live with compassion, kindness and empathy</h2>
          <p className="lg:w-1/2 mx-auto  text-gray-800 opacity-80 font-medium">A lot of so-called stretch denim pants out there are just glorified sweatpants – they get baggy and lose their shape. Not cool. Our tightly knitted fabric holds its form after repeated wear. Plus, Aldays dress up or down, no prob. So you can wear them all day. Get it?</p>
      </div>
      {/* our mistion section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-16 container mx-auto lg:mb-16 mb-10">
          <div className="overflow-hidden">
              <img  className="transform scale-100 hover:scale-110 duration-700 w-full"  src="https://res.cloudinary.com/dqescabbl/image/upload/v1729877349/banner-11_l3sz4c.jpg" alt="" />
          </div>
          <div className="lg:p-20 p-10 md:p-10 flex flex-col">
             <h2 className="lg:text-4xl text-3xl font-bold text-gray-800">Give your skin a healthy</h2>
             <h2 className="lg:text-4xl text-3xl font-bold text-gray-800">  glow everyone</h2>
             <p className="text-gray-800 opacity-80 mt-3">Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we turn to season after season. Get to know the cozy essentials that will elevate your space in an instant.</p>
          </div>

          <div className="lg:hidden block overflow-hidden">
              <img  className="transform scale-100 hover:scale-110 duration-700 w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729878348/banner-12._r9kx2e.jpg" alt="" />
          </div>

          <div className="lg:p-20 p-10 md:p-10 flex flex-col">
             <h2 className="text-4xl font-bold text-gray-800"> Our misstion</h2>
            
             <p className="text-gray-800 opacity-80 mt-3">Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we turn to season after season. Get to know the cozy essentials that will elevate your space in an instant.</p>
          </div>
          <div className="hidden lg:block overflow-hidden">
              <img className="transform scale-100 hover:scale-110 duration-700 w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729878348/banner-12._r9kx2e.jpg" alt="" />
          </div>
           
      </div>

      {/* Your Skin, Our Passion section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        <div className=" overflow-hidden">
             <img className="transform scale-100 hover:scale-110 duration-700" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729879772/bg-about-02_r9ylqv.jpg" alt="" />
        </div>
        <div className=" lg:px-20 p-10 md:p-10 flex flex-col space-y-3 text-gray-800">
            <h2 className="text-3xl font-bold">Your Skin, Our Passion</h2>
            <p className="opacity-80 font-medium">Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…</p>
            <p className="opacity-80 font-medium">If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman. Never in the history of the world have women <strong>been more in control of their destiny</strong></p>
            {/* message and store house section */}
            <div className="flex gap-10 text-gray-800">
                <div className="flex-1 space-y-2">
                    <h2 className="text-xl font-bold">Message</h2>
                    <p className="opacity-80 font-medium text-sm">Send us a text & an ambassador <br /> will respond when available.</p>
                    <cite  className="text-[#4E7661] font-medium block">01779596173</cite>
                </div>
                <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold">Store Hours</h3>
                     <div className="flex gap-6">
                         <h2 className="font-bold">Mon – Fri:</h2>
                         <h2>08:30 – 20:00</h2>
                     </div>
                     <div  className="flex gap-6">
                         <h2 className="font-bold">Sat & Sun:</h2>
                         <h2>09:30 – 21:30</h2>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;
