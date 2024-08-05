import React, { useContext } from 'react'
import { Context } from '../../utils/context'
import "./Categories.scss"
import { useNavigate } from "react-router-dom"


function Categories() {
    const navigate = useNavigate()


    const { categories } = useContext(Context)


    return (

        <div className='categories-section' >
            <h1 className='heading' >CATEGORIES</h1>
            <div className="shop-by-category1">
                <div className="categories1">
                    {categories?.data?.map((item) => {
                        return (
                            <div className="category1" key={item.id} onClick={() => { navigate(`/category/${item.id}`) }}>

                                {item?.attributes?.img?.data?.map((items) => {
                                    return (

                                        <img key={item.id} className='category_img1' src={process.env.REACT_APP_DEV_URL + items.attributes.url} alt="" />

                                    )
                                })}
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </div>
    )
}

export default Categories