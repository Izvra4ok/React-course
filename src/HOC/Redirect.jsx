import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";


export const WithAuthRedirectComponent = (Component) => {
    const Redirect = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }

    return connect(mapStateToPropsForRedirect)(Redirect)
    
}


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})