import { useHistory } from "react-router"
import {
    UPDATE_USER , GET_USER , APPLY_COUPON_USER ,
} from "../action/reducer.types"
export default function (state = {}, action) {
    switch(action.type) {
        case UPDATE_USER : {
            return {
                ...state,
                updateValue : action.payload
            }
        } 
        case GET_USER : {
            return {
                ...state,
                getUser : action.payload
            }
        }
        case APPLY_COUPON_USER : {
            return {
                ...state,
                applyedCoupon : action.payload 
            }
        } 
        default: return state
    }
}