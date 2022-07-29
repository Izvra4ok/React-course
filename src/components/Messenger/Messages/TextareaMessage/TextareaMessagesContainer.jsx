import React from "react";
import {addMessage, updateNewMessageText,} from "../../../../Redux/messengerPageReducer";
import TextareaMessages from "./TextareaMessages";
import {connect} from "react-redux";


class TextareaMessagesContainer extends React.Component {

    onAddMessageClick = () => {
        this.props.addMessage();
    };

    onMessageChange = (event) => {
        let text = event.target.value;
        this.props.updateNewMessageText(text)
    }

    render() {
        return <TextareaMessages newMessageText={this.props.newMessageText}
                                 onAddMessageClick={this.onAddMessageClick}
                                 onMessageChange={this.onMessageChange}/>

    }
}

let  mapStateToProps = (state) => {

    return {
        newMessageText: state.messengerPage.newMessageText
    }
}


export default connect(mapStateToProps,{addMessage, updateNewMessageText})(TextareaMessagesContainer)



