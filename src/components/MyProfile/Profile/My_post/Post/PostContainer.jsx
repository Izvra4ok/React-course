import React from 'react';
import {connect} from "react-redux";
import Post from "./Post";
import {getProfilePostsSelector} from "../../../../../Redux/selectors/profilePageSelectors";


class PostContainer extends React.Component {

    render() {

        return <Post posts={this.props.posts}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: getProfilePostsSelector(state)
    }
}

export default connect(mapStateToProps)(PostContainer)