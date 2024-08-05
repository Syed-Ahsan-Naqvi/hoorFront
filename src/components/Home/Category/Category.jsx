import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import "./Category.scss"
import { Context } from '../../../utils/context'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {

    const { categories } = useContext(Context)

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
        <div className="shop-by-category">
            <div className="category-heading" data-aos="fade-right" data-aos-duration="1500" >Categories</div>
            <div className="categories">
                {categories?.data?.map((item) => {
                    // console.log(item.attributes.img.data.id)

                    return (
                        <div className="category" data-aos="flip-up" data-aos-duration="2500" key={item.id} onClick={() => { navigate(`/category/${item.id}`) }}>

                            {item?.attributes?.img?.data?.map((items) => {
                                return (

                                    <img key={items.id} className='category_img' src={process.env.REACT_APP_DEV_URL + items.attributes.url} alt="" />

                                )
                            }
                            )
                            }
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default Category

