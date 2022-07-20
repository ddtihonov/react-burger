import { AppDispatch, AppThunk } from '../../utils';
import { TOrder } from '../../utils/tupes';
import { sendOrder } from '../../utils/IngredientsApi';


export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR: 'GET_ORDER_ERROR' = 'GET_ORDER_ERROR';
export const DELETE_ORDER_NUMBER: 'DELETE_ORDER_DATA' = 'DELETE_ORDER_DATA';//удалить номер заказа

export interface IDeleteOrderNumberAction {
    readonly type: typeof DELETE_ORDER_NUMBER;
}

export interface IOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly payload: { order: TOrder};
}

export interface IOrderErrorAction {
    readonly type: typeof GET_ORDER_ERROR;
}

export type TOrderAction =
    | IOrderRequestAction
    | IOrderSuccessAction
    | IOrderErrorAction
    | IDeleteOrderNumberAction;

export const getOrderRequestAction = (): TOrderAction => ({
    type: GET_ORDER_REQUEST,
});

export const getOrderSuccessAction = (data: TOrder): TOrderAction => ({
    type: GET_ORDER_SUCCESS,
    payload: {
        order: data,
    }, 
});

export const getOrderErrorAction = (): TOrderAction => ({
    type: GET_ORDER_ERROR,
});


export const getDeleteOrderNumberAction = (): TOrderAction => ({
    type: DELETE_ORDER_NUMBER,
});


export const createOrder: AppThunk =
    (id: string, token: string) => (dispatch: AppDispatch) => {
        dispatch(getOrderRequestAction());
        sendOrder(id, token)
        .then((data) => {
            if (data && data.success) {
                console.log(data.order.number)
                dispatch(getOrderSuccessAction(data));
            } else {
                dispatch(getOrderErrorAction());
            }
        })
        .catch(() => {
            dispatch(getOrderErrorAction());
        });
};