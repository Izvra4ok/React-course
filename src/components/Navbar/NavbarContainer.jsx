import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
// import {Navigate} from "react-router-dom";

class NavbarContainer extends React.Component {

    render() {
        // if (!this.props.isAuth){
        //     return <Navigate to="/login"/>
        // }

        return <Navbar/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps)(NavbarContainer);