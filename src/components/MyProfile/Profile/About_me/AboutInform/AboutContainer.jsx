import React from "react";
import About from "./About";
import {connect} from "react-redux";


class AboutContainer extends React.Component {

    render() {
        return <About aboutme={this.props.aboutme} />
    }
}

let mapStateToProps = (state) => {
    return {
        aboutme: state.profilePage.aboutme
    }

}

export default connect(mapStateToProps)(AboutContainer)