

const NewsLetter = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1730879401/bg_newletter_1920x1920_iycag2.webp')] lg:bg-center bg-cover">
            <div className="container mx-auto py-20 px-10 text-center space-y-3">
                <img className="w-[100px] mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723572116/newsletter_c7kt6v.gif" alt="" />
                <h2 className="text-4xl font-bold"> Newsletter</h2>
                <p>Sign up for our newletter to recevie updates an exlusive offers</p>
                <form className="flex lg:w-1/2 mx-auto justify-center border-2 rounded-[50px] p-1 border-[#154360]">
                    <input
                        type="email"
                        className=" lg:p-4 px-4 w-full rounded-md bg-transparent focus:outline-none placeholder-[#82588D]"
                        placeholder="Enter your email"
                    />
                    <button className="bg-[#82588D] text-white px-6 py-2.5 lg:py-4 font-bold rounded-[50px] ">Subscribe</button>
                </form>
            </div>
          
            
        </div>
    );
};

export default NewsLetter;