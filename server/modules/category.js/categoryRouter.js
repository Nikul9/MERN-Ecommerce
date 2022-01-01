const express = require("express")
const router = express.Router()
const fcade = require("./categoryFcade")
const resHendler = require("../../handlers/responseHandler")
router.route("/category").post(async (req,res) => {
    console.log('in router');
    fcade.create(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/category").get(async (req,res) => {
    fcade.list(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/category/:slug").get(async (req,res) => {
    fcade.listOne(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/category/:slug").delete(async (req,res) => {
    
    console.log("in delete");
    fcade.deleteCategory(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/category/:slug").patch(async (req,res) => {
    fcade.update(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

module.exports = router