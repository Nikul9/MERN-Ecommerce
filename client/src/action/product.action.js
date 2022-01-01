import {      DELETE_PRODUCT 
            , CREATE_PRODUCT 
            , LIST_ALL_PRODUCT
            , NEW_ARRIVALES
            , OPNE_PRODICT  
            , BEST_SELLERS 
            , STAR_PRODUCT
            , RELETED_PRODUCT
            , PRODUCT_WITH_SUBCATEGORY
            , FILTER_PRODUCT
            , PRODUCT_WITH_CATEGORY } from "./reducer.types"
import { apiAction } from "./api.action"
import { ecommerceEndpoints , platformUrl } from './endpoint'

export function createProduct(data) {
    return apiAction({
        url: platformUrl + ecommerceEndpoints.createProduct,
        method: 'post',
        label:  CREATE_PRODUCT ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        data,
    })
}

export function listAllProduct() {
    return apiAction({
        url: platformUrl + ecommerceEndpoints.liatAllProduct,
        method: 'get',
        label:  LIST_ALL_PRODUCT ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
    })
}

export function deleteProduct(data) {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.delteProduct}/${data.slug}`,
        method: 'delete',
        label:  DELETE_PRODUCT ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
    })
}

export function listForNewArrivals(data) {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.newArrivals}`,
        method: 'post',
        label:  NEW_ARRIVALES ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        data
    })
}

export function listForBestSellers (data) {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.bestSellers}`,
        method: 'post',
        label:  BEST_SELLERS ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        data
    })
}

export function oneProduct(data) {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.oneProduct}/${data.slug}`,
        method: 'get',
        label:  OPNE_PRODICT ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        
    })
}

export function productStar(data,product) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.productStar}/${product.productId}`,
        method         : 'put',
        label          :  STAR_PRODUCT ,
        isTokenSkipped : true,
        showLoader     : true,
        showToast      : true,
        data
    })
}

export function reletedProduct(data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.reletedProduct}/${data.productId}`,
        method         : 'get',
        label          :  RELETED_PRODUCT ,
        isTokenSkipped : true,
        showLoader     : true,
        showToast      : true,
        data
    })
}

export function productWithCategory(data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.productWithCategory}/${data.slug}`,
        method         : 'get',
        label          :  PRODUCT_WITH_CATEGORY ,
        isTokenSkipped : true,
        showLoader     : true,
        showToast      : true,
        data
    })
}

export function productWithSubCategory(data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.productWithSubCategory}/${data.slug}`,
        method         : 'get',
        label          :  PRODUCT_WITH_SUBCATEGORY,
        isTokenSkipped : true,
        showLoader     : true,
        showToast      : true,
        data
    })
}

export function filterProduct(data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.filterProduct}`,
        method         : 'post',
        label          :  FILTER_PRODUCT,
        isTokenSkipped : true,
        showLoader     : true,
        showToast      : true,
        data
    })
}