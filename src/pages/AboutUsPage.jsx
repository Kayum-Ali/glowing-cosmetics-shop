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
          <div>
              <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729877349/banner-11_l3sz4c.jpg" alt="" />
          </div>
          <div className="lg:p-20 p-10 md:p-10 flex flex-col">
             <h2 className="lg:text-4xl text-3xl font-bold text-gray-800">Give your skin a healthy</h2>
             <h2 className="lg:text-4xl text-3xl font-bold text-gray-800">  glow everyone</h2>
             <p className="text-gray-800 opacity-80 mt-3">Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we turn to season after season. Get to know the cozy essentials that will elevate your space in an instant.</p>
          </div>

          <div className="lg:hidden block">
              <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729878348/banner-12._r9kx2e.jpg" alt="" />
          </div>

          <div className="lg:p-20 p-10 md:p-10 flex flex-col">
             <h2 className="text-4xl font-bold text-gray-800"> Our misstion</h2>
            
             <p className="text-gray-800 opacity-80 mt-3">Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we turn to season after season. Get to know the cozy essentials that will elevate your space in an instant.</p>
          </div>
          <div className="hidden lg:block">
              <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1729878348/banner-12._r9kx2e.jpg" alt="" />
          </div>
           
      </div>
    </div>
  );
};

export default AboutUsPage;
