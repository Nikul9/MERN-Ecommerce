import { LIST_COUPON , ADD_CUPON , REMOVE_CUPON } from "../action/reducer.types"
const inislizedState = []
export default function (state = inislizedState , action) {
    switch (action.type) {
        case ADD_CUPON : {
            return { 
                ...state,
                addedCoupon : action.payload
            }
        }
        case LIST_COUPON : {
            return {
                ...state ,
                listAllCupon : action.payload
            }
        }
        case REMOVE_CUPON : {
            return {
                ...state, 
                removedCoupon : action.payload
            }
        }
        default: return {
            state
        }   
    }
}