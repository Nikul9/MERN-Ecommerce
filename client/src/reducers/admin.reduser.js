import {
    ADMIN_CHECK
} from "../action/reducer.types"
export default function (state = {}, action) {
    switch(action.type) {
        case ADMIN_CHECK : {
            return {
                ...state,
                adminUser : action.payload
            }
        } 
        default: return state
    }
}