import {  CREATE_SUB_CATEGORY 
        , UPDATE_SUB_CATEGORY 
        , ALL_SUB_CATEGORY 
        , DELETE_SUB_CATEGORY
        , ONE_SUB_CATEGORY
        , PARENT_SUB_CATEGORY } from "../action/reducer.types";

export default function (state = [] , action) {
    switch(action.type) {
        case CREATE_SUB_CATEGORY : 
            return {
                ...state,
                createdSubCategory : action.payload
            }
        
        case ALL_SUB_CATEGORY : 
            return {
                ...state,
                allSubCategorys : action.payload
            }
        
        case DELETE_SUB_CATEGORY : 
            return {
                ...state,
                deletedSubCategory : action.payload
            }
         
        case UPDATE_SUB_CATEGORY :
            return {
                ...state,
                updatedSubCategory : action.payload
            }

        case ONE_SUB_CATEGORY :
            return {
                ...state,
                getOneSubCategory : action.payload
            }
        case PARENT_SUB_CATEGORY : 
        return {
            ...state,
            parentSub : action.payload
        }
        default : {
            return state
        }
    }
}