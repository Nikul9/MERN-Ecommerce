const SubCategoryData = require("../../models/SubCategory")
const slugify = require("slugify")

const create = async (req) => {
    try { 
        const {name} = req.body
        if(!name) { 
            return 1
        }
        const category = await new SubCategoryData({name  , slug : slugify(name).toLowerCase() , parent : req.body.parent}).save()
        return category
    } catch(e) { 
        console.log(e);
        return 1
    }
}

const list = async (req) => {
    try { 
        const AllCategory = await SubCategoryData.find({}).sort({createdAt : -1})
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
        const OneCategory = await SubCategoryData.findOne({slug : req.params.slug}) 
        return OneCategory
    } catch(e) {
        console.log(e);
        return 1
    }
}

const DeleteCategory = async (req) => {
    try { 
        if(!req.params.slug) { 
            return 1
        }
        const {slug}  = req.params
        const deleteCategory = await SubCategoryData.findOneAndDelete({slug }) 
        return deleteCategory
    } catch(e) {
        console.log(e);
        return 1
    }
}

const update = async (req) => {
    try { 
        console.log(req.params.slug);
        if(!req.params.slug) { 
            return 1
        }
        console.log(req.body);
        const {parent , name} = req.body
        if(!name){
            return 1
        }
        const updateData = await SubCategoryData.
        findOneAndUpdate({slug : req.params.slug},{name , slug : slugify(name) , parent },  {new : true})
        console.log("updateData");
        console.log(updateData);
        return updateData
    } catch(e) {
        console.log(e);
        return 1
    }
}

const findByParent = async (req) => {
    try {
        const id = req.params.id
        console.log(id);
        if(!id) {
            return 1
        }
        const data = await SubCategoryData.find({parent : id})
        console.log(data);
        return data
    } catch (e) {
        console.log(e);
        return 1
    }
}

module.exports = {
    create,
    list,
    listOne,
    DeleteCategory,
    update,
    findByParent
}