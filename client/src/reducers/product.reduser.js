import { useHistory } from "react-router"
import {
    BEST_SELLERS,
    STAR_PRODUCT ,
    RELETED_PRODUCT ,
    PRODUCT_WITH_SUBCATEGORY ,
    PRODUCT_WITH_CATEGORY ,
    FILTER_PRODUCT ,
   DELETE_PRODUCT , LIST_ALL_PRODUCT, NEW_ARRIVALES , OPNE_PRODICT
} from "../action/reducer.types"
export default function (state = {}, action) {
    switch(action.type) {
        case LIST_ALL_PRODUCT : {
            return {
                ...state,
                listedAllproduct : action.payload
            }
        }
        case DELETE_PRODUCT : {
            return {
                ...state,
                deletedProduct : action.payload
            }
        }
        case NEW_ARRIVALES : {
            return {
                ...state,
                newArriavals : action.payload
            }
        }
        case BEST_SELLERS : {
            return {
                ...state,
                bestSellers : action.payload
            }
        }
        case OPNE_PRODICT : {
            return {
                ...state,
                getoneProduct : action.payload
            }
        }
        case STAR_PRODUCT : {
            return {
                ...state,
                getStar : action.payload
            }
        }
        case RELETED_PRODUCT : {
            return {
                ...state,
                getReletedProduct : action.payload
            }
        }
        case PRODUCT_WITH_SUBCATEGORY : {
            return {
                ...state,
                getProductWithSubCategory : action.payload
            }
        }
        case PRODUCT_WITH_CATEGORY : {
            return {
                ...state,
                getProductWithCategory : action.payload
            }
        }
        case FILTER_PRODUCT : {
            return {
                ...state,
                getProductFilter : action.payload
            }
        }
        default: return state
    }
}