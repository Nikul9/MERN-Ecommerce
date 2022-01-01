import { apiAction } from "./api.action"
import { CREATE_CATEGORY 
        , UPDATE_CATEGORY 
        , REMOVE_CATEGORY 
        , GET_ALL_CATEGORY 
        , GET_ONE_CATEGORY } from "./reducer.types"
import { ecommerceEndpoints , platformUrl } from "./endpoint"

export const createCategory = (data) => {
    return apiAction({
      url    : `${platformUrl + ecommerceEndpoints.getCategory}`,
      method : 'post',
      label  : CREATE_CATEGORY ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data
    })
}

export const updateCategory = ( slug ,  data) => {
    return apiAction({
      url    : `${platformUrl + ecommerceEndpoints.updateCategory}/${slug}`,
      method : 'patch',
      label  : UPDATE_CATEGORY ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data : data
    })
}

export const getCategory = () => {
   return apiAction({
      url    : `${platformUrl + ecommerceEndpoints.getCategory}`,
      method : 'get',
      label  : GET_ALL_CATEGORY ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true
    })
}

export const getOneCategory = (data) => {
    return apiAction({
      url    : `${platformUrl + ecommerceEndpoints.getOneCategory}/${data}`,
      method : 'get',
      label  : GET_ONE_CATEGORY ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true
    })
}

export const removeCategory = (data) => {
    return apiAction({
      url    : `${platformUrl + ecommerceEndpoints.removeCategory}/${data.slug}`,
      method : 'delete',
      label  : REMOVE_CATEGORY ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true
    })
}