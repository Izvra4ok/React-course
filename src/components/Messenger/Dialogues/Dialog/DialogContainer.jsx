import React from "react";
import {connect} from "react-redux";
import Dialog from "./Dialog";
import {getDialogsSelector} from "../../../../Redux/selectors/messengerPageSelectors";

class DialogContainer extends React.Component {

    render() {
        return <Dialog dialogs={this.props.dialogs}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: getDialogsSelector(state),
    }
}

export default connect(mapStateToProps)(DialogContainer)