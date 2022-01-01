import React from "react"
import { Route , useHistory ,  Redirect } from "react-router-dom"

const UnprotectedRoute = ({component : Component , auth , ...rest}) => {
    const history = useHistory()
    let intended = history.location.state;
    if(intended) {
        return <Route {...rest} render={props => (!auth ? <Component exact {...props} /> : history.push(intended.from))} />
    }
    return <Route {...rest} render={props => (!auth ? <Component exact {...props} /> : <Redirect to="/" />)} />
}

export default UnprotectedRoute