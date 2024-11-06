import Banner from "../components/Banner";
import Displain from "../components/Displain";
import FeaturedProducts from "../components/FeaturedProducts";
import MoreDiscover from "../components/MoreDiscover";
import NewCollection from "../components/NewCollection";
import NewsLetter from "../components/NewsLetter";


const HomePage = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedProducts></FeaturedProducts>
           <NewCollection></NewCollection>
           <Displain></Displain>
           <MoreDiscover></MoreDiscover>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;