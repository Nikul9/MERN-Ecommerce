import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import StripeCheckout from "../components/stripeCheckOut"
import "../stripe.css"

const promise = loadStripe("pk_test_51IkPJTSG4gWnQoguqKb5BNQg3ROvcsoHMrsPFE44lUuh7ifls0A3D9LnP2zkdnD4uhU41PyPqQxRVfHekfhBzQqa00wNUM0UNi");
const Payment = () => {
    
    return (
    <div className="container p-5 text-center">
        <h4>Complete your purchase</h4>
        <Elements stripe={promise}>
          <div className="col-md-8 offset-md-2">
            <StripeCheckout />
          </div>
        </Elements>
    </div>
    )
}

export default Payment