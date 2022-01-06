import React , { useContext } from "react"
import { apiAction } from "./api.action";
import { APPLY_COUPON_USER , ADDRESS_USER , GET_USER, UPDATE_USER } from "./reducer.types";
import { ecommerceEndpoints , platformUrl } from './endpoint'
import { GlobalContext } from "../Context/Globlecontext";

export function updateUser (data) {  
  return apiAction({
      url: `${platformUrl + ecommerceEndpoints.updateUser}`,
      method: 'post',
      label:UPDATE_USER ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data,
    })
} 

export function getUser () {  
  return apiAction({
      url: `${platformUrl + ecommerceEndpoints.getUser}`,
      method: 'get',
      label:GET_USER ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
    })
} 

export function addAddress (data) {  
  return apiAction({
      url: `${platformUrl + ecommerceEndpoints.address}`,
      method: 'post',
      label:ADDRESS_USER ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data
    })
} 

export function applyCoupon (data) {  
  return apiAction({
      url: `${platformUrl + ecommerceEndpoints.applyCoupon}`,
      method: 'post',
      label:APPLY_COUPON_USER ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data
    })
} 