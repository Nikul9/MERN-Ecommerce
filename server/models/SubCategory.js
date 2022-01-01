const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema
const SubCategprySchema = new mongoose.Schema({
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
    parent : {
        type : ObjectId,
        ref : "Category",
        required : true
    }
},{timestamps : true})

const SubCategpryModel = mongoose.model("subCategorys",SubCategprySchema)

module.exports = SubCategpryModel