import { LIST_COUPON , REMOVE_CUPON ,  ADD_CUPON }from "./reducer.types"
import {platformUrl , ecommerceEndpoints} from "./endpoint"
import {apiAction} from "./api.action"
export function addCupon (data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.addCupon}`,
        method         : 'post',
        label          : ADD_CUPON,
        isTokenSkipped : true,
        showLoader     : true,
        showToast: true,
        data
    })
}

export function removeCupon (cuponId) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.removeCupon}/${cuponId}`,
        method         : 'delete',
        label          : REMOVE_CUPON,
        isTokenSkipped : true,
        showLoader     : true,
        showToast: true
    })
}

export function listCupon () {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.listcoupon}`,
        method         : 'get',
        label          : LIST_COUPON,
        isTokenSkipped : true,
        showLoader     : true,
        showToast: true
    })
}