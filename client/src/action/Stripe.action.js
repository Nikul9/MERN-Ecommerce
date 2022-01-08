import { apiAction } from "./api.action"
import { platformUrl , ecommerceEndpoints } from "./endpoint"
import { STRIPE_PAYMENT_INIENT } from "./reducer.types"

export function stripePaymentIntent() {
    return apiAction({
        url: `${platformUrl + ecommerceEndpoints.stripePaymentIntent}`,
      method: 'get',
      label:STRIPE_PAYMENT_INIENT,
      isTokenSkipped: true,
      showLoader: true,
      showToast: true,
    })
}