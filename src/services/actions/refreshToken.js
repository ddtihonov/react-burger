import { refreshingToken } from '../../utils/auth';
export const GET_REFRESH_TOKEN_REQUEST = 'GET_REFRESH_TOKEN_REQUEST';
export const GET_REFRESH_TOKEN_SUCCESS = 'GET_REFRESH_TOKEN_SUCCESS';
export const GET_REFRESH_TOKEN_ERROR = 'GET_REFRESH_TOKEN_ERROR';

export function onRefreshToken(refreshToken) {
    return function (dispatch) {
        dispatch({
        type: GET_REFRESH_TOKEN_REQUEST,
        });
        refreshingToken(refreshToken)
        .then((data) => {
            dispatch({
                type: GET_REFRESH_TOKEN_SUCCESS,
            });
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('accessToken', data.accessToken);
        })
        .catch(() => {
            dispatch({ type: GET_REFRESH_TOKEN_ERROR });
        });
    };
}