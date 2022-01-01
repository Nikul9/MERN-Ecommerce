const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : "Name is require",
        minlength : [3 , "too Short"],
        maxlength : [32, "too long"]
    },
    slug : {
        type : String,
        unique : true,
        lowercase : true
    },
},{timestamps : true})

const categpryModel = mongoose.model("category",categorySchema)

module.exports = categpryModel