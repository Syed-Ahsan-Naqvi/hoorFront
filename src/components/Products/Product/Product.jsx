import React from 'react'
import "./Product.scss"
import prod from "../../../assets/headphones-with-minimalist-monochrome-background_23-2150763315.avif"

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">&#8377;499</span>
            </div>
        </div>
    )
}

export default Product