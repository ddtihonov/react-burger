import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
    GET_ORDER_NUMBER_REQUEST,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_ERROR
} from '../actions/actions';

// начальное состояние ingredients
const ingredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
    selectedIngredient: null,
};

//редюсер загрузки ингредиентов
export const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredientsRequest: true,
            };
        }

        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredientsRequest: false,
                ingredients: action.payload.ingredients,
            };
        }

        case  GET_INGREDIENTS_ERROR: {
            return {
                ...ingredientsInitialState,
                ingredientsFailed: true,
            };
        }
        default: {
            return state;
        }
    }
};

// начальное состояние popap заказа
const orderInitialState = {
    orderNumber: null,
    orderNumberRequest: false,
    orderNumberError: false,
};

//редюсер popap заказа
export const orderNumberReducer = (state = orderInitialState, action) => {
    switch (action.type) {
        case GET_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                orderNumberRequest: true,
            };
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                orderNumberRequest: false,
                orderNumberError: false,
                orderNumber: action.payload.order,
            };
        }
        case GET_ORDER_NUMBER_ERROR: {
            return {
                ...orderInitialState,
                orderNumberError: true,
            };
        }
        default:
            return state;
        }
};