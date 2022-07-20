import { TFeedOrders } from '../../utils/tupes';

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_START_FOR_USER: 'WS_CONNECTION_START_FOR_USER' = 'WS_CONNECTION_START_FOR_USER';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';


export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_ORDERS: 'WS_SEND_ORDERS' = 'WS_SEND_ORDERS';
export const WS_GET_USER_ORDERS: 'WS_GET_USER_ORDERS' = 'WS_GET_USER_ORDERS';

export interface IWsConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
}
export interface IWsConnectionStartForUserAction {
    readonly type: typeof WS_CONNECTION_START_FOR_USER;
}
export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IWsGetOrdersAction {
    readonly type: typeof WS_GET_ORDERS;
    readonly data: TFeedOrders;
}

export interface IWsGetUserOrdersAction {
    readonly type: typeof WS_GET_USER_ORDERS;
    readonly data: TFeedOrders;
}
export type TWsFeedAction =
    | IWsConnectionSuccessAction
    | IWsConnectionStartAction
    | IWsConnectionClosedAction
    | IWsConnectionErrorAction
    | IWsGetOrdersAction
    | IWsConnectionStartForUserAction
    | IWsGetUserOrdersAction;

export const wsConnectionStartForUser = (): TWsFeedAction => {
    return {
        type: WS_CONNECTION_START_FOR_USER,
    };
};
export const wsConnectionStart = (): TWsFeedAction => {
    return {
        type: WS_CONNECTION_START,
    };
};
export const wsConnectionSuccess = (): TWsFeedAction => {
    return {
        type: WS_CONNECTION_SUCCESS,
    };
};

export const wsConnectionError = (): TWsFeedAction => {
    return {
        type: WS_CONNECTION_ERROR,
    };
};

export const wsConnectionClosed = (): TWsFeedAction => {
    return {
        type: WS_CONNECTION_CLOSED,
    };
};

export const wsGetOrder = (data: TFeedOrders): TWsFeedAction => {
    return {
        type: WS_GET_ORDERS,
        data,
    };
};

export const wsGetUserOrder = (data: TFeedOrders): TWsFeedAction => {
    console.log(data)
    return {
        type: WS_GET_USER_ORDERS,
        data,
    };
};