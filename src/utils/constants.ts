export const BASE_URL = 'https://norma.nomoreparties.space/api/';

export const checkError = (res: {
    ok: boolean;
    status: number;
    statusText: string;
    json(): Promise<object>;
}) =>{
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status} : ${res.statusText}`);
}