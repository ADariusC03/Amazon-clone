import { Link, useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { Helmet } from 'react-helmet';

function Login() {
    //use to track the email and password when typing
    // e == event
    // (history) use to problematically change the url
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();     //no freshing page if clicked on sign-in button

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        // some firebase login

    }

    const register = e => {
        e.preventDefault();

        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              // it successfully created a new user with email and password
             // after they login, if the auth isn't empty, push new page or redirect
             if(auth) {
                 history.push('/')
             }
            })
            .catch(error => alert(error.message))

         // do some firebase register
    }


    return (
        <div className="login">

            <div>  
             <Helmet>
             <title>Amazon-Clone | Login</title>
             </Helmet>
            </div>

            <Link to="/">
              <img 
                 className="login_logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                 alt="Amazon Login Logo"
              />
            </Link>
            
            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail: </h5>
                    <input type="text" placeholder="Email Address" value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Password: </h5>
                    <input type="password" placeholder="Password" value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn}
                     className="login_signInButton">
                         Sign-in
                    </button>
                </form>

                <p>
                 By singing in, you agree to AMAZON FAKE CLONE
                 <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=508088"> Conditions of Use</a> and
                 <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=468496"> Privacy Notice</a>.
                 Please see our Cookies Notice and our Interest-Based Ads Notice. 
                </p>

                <button type="sumbit" onClick={register}
                 className="login_registerButton">
                     Create Your Amazon Account
                    </button>
            </div>

        </div>
    )
}

export default Login