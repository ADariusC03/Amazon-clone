import React from 'react'
import './Product.css';

// Products page in Amazon. Parent of Home.js home_row
// use props inside the Product() with curly braces to 
// break apart the odjects we pass in


function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟 </p>
                    ))}
                </div>
            </div>
            
            <img src={image} alt="" />

            <button onC>Add to Cart</button>

        </div>
    )
}

export default Product 
