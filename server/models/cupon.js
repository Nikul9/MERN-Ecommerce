const mongoose = require("mongoose")

const cupon = new mongoose.Schema({
    name : {type : String , required : true},
    discount : {type : Number , required : true},
    date : {type : Date  , required : true }
})

const cuponModel = mongoose.model("cupon" , cupon)

module.exports = cuponModel