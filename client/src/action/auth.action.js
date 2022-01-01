import {
    CHANGE_PASSWORD,
    LOG_IN,
    SIGN_UP,
    VERIFY_TOKEN,
    SOCIAL_LOG_IN,
    UPLOAD_MEDIA,
    NEAR_DETAILS,
    RESEND_VERIFICATION,
    SEND_FORGOT_PASSWORD,
    RESET_PASSWORD,
    VERIFY_FORGOT_PASSWORD,
    LOGOUT,
  } from './reducer.types'
  import { apiAction } from "./api.action"
  import { ecommerceEndpoints , platformUrl } from './endpoint'

  export function loginUser(data) {
    return apiAction({
      url: platformUrl + ecommerceEndpoints.login,
      method: 'post',
      label:LOG_IN ,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
      data,
    })
  }

export function verifyUser(data) {
    return apiAction({
        url: platformUrl + ecommerceEndpoints.verify,
        method: 'post',
        label: VERIFY_TOKEN,
        isTokenSkipped: true,
        showLoader: true,
        verifyToken : "",
        showToast: true,
        data,
    })
}
  
export function signup(data) {
    return apiAction({
      url: platformUrl + ecommerceEndpoints.signup,
      method: 'post',
      label: SIGN_UP,
      isTokenSkipped: true,
      data,
      showToast: true,
      crossDomain: true,
    })
  }

export function socialLogin(data) {
    return apiAction({
      url : platformUrl + ecommerceEndpoints.socialLogin,
      method : 'post',
      label : "SOCIAL_LOGIN",
      data
    })
}