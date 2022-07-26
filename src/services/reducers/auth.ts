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

import {
    EDITPROFILE_REQUEST,
    EDITPROFILE_SUCCESS,
    EDITPROFILE_ERROR,
} from '../actions/updateUserInfo';

import {
    SIGNOUT_REQUEST,
    SIGNOUT_SUCCESS,
    SIGNOUT_ERROR,
} from '../actions/singnOut';

import {
    RECOVERY_PASSWORD_REQUEST,
    RECOVERY_PASSWORD_SUCCESS,
    RECOVERY_PASSWORD_ERROR,
} from '../actions/recoveryPassword';

import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from '../actions/resetPassword';

import {
    LOADING_START,
    LOADING_FINISH,
}
from '../actions/loading';

type TAuthState = {
    email: string,
    name: string,
    loggedIn: boolean,
    loading: boolean,
    //регистрация
    registerRequest: boolean,
    regiterError: boolean,
    registerSuccess: boolean,
    //вход
    loginRequest: boolean,
    loginError: boolean,
    loginSuccess: boolean,
    //запросить данные пользователя
    userInfoRequest: boolean,
    userInfoError: boolean,
    userInfoSuccess: boolean,

    //refreshToken
    refreshTokenRequest: boolean,
    refreshTokenError: boolean,
    refreshTokenSuccess: boolean,

    //обновить данные пользователя
    editProfileRequest: boolean,
    editProfileError: boolean,
    editProfileSuccess: boolean,

    //выход из аккаунта
    signOutSuccess: boolean,
    signOutRequest: boolean,
    signOutError: boolean,

    //восстановление пароля
    recoveryPasswordSuccess: boolean,
    recoveryPasswordRequest: boolean,
    recoveryPasswordError: boolean,

    //новый пароль
    resetPasswordSuccess: boolean,
    resetPasswordRequest: boolean,
    resetPasswordError: boolean,
}

const initialState: TAuthState = {
    email: '',
    name: '',
    loggedIn: false,
    loading: false,
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

    //обновить данные пользователя
    editProfileRequest: false,
    editProfileError: false,
    editProfileSuccess: false,

    //выход из аккаунта
    signOutSuccess: false,
    signOutRequest: false,
    signOutError: false,

    //восстановление пароля
    recoveryPasswordSuccess: false,
    recoveryPasswordRequest: false,
    recoveryPasswordError: false,

    //новый пароль
    resetPasswordSuccess: false,
    resetPasswordRequest: false,
    resetPasswordError: false,
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case LOADING_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case  LOADING_FINISH: {
            return {
                ...state,
                loading: false,
            };
        }
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
                registerSuccess: true,
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
                loggedIn: true,
                email: action.userData.user.email,
                name: action.userData.user.name,
            };
        }
        case  GET_LOGIN_ERROR: {
            return {
                ...state,
                loginRequest: false,
                loginError: true,
            };
        }

        //выход
        case SIGNOUT_REQUEST: {
            return {
                ...state,
                signOutError: false,
                signOutRequest: true,
            };
        }
        case  SIGNOUT_SUCCESS: {
            return {
                ...state,
                signOutSuccess: true,
                signOutRequest: false,
                signOutError: false,
                loggedIn: false,
                email: '',
                name: '',
            };
        }
        case  SIGNOUT_ERROR: {
            return {
                ...state,
                signOutRequest: false,
                signOutError: true,
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
            };
        }
        case   GET_REFRESH_TOKEN_ERROR: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenError: true,
            };
        }

        //восстановление пароля
        case   RECOVERY_PASSWORD_REQUEST: {
            return {
                ...state,
                recoveryPasswordRequest: true,
                recoveryPasswordError: false,
            };
        }
        
        case   RECOVERY_PASSWORD_SUCCESS: {
            return {
                ...state,
                recoveryPasswordSuccess: true,
                recoveryPasswordRequest: false,
                recoveryPasswordError: false,
            };
        }
        case   RECOVERY_PASSWORD_ERROR: {
            return {
                ...state,
                recoveryPasswordRequest: false,
                recoveryPasswordError: true,
            };
        }

        //новый пароль
        case   RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordError: false,
            };
        }
        
        case   RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordSuccess: true,
                resetPasswordRequest: false,
                resetPasswordError: false,
            };
        }
        case   RESET_PASSWORD_ERROR: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordError: true,
            };
        }


        //обновить данные пользователя
        case   EDITPROFILE_REQUEST: {
            return {
                ...state,
                editProfileRequest: true,
                editProfileError: false,
            };
        }
        
        case   EDITPROFILE_SUCCESS: {
            return {
                ...state,
                editProfileRequest: false,
                editProfileError: false,
                editProfileSuccess: true,
                email: action.payload.userData.user.email,
                name: action.payload.userData.user.name,
            };
        }
        case   EDITPROFILE_ERROR: {
            return {
                ...state,
                editProfileRequest: false,
                editProfileError: true,
            };
        }


        default:
            return state;
        }
};