import { Navigate } from "react-router-dom";

const AuthorizedProtectedRoute = ({ children, ...rest }) => {
    if (!rest.loggedIn) {
        return children
    } else return <Navigate to={-1}/>
};

export default AuthorizedProtectedRoute;