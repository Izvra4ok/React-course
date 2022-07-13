import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../Redux/messengerPageReducer";
import TextareaMessages from "./TextareaMessages";
import StoreContext from "../../../../storeContext";

const TextareaMessagesContainer = (props) => {

    return <StoreContext.Consumer>
        { store => {
            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            };
            let updateNewMessageText = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            return <TextareaMessages updateNewMessageText={updateNewMessageText}
                                     addMessage={addMessage}
                                     newMessageText={props.newMessageText}/>
        }
        }
    </StoreContext.Consumer>
}

export default TextareaMessagesContainer;
