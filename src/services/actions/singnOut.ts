import {deleteAuth} from '../../utils/auth';
import { AppDispatch, AppThunk } from '../../utils';


export const SIGNOUT_REQUEST: 'SIGNOUT_REQUEST' = 'SIGNOUT_REQUEST';
export const SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS' = 'SIGNOUT_SUCCESS';
export const SIGNOUT_ERROR: 'SIGNOUT_ERROR' = 'SIGNOUT_ERROR';

export interface ISignoutRequestAction {
    readonly type: typeof SIGNOUT_REQUEST;
}

export interface ISignoutSuccessAction {
    readonly type: typeof SIGNOUT_SUCCESS;
}

export interface ISignoutErrorAction {
    readonly type: typeof SIGNOUT_ERROR;
}

export type TSignoutAction =
    | ISignoutRequestAction
    | ISignoutSuccessAction
    | ISignoutErrorAction;

export const getSignoutRequestAction = (): TSignoutAction => ({
    type: SIGNOUT_REQUEST,
});

export const getSignoutSuccessAction = (): TSignoutAction => ({
    type: SIGNOUT_SUCCESS,
});

export const getSignoutErrorAction = (): TSignoutAction => ({
    type: SIGNOUT_ERROR,
});


export const onSignOut: AppThunk = (token: string) =>{
    return function (dispatch: AppDispatch) {
        dispatch(getSignoutRequestAction());
        deleteAuth(token)
        .then(() => {
            dispatch(getSignoutSuccessAction());
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
        })
        .catch(() => {
            dispatch(getSignoutErrorAction());
        });
    };
}