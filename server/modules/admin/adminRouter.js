const express = require('express')
const router = express.Router()
const {adminAuth} = require("../../middleware/MainMiddleWare")
const fcade = require("./adminFcade")
const resHendler = require('../../handlers/responseHandler')

router.route("/admin/check").get(adminAuth , (req,res) => {
    console.log("in admi n check");
    fcade.adminCheck(req).then((result) => {
        console.log(result);
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res,e)
    })
})

module.exports = router