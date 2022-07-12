import { getUserInfo } from '../../utils/auth';
import { TUser } from '../../utils/tupes';
import { AppDispatch, AppThunk } from '../../utils';

export const GET_USER_INFO_REQUEST: 'GET_USER_INFO_REQUEST' = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS' = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR: 'GET_USER_INFO_ERROR' = 'GET_USER_INFO_ERROR';

export interface IUserRequestAction {
    readonly type: typeof GET_USER_INFO_REQUEST;
}

export interface IUserSuccessAction {
    readonly type: typeof GET_USER_INFO_SUCCESS;
    readonly payload: { userData: TUser};
}

export interface IUserErrorAction {
    readonly type: typeof GET_USER_INFO_ERROR;
}

export type TUserAction =
    | IUserRequestAction
    | IUserSuccessAction
    | IUserErrorAction;

export const getUserRequestAction = (): TUserAction => ({
    type: GET_USER_INFO_REQUEST,
});

export const getUserSuccessAction = (userData: TUser): TUserAction => ({
    type: GET_USER_INFO_SUCCESS,
    payload: {
        userData: userData,
    }, 
});

export const getUserErrorAction = (): TUserAction => ({
    type: GET_USER_INFO_ERROR,
});

export const onGetUserInfo: AppThunk = (accessToken: string) => {
        return function (dispatch: AppDispatch) {
            dispatch(getUserRequestAction());
        
        getUserInfo(accessToken)
        .then((userData) => {
            console.log(userData)
            if (userData && userData.success) {
                dispatch(getUserSuccessAction(userData));
            }  
        })
            .catch(() => {
                dispatch(getUserErrorAction());
        });
    };
}