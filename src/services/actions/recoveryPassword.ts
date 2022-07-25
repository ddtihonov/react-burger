import { passwordRecovery } from '../../utils/auth';
import { AppDispatch, AppThunk } from '../../utils';

export const RECOVERY_PASSWORD_REQUEST: 'RECOVERY_PASSWORD_REQUEST' = 'RECOVERY_PASSWORD_REQUEST';
export const RECOVERY_PASSWORD_SUCCESS: 'RECOVERY_PASSWORD_SUCCESS' = 'RECOVERY_PASSWORD_SUCCESS';
export const RECOVERY_PASSWORD_ERROR: 'RECOVERY_PASSWORD_ERROR' = 'RECOVERY_PASSWORD_ERROR';

export interface IRecoveryPasswordRequestAction {
    readonly type: typeof RECOVERY_PASSWORD_REQUEST;
}

export interface IRecoveryPasswordSuccessAction {
    readonly type: typeof RECOVERY_PASSWORD_SUCCESS;
}

export interface IRecoveryPasswordErrorAction {
    readonly type: typeof RECOVERY_PASSWORD_ERROR;
}

export type TRecoveryPasswordAction =
    | IRecoveryPasswordRequestAction
    | IRecoveryPasswordSuccessAction
    | IRecoveryPasswordErrorAction;

export const getRecoveryPasswordRequestAction = (): TRecoveryPasswordAction => ({
    type: RECOVERY_PASSWORD_REQUEST,
});

export const getRecoveryPasswordSuccessAction = (): TRecoveryPasswordAction => ({
    type: RECOVERY_PASSWORD_SUCCESS,
});

export const getRecoveryPasswordErrorAction = (): TRecoveryPasswordAction => ({
    type: RECOVERY_PASSWORD_ERROR,
});

export const onRecoveryPassword: AppThunk =  (email: string) => {
    return function (dispatch: AppDispatch) {
        dispatch(getRecoveryPasswordRequestAction);
        passwordRecovery(email)
        .then(() => {
            dispatch(getRecoveryPasswordSuccessAction);
        })
        .catch(() => {
            dispatch(getRecoveryPasswordErrorAction);
        });
    };
}