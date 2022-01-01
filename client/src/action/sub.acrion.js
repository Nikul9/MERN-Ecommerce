import { apiAction } from "./api.action"
import { platformUrl , ecommerceEndpoints } from "./endpoint"
import { CREATE_SUB_CATEGORY 
        , UPDATE_SUB_CATEGORY
        , PARENT_SUB_CATEGORY 
        , DELETE_SUB_CATEGORY 
        , ALL_SUB_CATEGORY 
        , ONE_SUB_CATEGORY } from "./reducer.types"

export const createSubCategory = (data) => {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.createSubCategory}`,
        method: 'post',
        label:CREATE_SUB_CATEGORY ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        data,
    })
}

export const deleteSubCategory = (data) => {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.deleteSubCategory}/${data.data}`,
        method: 'delete',
        label: DELETE_SUB_CATEGORY ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
    })
}

export const updateSubCategory = (data , parems) => {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.updateSubCategory}/${parems.slug}`,
        method: 'patch',
        label:UPDATE_SUB_CATEGORY ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        data
    })
}

export const allSubCategory = () => {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.allSubCategory}`,
        method: 'get',
        label:ALL_SUB_CATEGORY ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
    })
}

export const oneSubCategory = (data) => {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.oneSubCategory}/${data.slug}`,
        method: 'get',
        label:ONE_SUB_CATEGORY ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
    })
}

export const parentSubCategory = (data) => {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.parentSubCategory}/${data.id}`,
        method: 'get',
        label:PARENT_SUB_CATEGORY ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
    })
}