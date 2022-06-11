import {deleteAuth} from '../../utils/auth'
export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_ERROR = 'SIGNOUT_FAILED';

export function onSignOut(token) {
    return function (dispatch) {
        dispatch({
        type: SIGNOUT_REQUEST,
        });
        deleteAuth(token)
        .then((data) => {
            if (data && data.success) {
            dispatch({
                type: SIGNOUT_SUCCESS,
                data: data,
            });
            } else {
            dispatch({ type: SIGNOUT_ERROR });
            }
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
        })
        .catch(() => {
            dispatch({ type: SIGNOUT_ERROR });
        });
    };
}