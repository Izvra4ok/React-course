import React from "react";

type PropsType = {
    children: any,
    ErrorComponent: any
};

class ErrorBoundary extends React.Component<PropsType> {
    state = {
        error: null
    };

    static getDerivedStateFromError(error:any) {
        return {error};
    }

    render() {
        const {error} = this.state;

        if (error) {
            return <this.props.ErrorComponent error={error}/>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;