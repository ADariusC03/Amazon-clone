import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

// Products page in Amazon. Parent of Home.js home_row
// use props inside the Product() with curly braces to 
// break apart the odjects we pass in


function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispath] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispath({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

    return (
        <div className="product">
            <div className="product_info">
                <p className="many">{id}</p>
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            
            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Cart</button>

        </div>
    )
}

export default Product 
