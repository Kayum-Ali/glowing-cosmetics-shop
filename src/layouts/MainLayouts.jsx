import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";


const MainLayouts = () => {
    return (
        <div >
            <div className="container mx-auto">
                <Navbar></Navbar>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;