import {useLocation, useParams, useNavigate} from "react-router-dom";


export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>

    }

    return ComponentWithRouterProp;
}


// export let withRouter = (Component) => {
//
//     return (props) => {
//         const match = {params: useParams()};
//         return <Component {...props} match={match}/>
//     }
// }