import {
    GET_ORDER_NUMBER_REQUEST,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_ERROR,
    DELETE_ORDER_NUMBER,
} from '../actions/order';

//import { TApplicationActions } from '../../utils/tupes';

/*type TOrderInitialState = {
    orderNumber: number | null,
    orderNumberRequest: boolean,
    orderNumberError: boolean,
};*/


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
                orderNumber: action.payload.data.order,
            };
        }
        case GET_ORDER_NUMBER_ERROR: {
            return {
                ...orderInitialState,
                orderNumberError: true,
            };
        }
        case DELETE_ORDER_NUMBER: {
            return {
                ...state,
                orderNumber: null,
            }
        }
        default:
            return state;
        }
};