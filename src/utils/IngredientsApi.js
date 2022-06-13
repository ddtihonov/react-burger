
    export  const getIngredients = () => {
        return fetch('https://norma.nomoreparties.space/api/ingredients', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => checkError(res));
    }

    export  const useIngredients = (arr) => {
        return  fetch('https://norma.nomoreparties.space/api/orders', {
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

    const checkError = (res) =>{
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} : ${res.statusText}`);
    }
