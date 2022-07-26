import { authorize } from '../../utils/auth';
import { TLogin } from '../../utils/tupes';
import { AppDispatch, AppThunk } from '../../utils';

//вход
export const GET_LOGIN_REQUEST: 'GET_LOGIN_REQUEST' = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS: 'GET_LOGIN_SUCCESS' = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR: 'GET_LOGIN_ERROR' = 'GET_LOGIN_ERROR';

export interface ILoginRequestAction {
    readonly type: typeof GET_LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
    readonly type: typeof GET_LOGIN_SUCCESS;
    readonly userData: TLogin;
}

export interface ILoginErrorAction {
    readonly type: typeof GET_LOGIN_ERROR;
}

export type TLoginAction =
    | ILoginRequestAction
    | ILoginSuccessAction
    | ILoginErrorAction;

export const getLoginRequestAction = (): TLoginAction => ({
    type: GET_LOGIN_REQUEST,
});

export const getLoginSuccessAction = (userData: TLogin): TLoginAction => ({
    type: GET_LOGIN_SUCCESS,
    userData: userData, 
});

export const getLoginErrorAction = (): TLoginAction => ({
    type: GET_LOGIN_ERROR,
});

export const onLogin: AppThunk = (email: string, password: string ) => {
    return function (dispatch: AppDispatch) {
        dispatch(getLoginRequestAction());
        authorize(email, password )
            .then((userData) => {
                if (userData && userData.success) {
                    dispatch(getLoginSuccessAction(userData));
                    localStorage.setItem('refreshToken', userData.refreshToken);
                    localStorage.setItem('accessToken', userData.accessToken);
            } 
            }) 

            .catch(() => {
                dispatch(getLoginErrorAction());
            });
    };
}