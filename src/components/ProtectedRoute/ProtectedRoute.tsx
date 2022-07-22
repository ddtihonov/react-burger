import React, {FC, ReactElement } from 'react';
import { useSelector } from '../../utils/hooks';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute: FC<{ children: ReactElement}> = ({children}) => {
    const loggedIn = useSelector((store) => store.authData.loggedIn);
    const location: any = useLocation();
    const from = location.state?.from || '/';
    let anonymous = false

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