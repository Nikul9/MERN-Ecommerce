const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const product = new mongoose.Schema({
    title : { 
        type  : String,
        required : true,
        maxlength : 32,
        text : true
    },
    slug : { 
        type  : String,
        unique : true,
        required : true,
        lowercase  : true,
        index : true
    },
    description : { 
        type  : String,
        required : true,
        maxlength : 2000,
        text : true
    },
    price : { 
        type  : Number,
        required : true,
        maxlength : 32,
        trim : true,
        text : true
    },
    category : {
        type : ObjectId,
        ref : "category" 
    },
    subCategorys :[
        {
            type : ObjectId,
            ref : "subCategorys" 
        }
    ],
    quantity : Number,
    sold : {
        type : Number,
        default : 0
    },
    images : Array,
    shipping : {
        type : String,
        enum : ["Yes" , "No"]
    },
    color : {
        type : String,
        enum : ["Black" , "Brown", "Silver" , "Blue" , "White" , "Red" , "Grey"]
    },
    brand : {
        type : String,
        enum : ["Apple" , "Samsung", "Microsoft" , "Asus" , "Lenovo" , "Acer" , "HP" , "MSI"]
    },
    ratings : [{
        star : Number,
        postedBy : {
            type : ObjectId , 
            ref : "user"
        }
    }]
},{timestamps : true})

const productModel = mongoose.model("product",product)

module.exports = productModel