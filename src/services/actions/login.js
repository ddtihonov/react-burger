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
                dispatch({
                    type: GET_LOGIN_SUCCESS,
                    payload: {
                        data: userData,
                    }, 
            });
            
        }) 
        .catch(() => {
            dispatch({ type: GET_LOGIN_ERROR });
        });
    };
}
