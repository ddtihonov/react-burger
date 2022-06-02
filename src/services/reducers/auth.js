import {
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_ERROR,
} from '../actions/register'

import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
} from '../actions/login'



const initialState = {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
    loggedIn: false,
    signOutSuccess: false,

    registerRequest: false,
    regiterError: false,
    registerSuccess: false,

    loginRequest: false,
    loginError: false,
    loginSuccess: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        //регистрация
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
            };
        }
        case  GET_REGISTER_ERROR: {
            return {
                ...state,
                registerRequest: false,
                regiterError: true,
            };
        }
        //вход
        case GET_LOGIN_REQUEST: {
            return {
                ...state,
                loginRequest: true,
                loginError: false,
            };
        }
        case  GET_LOGIN_SUCCESS: {
            return {
                ...state,
                loginRequest: false,
                loginError: false,
                loginSuccess: true,
                signOutSuccess: false,
                loggedIn: true,
            };
        }
        case  GET_LOGIN_ERROR: {
            return {
                ...state,
                loginRequest: false,
                loginError: true,
            };
        }
        default:
            return state;
        }
};