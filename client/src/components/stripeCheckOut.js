import React , { useEffect , useState } from "react";
import { CardElement , useStripe , useElements } from "@stripe/react-stripe-js"
import { useSelector , useDispatch } from "react-redux" 
import { stripePaymentIntent } from "../action/Stripe.action"
import { Link } from "react-router-dom"
import { createOrder, emptyUserCart } from "../action/user.action";
import { GET_ADD_TO_CART } from "../action/reducer.types";
const StripeCheckOut = () => {

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const dispatch = useDispatch()
    const { stripeIntent } = useSelector((state) => {
        return state.stripeReduser
    }) 
    const { createdOrder } = useSelector((state) => {
        return state.userReduser   
    })
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        console.log("form LOG");
       console.log(clientSecret);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement),
                billing_details: {
                    name: e.target.name.value,
                  },
            } 
        })
        
        if(payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            console.log("payload.paymentIntent")
            console.log("payload.paymentIntent")
            console.log("payload.paymentIntent")
            console.log("payload.paymentIntent")
            console.log(payload)
            setSucceeded(true)
            setProcessing(false)
            dispatch(createOrder({StripeDetail : payload}))
        }
    }
    const handleChange = async (e) => {
        // listen for changes in the card element
        // and display any errors as the custoemr types their card details
        setDisabled(e.empty); // disable pay button if errors
        setError(e.error ? e.error.message : ""); // show error message
    };
    const cartStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: "Arial, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
          },
        },
    };
    useEffect(() => {
        dispatch(stripePaymentIntent())
    },[])
    useEffect(() => {
        if(!stripeIntent) {
            return
        }
        setClientSecret(stripeIntent.data.clientSecret)
    },[stripeIntent])
    useEffect(() =>{
        if(!createdOrder) {
            return
        }
        localStorage.removeItem("cart")
        dispatch(emptyUserCart())
        dispatch({
            type : GET_ADD_TO_CART,
            payload : undefined
        })
        dispatch({
            type: "ADD_TO_CART_COUNT",
            payload : undefined
        });
    },[createdOrder])
    return (
        <>
            <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
                <CardElement
                    id="card-element"
                    options={cartStyle}
                    onChange={handleChange}
                />
                <button
                className="stripe-button"
                disabled={processing || disabled || succeeded}
                >
                <span id="button-text">
                    {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
                </span>
                </button>
                <br />
                {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
                )}
                <br />
                <p className={succeeded ? "result-message" : "result-message hidden"}>
                Payment Successful.{" "}
                <Link to="/user/history">See it in your purchase history.</Link>
                </p>
            </form>
        </>
    )
}

export default StripeCheckOut