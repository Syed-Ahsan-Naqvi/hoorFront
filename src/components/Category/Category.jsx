import "./Category.scss"
import Products from "../Products/Products"

import React from 'react'

const Category = () => {
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Category Title</div>
                <Products innerPage={true} />
            </div>
        </div>
    )
}

export default Category