import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {compose} from "redux";

class NavbarContainer extends React.Component {

    render() {
        return <Navbar isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})


export default compose(connect(mapStateToProps))(NavbarContainer);