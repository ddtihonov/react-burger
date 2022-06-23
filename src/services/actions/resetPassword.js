import { resetPassword } from '../../utils/auth';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export function onResetPassword(password, token) {
    return function (dispatch) {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        resetPassword(password, token)
        .then(() => {
            dispatch({ type: RESET_PASSWORD_SUCCESS });
        })
        .catch(() => {
            dispatch({ type: RESET_PASSWORD_ERROR });
        });
    };
}