import {useLocation, useParams, useNavigate} from "react-router-dom";
import React from "react";


export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<number, number>;
    navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    function ComponentWithRouterProp(props: Omit<Props, keyof WithRouterProps>) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    }
    return ComponentWithRouterProp;
};

// import {useLocation, useParams, useNavigate} from "react-router-dom";
//
//
// export const withRouter = (Component:any) => {
//     function ComponentWithRouterProp(props: any) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return <Component {...props} router={{location, navigate, params}}/>
//
//     }
//
//     return ComponentWithRouterProp;
// }


// export let withRouter = (Component) => {
//
//     return (props) => {
//         const match = {params: useParams()};
//         return <Component {...props} match={match}/>
//     }
// }