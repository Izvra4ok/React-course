import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import * as axios from "axios";
import {setUserProfile} from "../../../Redux/profilePageReducer";


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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
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