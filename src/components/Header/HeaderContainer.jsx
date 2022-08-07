import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../Redux/authReducer";
import {autProfileUserAPI} from "../../API/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        autProfileUserAPI.getAuthProfileUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData({id, email, login});
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {
    setAuthUserData})(HeaderContainer)
