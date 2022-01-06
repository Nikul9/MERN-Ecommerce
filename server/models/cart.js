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
    cartTotal: { type : Number  , default : 0},
    totalAfterDiscount: { type : Number  , default : 0},
})

const cartModel = mongoose.model("cart",cartSchema)

module.exports = cartModel