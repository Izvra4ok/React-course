import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getLogoutUser} from "../../Redux/authReducer";
import {compose} from "redux";
import {getIdSelector, getIsAuthSelector, getLoginSelector} from "../../Redux/selectors/authSelectors";


const HeaderContainer = (props) => {

    let logout = () => {
        props.getLogoutUser();
    }

    return <Header {...props} logout={logout}/>
};


let mapStateToProps = (state) => {
    return {
        login: getLoginSelector(state),
        id: getIdSelector(state),
        isAuth: getIsAuthSelector(state),
    }
}


export default compose(connect(mapStateToProps, {getLogoutUser}))(HeaderContainer)
