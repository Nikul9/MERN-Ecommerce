import { STRIPE_PAYMENT_INIENT } from "../action/reducer.types"
const initializeState = []
export default function stripePaymentIntent (state = initializeState , action) {
    switch (action.type) {
        case STRIPE_PAYMENT_INIENT : {
            return {
                ...state,
                stripeIntent : action.payload
            }
        }
        default : return state
    }
}