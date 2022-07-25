import { register } from '../../utils/auth';
import { TLogin } from '../../utils/tupes';
import { AppDispatch, AppThunk } from '../../utils';

//регистрация
export const GET_REGISTER_REQUEST: 'GET_REGISTER_REQUEST' = 'GET_REGISTER_REQUEST';// запрос
export const GET_REGISTER_SUCCESS: 'GET_REGISTER_SUCCESS' = 'GET_REGISTER_SUCCESS';//успешный запрос
export const GET_REGISTER_ERROR: 'GET_REGISTER_ERROR' = 'GET_REGISTER_ERROR';//неудачный запрос

export interface IRegisterRequestAction {
    readonly type: typeof GET_REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
    readonly type: typeof GET_REGISTER_SUCCESS;
    readonly payload: { userData: TLogin};
}

export interface IRegisterErrorAction {
    readonly type: typeof GET_REGISTER_ERROR;
}

export type TRegisterAction =
    | IRegisterRequestAction
    | IRegisterSuccessAction
    | IRegisterErrorAction;

export const getRegisterRequestAction = (): TRegisterAction => ({
    type: GET_REGISTER_REQUEST,
});

export const getRegisterSuccessAction = (userData: TLogin): TRegisterAction => ({
    type: GET_REGISTER_SUCCESS,
    payload: {
        userData: userData,
    }, 
});

export const getRegisterErrorAction = (): TRegisterAction => ({
    type: GET_REGISTER_ERROR,
});

export const onRegister: AppThunk = (name: string, email: string, password: string ) => {

    return function (dispatch: AppDispatch) {
        dispatch(getRegisterRequestAction());
        register(name, email, password )
            .then((userData) => {
                dispatch(getRegisterSuccessAction(userData));
                localStorage.setItem('accessToken', userData.accessToken);
                localStorage.setItem('refreshToken', userData.refreshToken);
        }) 
        .catch(() => {
            dispatch(getRegisterErrorAction());
        });
    };
}
