const express = require("express")
const router = express.Router()
const fcade = require("./cuponFcade")
const resHendler = require("../../handlers/responseHandler")

router.route("/cupon/addCupon").post( async (req , res) => {
    console.log("IN ROUTER");
    fcade.addCupon(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/cupon/listCupon").get( async (req , res) => {
    fcade.listCupon(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/cupon/removeCupon/:cuponId").delete( async (req , res) => {
    console.log("IN DELETERE");
    fcade.removeCupon(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})

module.exports = router