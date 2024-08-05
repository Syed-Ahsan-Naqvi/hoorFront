
import React, { useState, useContext, useEffect } from 'react';
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
import { Context } from '../../utils/context';
import { useLocation } from 'react-router-dom';


const SingleProduct = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // New state for selected image
    const product = data?.data[0]?.attributes;
    const { handleAddToCart } = useContext(Context);




    useEffect(() => {

        setSelectedImageIndex(0)

    }, [pathname])


    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };

    if (!data) return <div>Loading...</div>; // Loading state

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={process.env.REACT_APP_DEV_URL + product?.img?.data[selectedImageIndex]?.attributes?.url}
                            alt=""
                        />
                        <div className="thumbnails">
                            {product?.img?.data?.map((img, index) => {
                                console.log(index)
                                return (
                                    <img
                                        key={index}
                                        src={process.env.REACT_APP_DEV_URL + img?.attributes?.url}
                                        alt=""
                                        className={selectedImageIndex === index ? 'selected' : ''}
                                        onClick={() => setSelectedImageIndex(index)}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="min-price">&#8377;{product.oprice}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc" style={{ whiteSpace: 'pre-line' }}>{product.desc}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}> - </span>
                                <span>{quantity}</span>
                                <span onClick={increment}> + </span>
                            </div>
                            <button
                                className='add-to-cart-button'
                                onClick={() => {
                                    handleAddToCart(data.data[0], quantity);
                                    setQuantity(1);
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category: <span>{product?.categories?.data[0]?.attributes?.title}</span>
                            </span>
                            <span className="text-bold">
                                Share: <span className='social-icons'>
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='bottom_space' >

                    </div>
                </div>

                <RelatedProducts productId={id} categoryId={product.categories.data[0].id} />
            </div>
        </div>
    );
};

export default SingleProduct;
