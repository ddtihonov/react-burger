import {setUserInfo} from '../../utils/auth';

export const EDITPROFILE_REQUEST = 'EDITPROFILE_REQUEST';
export const EDITPROFILE_SUCCESS = 'EDITPROFILE_SUCCESS';
export const EDITPROFILE_ERROR = 'EDITPROFILE_ERROR';

export function onEditProfile(email, name, password, token) {
    return function (dispatch) {
        dispatch({
        type: EDITPROFILE_REQUEST,
        });
        setUserInfo(email, name, password, token)
        .then((userDat) => {
            if (userDat && userDat.success) {
            dispatch({
                type: EDITPROFILE_SUCCESS,
                userDat: userDat,
            });
            } else {
            dispatch({ type: EDITPROFILE_ERROR });
            }
        })
        .catch(() => {
            dispatch({ type: EDITPROFILE_ERROR });
        });
    };
}