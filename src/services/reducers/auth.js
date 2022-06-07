import {
    GET_REGISTER_REQUEST,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_ERROR,
} from '../actions/register';

import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
} from '../actions/login';

import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_ERROR,
} from '../actions/userInfo';

import {
    GET_REFRESH_TOKEN_REQUEST,
    GET_REFRESH_TOKEN_SUCCESS,
    GET_REFRESH_TOKEN_ERROR,
} from '../actions/refreshToken';



const initialState = {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
    loggedIn: false,
    signOutSuccess: false,
    //регистрация
    registerRequest: false,
    regiterError: false,
    registerSuccess: false,
    //вход
    loginRequest: false,
    loginError: false,
    loginSuccess: false,
    //запросить данные пользователя
    userInfoRequest: false,
    userInfoError: false,
    userInfoSuccess: false,

    //refreshToken
    refreshTokenRequest: false,
    refreshTokenError: false,
    refreshTokenSuccess: false,
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
                loggedIn: true,
                email: action.payload.userData.user.email,
                name: action.payload.userData.user.name,
                accessToken: action.payload.userData.accessToken,
                refreshToken: action.payload.userData.refreshToken,
                registerSuccess: true,
                signOutSuccess: false,
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
                email: action.payload.userData.user.email,
                name: action.payload.userData.user.name,
                accessToken: action.payload.userData.accessToken,
                refreshToken: action.payload.userData.refreshToken,
            };
        }
        case  GET_LOGIN_ERROR: {
            return {
                ...state,
                loginRequest: false,
                loginError: true,
            };
        }

         //запросить данные пользователя
        case  GET_USER_INFO_REQUEST: {
            return {
                ...state,
                userInfoRequest: true,
                userInfoError: false,
            };
        }
        
        case  GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfoRequest: false,
                userInfoError: false,
                userInfoSuccess: true,
                loggedIn: true,
                email: action.payload.userData.user.email,
                name: action.payload.userData.user.name,
            };
        }
        case  GET_USER_INFO_ERROR: {
            return {
                ...state,
                userInfoRequest: false,
                userInfoError: true,
            };
        }

         //refreshToken
        case   GET_REFRESH_TOKEN_REQUEST: {
            return {
                ...state,
                refreshTokenRequest: true,
                refreshTokenError: false,
            };
        }
        
        case   GET_REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenError: false,
                refreshTokenSuccess: true,
                accessToken: action.payload.userData.accessToken,
                refreshToken: action.payload.userData.refreshToken,
            };
        }
        case   GET_REFRESH_TOKEN_ERROR: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenError: true,
            };
        }
        default:
            return state;
        }
};