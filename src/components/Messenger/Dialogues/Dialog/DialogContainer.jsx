import React from "react";
import {connect} from "react-redux";
import Dialog from "./Dialog";

class DialogContainer extends React.Component {

    render() {
        return <Dialog dialogs={this.props.dialogs}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.messengerPage.dialogs
    }
}

export default connect(mapStateToProps)(DialogContainer)