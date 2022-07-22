import { refreshingToken } from '../../utils/auth';
import { AppDispatch, AppThunk } from '../../utils';

export const GET_REFRESH_TOKEN_REQUEST: 'GET_REFRESH_TOKEN_REQUEST' = 'GET_REFRESH_TOKEN_REQUEST';
export const GET_REFRESH_TOKEN_SUCCESS: 'GET_REFRESH_TOKEN_SUCCESS' = 'GET_REFRESH_TOKEN_SUCCESS';
export const GET_REFRESH_TOKEN_ERROR: 'GET_REFRESH_TOKEN_ERROR' = 'GET_REFRESH_TOKEN_ERROR';

export interface IRefreshTokenRequestAction {
    readonly type: typeof GET_REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
    readonly type: typeof GET_REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenErrorAction {
    readonly type: typeof GET_REFRESH_TOKEN_ERROR;
}

export type TRefreshTokenAction =
    | IRefreshTokenRequestAction
    | IRefreshTokenSuccessAction
    | IRefreshTokenErrorAction;

export const getLoginRequestAction = (): TRefreshTokenAction => ({
    type: GET_REFRESH_TOKEN_REQUEST,
});

export const getLoginSuccessAction = (): TRefreshTokenAction => ({
    type: GET_REFRESH_TOKEN_SUCCESS, 
});

export const getLoginErrorAction = (): TRefreshTokenAction => ({
    type: GET_REFRESH_TOKEN_ERROR,
});

export const onRefreshToken: AppThunk = (refreshToken: string) => {
    return function (dispatch: AppDispatch) {
        dispatch(getLoginRequestAction());
        refreshingToken(refreshToken)
        .then((data) => {
            dispatch(getLoginSuccessAction());
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('wsAccessToken', data.accessToken.split('Bearer ')[1]);
        })
        .catch(() => {
            dispatch(getLoginErrorAction);
        });
    };
}