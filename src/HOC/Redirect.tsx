import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../Redux/reduxStore";
import {getIsAuthSelector} from "../Redux/selectors/authSelectors";


type MapStateToPropsType = {
    isAuth: boolean
};

export const WithAuthRedirectComponent= (Component: any) => {
    const Redirect:React.FC<MapStateToPropsType> = (props) => {

        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    };

    return connect(mapStateToPropsForRedirect)(Redirect)

}


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: getIsAuthSelector(state)
})
