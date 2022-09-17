import React, {useEffect} from "react";
import "../nullstyle.css";
import "./App.css";
import {HashRouter, Route, Routes} from "react-router-dom"
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../MyProfile/Profile/ProfileContainer";
// import MessengerContainer from "../Messenger/MessengerContainer";
// import FriendsContainer from "../Friends/FriendsContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import {compose} from "redux";
import {withRouter} from "../../HOC/WithRouter";
import {connect, Provider} from "react-redux";
import Preloader from "../common/Preloader";
import {getAuthProfileUser} from "../../Redux/authReducer";
import {getInitializedThunkCreator} from "../../Redux/appReducer";
import {getInitializedSelector} from "../../Redux/selectors/appSelectors";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import store from "../../Redux/reduxStore";

const MessengerContainer = React.lazy(() => import("../Messenger/MessengerContainer"));
const FriendsContainer = React.lazy(() => import("../Friends/FriendsContainer"));

const App = (props) => {

    let getInitializedThunkCreator = props.getInitializedThunkCreator;

    useEffect(() => {
        getInitializedThunkCreator()
    }, [getInitializedThunkCreator]);


    if (!props.initialized) {
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
                           element={<React.Suspense fallback={<Preloader/>}>
                               <MessengerContainer/>
                           </React.Suspense>}>
                    </Route>

                    <Route path="/friends/*"
                           element={<React.Suspense fallback={<Preloader/>}>
                               <FriendsContainer/>
                           </React.Suspense>}>
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


let AppContainer = compose(withRouter, connect(mapStateToProps, {getAuthProfileUser, getInitializedThunkCreator}))(App);

let SocialNetworkApp = (props) => {
    return <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>

}

export default SocialNetworkApp;
