import api from '../../utils/IngredientsApi'

//тиры по запросу ингредиентов
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";// запрос получение ингредиентов
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";//успешный запрос
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";//неудачный запрос

//типы по запросу номера заказа
export const GET_ORDER_NUMBER_REQUEST = "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_ERROR = "GET_ORDER_NUMBER_ERROR";



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
            type: GET_INGREDIENTS_ERROR,
        });
        }
    });
    };
}

export function getOrderNumber(ingredientIds) {
    return (dispatch) => {
        dispatch({
            type: GET_ORDER_NUMBER_REQUEST,
        });
        api.useIngredients(ingredientIds).then((res) => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    payload: {
                    order: res.order,
                    },
        });
        } else {
            dispatch({
                type: GET_ORDER_NUMBER_ERROR,
            });
        }
    });
    };
}