import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {setUserProfile} from "../../../Redux/profilePageReducer";
import {profileAPI} from "../../../API/api";


let withRouter = (Children) => {

    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentWillUnmount() {
        this.props.setUserProfile(null)
    }

    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        profileAPI.getUserProfile(userId)
            .then(data => {
                debugger
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile {...this.props} />

    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));