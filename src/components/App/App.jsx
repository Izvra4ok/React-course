import React, {useEffect} from "react";
import "../../nullstyle.css";
import "./App.css";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom"
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../MyProfile/Profile/ProfileContainer";
// import MessengerContainer from "../Messenger/MessengerContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import {compose} from "redux";
import {withRouter} from "../../HOC/WithRouter";
import {connect, Provider} from "react-redux";
import Preloader from "../common/Preloader";
import {getAuthProfileUser} from "../../Redux/authReducer";
import {getInitializedThunkCreator} from "../../Redux/appReducer.ts";
import {getInitializedSelector} from "../../Redux/selectors/appSelectors";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import store from "../../Redux/reduxStore";
import ErrorBoundary from "../common/ErrorBoundary";


const MessengerContainer = React.lazy(() => import("../Messenger/MessengerContainer"));

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
            <ErrorBoundary ErrorComponent={ErrorMsg}>
                <HeaderContainer/>
                <NavbarContainer/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path="/" element={<Navigate to="/profile"/>}/>
                    <Route path="/login/*"
                           element={<LoginContainer/>}>
                    </Route>
                    <Route path="/profile/:userId/*"
                           element={<ProfileContainer/>}>
                    </Route>

                    <Route path="/profile/*"
                           element={
                               <ProfileContainer/>}>
                    </Route>

                    <Route path="/messenger/*"
                           element={<React.Suspense fallback={<Preloader/>}>
                               <MessengerContainer/>
                           </React.Suspense>}>
                    </Route>

                    <Route path="/users/*"
                           element={<UsersContainer/>}>
                    </Route>
                    <Route path="*"
                           element={"404 NOT FOUND"}>
                    </Route>

                </Routes>

            </div>
            </ErrorBoundary>
        </div>

    )
}


let mapStateToProps = (state) => ({
    initialized: getInitializedSelector(state),
    isAuth: getIsAuthSelector(state),
})


let AppContainer = compose(withRouter, connect(mapStateToProps, {getAuthProfileUser, getInitializedThunkCreator}))(App);

let SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>

}

export default SocialNetworkApp;


const ErrorMsg = (error) => {
    return (
        <div>
            <Preloader/>
            <div> Something went wrong!</div>
            <div> {error.error.message}</div>
        </div>
    );
};