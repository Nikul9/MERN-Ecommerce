const express = require("express")
const router = express.Router()
const resHendler = require("../../handlers/responseHandler")
const fcade = require("./cloudFcade")

router.route("/cloud/upload").post((req,res) => {
    console.log("in cloud Router");
    fcade.upload(req).then((result) => {
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        console.log(e);
        return resHendler.errorHandler(res, e)
    })
})

router.route("/cloud/remove").post((req,res) => {
    console.log("in cloud Router");
    fcade.remove(req).then((result) => {
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        console.log(e);
        return resHendler.errorHandler(res, e)
    })
})

module.exports = router