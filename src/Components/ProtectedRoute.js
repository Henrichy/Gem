

import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getSessionData } from './helpers/SessionHelper';

const ProtectedRoute = () => {
    const user = getSessionData('user');
    const isAuthenticated = !!user; // Check if user data exists in sessionStorage
    // console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);

    useEffect(() => {
        // console.log("ProtectedRoute mounted");

        return () => {
            // console.log("ProtectedRoute unmounted");
        };
    }, []);

    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
