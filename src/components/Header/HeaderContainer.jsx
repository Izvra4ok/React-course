import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthProfileUser} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthProfileUser() //auth Profile User
    }

    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        id: state.auth.id,
    }
}


export default connect(mapStateToProps, {getAuthProfileUser})(HeaderContainer)
