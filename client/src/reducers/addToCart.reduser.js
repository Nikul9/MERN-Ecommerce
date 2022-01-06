import { GET_ADD_TO_CART , DELETE_ADD_TO_CART, DELETE_PRODUCT, UPDATE_ADD_TO_CART }from "../action/reducer.types"
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
        case UPDATE_ADD_TO_CART : {
            return {
                ...state,
                updatedCart : action.payload
            }
        }
        case DELETE_ADD_TO_CART : {
            return {
                ...state ,
                deleteFromCart : action.payload
            }
        }
        default : return state
    }    
} 