import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    DELETE_ORDER_NUMBER,
} from '../actions/order';

//import { TOrderAction } from '../actions/order';
import { TOrder } from '../../utils/tupes'

type TOrderInitialState = {
    order: TOrder,
    orderRequest: boolean,
    orderError: boolean,
    orderSuccess: boolean;
};


// начальное состояние popap заказа
const orderInitialState: TOrderInitialState = {
    order: {} as TOrder,
    orderRequest: false,
    orderError: false,
    orderSuccess: false,
};

export const orderNumberReducer = (state = orderInitialState, action: any) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderSuccess: true,
                orderRequest: false,
                orderError: false,
                order: action.payload.order,
            };
        }
        case GET_ORDER_ERROR: {
            return {
                ...orderInitialState,
                orderError: true,
            };
        }
        case DELETE_ORDER_NUMBER: {
            return {
                ...state,
                order: {},
                orderSuccess: false,
            }
        }
        default:
            return state;
        }
};