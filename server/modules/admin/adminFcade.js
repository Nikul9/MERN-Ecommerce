const service = require('./adminServices')
const resHeandler = require("../../handlers/responseHandler")
const constant = require("../../utils/constant")
const adminContant = require("./adminContext")

const adminCheck = async (req) => {
    console.log("om fcade file");
    return service.adminCheck(req).then((data) => {
        if(data && data === 1) {
                return resHeandler.requestResponse(false, constant.HTTP_CODE.badRequest ,adminContant.MESSAGE.emailExist , data )
        } else {
            console.log('from fcade file');
            console.log(data);
            return resHeandler.requestResponse(true,constant.HTTP_CODE.ok , adminContant.MESSAGE.getSuccess,data)
        }
    },(error) => {
        return resHeandler.requestResponse(false,constant.HTTP_CODE.badRequest,adminContant.MESSAGE.addError,error)
    })
}

module.exports = {
    adminCheck
}