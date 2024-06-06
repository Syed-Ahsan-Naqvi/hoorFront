import React from 'react'
import "./Search.scss"
import { MdClose } from "react-icons/md"
import prod from "../../../assets/headphones-with-minimalist-monochrome-background_23-2150763315.avif"

const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" autoFocus placeholder='Search for products' />
                <MdClose className='close-btn' onClick={() => { setShowSearch(false) }} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="desc">product desc</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search