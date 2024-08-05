import React, { useEffect } from 'react';
import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
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
        <div className='newsletter-section'>
            <div className="newsletter-content">
                <span className="small-text" data-aos="fade-down" data-aos-duration="1500">Newsletter</span>
                <span className="big-text" data-aos="fade-in" data-aos-duration="1500">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder='Email Address' data-aos="fade-right" data-aos-duration="1500" />
                    <button data-aos="fade-left" data-aos-duration="1500">Subscribe</button>
                </div>
                <div className="text" data-aos="fade-in" data-aos-duration="1500">Will be used in accordance with our Privacy Policy</div>
                <div className="social-icons" data-aos="flip-up" data-aos-duration="2500">
                    <a target='_blank' href="https://www.facebook.com/hoorstudio0"> <div className="icon"><FaFacebookF size={14} /></div></a>
                    <div className="icon"><FaTwitter size={14} /></div>
                    <a target='_blank' href="https://www.instagram.com/hoorstudioofficial/"><div className="icon"><FaInstagram size={14} /></div></a>
                    <div className="icon"><FaLinkedinIn size={14} /></div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
