import { useHistory } from "react-router"
import {
    LOGOUT,
    LOG_IN,
  SIGN_UP,
  VERIFY_TOKEN,
  SOCIAL_LOGIN
} from "../action/reducer.types"
export default function (state = {}, action) {
    switch(action.type) {
        case LOG_IN:
            return {
              ...state,
              loginData: action.payload,
        }
        case SIGN_UP:
            return {
            ...state,
            signupData: action.payload,
            signupMessage: action.message,
            signupStatus : action.status
        }
        case VERIFY_TOKEN : 
         return { 
            ...state,
            verifyToken : action.payload,
            message : action.message,
            status : action.status,
            verifiedUser : action.payload.data._id
        }
        case SOCIAL_LOGIN : {
            return {
                ...state,
                socialLogin : action.payload
            }
        } 
        default:
            return state
    }
}