import { Reducer } from "redux";

import {
    SELECT_ORDER,
    DELETE_SELECTED_ORDER_DATA,
    ORDER_WINDOW_OPEN,
    ORDER_WINDOW_CLOSE
} from '../actions/selectedOrder'

import { TFeedOrder } from "../../utils/tupes";

export type TSelectedOrderState = {
    selectedOrder: TFeedOrder | null,
    orderWindowOpen: boolean
};

const selectedIngredientState: TSelectedOrderState = {
    selectedOrder: null,
    orderWindowOpen: false
};

export const selectedOrderReducer: Reducer<TSelectedOrderState
> = (state = selectedIngredientState, action) => {
    switch(action.type) {
        case SELECT_ORDER: {
            return {
                ...state,
                selectedOrder: action.payload.order,
            };
        }

        case DELETE_SELECTED_ORDER_DATA: {
            return {
                ...state,
                selectedOrder: null,
            };
        }

        case  ORDER_WINDOW_OPEN: {
            return {
                ...state,
                orderWindowOpen: true,
            };
        }

        case  ORDER_WINDOW_CLOSE: {
            return {
                ...state,
                orderWindowOpen: false,
            };
        }

        default: {
            return state;
        }
    }
};