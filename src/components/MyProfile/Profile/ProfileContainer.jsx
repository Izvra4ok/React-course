import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

    render() {
        return <Profile />

    }
}


export default connect()(ProfileContainer)