import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {Navigate} from "react-router-dom";


class FriendsContainer extends React.Component {

    render() {
        if (!this.props.isAuth) {
            return <Navigate to="/login"/>
        }

        return <Friends/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {})(FriendsContainer)