import React from "react";
import {addMessage} from "../../../../Redux/messengerPageReducer";
import TextareaFormMessages from "./TextareaFormMessages";
import {connect} from "react-redux";
import {compose} from "redux";


class TextareaMessagesFormContainer extends React.Component {

    onAddMessageClick = (newMessageText) => {
        this.props.addMessage(newMessageText);
    };

    render() {
        return <TextareaFormMessages onAddMessageClick={this.onAddMessageClick}/>
    }
}

let mapStateToProps = (state) => ({})


export default compose(connect(mapStateToProps, {addMessage}))(TextareaMessagesFormContainer)



