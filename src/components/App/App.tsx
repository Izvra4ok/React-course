import React, {useEffect} from "react";
import "../../nullstyle.css";
import "./App.css";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom"
import ProfileContainer from "../MyProfile/Profile/ProfileContainer";
import {compose} from "redux";
import {withRouter} from "../../HOC/WithRouter";
import {connect, Provider} from "react-redux";
import Preloader from "../common/Preloader";
import {getInitializedThunkCreator} from "../../Redux/appReducer";
import {getInitializedSelector} from "../../Redux/selectors/appSelectors";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import store, {AppStateType} from "../../Redux/reduxStore";
import ErrorBoundary from "../common/ErrorBoundary";
import {Users} from "../Users/Users";
import {ErrorMsg} from "../common/ErrorMsg";
import {Navbar} from "../Navbar/Navbar";
import {LoginForm} from "../Login/LoginForm";
import {Header} from "../Header/Header";
import {Alert} from "@mui/material";



type PropsType = {
    getInitializedThunkCreator: () => void,
    initialized: boolean,
    isAuth: boolean,
    getAuthProfileUser: () => void
};

const MessengerContainer = React.lazy(() => import("../Messenger/MessengerContainer"));
const ChatPage = React.lazy(() => import("../../pages/Chat/ChatPage"));


const App: React.FC<PropsType> = (props) => {

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
                <Header/>
                <Navbar/>
            <div className="app_wrapper_content">
                <Routes>

                    <Route path="/" element={<Navigate to="/profile"/>}/>

                    <Route path="/login/*"
                           element={<LoginForm/>}>
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
                           element={<Users/>}>
                    </Route>

                    <Route path="/chat/*"
                           element={<React.Suspense fallback={<Preloader/>}>
                               <ChatPage/>
                           </React.Suspense>}>
                    </Route>

                    <Route path="*"
                           element={<Alert variant="filled" severity="warning">
                               "404 Not Found"
                           </Alert>}>
                    </Route>

                </Routes>

            </div>
            </ErrorBoundary>
        </div>

    )
};


let mapStateToProps = (state: AppStateType) => ({
    initialized: getInitializedSelector(state),
    isAuth: getIsAuthSelector(state),
})


let AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, {getInitializedThunkCreator}))(App);

let SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>

}

export default SocialNetworkApp;

