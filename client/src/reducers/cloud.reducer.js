import { CLOUD_IMAGE_UPLOAD 
    , CLOUD_IMAGE_REMOVE } from "../action/reducer.types"

export default function (state = {} , action) {
switch (action.type) {
    case CLOUD_IMAGE_UPLOAD :
        return {
            ...state,
            cloudImageUploaded : action.payload
        }
    case CLOUD_IMAGE_REMOVE :
        return {
            ...state,
            cloudImageRemeved : action.payload
        }
    default: return state
}

}