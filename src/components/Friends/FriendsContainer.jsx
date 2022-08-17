import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {WithAuthRedirectComponent} from "../../HOC/Redirect";
import {compose} from "redux";


const FriendsContainer = (props) => {

        return <Friends/>

}

let mapStateToProps = (state) => ({});


export default compose(connect(mapStateToProps, {}),WithAuthRedirectComponent)(FriendsContainer)
