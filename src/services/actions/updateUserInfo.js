import {setUserInfo} from '../../utils/auth';

export const EDITPROFILE_REQUEST = 'EDITPROFILE_REQUEST';
export const EDITPROFILE_SUCCESS = 'EDITPROFILE_SUCCESS';
export const EDITPROFILE_ERROR = 'EDITPROFILE_ERROR';

export function onEditProfile(userName, userEmail, userPassword, token) {
    return function (dispatch) {
        dispatch({
        type: EDITPROFILE_REQUEST,
        });
        setUserInfo(userName, userEmail, userPassword, token)
        .then((userDat) => {
            if (userDat && userDat.success) {
            dispatch({
                type: EDITPROFILE_SUCCESS,
                userDat: userDat,
            });
            } 
        })
        .catch(() => {
            dispatch({ type: EDITPROFILE_ERROR });
        });
    };
}