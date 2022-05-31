import { register } from '../../utils/auth';

export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';// запрос
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';//успешный запрос
export const GET_REGISTER_ERROR = 'GET_REGISTER_ERROR';//неудачный запрос

export function onRegister(email, password, name) {
    return function (dispatch) {
        dispatch({
        type: GET_REGISTER_REQUEST,
    });
        register({email, password, name})
            .then((data) => {
                console.log(data)
                dispatch({
                    type: GET_REGISTER_SUCCESS,
                    payload: {
                    Userdata: data,
                    }, 
            });
            
        }) 
        .catch(() => {
            dispatch({ type: GET_REGISTER_ERROR });
        });
    };
}