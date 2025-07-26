import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <MainPage></MainPage>
            </div>

            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;