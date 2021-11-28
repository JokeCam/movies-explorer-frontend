import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
    if (!rest.loggedIn) {
        return <Navigate to={rest.path}/>;
    }
    return children;
};

export default ProtectedRoute;