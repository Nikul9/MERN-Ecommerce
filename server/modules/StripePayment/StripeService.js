require("dotenv").config()
const CartData = require("../../models/cart")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripeIntent = async (req) => {
    try {
        const cart = await CartData.findOne({orderBy : req.user._id})
       // console.log(cart);
        if(!cart){
            return 1
        }
        let finalAmount = 0
        if(cart.totalAfterDiscount > 0) {
            finalAmount = cart.totalAfterDiscount
        } else {
            finalAmount = cart.cartTotal
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: finalAmount,
            currency: "INR",
        });
        return {
            clientSecret: paymentIntent.client_secret
        }
    } catch(e) {
        console.log(e);
        return 1
    }
}
module.exports = {
    stripeIntent    
}