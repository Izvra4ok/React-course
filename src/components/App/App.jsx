import React, {useEffect} from "react";
import "../nullstyle.css";
import "./App.css";
import {Route, Routes} from "react-router-dom"
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../MyProfile/Profile/ProfileContainer";
import MessengerContainer from "../Messenger/MessengerContainer";
import FriendsContainer from "../Friends/FriendsContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import {compose} from "redux";
import {withRouter} from "../../HOC/WithRouter";
import {connect} from "react-redux";
import Preloader from "../common/Preloader";
import {getAuthProfileUser} from "../../Redux/authReducer";
import {getInitializedThunkCreator} from "../../Redux/appReducer";
import {getInitializedSelector} from "../../Redux/selectors/appSelectors";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";


const App = (props) => {

    useEffect(() => {
        props.getInitializedThunkCreator()
    },[props.getInitializedThunkCreator])


    if (!props.initialized ) {
        return <Preloader/>
    }
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/login/*"
                           element={<LoginContainer/>}>
                    </Route>
                    <Route path="/profile/:userId"
                           element={<ProfileContainer/>}>
                    </Route>
                    <Route path="/profile/*"
                           element={<ProfileContainer/>}>
                    </Route>
                    <Route path="/messenger/*"
                           element={<MessengerContainer/>}>
                    </Route>
                    <Route path="/friends/*"
                           element={<FriendsContainer/>}>
                    </Route>
                    <Route path="/users/*"
                           element={<UsersContainer/>}>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}


let mapStateToProps = (state) => ({
    initialized: getInitializedSelector(state),
    isAuth: getIsAuthSelector(state),
})


export default compose(withRouter, connect(mapStateToProps, {getAuthProfileUser, getInitializedThunkCreator}))(App)
