import  React, { useContext, useEffect , useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Route , Redirect } from "react-router-dom";
import reducers from "../reducers";
import { adminCheck } from "../action/admin.action"
import axios from "axios"
import { GlobalContext } from "../Context/Globlecontext";

const AdminRoute = ({component : Component , ...rest}) => {
    const { getUser } = useSelector((state) => {
        return state.userReduser
    })
    let admin = false
    const {isLogin , userData} = useContext(GlobalContext)
    const adminData = userData
    console.log("userData");
    console.log("userData");
    console.log(userData);
    if(adminData.role) {
        if(adminData.role === "subscriber" ) {
            admin = true
        }   
    }
    
    return <Route {...rest} render={props => (admin ? <Component {...props} /> : <Redirect to="/" /> )} />
    
}

export default  AdminRoute