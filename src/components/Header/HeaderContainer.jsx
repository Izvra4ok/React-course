import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getLogoutUser} from "../../Redux/authReducer";
import {compose} from "redux";


const HeaderContainer = (props) => {

    let logout = () => {
        props.getLogoutUser();
    }

    return <Header {...props} logout={logout}/>
};


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}


export default compose(connect(mapStateToProps, {getLogoutUser}))(HeaderContainer)
