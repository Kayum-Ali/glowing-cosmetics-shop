
const Displain = () => {
    return (
       <div className="bg-[#AED6F1]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5  gap-8 py-8">
            <div className="text-center space-y-2">
                <img className="w-60 mx-auto my-3 rounded-lg h-[180px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730113988/10162872_18156694_hw2e6s.jpg" alt="" />
                <h2 className="text-2xl font-bold pt-3">Free Shipping</h2>
                <p className="text-xl font-medium">Free Shipping for orders over $130</p>
            </div>
            <div className="text-center space-y-2">
                <img className="w-60 mx-auto my-3 rounded-lg h-[180px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730114015/download_hmsm8b.jpg" alt="" />
                <h2 className="text-2xl font-bold pt-3">Returns</h2>
                <p className="text-xl font-medium">Within 30 days for an exchange.</p>
            </div>
            <div className="text-center space-y-2">
                <img className="w-60 mx-auto my-3 rounded-lg h-[180px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730114033/images_phng8z.jpg" alt="" />
                <h2 className="text-2xl font-bold pt-3">Online Support</h2>
                <p className="text-xl font-medium">24 hours a day, 7 days a week</p>
            </div>
            <div className="text-center space-y-2">
                <img className="w-60 mx-auto my-3 rounded-lg h-[180px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1730114053/images_1_kcdxjt.jpg" alt="" />
                <h2 className="text-2xl font-bold pt-3">Flexible Payment</h2>
                <p className="text-xl font-medium">Pay with Multiple Credit Cards</p>
            </div>
            
        </div>
       </div>
    );
};

export default Displain;