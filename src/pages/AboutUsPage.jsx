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
    </div>
  );
};

export default AboutUsPage;
