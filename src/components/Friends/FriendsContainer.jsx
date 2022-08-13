import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {AuthRedirectComponent} from "../../HOC/Redirect";


const FriendsContainer = (props) => {

        return <Friends/>

}

let mapStateToProps = (state) => ({});


export default connect(mapStateToProps, {})(AuthRedirectComponent(FriendsContainer));