import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {

    render() {
        return <Navbar/>
    }
}

export default connect()(NavbarContainer);