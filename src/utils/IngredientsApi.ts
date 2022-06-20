import {BASE_URL, checkError} from './constants'

    export  const getIngredients = () => {
        return fetch(BASE_URL + 'ingredients', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => checkError(res));
    }

    export  const useIngredients = (arr: string) => {
        return  fetch(BASE_URL + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ingredients: arr
            }),
        })
            .then((res) => checkError(res));
    }

    
