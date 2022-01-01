require('dotenv').config()
const db = require('../models/user')
const resHndlr = require('../handlers/responseHandler')
const jwt = require('jsonwebtoken')

const userVerified = async (req,res,next) => {
    try {
        const Token = await req.body.data 
        const vatifyToken = jwt.verify(Token,process.env.JWT)
        const user = await db.findOne({email : vatifyToken.email})
        if(user) {
           throw new Error("User not found") 
        }
        if(vatifyToken.email) { 
            req.userVerified = vatifyToken
            next()
        } else {
           throw new Error("User not found") 
        }
        
    } catch (error) {
        // console.log("in chatchs");
        resHndlr.errorHandler(res, error);
    }
}
module.exports = userVerified