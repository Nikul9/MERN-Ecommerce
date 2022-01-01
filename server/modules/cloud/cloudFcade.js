const services = require("./cloudService")
const resHeandler = require("../../handlers/responseHandler")
const constant = require("../../utils/constant")
const cloudcontext = require("./cloudContext")

const upload = async (req) => {
    return services.upload(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,cloudcontext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , cloudcontext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,cloudcontext.MESSAGE.addError,error)
    })
}

const remove = async (req) => {
    return services.remove(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,cloudcontext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , cloudcontext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,cloudcontext.MESSAGE.addError,error)
    })
}

module.exports = {
    upload,
    remove
}