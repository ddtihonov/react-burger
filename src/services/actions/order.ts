import {useIngredients} from '../../utils/IngredientsApi';
import { AppDispatch, AppThunk } from '../../utils';

/*export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_ERROR = 'GET_ORDER_NUMBER_ERROR';
export const DELETE_ORDER_NUMBER = 'DELETE_ORDER_DATA';//удалить номер заказа*/

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
    readonly payload: { order: string};
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

export const getOrderNumberSuccessAction = (order: string): TOrderNumberAction => ({
    type: GET_ORDER_NUMBER_SUCCESS,
    payload: {
        order: order,
    }, 
});

export const getOrderNumberErrorAction = (): TOrderNumberAction => ({
    type: GET_ORDER_NUMBER_ERROR,
});

export const getOrderNumber: AppThunk = (ingredientsId: number[]) => {
    return (dispatch: AppDispatch) => {
        dispatch(getOrderNumberRequestAction());
        useIngredients(ingredientsId)
        .then((res) => {
            console.log(res.order.number)
            dispatch(getOrderNumberSuccessAction(res.order.number));   
        })
        .catch((err) => {
            console.log(`Внимание! ${err}`);
                dispatch(getOrderNumberErrorAction());
            }) 
    };
}

/*export function getOrderNumber(ingredientIds) {
    return (dispatch) => {
        dispatch({
            type: GET_ORDER_NUMBER_REQUEST,
        });
        useIngredients(ingredientIds)
        .then((res) => {
            console.log(res.order.number)
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    payload: {
                    order: res.order.number,
                    },
                });
        })
        .catch((err) => {
            console.log(`Внимание! ${err}`);
                dispatch({
                    type: GET_ORDER_NUMBER_ERROR,
                });
            }) 
    };
}*/