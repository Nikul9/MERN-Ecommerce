import React, { useContext } from "react"
import { withRouter , Route , Switch } from "react-router-dom"
import ProtectedRoute from "./protectedRoute"
import UnProtectedRoute from "./unProtectedRoute"
import AdminRoute from "./AdminRoute"
import OpenRoute from "./openRoute"
import { GlobalContext } from "../Context/Globlecontext"
import Login from "../pages/auth/Login"
import AdminDashboard from "../pages/admin/adminDashboard"
import UpdateCategory from "../pages/admin/category/UpdateCategory"
import Register from "../pages/auth/Register"
import { verifyUser } from "../action/auth.action"
import Home from "../pages/Home"
import History from "../pages/user/History"
import UpdateUser from "../pages/user/updateUser"
import WishList from "../pages/user/wishList"
import CreateCategory from "../pages/admin/category/createCategory"
import SubCreate from "../pages/admin/SubCategory/subCategory"
import UpdateSubCreate from "../pages/admin/SubCategory/updateSub"
import VerifyUserCode from "../pages/auth/VarifyUser"
import AllProduct from "../pages/admin/product/Allproduct"
import productCreate from "../pages/admin/product/productCreate"
import Product from "../pages/product"
import CategoryHome from "../pages/category/CategoryHome"
import SubCategoryHome from "../pages/sub/SubHome"
import ShopPage from "../pages/shop"
import Cart from "../pages/cart"
import Checkout from "../pages/checkOut"
const AppRoute = () => {    
    const {  isLogin , userData } = useContext(GlobalContext)
    console.log(isLogin);
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/product/:slug' component={Product} />
            <Route exact path='/category/:slug' component={CategoryHome} />
            <Route exact path='/sub/:slug' component={SubCategoryHome} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/cart' component={Cart} />
            <UnProtectedRoute exact path="/login" component={Login} auth={isLogin} />
            <UnProtectedRoute exact path="/register" component={Register} auth={isLogin} />
            <Route exact path="/userVerify/:verifyToken" component={VerifyUserCode}  />
            <ProtectedRoute exact path="/user/history" component={History} auth={isLogin} />
            <ProtectedRoute exact path="/user/update" component={UpdateUser} auth={isLogin} />
            <ProtectedRoute exact path="/user/wishlist" component={WishList} auth={isLogin} />
            <ProtectedRoute exact path="/cart/checkout" component={Checkout} auth={isLogin} />
            <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
            <AdminRoute exact path="/admin/category" component={CreateCategory} />
            <AdminRoute exact path="/admin/updateCategory/:slug" component={UpdateCategory} />
            <AdminRoute exact path="/admin/subCategory" component={SubCreate} />
            <AdminRoute exact path="/admin/updateSub/:slug" component={UpdateSubCreate} />
            <AdminRoute exact path="/admin/product" component={productCreate} />
            <AdminRoute exact path="/admin/products" component={AllProduct} />
        </Switch>
    )
}

export default withRouter(AppRoute)