const express = require("express")
const router = express.Router()
const { auth } = require("../../middleware/MainMiddleWare")
const resHeandelears = require("../../handlers/responseHandler")
const fcade = require("./StripeFcadel")

router.route('/payment/intent').get(auth , (req , res) => {
    fcade.stripeIntent(req).then((result) => {
        console.log(result);
        return resHeandelears.successHandler(res,result)
    }).catch((e) => {
        return resHeandelears.errorHandler(res,e)
    })
})

module.exports = router