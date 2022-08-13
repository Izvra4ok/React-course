import {useLocation, useParams, useNavigate} from "react-router-dom";


export const withRouter = (Children) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Children {...props} router={{location, navigate, params}}/>

    }

    return ComponentWithRouterProp;
}


// let withRouter = (Children) => {
//
//     return (props) => {
//         const match = {params: useParams()};
//         return <Children {...props} match={match}/>
//     }
// }