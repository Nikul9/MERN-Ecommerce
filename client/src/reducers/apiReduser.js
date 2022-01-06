import _ from 'lodash'
import { useSelector } from 'react-redux'
import { API_END ,  API_START , API_ERROR , API_SUCCESS } from "../action/reducer.types"
const initalState={successLabels : [] , type : [], errorLabels : []}

export default function (state = initalState  , action ) {
    // const { successLabels } = useSelector((state) => {
    //     return apiReduser
    // })
    switch(action.type) {
        case API_SUCCESS : {
            const lable = action.payload.label
            return {
                ...state,
                successLabels :  action.payload.label ,  // [...state.successLabels , action.payload.label],
                // list : [
                //     ...state.list , 
                //     {lable} 
                // ],
                apiSuccessData : action.payload
            }
        }
        case API_ERROR : {
            return {
                ...state,
                errorLabels :  action.payload.label ,  // [...state.errorLabels, action.payload.label],
                apiErrorData: action.payload,
            }
        } 
        case API_END : {
            const newType = [...state.type = []]
                newType.splice(state.type.indexOf(action.payload), 1)
                return {
                ...state,
                // isLoadingData: newType.length > 0,
                // type: newType,
                // showLoader: _.omit(state.showLoader || {}, [
                //     action.payload.extraParam ? action.payload.extraParam + action.payload : action.payload,
                // ]),
                // successLabels: state.successLabels.filter(x => x !== action.payload),
                // errorLabels: state.errorLabels.filter(x => x !== action.payload),
                // apiData: null,
                // accessDenied: false,
                apiEnd : action.payload
            }
        }
        case API_START : {
            return {
                ...state,
                isApiError: false,
                isLoadingData: true,
                type: [...state.type = [], action.payload.label],
                successData: action.payload.successData,
                showLoader: {
                  ...(state.showLoader || {}),
                  [action.payload.extraParam ? action.payload.extraParam + action.payload.label : action.payload.label]:
                    action.payload.showLoader,
                },
              }
        }
        default : 
            return {
                state
            }
    }
}