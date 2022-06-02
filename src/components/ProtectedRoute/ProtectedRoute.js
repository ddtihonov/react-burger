import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const loggedIn = useSelector((store) => store.authData.loggedIn);

    return loggedIn === true ? children : <Navigate to='/login' />
    }

export default ProtectedRoute; 