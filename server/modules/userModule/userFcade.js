const service = require('./userService')
const resHeandler = require('../../handlers/responseHandler')
const userConstant = require('./userContext')
const constant = require('../../utils/constant')

const regiesterUser = async (req) => {
    return service.regiesterUser(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const nodeMailer = async (req) => {
    return service.nodeMailer(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const login = async (req) => {
    return service.login(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const socialLogin = async (req) => {
    return service.socialLogin(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const updateUser = async (req) => {
    return service.updateUser(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const getUser = async (req) => {
    return service.getUser(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const addToCart = async (req) => {
    return service.addToCart(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const getAddToCart = async (req) => {
    return service.getAddToCart(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const updateCart = async (req) => {
    return service.updateCart(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const deleteAddToCart = async (req) => {
    return service.deleteAddToCart(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const addAddress = async (req) => {
    return service.addAddress(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}

const applyCoupon = async (req) => {
    return service.applyCoupon(req).then((data) => {
        if(data && data === 1) {
            return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,userConstant.MESSAGE.emailExist , data )
        } else {
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , userConstant.MESSAGE.getSuccess,data)
        }
    } , (error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,userConstant.MESSAGE.addError,error)
    }) 
}


module.exports = {
    regiesterUser,
    nodeMailer,
    login,
    socialLogin,
    updateUser,
    getUser,
    addToCart,
    getAddToCart , 
    updateCart ,
    deleteAddToCart,
    addAddress,
    applyCoupon
}