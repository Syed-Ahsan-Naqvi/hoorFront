import React from 'react';
import "./Home.scss";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Slider from "./Slider/Slider";
// import Newsletter from '../Footer/Newsletter/Newsletter.jsx';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {
    // useEffect(() => {
    // AOS.init({ duration: 1000, once: true });
    // }, []);

    return (
        <div>
            <Slider />
            <div className="main-container">
                <div className="layout">
                    <Category />
                    <Products headingText={"Popular Products"} />
                </div>
            </div>
            {/* <Newsletter /> */}
        </div>
    );
}

export default Home;
