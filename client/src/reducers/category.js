import { UPDATE_CATEGORY 
        , GET_ONE_CATEGORY 
        , GET_ALL_CATEGORY 
        , REMOVE_CATEGORY, 
        CREATE_CATEGORY} from "../action/reducer.types"

export default function (state = {} , action) {
    switch (action.type) {
        case CREATE_CATEGORY :
            return {
                ...state,
                createdCategory : action.payload
            }
        case UPDATE_CATEGORY :
            return {
                ...state,
                updatedCategory : action.payload
            }
        case REMOVE_CATEGORY : 
            return {
                ...state,
                removedCategory : action.payload
            }
        case GET_ALL_CATEGORY :
            return {
                ...state,
                getAllCategory : action.payload
            }
        case GET_ONE_CATEGORY :
            return {
                ...state,
                getOneCategory : action.payload
            }
        default: return state
    }

}