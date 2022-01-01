const express = require('express')
const router = express.Router()
const fcade = require("./subFcade")
const resHendler = require("../../handlers/responseHandler")

router.route("/subCategory").post((req , res) => {
    fcade.create(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch((e) => {
        return resHendler.errorHandler(res, e)
    })
})
router.route("/subCategory").get(async (req,res) => {
    fcade.list(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/subCategory/:slug").get(async (req,res) => {
    fcade.listOne(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/subCategory/:slug").delete(async (req,res) => {
    
    console.log("in delete");
    fcade.deleteCategory(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/subCategory/:slug").patch(async (req,res) => {
    fcade.update(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/subCategory/parent/:id").get(async (req,res) => {
    fcade.findByParent(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

module.exports = router