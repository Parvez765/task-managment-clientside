import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';



const PrivateRoute = ({ children }) => {
   const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (user?.email) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace>Login</Navigate>
};

export default PrivateRoute;