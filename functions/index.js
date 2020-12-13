// install npm i express
// npm i cors
// npm i stripe , along with the secret key from stripe (API KEYS)

const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HxRDZAJUA48a8hyJG7KhTJvPDx8rrfOSLwkAmguPrJKrNg14XhkVQZmIFQAWMqoyfVfPPG6u9ecxCVedvFeEZq700ZhiTCeEm');

// set up the exress app = setting up an API

// - App config
const app = express();

// - Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello ac'));

// post site to payments log/create
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved. For amount of ',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunts of the currency
        currency: "usd",
    });
    // 201 means Ok - created in https:
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);


// to emulate it to see if it works before deploying. First in the terminal => firebase emulators:start


//Example endpoint
//http://localhost:5001/clone-6d1a7/us-central1/api