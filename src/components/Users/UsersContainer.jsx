import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getFollowUsersThunkCreator,
    getUnfollowUserThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
} from "../../Redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/selectors/usersPageSelectors";
import {getIsAuthSelector} from "../../Redux/selectors/authSelectors";
import ErrorBoundary from "../common/Error Boundary";

const UsersContainer = (props) => {

    const currentPage = props.currentPage
    const pageSize = props.pageSize
    const getUsersThunkCreator = props.getUsersThunkCreator

    useEffect(() => {
        getUsersThunkCreator(currentPage, pageSize)
    }, [currentPage, pageSize, getUsersThunkCreator])

    let onPageChanged = (pageNumber = 1) => {
        // const pageSize = props
        props.setCurrentPage(pageNumber);
        props.getUsersThunkCreator(pageNumber, props.pageSize);
    }

    let onClickUnfollowUsers = (userId) => {
        props.getUnfollowUserThunkCreator(userId);
    }

    let onClickFollowUsers = (userId) => {
        props.getFollowUsersThunkCreator(userId);
    }

    const ErrorMsg = (error) => {
        return (
            <div>
                <Preloader/>
                <div> Something went wrong!</div>
                <div> {error.error.message}</div>
            </div>
        );
    };

    return <>
        {props.isFetching
            ? <Preloader styled={{width: "50px", height: "50px"}}/>
            : <ErrorBoundary ErrorComponent={ErrorMsg}>
                <Users users={props.users}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       followUser={onClickFollowUsers}
                       unfollowUser={onClickUnfollowUsers}
                       onPageChanged={onPageChanged}
                       folllowingInProgress={props.folllowingInProgress}
                />
            </ErrorBoundary>}
    </>
}

// class UC extends React.Component {
//     componentDidMount() {
//         const {currentPage, pageSize} = this.props;
//         this.props.getUsersThunkCreator(currentPage, pageSize);
//     };
//
//     onPageChanged = (pageNumber = 1) => {
//         const pageSize = this.props;
//         this.props.setCurrentPage(pageNumber);
//         this.props.getUsersThunkCreator(pageNumber, pageSize);
//     }
//
//     onClickUnfollowUsers = (userId) => {
//         this.props.getUnfollowUserThunkCreator(userId);
//     }
//
//     onClickFollowUsers = (userId) => {
//         this.props.getFollowUsersThunkCreator(userId);
//     }
//
//     render() {
//         return <>
//             {this.props.isFetching //pleloader active
//                 ? <Preloader styled={{width: "50px", height: "50px"}}/>
//                 : <Users users={this.props.users}
//                          slicedPages={this.slicedPages}
//                          totalUsersCount={this.props.totalUsersCount}
//                          pageSize={this.props.pageSize}
//                          currentPage={this.props.currentPage}
//                          followUser={this.onClickFollowUsers}
//                          unfollowUser={this.onClickUnfollowUsers}
//                          onPageChanged={this.onPageChanged}
//                          folllowingInProgress={this.props.folllowingInProgress}
//                 />}
//         </>
//     }
// }


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        folllowingInProgress: getFollowingInProgressSelector(state),
        isAuth: getIsAuthSelector(state),
    }
};


export default compose(connect(mapStateToProps,
    {getUsersThunkCreator, getUnfollowUserThunkCreator, getFollowUsersThunkCreator, setCurrentPage}),)(UsersContainer)


