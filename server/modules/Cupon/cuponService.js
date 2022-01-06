const CuponData = require("../../models/cupon")

const addCupon = async (req) => {
    try {
        console.log(req.body);
        const data = {
            name     : req.body.name,
            date     : req.body.date,
            discount : parseInt(req.body.discount) 
        }
        const Cupon = await new CuponData(data).save()  
        return Cupon 
    } catch(e) {
        console.log(e);
        return 1
    }
}

const listCupon = async (req) => {
    try {
        console.log('in lisr cuopnnnnnnnnnn');
        console.log('in lisr cuopnnnnnnnnnn');
        console.log('in lisr cuopnnnnnnnnnn');
        const allCupon = await CuponData.find({}).exec()
        return allCupon
    } catch(e) {
        console.log(e);
        return 1
    }
}

const removeCupon = async (req) => {
    try {

        const cuponId = req.params.cuponId
        console.log(cuponId);
        const removeCupon = await CuponData.findByIdAndDelete(cuponId)
        return removeCupon
    } catch(e) {
        console.log(e);
        return 1
    }
}

module.exports = {
    addCupon,
    listCupon,
    removeCupon
}