import { passwordRecovery } from '../../utils/auth';
export const RECOVERY_PASSWORD_REQUEST = 'RECOVERY_PASSWORD_REQUEST';
export const RECOVERY_PASSWORD_SUCCESS = 'RECOVERY_PASSWORD_SUCCESS';
export const RECOVERY_PASSWORD_ERROR = 'RECOVERY_PASSWORD_ERROR';

export function onRecoveryPassword(email) {
    return function (dispatch) {
        dispatch({type: RECOVERY_PASSWORD_REQUEST});
        passwordRecovery(email)
        .then(() => {
            dispatch({type: RECOVERY_PASSWORD_SUCCESS,});
        })
        .catch(() => {
            dispatch({ type: RECOVERY_PASSWORD_ERROR });
        });
    };
}