import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../Redux/profilePageReducer";
import TextareaPost from "./TextareaPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
};

const TextareaPostContainer = connect(mapStateToProps,mapDispatchToProps)(TextareaPost);

export default TextareaPostContainer;
