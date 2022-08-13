import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {

    render() {
        return <Navbar isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps)(NavbarContainer);