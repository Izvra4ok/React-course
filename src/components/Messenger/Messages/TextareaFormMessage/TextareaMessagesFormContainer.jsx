import React from "react";
import {addMessage} from "../../../../Redux/messengerPageReducer";
import TextareaFormMessages from "./TextareaFormMessages";
import {connect} from "react-redux";
import {compose} from "redux";

const TextareaMessagesFormContainer = (props) => {

    let onAddMessageClick = (newMessageText) => {
        props.addMessage(newMessageText);
    };

    return <TextareaFormMessages onAddMessageClick={onAddMessageClick}/>
}
// class TextareaMessagesFormContainer extends React.Component {
//
//     onAddMessageClick = (newMessageText) => {
//         this.props.addMessage(newMessageText);
//     };
//
//     render() {
//         return <TextareaFormMessages onAddMessageClick={this.onAddMessageClick}/>
//     }
// }

let mapStateToProps = (state) => ({})


export default compose(connect(mapStateToProps, {addMessage}))(TextareaMessagesFormContainer)



