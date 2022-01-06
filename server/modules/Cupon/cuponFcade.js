const cuponContext = require("./cuponContext")
const resHeandler = require("../../handlers/responseHandler")
const constant = require("../../utils/constant")
const services = require("./cuponService")
const addCupon = async (req) => {
    return services.addCupon(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,cuponContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , cuponContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,cuponContext.MESSAGE.addError,error)
    }) 
}

const listCupon = async (req) => {
    return services.listCupon(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,cuponContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , cuponContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,cuponContext.MESSAGE.addError,error)
    }) 
}

const removeCupon = async (req) => {
    return services.removeCupon(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,cuponContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , cuponContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,cuponContext.MESSAGE.addError,error)
    }) 
}

module.exports = {
    addCupon,
    listCupon,
    removeCupon
}