import '../styles/NewCollection.css'
import img1 from "../assets/banner-01.jpg"
import img2 from "../assets/banner-02.jpg"

const NewCollection = () => {
  return (
    <div className=" bg-[#AED6F1] lg:py-20 py-10">
      <div className="container mx-auto ">
        {/* heading */}
        <div className="text-center text-gray-800 space-y-2">
          <h2 className="lg:text-4xl text-2xl  font-bold">Discover Our New Collection</h2>
          <p className="w-4/5 mx-auto lg:text-xl md:text-xl text-sm  md:font-medium lg:font-medium">
            &quot;Unlock your radiance with our latest collection! Bold colors,
            rich textures, and skin-loving ingredients come together to create
            beauty that’s effortlessly you. Elevate your look with our must-have
            new arrivals!&quot;
          </p>
        </div>

        {/* img */}
        <div className="flex flex-col lg:flex-row md:flex-row gap-5 mt-10">
            <div className=" w-full h-[350px] lg:h-auto  overflow-hidden relative rounded-lg">
                <img className='transform scale-100 hover:scale-110 duration-700 w-full h-full' src={img1} alt="" />
                <div className='absolute top-0 pt-8 pl-8 space-y-4 text-gray-800 '>
                      <h2 className='font-medium'>NEW COLLECTION</h2>
                      <p className='lg:text-4xl text-2xl font-bold'>Intensive Glow C+ <br /> Serum</p>
                      <button className='px-8 py-3 hover:bg-black bg-white text-black hover:text-white font-bold rounded-md shadow-lg'>Explore More</button>
                </div>
            </div>
            <div className=" w-full h-[350px] lg:h-auto  overflow-hidden relative rounded-lg">
                <img className='transform scale-100 hover:scale-110 duration-700 w-full h-full' src={img2} alt="" />
                <div className='absolute top-0 pt-8 pl-8 space-y-4 text-gray-800 '>
                      <h2 className='lg:text-4xl text-2xl font-bold'>25% off Everything</h2>
                      <p className=''>Makeup with extended range in <br />
                      colors for every human.</p>
                      <button className='px-8 py-3 hover:bg-black bg-white text-black hover:text-white font-bold rounded-md shadow-lg'>Explore More</button>
                </div>
            </div>
          
          

        </div>
      </div>
    </div>
  );
};

export default NewCollection;
