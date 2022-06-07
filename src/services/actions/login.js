import { authorize } from '../../utils/auth';

//вход
export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR = 'GET_LOGIN_FAILED';

export function onLogin({email, password }) {
    return function (dispatch) {
        dispatch({
            type: GET_LOGIN_REQUEST,
        });

        authorize({email, password })
            .then((userData) => {
                if (userData && userData.success) {
                dispatch({
                    type: GET_LOGIN_SUCCESS,
                    payload: {
                        userData: userData,
                    }, 
                });
                localStorage.setItem('refreshToken', userData.refreshToken);
            } else {
                dispatch({ type: GET_LOGIN_ERROR });
                }
            
            }) 

            .catch(() => {
                dispatch({ type: GET_LOGIN_ERROR });
            });
    };
}
