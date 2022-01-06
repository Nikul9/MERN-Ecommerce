import authReduser from "./auth"
import userReduser from "./useerReduser"
import adminUser from "./admin.reduser"
import category from "./category"
import apiReduser from "./apiReduser"
import { combineReducers } from "redux"
import subCategory from "./sub.reduser"
import cloud from "./cloud.reducer"
import product from "./product.reduser"
import addToCart from "./addToCart.reduser"
import coupon from "./coupon.reduser"

export default combineReducers({
    authReduser,
    apiReduser,
    userReduser,
    adminUser,
    category,
    subCategory,
    cloud,
    product,
    addToCart,
    coupon
})