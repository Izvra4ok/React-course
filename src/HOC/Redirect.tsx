import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {getIsAuthSelector} from "../Redux/selectors/authSelectors";


export const WithAuthRedirectComponent= (Component: any ) => {

    const Redirect:React.FC = React.memo((props) => {

        const isAuth = useSelector(getIsAuthSelector);

        if (!isAuth) return <Navigate to='/login' />

        return <Component {...props} />
    });

    return Redirect
};