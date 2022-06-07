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
            if (data && data.success) {
            dispatch({
                type: GET_REFRESH_TOKEN_SUCCESS,
                data: data,
            });
            localStorage.setItem('refreshToken', data.refreshToken);
            } else {
            dispatch({ type: GET_REFRESH_TOKEN_ERROR });
            }
        })
        .catch(() => {
            dispatch({ type: GET_REFRESH_TOKEN_ERROR });
        });
    };
}