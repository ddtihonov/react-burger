import api from '../../utils/IngredientsApi'

//типы экшенов
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";// запрос получение ингредиентов
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";//успешный запрос
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";//неудачный запрос

export function getIngredients() {
    return (dispatch) => {
        dispatch({
        type: GET_INGREDIENTS_REQUEST,
    });
    api.getIngredients().then((res) => {
        if (res && res.success) {
            dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            payload: {
                ingredients: res.data,
            },
        });
        } else {
            dispatch({
            type: GET_INGREDIENTS_FAILED,
        });
        }
    });
    };
}