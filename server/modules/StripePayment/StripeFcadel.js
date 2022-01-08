const resHeandler = require("../../handlers/responseHandler")
const constant = require("../../utils/constant")
const StripeContext = require("./StrinpeContext")
const services = require("./StripeService")

const stripeIntent = async (req) => {
    return services.stripeIntent(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,StripeContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , StripeContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,StripeContext.MESSAGE.addError,error)
    })
}

module.exports = {
    stripeIntent   
}