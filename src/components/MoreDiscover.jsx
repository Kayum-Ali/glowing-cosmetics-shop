import { TiArrowRight } from "react-icons/ti";


const MoreDiscover = () => {
    return (
        <div>
            <div className="text-center py-12">
                 <h2 className="text-gray-800 font-bold text-3xl">More to Discover</h2>
                 <p className="text-[#757272] font-medium">Our bundles were designed to conveniently package your tanning <br /> essentials while saving you money.</p>
            </div>

            <div className="flex flex-col lg:flex-row md:flex-row gap-5 container mx-auto"> 
                 <div className="overflow-hidden w-full">
                     <img className="w-full transform scale-100 hover:scale-110 hover:skew-y-5 duration-500" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730115835/image-box-10-600x322_m3vl2u.jpg" alt="Discover More 1" />
                     <div className="text-center my-5">
                          <h2 className="text-2xl font-bold">Summer Collection</h2>
                          <p className="flex items-center hover:text-[#779585] justify-center">Shop Now <TiArrowRight className="text-2xl" /></p>
                     </div>
                 </div>
                 <div className="overflow-hidden w-full">
                     <img className="w-full transform scale-100 hover:scale-110 hover:skew-y-5 duration-500" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730115953/image-box-11-1-600x322_qa18dq.jpg" alt="Discover More 2" />
                     <div className="text-center my-5">
                          <h2 className="text-2xl font-bold">From Our Blog</h2>
                          <p className="flex items-center hover:text-[#779585] justify-center">Read More <TiArrowRight className="text-2xl" /></p>
                     </div>
                 </div>
            </div>
            
        </div>
    );
};

export default MoreDiscover;