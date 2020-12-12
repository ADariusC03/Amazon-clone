import React from 'react'
import { Helmet } from 'react-helmet';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        <div className="checkout">

            <div>  
             <Helmet>
             <title>Amazon-Clone | Checkout</title>
             </Helmet>
            </div>

            <div className="checkout_left">
                
             <img className="checkout_ad" 
             src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" 
             alt="Amazon credit banner" 
             />
             <form action="https://www.amazon.com/gp/cobrandcard/marketing.html?pr=con321&inc=US_UNREC_ACQ_EP_18M&ts=8hi54cz9tofgxzwb4eai53bsok39m55&plattr=CBCCPFACQ&place=vc&imp=43eb79b2-b08c-46d5-9578-c6dab7708a53" method="get" target="_blank">
             <button className="button" type="submit">Learn More</button>
             </form>
            
             <div>
                <h2>{"Hello,"} {user?.email}</h2>
                <h2 className="checkout_title">
                    Shopping Cart:
                </h2>

                {/* BasketItem */}
                {basket.map(item => (
                <CheckoutProduct 
                    
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                    
                 />
                ))}

             </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
