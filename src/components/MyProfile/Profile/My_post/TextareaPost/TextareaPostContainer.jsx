import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../Redux/profilePageReducer";
import TextareaPost from "./TextareaPost";
import StoreContext from "../../../../../storeContext";

const TextareaPostContainer = (props) => {

    return <StoreContext.Consumer>

        { (store) => {

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            let updateNewPostText = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }

            return <TextareaPost updateNewPostText={updateNewPostText}
                                 addPost={addPost}
                                 newPostText={props.newPostText}/>
        }}
        </StoreContext.Consumer>
}
export default TextareaPostContainer;
