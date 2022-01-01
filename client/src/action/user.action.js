import React , { useContext } from "react"
import { apiAction } from "./api.action";
import { GET_USER, UPDATE_USER } from "./reducer.types";
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