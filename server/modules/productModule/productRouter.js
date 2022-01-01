const express      = require("express")
const router       = express.Router()
const resHendler   = require("../../handlers/responseHandler")
const fcade        = require("./productFcade")
const { auth } = require("../../middleware/MainMiddleWare")
router.route("/product").post((req,res) => {
    fcade.create(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/product").get((req,res) => {
    fcade.getAllList(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/product/:slug").delete((req,res) => {
    console.log("on delete router");
    fcade.deleteProduct(req).then((result) => {
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route("/product/list").post((req,res) => {
    //console.log('from Listr');
    fcade.list(req).then((result) => {
      //  console.log(result);
        return resHendler.successHandler(res,result)
    }).catch ((e) => {
        return resHendler.errorHandler(res, e)
    })
})

router.route('/product/:slug').get((req,res) => {
    fcade.listOne(req).then((result) => {
          console.log(result);
          return resHendler.successHandler(res,result)
      }).catch ((e) => {
          return resHendler.errorHandler(res, e)
    })
})

router.route('/product/rating/:productId').put(auth, (req,res) => {
    console.log((req.params.productId));
    console.log((req.body));
    fcade.rating(req).then((result) => {
          console.log(result);
          return resHendler.successHandler(res,result)
      }).catch ((e) => {
          return resHendler.errorHandler(res, e)
    })
})

router.route('/product/releted/:productId').get((req,res) => {
    fcade.releted(req).then((result) => {
          console.log(result);
          return resHendler.successHandler(res,result)
      }).catch ((e) => {
          return resHendler.errorHandler(res, e)
    })
})

router.route('/product/category/:slug').get((req,res) => {
    fcade.productFromCategory(req).then((result) => {
          console.log(result);
          return resHendler.successHandler(res,result)
      }).catch ((e) => {
          return resHendler.errorHandler(res, e)
    })
})

router.route('/product/subCategory/:slug').get((req,res) => {
    fcade.productFromSubCategory(req).then((result) => {
          console.log(result);
          return resHendler.successHandler(res,result)
      }).catch ((e) => {
          return resHendler.errorHandler(res, e)
    })
})

router.route('/product/filter/find').post((req,res) => {
    fcade.checkFind(req).then((result) => {
          console.log(result);
          return resHendler.successHandler(res,result)
      }).catch ((e) => {
          return resHendler.errorHandler(res, e)
    })
})

module.exports = router