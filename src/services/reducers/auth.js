import {
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_ERROR,
} from '../actions/register'





const initialState = {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
    registerRequest: false,
    regiterError: false,
    registerSuccess: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                regiterError: false,
            };
        }
        case  GET_REGISTER_SUCCESS: {
            return {
                ...state,
                registerRequest: false,
                regiterError: false,
                registerSuccess: true,
                signOutSuccess: false,
                loggedIn: true,
                email: action.payload.data.user.email,
                name: action.payload.data.user.name,
                accessToken: action.payload.data.accessToken.split('Bearer ')[1],
                refreshToken: action.payload.data.refreshToken,
            };
        }
        case  GET_REGISTER_ERROR: {
            return {
                ...state,
                registerRequest: false,
                regiterError: true,
            };
        }
        default:
            return state;
        }
};