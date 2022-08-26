import React, {useEffect} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthProfileUser, getLogoutUser} from "../../Redux/authReducer";
import {compose} from "redux";

const HeaderContainer = (props) => {

    useEffect(()=>{
        props.getAuthProfileUser()
    })

    let logout = () => {
        props.getLogoutUser();
    }
    return <Header {...props} logout={logout}/>
};


// class HeaderContainer extends React.Component {
//
//     componentDidMount() {
//         this.props.getAuthProfileUser() //auth Profile User
//     }
//
//     logout = () => {
//         this.props.getLogoutUser();
//     }
//
//     render() {
//         return <Header {...this.props} logout={this.logout}/>
//     }
// }


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}


export default compose(connect(mapStateToProps, {getAuthProfileUser,getLogoutUser}))(HeaderContainer)
