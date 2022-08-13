import React from "react";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

class MessengerContainer extends React.Component {

    // let navigate = useNavigate();
    // useEffect(()=>{
    //     if (!props.isAuth) {
    //         return navigate("/login")
    //     }
    // },[props.isAuth])

    render() {
        if (!this.props.isAuth){
            return <Navigate to="/login"/>
        }


        return <Messenger/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps,{})(MessengerContainer);