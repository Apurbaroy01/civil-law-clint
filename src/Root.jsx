import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { RotatingLines } from "react-loader-spinner";


const Root = () => {
   

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;