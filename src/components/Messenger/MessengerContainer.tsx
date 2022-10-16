import React from "react";
import {Messenger} from "./Messenger";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../HOC/Redirect";
import {compose} from "redux";

const MessengerContainer: React.FC = React.memo(() => {

    return <Messenger/>
});

export default compose<React.ComponentType>(connect())(WithAuthRedirectComponent(MessengerContainer));