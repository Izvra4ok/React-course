import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getLogoutUser} from "../../Redux/authReducer";
import {compose} from "redux";
import {getIdSelector, getIsAuthSelector, getLoginSelector} from "../../Redux/selectors/authSelectors";
import {AppStateType} from "../../Redux/reduxStore";


type PropsType = {
    getLogoutUser: () => void,
    login: string,
    id: number,
    isAuth: boolean,
};

const HeaderContainer: React.FC<PropsType> = (props) => {

    let logout = () => {
        props.getLogoutUser();
    }

    return <Header {...props} logout={logout}/>
};


let mapStateToProps = (state: AppStateType) => {
    return {
        login: getLoginSelector(state),
        id: getIdSelector(state),
        isAuth: getIsAuthSelector(state),
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {getLogoutUser}))(HeaderContainer)
