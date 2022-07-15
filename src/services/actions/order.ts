import {useIngredients} from '../../utils/IngredientsApi';
import { AppDispatch, AppThunk } from '../../utils';
import { TOrder } from '../../utils/tupes';

export const GET_ORDER_NUMBER_REQUEST: 'GET_ORDER_NUMBER_REQUEST' = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS: 'GET_ORDER_NUMBER_SUCCESS' = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_ERROR: 'GET_ORDER_NUMBER_ERROR' = 'GET_ORDER_NUMBER_ERROR';
export const DELETE_ORDER_NUMBER: 'DELETE_ORDER_DATA' = 'DELETE_ORDER_DATA';//удалить номер заказа

export interface IDeleteOrderNumberAction {
    readonly type: typeof DELETE_ORDER_NUMBER;
}

export interface IOrderNumberRequestAction {
    readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}

export interface IOrderNumberSuccessAction {
    readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
    readonly payload: { order: number};
}

export interface IOrderNumberErrorAction {
    readonly type: typeof GET_ORDER_NUMBER_ERROR;
}

export type TOrderNumberAction =
    | IOrderNumberRequestAction
    | IOrderNumberSuccessAction
    | IOrderNumberErrorAction
    | IDeleteOrderNumberAction;

export const getOrderNumberRequestAction = (): TOrderNumberAction => ({
    type: GET_ORDER_NUMBER_REQUEST,
});

export const getOrderNumberSuccessAction = (data: TOrder): TOrderNumberAction => ({
    type: GET_ORDER_NUMBER_SUCCESS,
    payload: {
        order: data.order.number,
    }, 
});

export const getOrderNumberErrorAction = (): TOrderNumberAction => ({
    type: GET_ORDER_NUMBER_ERROR,
});

export const getOrderNumber: AppThunk = (ingredientsId) => {
    return (dispatch: AppDispatch) => {
        dispatch(getOrderNumberRequestAction());
        useIngredients(ingredientsId)
        .then((data) => {
            dispatch(getOrderNumberSuccessAction(data));
        })
        .catch((err) => {
            console.log(`Внимание! ${err}`);
                dispatch(getOrderNumberErrorAction());
            }) 
    };
}