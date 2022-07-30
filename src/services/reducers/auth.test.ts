import {authReducer} from './auth';
import * as loginTypes from '../actions/login';
import * as loadingTypes from '../actions/loading';
import * as singOutTypes from '../actions/singnOut';
import * as refreshTokenTypes from '../actions/refreshToken';
import * as recoveryPasswordTypes from '../actions/recoveryPassword';
import * as resetPasswordTypes from '../actions/resetPassword';
import * as registerTypes from '../actions/register';
import * as userInfoTypes from '../actions/userInfo';
import * as updateUserInfoTypes from '../actions/updateUserInfo';

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

describe('authReducer reducer', () => {
    it('should return the initinal state', () => {
        expect(authReducer(initialState, {} as any)).toEqual(initialState);
    });
    it('handler loadingStart should run', () => {
        expect(
        
            authReducer(initialState, { type: loadingTypes.LOADING_START })
        ).toEqual(
            expect.objectContaining({
                loading: true,
            })
        );
    });
    it('handler loadingFinish should run', () => {
        expect(
        
            authReducer(initialState, { type: loadingTypes.LOADING_FINISH })
        ).toEqual(
            expect.objectContaining({
                loading: false,
            })
        );
    });
    it('handler singOutRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: singOutTypes.SIGNOUT_REQUEST })
        ).toEqual(
            expect.objectContaining({
                signOutError: false,
                signOutRequest: true,
            })
        );
    });
    it('handler singOutSuccess should run', () => {
        expect(
        
            authReducer(initialState, { type: singOutTypes.SIGNOUT_SUCCESS })
        ).toEqual(
            expect.objectContaining({
                signOutSuccess: true,
                signOutRequest: false,
                signOutError: false,
                loggedIn: false,
                email: '',
                name: '',
            })
        );
    });
    it('handler singOutError should run', () => {
        expect(
        
            authReducer(initialState, { type: singOutTypes.SIGNOUT_ERROR })
        ).toEqual(
            expect.objectContaining({
                signOutRequest: false,
                signOutError: true,
            })
        );
    });
    it('handler refreshTokenRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: refreshTokenTypes.GET_REFRESH_TOKEN_REQUEST })
        ).toEqual(
            expect.objectContaining({
                refreshTokenRequest: true,
                refreshTokenError: false,
            })
        );
    });
    it('handler refreshTokenSuccess should run', () => {
        expect(
        
            authReducer(initialState, { type: refreshTokenTypes.GET_REFRESH_TOKEN_SUCCESS })
        ).toEqual(
            expect.objectContaining({
                refreshTokenRequest: false,
                refreshTokenError: false,
                refreshTokenSuccess: true,
            })
        );
    });
    it('handler refreshTokenError should run', () => {
        expect(
        
            authReducer(initialState, { type: refreshTokenTypes.GET_REFRESH_TOKEN_ERROR })
        ).toEqual(
            expect.objectContaining({
                refreshTokenRequest: false,
                refreshTokenError: true,
            })
        );
    });
    it('handler recoveryPasswordRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: recoveryPasswordTypes.RECOVERY_PASSWORD_REQUEST })
        ).toEqual(
            expect.objectContaining({
                recoveryPasswordRequest: true,
                recoveryPasswordError: false,
            })
        );
    });
    it('handler recoveryPasswordSuccess should run', () => {
        expect(
        
            authReducer(initialState, { type: recoveryPasswordTypes.RECOVERY_PASSWORD_SUCCESS })
        ).toEqual(
            expect.objectContaining({
                recoveryPasswordSuccess: true,
                recoveryPasswordRequest: false,
                recoveryPasswordError: false,
            })
        );
    });
    it('handler recoveryPasswordError should run', () => {
        expect(
        
            authReducer(initialState, { type: recoveryPasswordTypes.RECOVERY_PASSWORD_ERROR })
        ).toEqual(
            expect.objectContaining({
                recoveryPasswordRequest: false,
                recoveryPasswordError: true,
            })
        );
    });
    it('handler resetPasswordRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: resetPasswordTypes.RESET_PASSWORD_REQUEST })
        ).toEqual(
            expect.objectContaining({
                resetPasswordRequest: true,
                resetPasswordError: false,
            })
        );
    });
    it('handler resetPasswordSuccess should run', () => {
        expect(
        
            authReducer(initialState, { type: resetPasswordTypes.RESET_PASSWORD_SUCCESS })
        ).toEqual(
            expect.objectContaining({
                resetPasswordSuccess: true,
                resetPasswordRequest: false,
                resetPasswordError: false,
            })
        );
    });
    it('handler resetPasswordError should run', () => {
        expect(
        
            authReducer(initialState, { type: resetPasswordTypes.RESET_PASSWORD_ERROR })
        ).toEqual(
            expect.objectContaining({
                resetPasswordRequest: false,
                resetPasswordError: true,
            })
        );
    });
    it('handler loginSucces should run', () => {
        const userData = {
            success: true,
            user: {
            email: "vatt@mail.ru",
            name: "вася"}
            }

        expect(
            authReducer(initialState, { 
                type: loginTypes.GET_LOGIN_SUCCESS,
                payload: {userData}
            })
        ).toEqual(
            expect.objectContaining({
                loginRequest: false,
                loginError: false,
                loginSuccess: true,
                loggedIn: true,
                email: userData.user.email,
                name: userData.user.name,
            })
        );
    });
    it('handler loginRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: loginTypes.GET_LOGIN_REQUEST })
        ).toEqual(
            expect.objectContaining({
                loginRequest: true,
                loginError: false,
            })
        );
    });
    it('handler loginError should run', () => {
        expect(
        
            authReducer(initialState, { type: loginTypes.GET_LOGIN_ERROR })
        ).toEqual(
            expect.objectContaining({
                loginRequest: false,
                loginError: true,
            })
        );
    });
    it('handler registerSucces should run', () => {

        const userData = {
            success: true,
            user: {
            email: "vatt@mail.ru",
            name: "вася"}
            }

        expect(
            authReducer(initialState, { 
                type: registerTypes.GET_REGISTER_SUCCESS,
                payload: {userData}
            })
        ).toEqual(
            expect.objectContaining({
                registerRequest: false,
                regiterError: false,
                loggedIn: true,
                registerSuccess: true,
                email: userData.user.email,
                name: userData.user.name,
            })
        );
    });
    it('handler registerRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: registerTypes.GET_REGISTER_REQUEST })
        ).toEqual(
            expect.objectContaining({
                registerRequest: true,
                regiterError: false,
            })
        );
    });
    it('handler regiterError should run', () => {
        expect(
        
            authReducer(initialState, { type: registerTypes.GET_REGISTER_ERROR })
        ).toEqual(
            expect.objectContaining({
                registerRequest: false,
                regiterError: true,
            })
        );
    });
    it('handler userInfoRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: userInfoTypes.GET_USER_INFO_REQUEST })
        ).toEqual(
            expect.objectContaining({
                userInfoRequest: true,
                userInfoError: false,
            })
        );
    });
    it('handler userInfoSuccess should run', () => {
        const userData = {
            success: true,
            user: {
            email: "vatt@mail.ru",
            name: "вася"}
            }

        expect(
            authReducer(initialState, { 
                type: userInfoTypes.GET_USER_INFO_SUCCESS,
                payload: {userData}
            })
        ).toEqual(
            expect.objectContaining({
                userInfoRequest: false,
                userInfoError: false,
                userInfoSuccess: true,
                loggedIn: true,
                email: userData.user.email,
                name: userData.user.name,
            })
        );
    });
    it('handler userInfoError should run', () => {
        expect(
        
            authReducer(initialState, { type: userInfoTypes.GET_USER_INFO_ERROR })
        ).toEqual(
            expect.objectContaining({
                userInfoRequest: false,
                userInfoError: true,
            })
        );
    });
    it('handler updateUserInfoRequest should run', () => {
        expect(
        
            authReducer(initialState, { type: updateUserInfoTypes.EDITPROFILE_REQUEST })
        ).toEqual(
            expect.objectContaining({
                editProfileRequest: true,
                editProfileError: false,
            })
        );
    });
    it('handler updateUserInfoSucces should run', () => {

        const userData = {
            success: true,
            user: {
            email: "vatt@mail.ru",
            name: "вася"}
            }

        expect(
            authReducer(initialState, { 
                type: updateUserInfoTypes.EDITPROFILE_SUCCESS,
                payload: {userData}
            
            })
        ).toEqual(
            expect.objectContaining({
                editProfileRequest: false,
                editProfileError: false,
                editProfileSuccess: true,
                email: userData.user.email,
                name: userData.user.name,
            })
        );
    });
    it('handler updateUserInfoError should run', () => {
        expect(
        
            authReducer(initialState, { type: updateUserInfoTypes.EDITPROFILE_ERROR })
        ).toEqual(
            expect.objectContaining({
                editProfileRequest: false,
                editProfileError: true,
            })
        );
    });
})