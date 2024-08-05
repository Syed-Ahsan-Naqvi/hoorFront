import React, { useContext } from 'react';
import "./Products.scss"
import Product from "./Product/Product"
import { Context } from '../../utils/context'
import { useLocation } from "react-router-dom"


const ProductsList = ({ products: propsProducts, headingText }) => {

    const location = useLocation()

    const { products: contextProducts } = useContext(Context)


    // const products = location.pathname === "/products/all" ? contextProducts : propsProducts;

    const products = propsProducts || contextProducts;


    if (!products || !products.data) return null;

    // Sort by ID in descending order
    const sortedProducts = [...products.data].sort((a, b) => b.id - a.id);

    // Get the first 8 items
    const first8Items = sortedProducts.slice(0, 8);

    // Get the rest of the items

    const restItems = location.pathname === "/products/all" ? sortedProducts.slice(8) : sortedProducts.slice(8, 16);

    const finalProducts = [...first8Items, ...restItems];


    if (!products) return <div>Loading...</div>; // Loading state

    return (

        <div className="products-container">
            {location.pathname === "/products/all" ? <h1 className="productsHeading" data-aos="fade-down" data-aos-duration="1500" >PRODUCTS</h1> : <div className="sec-heading" data-aos="fade-right" data-aos-duration="1500" >{headingText}</div>}
            <div className="products"  >
                {finalProducts.map((items) => (
                    <Product key={items.id} id={items.id} data={items.attributes} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
