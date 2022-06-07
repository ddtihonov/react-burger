import { getUserInfo } from '../../utils/auth';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';

export function onGetUserInfo(accessToken) {
        return function (dispatch) {
            dispatch({
                type: GET_USER_INFO_REQUEST,
            });
        
        getUserInfo(accessToken)
        .then((userData) => {
            if (userData && userData.success) {
                console.log(userData)
            dispatch({
                type: GET_USER_INFO_SUCCESS,
                userData: userData,
            });
            localStorage.setItem('refreshToken', userData.refreshToken);
            }  else {
            dispatch({ type: GET_USER_INFO_ERROR });
            }
        })
            .catch(() => {
            dispatch({ type: GET_USER_INFO_ERROR });
        });
    };
}