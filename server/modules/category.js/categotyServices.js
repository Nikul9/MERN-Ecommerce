const categoryData = require("../../models/category")
const slugify = require("slugify")
const create = async (req) => {
    try { 
        const {name} = req.body
        console.log(req.body);
        if(!name) { 
            return 1
        }
        const category = await new categoryData({name  , slug : slugify(name).toLowerCase() }).save()
        return category
    } catch(e) { 
        console.log(e);
        return 1
    }
}

const list = async (req) => {
    try { 
        const AllCategory = await categoryData.find({}).sort({createdAt : -1})
        return AllCategory
    }catch(e) {
        console.log(e);
        return 1
    }
}

const listOne = async (req) => {
    try { 
        if(!req.params.slug) { 
            return 1
        }
        const OneCategory = await categoryData.findOne({slug : req.params.slug}) 
        return OneCategory
    } catch(e) {
        console.log(e);
        return 1
    }
}

const DeleteCategory = async (req) => {
    try { 
        console.log("in delete services");
        console.log(req.params.slug);
        if(!req.params.slug) { 
            return 1
        }
        const deleteCategory = await categoryData.findOneAndDelete({slug : req.params.slug}) 
        return deleteCategory
    } catch(e) {
        console.log(e);
        return 1
    }
}

const update = async (req) => {
    try { 
        console.log(req.params.slug);
        console.log(req.body);
        if(!req.params.slug) { 
            return 1
        }
        const {name} = req.body
        if(!name){
            return 1
        }
        const updateData = await categoryData.findOneAndUpdate(
            {slug : req.params.slug},{name , slug : slugify(name)},  {new : true})
        return updateData
    } catch(e) {
        console.log(e);
        return 1
    }
}

module.exports = {
    create,
    list,
    listOne,
    DeleteCategory,
    update
}