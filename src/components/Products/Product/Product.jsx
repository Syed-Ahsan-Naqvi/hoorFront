import React, { useEffect } from 'react'
import "./Product.scss"
import { useNavigate } from "react-router-dom"
// import prod from "../../../assets/headphones-with-minimalist-monochrome-background_23-2150763315.avif"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = ({ key, id, data }) => {
    const navigate = useNavigate()
    // console.log(data)
    // console.log("Product Data =================> ", data.img.data.attributes.url)

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
        <div className="product-card" data-aos="fade-up" data-aos-duration="1500" onClick={() => { navigate("/product/" + id) }} >
            <div className="thumbnail">
                <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="small-price">&#8377;{data.oprice}</span>
                <br className='mobile' /><div className='ooo'> </div>
                <span className="price">&#8377;{data.price}</span>
            </div>
            <br />
        </div>
    )
}

export default Product

