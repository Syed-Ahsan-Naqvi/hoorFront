import React from 'react'
import Products from "../../Products/Products"
import useFetch from '../../../hooks/useFetch'
import "./RelatedProducts.scss"



const RelatedProducts = ({ productId, categoryId }) => {
    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)

    if (!data) return <div>Loading...</div>; // Loading state


    return (
        <div className="related-products" >
            <Products products={data} headingText="Related Products" />
        </div>
    )
}
export default RelatedProducts