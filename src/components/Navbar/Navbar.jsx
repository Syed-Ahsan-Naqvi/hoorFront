import React, { useEffect } from 'react'
import "./Navbar.scss"
import { MdClose } from "react-icons/md"
// import { BsCartX } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cart = ({ setShowNav }) => {

    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,  // Set to false to allow animations to re-trigger on scroll
            mirror: true  // Set to true to enable animation while scrolling past the element
        });

        // Re-initialize AOS on scroll
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="cart-panel1">
            <div className="opac-layer1"></div>
            <div className="cart-content1">
                <div className="cart-header1">
                    <span className="heading1" onClick={() => { setShowNav(false) }} >
                        <span className="text1"><MdClose data-aos="fade-right" data-aos-duration="5000" /></span>
                    </span>

                    {/* <span className="nav-heading-dot-text">.....</span> */}
                </div>
                <div className='nav-div'>

                    <span className="nav-logo-img">
                        <img data-aos="fade-in" data-aos-duration="1500" src={logo} alt="" />
                    </span>

                    <div className="empty-cart1">
                        {/* <BsCartX /> */}

                        <span data-aos="fade-up" data-aos-duration="1100" onClick={() => { navigate('/'); setShowNav(false) }} >Home</span>
                        <span data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate('/about'); setShowNav(false) }} >About</span>
                        <span data-aos="fade-up" data-aos-duration="1800" onClick={() => { navigate("/categories/all"); setShowNav(false) }} >Categories</span>
                        <span data-aos="fade-up" data-aos-duration="2300" onClick={() => { navigate("/products/all"); setShowNav(false) }} >Products</span>
                        {/* <button className='return-cta1' >RETURN TO SHOP</button> */}

                    </div>

                    <span className='last-button' onClick={() => { navigate("/contact"); setShowNav(false) }} >Contact Us</span>
                    {/* <br /> */}
                </div>




                {/* <div className="cart-footer1">
                    <div className="subtotal1">
                        <span className="text1">Subtotal:</span>
                        <span className="text1 total1">&#8377;2000</span>
                    </div>
                    <div className="button1">
                        <button className="checkout-cta1" >Checkout</button>
                    </div>
                </div> */}

            </div>
        </div>

    )
}

export default Cart