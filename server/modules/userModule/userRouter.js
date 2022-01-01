const express = require("express")
const router = new express.Router()
const fcade = require('./userFcade')
const resHendler = require('../../handlers/responseHandler')
const nodemailer = require("nodemailer")
const verifyToken = require('../../middleware/middleware')
const {auth} = require('../../middleware/MainMiddleWare')

router.route('/user/register').post((req,res) => {
    fcade.regiesterUser(req,res).then((result) => {
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/user/verifyUser').post(verifyToken,(req,res) => {
    fcade.nodeMailer(req,res).then((result) => {
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })    
})

router.route('/user/login').post((req,res) => {
    fcade.login(req,res).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })    
})

router.route('/user/socialLogin').post((req,res) => {
    console.log("ROUTRER");
    fcade.socialLogin(req,res).then((result) => {
        console.log("from result")
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })    
})

router.route('/user/update').post( auth , (req,res) => {
    console.log("from update");
    fcade.updateUser(req,res).then((result) => {
        console.log("from result")
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/user/getUser').get( auth , (req,res) => {
    // console.log("from update");
    fcade.getUser(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/user/cart/addToCart').post( auth , (req,res) => {
    // console.log("from update");
    fcade.addToCart(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/user/cart/addToCart').get(  (req,res) => {
    // console.log("from update");
    fcade.getAddToCart(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/user/cart/:productId').delete( auth ,(req,res) => {
    // console.log("from update");
    fcade.deleteAddToCart(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

module.exports = router