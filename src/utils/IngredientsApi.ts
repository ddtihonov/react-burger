import {BASE_URL, checkError} from './constants'

    export  const getIngredients = () => {
        return fetch(BASE_URL + 'ingredients', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => checkError(res));
    }

    export const sendOrder = (id: string, token: string) => {
        return fetch(BASE_URL + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ ingredients: id }),
            })
            .then((res) => checkError(res));
    };   
