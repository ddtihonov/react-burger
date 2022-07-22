import {setUserInfo} from '../../utils/auth';
import { TLogin } from '../../utils/tupes';
import { AppDispatch, AppThunk } from '../../utils';

export const EDITPROFILE_REQUEST: 'EDITPROFILE_REQUEST' = 'EDITPROFILE_REQUEST';
export const EDITPROFILE_SUCCESS: 'EDITPROFILE_SUCCESS' = 'EDITPROFILE_SUCCESS';
export const EDITPROFILE_ERROR: 'EDITPROFILE_ERROR' = 'EDITPROFILE_ERROR';

export interface IEditProfileRequestAction {
    readonly type: typeof EDITPROFILE_REQUEST;
}

export interface IEditProfileSuccessAction {
    readonly type: typeof EDITPROFILE_SUCCESS;
    readonly payload: { userData: TLogin};
}

export interface IEditProfileErrorAction {
    readonly type: typeof EDITPROFILE_ERROR;
}

export type TEditProfileAction =
    | IEditProfileRequestAction
    | IEditProfileSuccessAction
    | IEditProfileErrorAction;

export const getEditProfileRequestAction = (): TEditProfileAction => ({
    type: EDITPROFILE_REQUEST,
});

export const getEditProfileSuccessAction = (userData: TLogin): TEditProfileAction => ({
    type: EDITPROFILE_SUCCESS,
    payload: {
        userData: userData,
    }, 
});

export const getEditProfileErrorAction = (): TEditProfileAction => ({
    type: EDITPROFILE_ERROR,
});

export const onEditProfile: AppThunk = (userName: string, userEmail: string, userPassword: string, token: string) => {
    return function (dispatch: AppDispatch) {
        dispatch(getEditProfileRequestAction());
        setUserInfo(userName, userEmail, userPassword, token)
        .then((userData) => {
            if (userData && userData.success) {
            dispatch(getEditProfileSuccessAction(userData));
            } 
        })
        .catch(() => {
            dispatch(getEditProfileErrorAction());
        });
    };
}