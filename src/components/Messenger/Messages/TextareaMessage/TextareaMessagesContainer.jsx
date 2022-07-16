import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../Redux/messengerPageReducer";
import TextareaMessages from "./TextareaMessages";
import {connect} from "react-redux";

let  mapStateToProps = (state) => {

    return {
        newMessageText: state.messengerPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },

        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const TextareaMessagesContainer = connect(mapStateToProps,mapDispatchToProps)(TextareaMessages)


export default TextareaMessagesContainer;
