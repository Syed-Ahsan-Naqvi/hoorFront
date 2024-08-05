// import React, { useEffect, useState, useContext } from 'react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"
import { RiMenuUnfold3Fill } from "react-icons/ri";
import logo from "../../assets/images/logo.png"


import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import Navbar from "../Navbar/Navbar"
import { Context } from "../../utils/context"

import "./Header.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    const navigate = useNavigate()

    const [scroll, setScroll] = useState(false)
    const [ShowCart, setShowCart] = useState(false)
    const [ShowSearch, setShowSearch] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const { cartCount } = useContext(Context)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

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


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if (ShowCart || showNav || ShowSearch) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };

    }, [ShowCart, showNav, ShowSearch])


    return (
        <>
            <header className={`main-header ${scroll ? "sticky-header" : ""}`} >
                <div className='header-content' >
                    {/* <div> */}
                    <ul className='scr'>
                        <li data-aos="fade-right" data-aos-duration="1500" onClick={() => { setShowNav(true) }} ><RiMenuUnfold3Fill /></li>
                    </ul>
                    {/* </div> */}
                    <ul className='left' >
                        <li data-aos="fade-right" data-aos-duration="2700" onClick={() => { navigate('/') }} >Home</li>
                        <li data-aos="fade-right" data-aos-duration="2400" onClick={() => { navigate('/about') }} >About</li>
                        <li data-aos="fade-right" data-aos-duration="2100" onClick={() => { navigate('/categories/all') }} >Categories</li>
                        <li data-aos="fade-right" data-aos-duration="1800" onClick={() => { navigate('/products/all') }} >Products</li>
                        <li data-aos="fade-right" data-aos-duration="1500" onClick={() => { navigate('/contact') }} >Contact</li>
                    </ul>
                    <div className="center" onClick={() => { navigate(`/`) }} ><img data-aos="fade-down" data-aos-duration="1500" src={logo} alt="" /></div>
                    <div className="right">
                        <TbSearch data-aos="fade-left" data-aos-duration="1500" onClick={() => { setShowSearch(true) }} />
                        <AiOutlineHeart data-aos="fade-left" data-aos-duration="2000" />
                        <span data-aos="fade-left" data-aos-duration="2500" className='cart-icon' onClick={() => { setShowCart(true) }}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>

            {showNav && <Navbar setShowNav={setShowNav} />}

            {ShowCart && <Cart setShowCart={setShowCart} />}

            {ShowSearch && <Search setShowSearch={setShowSearch} />}

        </>
    )
}

export default Header