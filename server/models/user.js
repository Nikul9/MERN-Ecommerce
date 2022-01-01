require('dotenv').config()
const { JsonWebTokenError } = require('jsonwebtoken');
const mongoose = require('mongoose');
const constant = require('../utils/constant')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstName       : String,
    lastName        : String,
    email           : String,
    password        : String,
    role: {
        type: String,
        default: "subscriber",
    },
    token : String
})
UserSchema.pre('save',async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password , 8)
    } 
    next()
})
UserSchema.methods.cheak = () => {
    console.log("NIKUL is kinf");
}
UserSchema.methods.getToken =  async function () {
        console.log('in data bsase');
        try {
            const token = await jwt.sign({_id : this._id},process.env.JWT)
            this.token = token
            await this.save()
            return token
        } catch (error) {
            console.log(error);
        }
}


const user = mongoose.model(constant.DB_MODEL_REF.USER,UserSchema)

module.exports = user