import {BASE_URL, checkError} from './constants'
    
    export const register = (name: string, email: string, password: string) => {
        return fetch(BASE_URL + 'auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                name: name,
                email: email,
                password: password
            }),
        })
        .then((res) => checkError(res));
    };

    export const setUserInfo = (userName: string, userEmail: string, userPassword: string,  token: string) => {
    
        return fetch(BASE_URL + 'auth/user', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                        Authorization: token,
                },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword
            })
        })
            .then((res) => checkError(res));
    }

    export const authorize = ( email: string, password: string ) => {
        return fetch(BASE_URL + 'auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            }),
            })

            .then((res) => checkError(res));
    };


    export const getUserInfo = (token: string) => {
        return fetch(BASE_URL + 'auth/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        })
            .then((res) => checkError(res));
    };

    export const refreshingToken = (token: string) => {
        return fetch(BASE_URL + 'auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
            }),
        })
            .then((res) => checkError(res));
    }

    export const deleteAuth = (token: string) =>{
        return fetch(BASE_URL + 'auth/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                token: token,
            }),
        })
            .then((res) => checkError(res));
    }

    export const passwordRecovery = (email: string) => {
        return fetch(BASE_URL + 'password-reset', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email: email,
            }),
        }).then((res) => checkError(res));
    };

    export const resetPassword = (password: string, token: string) => {
        return fetch(BASE_URL + 'password-reset/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                password: password, 
                token: token, 
            }),
            }).then((res) => checkError(res));
    };