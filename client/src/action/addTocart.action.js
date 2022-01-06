import { apiAction } from "./api.action";
import { UPDATE_ADD_TO_CART , GET_ADD_TO_CART , DELETE_ADD_TO_CART , ADMIN_CHECK , ADD_TO_CART } from "./reducer.types";
import { ecommerceEndpoints , platformUrl } from './endpoint'
import { GlobalContext } from "../Context/Globlecontext";

export function addToCart (data) {
  return apiAction({
      url: `${platformUrl + ecommerceEndpoints.addToCart}`,
      method: 'post',
      label:ADD_TO_CART,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data
    })
}

export function getAddToCart () {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.getAddToCart}`,
        method         : 'get',
        label          : GET_ADD_TO_CART,
        isTokenSkipped : true,
        showLoader     : true,
        showToast: true
    })
}

export function deleteAddToCart (data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.deleteAddToCart}/${data}`,
        method         : 'delete',
        label          : DELETE_ADD_TO_CART,
        isTokenSkipped : true,
        showLoader     : true,
        showToast: true
    })
}

export function updateCart (productId , data) {
    return apiAction({
        url            : `${platformUrl + ecommerceEndpoints.updateCart}/${productId}`,
        method         : 'post',
        label          : UPDATE_ADD_TO_CART,
        isTokenSkipped : true,
        showLoader     : true,
        showToast: true.valueOf,
        data
    })
}

export const addToCartCount = (data) => {
    return {
        type : "ADD_TO_CART_COUNT",
        payload : data
    }
}