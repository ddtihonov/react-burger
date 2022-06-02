import { register } from '../../utils/auth';
//регистрация
export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';// запрос
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';//успешный запрос
export const GET_REGISTER_ERROR = 'GET_REGISTER_ERROR';//неудачный запрос



export function onRegister({name, email, password }) {

    return function (dispatch) {
        dispatch({
        type: GET_REGISTER_REQUEST,
    });
        register({name, email, password })
            .then((userData) => {
                dispatch({
                    type: GET_REGISTER_SUCCESS,
                    payload: {
                        data: userData,
                    }, 
                });
                localStorage.setItem('userName', userData.user.name);
                localStorage.setItem('userEmail', userData.user.email);
                localStorage.setItem('accessToken',
                    userData.accessToken.split('Bearer ')[1]);
                localStorage.setItem('refreshToken', userData.refreshToken);

            
        }) 
        .catch(() => {
            dispatch({ type: GET_REGISTER_ERROR });
        });
    };
}
