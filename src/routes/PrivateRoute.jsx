import { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}