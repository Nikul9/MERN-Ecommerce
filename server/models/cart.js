const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema
const cartSchema = new mongoose.Schema({
    orderBy : {
        type : ObjectId,
        ref  : "user"
    },
    products : [
        {
            product: {  
                type : ObjectId,
                ref : "product" 
            },
            count : {
                type : Number,
                default : 1
            }
        }
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
})

const cartModel = mongoose.model("cart",cartSchema)

module.exports = cartModel