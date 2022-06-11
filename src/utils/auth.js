
    
    export const register = ({name, email, password}) => {
        return fetch('https://norma.nomoreparties.space/api/auth/register', {
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

    export const setUserInfo = ({name, email, password, token}) => {
        return fetch('https://norma.nomoreparties.space/api/auth/user', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                        Authorization: token,
                },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then((res) => checkError(res));
    }

    export const authorize = ({ email, password }) => {
        return fetch('https://norma.nomoreparties.space/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                email: email,
                password: password
            }),
            })

            .then((res) => checkError(res));
    };


    export const getUserInfo = (token) => {
        return fetch('https://norma.nomoreparties.space/api/auth/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        })
            .then((res) => checkError(res));
    };

    export const refreshingToken = (token) => {
        return fetch('https://norma.nomoreparties.space/api/auth/token', {
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

    export const deleteAuth = (token) =>{
        return fetch('https://norma.nomoreparties.space/api/auth/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                token: token,
            }),
        })
            .then((res) => checkError(res));
    }
    

    /*export const saveFilm = (movie) => {
        return fetch('https://api.ddtihonov.students.nomoredomains.work/movies', {
            method: "POST",
            credentials: "include",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: movie.trailerLink,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            }),
        })
            .then((res) => checkError(res));
    };
    
    export const getMyMovies = () =>{
        return fetch('https://api.ddtihonov.students.nomoredomains.work/movies', {
            credentials: 'include',
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then((res) => checkError(res));
    }
    
    export const deleteFilm = (movieId) => {
        return fetch(`https://api.ddtihonov.students.nomoredomains.work/movies/${movieId}`, {
            method: "DELETE",
            credentials: "include",
            headers: {'Content-Type': 'application/json'},
        })
            .then((res) => checkError(res));
    };*/

    const checkError = (res) =>{
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} : ${res.statusText}`);
    }