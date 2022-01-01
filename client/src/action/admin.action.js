import React , { useContext } from "react"
import { apiAction } from "./api.action";
import { ADMIN_CHECK } from "./reducer.types";
import { ecommerceEndpoints , platformUrl } from './endpoint'
import { GlobalContext } from "../Context/Globlecontext";

export function adminCheck () {  
  return apiAction({
      url: `${platformUrl + ecommerceEndpoints.adminCheck}`,
      method: 'get',
      label:ADMIN_CHECK ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
    })
} 