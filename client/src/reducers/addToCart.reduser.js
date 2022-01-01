import { GET_ADD_TO_CART , DELETE_ADD_TO_CART, DELETE_PRODUCT }from "../action/reducer.types"
let initicalState = []
export default function(state = initicalState , action ) {
    switch (action.type) {
        case "ADD_TO_CART_COUNT" : {
            return {
                ...state ,
                newCart : action.payload
            }
        }
        case GET_ADD_TO_CART : {
            return {
                ...state ,
                saveCart : action.payload
            }
        }
        case DELETE_ADD_TO_CART : {
            return {
                ...state ,
                saveCart : action.payload
            }
        }
        default : return state
    }    
} 