import React from 'react'
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
             <img className="checkout_ad" 
             src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg" 
             alt="Amazon credit banner" 
             />
             <form action="https://www.amazon.com/gp/cobrandcard/marketing.html?pr=con321&inc=US_UNREC_ACQ_EP_18M&ts=8hi54cz9tofgxzwb4eai53bsok39m55&plattr=CBCCPFACQ&place=vc&imp=43eb79b2-b08c-46d5-9578-c6dab7708a53" method="get" target="_blank">
             <button className="button" type="submit">Learn More</button>
             </form>
            
             <div>
                <h2 className="checkout_title">
                    Shopping Basket

                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </h2>
             </div>
            </div>

            <div className="checkout-right">
                
            </div>
        </div>
    )
}

export default Checkout
