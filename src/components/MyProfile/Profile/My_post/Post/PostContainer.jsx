import React from 'react';
import {connect} from "react-redux";
import Post from "./Post";


class PostContainer extends React.Component {

    render() {
        return <Post posts={this.props.posts}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps)(PostContainer)