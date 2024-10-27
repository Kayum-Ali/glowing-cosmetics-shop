import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import NewCollection from "../components/NewCollection";


const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedProducts></FeaturedProducts>
           <NewCollection></NewCollection>
        </div>
    );
};

export default HomePage;