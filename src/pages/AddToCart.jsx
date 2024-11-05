import { useEffect, useState } from "react";


const AddToCart = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://glowing-cosmetics-shop-server.vercel.app/addToCart')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            {/*  */}
            <h2>data {data.length}</h2>
            
        </div>
    );
};

export default AddToCart;