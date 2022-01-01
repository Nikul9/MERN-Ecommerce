import React from "react" 
import {Route , Redirect } from "react-router-dom"

const OpenRoute = ({component : Component  , ...rest}) => {
    return  <Route {...rest} render={props =>  ( <Component {...props}/> )} />
}
export default OpenRoute