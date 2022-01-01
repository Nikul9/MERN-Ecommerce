const services = require("./categotyServices")
const resHeandler = require("../../handlers/responseHandler")
const categoryContext = require("./categoryContext")
const constant = require("../../utils/constant")

const create = async (req) => {
    return services.create(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,categoryContext.MESSAGE.emailExist , data )
        } else {
            console.log('from fcade file');
            console.log(data);
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , categoryContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,categoryContext.MESSAGE.addError,error)
    }) 
}
const list = async (req) => {
    return services.list(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,categoryContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , categoryContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,categoryContext.MESSAGE.addError,error)
    }) 
}

const listOne = async (req) => {
    return services.listOne(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,categoryContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , categoryContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,categoryContext.MESSAGE.addError,error)
    }) 
}

const deleteCategory = async (req) => {
    return services.DeleteCategory(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,categoryContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , categoryContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,categoryContext.MESSAGE.addError,error)
    }) 
}

const update = async (req) => {
    return services.update(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,categoryContext.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , categoryContext.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,categoryContext.MESSAGE.addError,error)
    }) 
}

module.exports = {
    create,
    list,
    listOne,
    deleteCategory,
    update
}