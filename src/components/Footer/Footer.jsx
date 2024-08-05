import React, { useContext, useEffect } from 'react'
import "./Footer.scss"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import payment from "../../assets/payments.png"
import { Context } from "../../utils/context"
import { useNavigate } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';




const Footer = () => {
    const navigate = useNavigate()

    const { categories } = useContext(Context)

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
        <footer className='footer' >
            <div className="footer-content">
                <div className="col">
                    <div className="title" data-aos="fade-right" data-aos-duration="1500" >About</div>
                    <div className="text" data-aos="fade-up" data-aos-duration="1500" >
                        Hoor Studio, founded in 2022 by Mr. Talha Rizwan, is a leader in textile solutions. In 2022, it launched its fashion retail brand, expanding from unstitched fabric to Ready-to-Wear, home textiles, and accessories. With over 50 outlets in Pakistan, Hoor Studio is renowned for quality and innovation.
                    </div>
                </div>
                <div className="col">
                    <div className="title" data-aos="fade-right" data-aos-duration="1500" >Contact</div>
                    <div className="c-item">
                        <FaLocationArrow className='social-logo' />
                        <div className="text" data-aos="fade-left" data-aos-duration="1500" >
                            Lahore, Pakistan
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt className='social-logo' />
                        <div className="text" data-aos="fade-left" data-aos-duration="1500" >
                            +92 326 2917574
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt className='social-logo' />
                        <div className="text" data-aos="fade-left" data-aos-duration="1500" >
                            +92 332 4073436
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope className='social-logo' />
                        <div className="text" data-aos="fade-left" data-aos-duration="1500" >
                            info@hoorstudio.shop
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title" data-aos="fade-right" data-aos-duration="1500" >Categories</div>
                    {/* <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span> */}
                    {categories?.data?.map((item) => {
                        return (
                            <span className='text' data-aos="fade-up" data-aos-duration="1500" key={item.id} onClick={() => { navigate(`/category/${item.id}`) }} >{item?.attributes?.title}</span>
                        )
                    })}
                </div>
                <div className="col">
                    <div className="title" data-aos="fade-left" data-aos-duration="1500" >Pages</div>
                    {/* <span className="text">Home</span> */}
                    <span className="text" data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate(`/about`) }}  >About</span>
                    <span className="text" data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate(`/policy`) }}  >Privacy Policy</span>
                    <span className="text" data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate(`/returns`) }}  >Returns</span>
                    <span className="text" data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate(`/faq`) }}  >FAQ's</span>
                    <span className="text" data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate(`/contact`) }}  >Contact Us</span>
                    {/* <span className="text" onClick={() => { navigate(`/`) }}  >Terms & Conditions</span> */}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text" >
                        Copyright © 2024 Hoor Studio - All rights reserved.
                    </div>
                    <img src={payment} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer