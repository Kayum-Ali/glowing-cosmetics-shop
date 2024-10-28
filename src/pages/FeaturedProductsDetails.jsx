import { useLoaderData } from "react-router-dom";

const FeaturedProductsDetails = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <h2>data</h2>
            
        </div>
    );
};

export default FeaturedProductsDetails;