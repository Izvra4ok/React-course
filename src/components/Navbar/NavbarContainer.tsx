import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {compose} from "redux";
import {AppStateType} from "../../Redux/reduxStore";

type PropsType = {

};

const NavbarContainer: React.FC<PropsType> = (props) => {

        return <Navbar/>
    };

let mapStateToProps = (state:AppStateType) => ({});


export default compose<React.ComponentType>(connect(mapStateToProps))(NavbarContainer);