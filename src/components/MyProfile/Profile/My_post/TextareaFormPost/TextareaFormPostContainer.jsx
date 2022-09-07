import React from "react";
import {connect} from "react-redux";
import {addPost} from "../../../../../Redux/profilePageReducer";
import {compose} from "redux";
import TextareaPostForm from "./TextareaFormPost";


class TextareaFormPostContainer extends React.Component {

    onAddPostClick = (textarea) => {
        this.props.addPost(textarea);
    };

    render() {
        return <TextareaPostForm onAddPostClick={this.onAddPostClick}/>
    }
}

let mapStateToProps = (state) => ({})


export default compose(connect(mapStateToProps, {addPost}))(TextareaFormPostContainer);
