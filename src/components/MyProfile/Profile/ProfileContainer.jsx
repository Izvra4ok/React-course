import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    getProfileUserThunkCreator,
    updateProfileStatusThunkCreator
} from "../../../Redux/profilePageReducer";
import {withRouter} from "../../../HOC/WithRouter";
// import {WithAuthRedirectComponent} from "../../../HOC/Redirect";
import {compose} from "redux";
import {Navigate} from "react-router-dom";
import {getIdSelector, getIsAuthSelector} from "../../../Redux/selectors/authSelectors";
import {getProfileSelector, getProfileStatusSelector} from "../../../Redux/selectors/profilePageSelectors";


class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMyProfile: true
        };
    };

    componentDidMount() {
        let userIdFromPath = +this.props.router.params.userId;
        let authorisedUserId = this.props.id;
        if (userIdFromPath) {
            this.props.getProfileUserThunkCreator(userIdFromPath);
            this.props.getProfileStatusThunkCreator(userIdFromPath);
        } else {
            if (this.props.isAuth) {
                this.props.getProfileUserThunkCreator(authorisedUserId);
                this.props.getProfileStatusThunkCreator(authorisedUserId);
            }
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        let userIdFromPath = +this.props.router.params.userId;
        let authorisedUserId = this.props.id;
        let isShowMyProfile = this.state.isShowMyProfile;

        if (isShowMyProfile) {

            if (userIdFromPath === authorisedUserId) {
                this.setState( {isShowMyProfile: false} )
            }

            if (!userIdFromPath && this.props.isAuth) {
                this.props.getProfileUserThunkCreator( authorisedUserId );
                this.props.getProfileStatusThunkCreator( authorisedUserId );
                this.setState( {isShowMyProfile: false} )
            }
        }
    }


    render() {

        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={"/login"}/>
        }

        return <Profile {...this.props}
                        updateStatus={this.props.updateProfileStatusThunkCreator}
                        status={this.props.status}/>
    }
}


let mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        id: getIdSelector(state),
        status: getProfileStatusSelector(state),
        isAuth: getIsAuthSelector(state),
    }
}


export default compose(connect(mapStateToProps, {
        getProfileUserThunkCreator,
        getProfileStatusThunkCreator,
        updateProfileStatusThunkCreator
    }),
    withRouter
// WithAuthRedirectComponent
)(ProfileContainer);