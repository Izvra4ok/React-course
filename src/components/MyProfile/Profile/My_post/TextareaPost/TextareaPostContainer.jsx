import React from "react";
import TextareaPost from "./TextareaPost";
import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../../../Redux/profilePageReducer";


class TextareaPostContainer extends React.Component {

    onAddPostClick = () => {
        this.props.addPost();
    };

    onPostChange = (event) => {
        let text = event.target.value;
        this.props.updateNewPostText(text)
    };

    render() {
        return <TextareaPost newPostText={this.props.newPostText}
                             onAddPostClick={this.onAddPostClick}
                             onPostChange={this.onPostChange}/>
    }
}

let mapStateToProps = (state) => {

    return {
        newPostText: state.profilePage.newPostText,
    }
};

export default connect(mapStateToProps,{addPost,updateNewPostText})(TextareaPostContainer);
