import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
    if (!rest.loggedIn) {
        return <Navigate to="/signin"/>
    }
    return children 
};

export default ProtectedRoute;