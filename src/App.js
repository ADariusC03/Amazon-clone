import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


// Public API Key from Stripe
// loads stripe up and stores into a promise
const promise = loadStripe("pk_test_51HxRDZAJUA48a8hy50FbZbfEsyZfDVJDXZIJok63Cuc32asjT9cjAFSJKgE3F0T3l975DVx1UCa6wHRn30Z3uvoW00w787eYtC");


function App() {
  const [{user}, dispatch] = useStateValue();

  // listener(keeps track of who is signed in)
  // useEffect == if statment in react. 
  // not local storage. Data layer component connected to firebase

  useEffect(() => {
   // will only run once when the app component loads.

   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>> ', authUser);

     if (authUser) {
       // the user just logged in / the user was logged in
       dispatch({
         type: 'SET_USER',
         user: authUser,
       });
     } else {
       // the user is logged out
       dispatch({
         type: 'SET_USER',
         user: null,
       });
     }
   })
  }, []);

  return(
    //BEM
    
   <div className="app">
      <Router>
        <Switch>

        <Route path="/orders">
             <Header />
             <Orders />
             <Footer/>
          </Route>

         <Route path="/payment">
             <Header />
             <Elements stripe={promise}>
             <Payment />
             </Elements>
             <Footer/>
          </Route>

          <Route path="/login">
             <Login />
          </Route>

          <Route path="/checkout">
             <Header />
             <Checkout />
             <Footer />
          </Route>

          <Route path="/">
             <Header />
             <Home />
             <Footer/>
          </Route>

        </Switch>
     </Router>

  </div>
    
  );
}

export default App;
