export const BASE_URL = 'https://norma.nomoreparties.space/api/';

export const checkError = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} : ${res.statusText}`);
}