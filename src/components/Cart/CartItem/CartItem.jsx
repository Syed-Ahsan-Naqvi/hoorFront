import React from 'react'
import { MdClose } from "react-icons/md"
import prod from "../../../assets/headphones-with-minimalist-monochrome-background_23-2150763315.avif"
import "./CartItem.scss"

const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="search-result-item">
                <div className="image-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <MdClose className='close-btn' />
                    <div className="quantity-buttons">
                        <span> - </span>
                        <span> 5 </span>
                        <span> + </span>
                    </div>
                    <div className='text'>
                        <span> 3 </span>
                        <span> x </span>
                        <span className='highlight' > &#8377;4567 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem