import React from "react";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../HOC/Redirect";
import {compose} from "redux";

class MessengerContainer extends React.Component {

    render() {
        return <Messenger/>
    }
}

let mapStateToProps = (state) => ({})


export default compose(connect(mapStateToProps,{}))(WithAuthRedirectComponent(MessengerContainer));