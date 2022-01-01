const subContext = require("./subContext")
const resHeandler = require("../../handlers/responseHandler")
const constant = require("../../utils/constant")
const services = require('./subServices')

const create = (req) => {
    return services.create(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,subContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , subContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,subContext.MESSAGE.addError,error)
    })
}

const list = async (req) => {
    return services.list(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,subContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , subContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,subContext.MESSAGE.addError,error)
    }) 
}

const listOne = async (req) => {
    return services.listOne(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,subContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , subContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,subContext.MESSAGE.addError,error)
    }) 
}

const deleteCategory = async (req) => {
    return services.DeleteCategory(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,subContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , subContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,subContext.MESSAGE.addError,error)
    }) 
}

const update = async (req) => {
    return services.update(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,subContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , subContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,subContext.MESSAGE.addError,error)
    }) 
}

const findByParent = async (req) => {
    return services.findByParent(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,subContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , subContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,subContext.MESSAGE.addError,error)
    }) 
}

module.exports = {
    create,
    list,
    listOne,
    deleteCategory,
    update,
    findByParent
}