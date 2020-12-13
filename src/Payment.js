import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    // const is used to create a variable 

    const [{ basket, user}, dispatch] = useStateValue();

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generat the clientSecret(stripe) which allows us to charge a customer
        // whenever the baskets changes, it will make a request to update the stripe secret(clientSecret), which allows us to charge to customer the correct amount.
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currency subunit (usd = American currency)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('HERESSS JOhNNY', clientSecret)

    // Takes an e(event) and does some stuff
    const handleSubmit = async (event) => {
        // stop it from refreshing
        event.preventDefault();
        
        // when you hit the enter. it'll block you from hitting the buy buttton again. Allowed to click once
        setProcessing(true);



        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
         }).then(({ paymentIntent }) => {
            // paymentInent = payment confirmation


            // push into the database
            db
             .collection("users")
             .doc(user?.uid)
             .collection("orders")
             .doc(paymentIntent.id)
             .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });


            // transation was good
            setSucceeded(true);

            // no error was made
            setError(null);

            // nothing else should be processing
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            // doesnt want them to go back to the payment page to do a loop
            history.replace('/orders')
        });


    };

    const handleChange = event => {
        // set an disable button and error button

        /*Listen for changes in the CardElement and display any errors 
        as the customer type thier cards details */

        // If if this event is empty then disable the button, otherwise if an error occurs show the error or nothing. 

         setDisable(event.empty);
         setError(event.error ? event.error.message : "Invaild Card Information. Please provide correct details.");

    };


    return (
        <div className="payment">
            <div>  
             <Helmet>
             <title>Amazon-Clone | Payment</title>
             </Helmet>
            </div>
         
            <div className="payment_container">
              <img
                 className="home__image"
                 src="https://www.keenan.com/Portals/15/Images/blog_amazon_detail.jpg?ver=2020-12-10-172607-653"
                 alt="Amazon Shopping-banner "
              />

              <h1>
                  Review Your Order (<Link to="/checkout">{basket?.length} items</Link>)
              </h1>

                {/*Delivery address*/}
             <div className="payment_section">
                 <div className="payment_title">
                     <h2>Shipping Address:</h2>
                 </div>
                  <div className="payment_address">
                    <p>{user?.email}</p>
                      <p>1234 Sosa Lane</p>
                      <p>Birmingham,AL</p>
                  </div>
             </div>
             {/*Review Items*/}
             <div className="payment_section">
                 <div className="payment_title">
                     <h2>Checkout Items and Review:</h2>
                 </div>
                  <div className="payment_items">
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

             {/* Payment Method */}
             <div className="payment_section">
                 <div className="payment_title">
                     <h2>Payment Method:</h2>
                 </div>
                  <div className="payment_details">
                      {/* stripe magic*/}
                      

                      <form onSubmit={handleSubmit}> 
                          <CardElement onChange={handleChange} />
                          <div className="payment_priceContainer">
                             <CurrencyFormat
                                 renderText={(value) => (
                                      <>
                                        <h4>
                                         <em>Order Total</em>: <strong>{value}</strong>
                                        </h4>
                                      </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
            
                                />
                                       
                                <button disabled={processing || disable ||succeeded}> 
                                 <span>{processing ? <p>Processing</p> : "Place Your Order"}</span>
                                </button>
                          </div>
                      </form>
                 </div>
                </div>



            </div>
        </div>
    )

}

export default Payment
 