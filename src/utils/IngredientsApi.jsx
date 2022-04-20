class IngredientsApi {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    };

    getInitialCards() {
        return fetch(`${this.baseUrl}/api/ingredients`, {
            headers: this.headers
        })
            .then(this._checkError);
    }

    _checkError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new  IngredientsApi({
    baseUrl: 'https://norma.nomoreparties.space',
headers: {'Content-Type': 'application/json'}
});

export default api

