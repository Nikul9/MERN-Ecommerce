import { CLOUD_IMAGE_UPLOAD 
    , CLOUD_IMAGE_REMOVE } from "./reducer.types"
    import { apiAction } from "./api.action"
    import { ecommerceEndpoints , platformUrl } from './endpoint'

export function cloudImageUpload(data) {
    return apiAction({
        url: platformUrl + ecommerceEndpoints.cloudImageUpload,
        method: 'post',
        label:  CLOUD_IMAGE_UPLOAD ,
        isTokenSkipped: true,
        showLoader: true,
        showToast: true,
        data,
    })
}

export function cloudImageRemove(data) {
    return apiAction({
        url            : platformUrl + ecommerceEndpoints.cloudImageRemove,
        method         : 'post',
        label          :  CLOUD_IMAGE_REMOVE ,
        isTokenSkipped : true,
        showLoader     : true,
        showToast      : true,
        data,
    })
}