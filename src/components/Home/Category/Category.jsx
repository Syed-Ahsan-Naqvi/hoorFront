import React from 'react'
import "./Category.scss"
import cat1 from "../../../assets/360_F_569174354_2KPznD3Eyow3e6pG6MTnT3g1BvcVn2yw.jpg"

const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} alt="" />
                </div>
                <div className="category">
                    <img src={cat1} alt="" />
                </div>
                <div className="category">
                    <img src={cat1} alt="" />
                </div>
                <div className="category">
                    <img src={cat1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Category