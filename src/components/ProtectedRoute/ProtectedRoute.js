import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({children, anonymous = false}) => {
    const loggedIn = useSelector((store) => store.authData.loggedIn);
    const location = useLocation();
    const from = location.state?.from || '/';

// Если разрешен неавторизованный доступ, а пользователь авторизован...
    if (anonymous && loggedIn) {
        // ...то отправляем его на предыдущую страницу
        return <Navigate to={ from }/>;
    }

// Если требуется авторизация, а пользователь не авторизован...
    if (!anonymous && !loggedIn) {
        // ...то отправляем его на страницу логин
        return <Navigate to="/login" state={{ from: location}}/>;
    }

    // Если все ок, то рендерим внутреннее содержимое
    return children;

    }

export default ProtectedRoute;