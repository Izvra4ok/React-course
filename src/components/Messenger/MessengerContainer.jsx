import React from "react";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {AuthRedirectComponent} from "../../HOC/Redirect";

class MessengerContainer extends React.Component {

    // let navigate = useNavigate();
    // useEffect(()=>{
    //     if (!props.isAuth) {
    //         return navigate("/login")
    //     }
    // },[props.isAuth])

    render() {
        return <Messenger/>
    }
}

let mapStateToProps = (state) => ({})


export default connect(mapStateToProps,{})(AuthRedirectComponent(MessengerContainer));