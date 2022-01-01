const productData = require("../../models/product")
const slugify = require("slugify"); 
const { requestResponse } = require("../../handlers/responseHandler");
const User = require("../../models/user");
const { findOneAndUpdate } = require("../../models/product");
const CategoryData = require("../../models/category")
const subCategoryData = require("../../models/SubCategory")



const create = async (req) => {
    try { 
        req.body.slug = await  slugify(req.body.title)
        console.log(req.body);
        
        const newProduct = await new productData(req.body).save() 
    } catch(error) {
        console.log(error);
        return 1
    }
}

const getAllList = async (req) => {
    try {
            const allProduct = await productData.find({}).populate("subCategorys").populate("category")
            return allProduct
    } catch(e) {
        console.log(e);
        return 1
    }
}

const deleteProduct = async (req) => {
    try {
        console.log(req.params.slug);
        if(!req.params.slug) {
            return 1
        }
        const deletedPreduct = await productData.findOneAndDelete({slug : req.params.slug})
        console.log(deletedPreduct);
        return deletedPreduct 
    } catch (e) {
        console.log(e);
        return 1
    }
}

const list = async (req) => {
    try { 
        console.log(req.body);
        const { sort, order, page } = req.body;
        console.log(sort, order, page);
        if(! sort || ! order ||! page) {
            return 1
        }
        const currentPage = page || 1
        const perPage = 3
        const countData = await productData.find({}).estimatedDocumentCount()
        const filterData = await productData.find({})
                                .skip((currentPage - 1) * perPage)
                                .populate("category")
                                .populate("subCategorys")
                                .sort([[sort , order ]]) 
                                .limit(perPage)
       // console.log(filterData);

        return { countData , filterData}
    } catch(e) {
        console.log(e);
        // return 1
    }
}

const listOne = async (req) => {
    try {
        console.log(req.params.slug);
        const slug = req.params.slug
        if(!slug) {
            return 1
        }
        const oneProduct = await productData.findOne({slug}).populate("subCategorys").populate("category")
        if(!oneProduct) {
            return 1
        }
        console.log(oneProduct);
        return oneProduct 
    } catch(e) {
        console.log(e);
        return 1
    }
}

const rating = async (req) => {
    try {
        if(!req.params.productId) {
            return 1
        }
        const product = await productData.findById({_id : req.params.productId }).exec()
        const user = await User.findOne({email : req.user.email})
        if(!user || !product) {
            console.log("aasdsdfsdfsdfsdf");
            return 1
        }
        const { star } = req.body
        const exitingReatings = product.ratings.find((elem) => elem.postedBy.toString() === user._id.toString())
        console.log("exitingReatings");
        console.log(exitingReatings);
        if(exitingReatings == undefined) {
            let reatingAdded = await productData.findByIdAndUpdate(product._id,{
                $push : {"ratings" : { star , postedBy : user._id }}
            },{new : true}).exec()
            return reatingAdded
        } else {
            console.log("in else")
            const reatingUpdated = await productData.updateOne(
                {
                  ratings: { $elemMatch: exitingReatings },
                },
                { $set: { "ratings.$.star": star } },
                { new: true }
              ).exec();
            return reatingUpdated 
        }s
        // return 1
    } catch (e) {
        console.log(e);
        return 1
    }
}

const releted = async (req) => {
    try {
        console.log("/***************************************************/");
        const productId = req.params.productId
        if(!productId) {
            return 1
        } 
        const product = await productData.find({_id :  productId})
        const reletedProduct = await productData.find({_id : { $ne : productId}} 
                                                    , {category : product.category})
                                                    .populate("category")
                                                    .populate("subCategory")
                                                    .populate("postedBy").exec()
        console.log("reletedProduct");
        console.log(reletedProduct);
        return reletedProduct
    } catch (e) {
        console.log(e);
        return 1
    }
}

const productFromCategory = async (req) => {
    try {
        const categorySlug = req.params.slug
        if(!categorySlug) {
            return 1
        }
        const category = await CategoryData.findOne({slug : categorySlug})
        if(category === null) {
            return 1
        }
        const categoryProduct = await productData.find({category}).populate("category")
        return { products : categoryProduct , 
            category
        } 
    } catch (e) {
        console.log(e);
        return 1
    }
}

const productFromSubCategory = async (req) => {
    try {
        const subCategorySlug = req.params.slug
      //  console.log(req.params.slug);
        if(!subCategorySlug) {
            return 1
        }
        const subCategory = await subCategoryData.findOne({slug : subCategorySlug})
        console.log(subCategory);
        if(subCategory === null) {
            return 1
        }
        const subCategoryProduct = await productData.find({ subCategorys : subCategory})
                                            .populate("subCategorys")
                                            .exec()
        return subCategoryProduct 
    } catch (e) {
        console.log(e);
        return 1
    }
}

const checkFind = async (req) => {
    try {
        console.log(req.body)
        let FilterData = {}
        const filterKey = Object.keys(req.body)
        filterKey.map((key) => {
            let a = req.body[key]
            // console.log(a);
            console.log(req.body[key] == []);
            if( req.body[key] instanceof Array ) {
                console.log("IN Array");
                if(req.body[key][0] != undefined ) {
                    console.log(req.body[key]);
                    FilterData[key] = req.body[key]
                }
            }
            if(key == "price") {
                FilterData[key] = { '$gt' : parseInt(req.body[key])}
            }
           // FilterData = {...FilterData , key : [req.body[key]] }
        })
        console.log(FilterData);
       const finded = await productData.find(FilterData)
       //console.log(finded);
       return finded 
    } catch (e) {
        console.log(e);
        return 1
    }
    if(req.body.brand === null ) {

    }
}

module.exports = {
    create,
    getAllList,
    deleteProduct,
    list,
    listOne,
    rating,
    releted,
    productFromCategory,
    productFromSubCategory,
    checkFind
} 