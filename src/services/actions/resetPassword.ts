import { resetPassword } from '../../utils/auth';
import { AppDispatch, AppThunk } from '../../utils';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';

export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
}

export type TResetPasswordAction =
    | IResetPasswordRequestAction
    | IResetPasswordSuccessAction
    | IResetPasswordErrorAction;

export const getResetPasswordRequestAction = (): TResetPasswordAction => ({
    type: RESET_PASSWORD_REQUEST,
});

export const getResetPasswordSuccessAction = (): TResetPasswordAction => ({
    type: RESET_PASSWORD_SUCCESS, 
});

export const getResetPasswordErrorAction = (): TResetPasswordAction => ({
    type: RESET_PASSWORD_ERROR,
});

export const onResetPassword: AppThunk = (password: string, token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch(getResetPasswordRequestAction);
        resetPassword(password, token)
        .then(() => {
            dispatch(getResetPasswordSuccessAction);
        })
        .catch(() => {
            dispatch(getResetPasswordErrorAction);
        });
    };
}