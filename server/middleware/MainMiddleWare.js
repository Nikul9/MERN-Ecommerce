const jwt = require('jsonwebtoken')
const User = require('../models/user')
const resHndlr = require('../handlers/responseHandler')

const auth = async (req, res, next) => {
    try {
        const token = req.header('authorization').replace('Bearer ','')
       // console.log(token);
        const decoded = jwt.verify(token, process.env.JWT)
        // console.log(decoded);
        const user = await User.findOne({ _id : decoded._id })
        // console.log(user);
        if (!user) {
            throw new Error("some peoblem")
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        resHndlr.validationErrorHandler(res, error);
    }
}

const adminAuth =  async (req , res , next) => {
    try {
        console.log("in middle ware");
        const token = req.header("authorization").replace("Bearer ",'')
        if(!token) {
            throw new Error('NO toekn is avaliable')
        }
        const adminDecoded = jwt.verify(token , process.env.JWT)
        const adminData = await User.findOne({_id : adminDecoded._id, token })  
        // console.log(adminData);
        if(adminData.role != "admin") {
            throw new Error('NO ADMIN')
        }
        req.admin = adminData
        next()
    } catch(e) {
        console.log(e);
        resHndlr.validationErrorHandler(res, e);
    }
}

module.exports = {auth , adminAuth}