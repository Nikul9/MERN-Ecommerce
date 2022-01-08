import { useHistory } from "react-router"
import {
    UPDATE_USER ,
    ADMIN_ORDER_USER ,
    GET_USER ,
    APPLY_COUPON_USER ,
    CREATE_ORDER_USER,
    PURCHASE_HISTORY_USER
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
        case CREATE_ORDER_USER : {
            return {
                ...state,
                createdOrder : action.payload
            }
        } 
        case PURCHASE_HISTORY_USER : {
            return {
                ...state,
                purchaseHistory : action.payload
            }
        }
        case ADMIN_ORDER_USER : {
            return {
                ...state , 
                adminAllOrder : action.payload
            }
        }
        default: return state
    }
}