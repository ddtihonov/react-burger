import { TFeedOrders } from '../../utils/tupes';

import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    WS_CONNECTION_START,
    WS_GET_USER_ORDERS,
} from '../actions/wsOrders';
import { TWsFeedAction } from '../actions/wsOrders';

export type WsFeedState = {
    wsConnected: boolean;
    orderRequest: boolean;
    orderFailed: boolean;
    feedLoading: boolean;
    feedSuccess: boolean;
    feedRequest: boolean;
    feed: TFeedOrders;
    userFeed: TFeedOrders;
};
const initialState: WsFeedState = {
    wsConnected: false,
    feed: {} as TFeedOrders,
    userFeed: {} as TFeedOrders,
    orderRequest: false,
    orderFailed: false,
    feedLoading: false,
    feedSuccess: false,
    feedRequest: false,
};

export const wsFeedReducer = (
    state = initialState,
    action: TWsFeedAction
): WsFeedState => {
    switch (action.type) {
    case WS_CONNECTION_START:
        return {
            ...state,
            wsConnected: false,
            feedLoading: true,
            feedSuccess: false,
            feedRequest: true,
        };

    case WS_CONNECTION_SUCCESS:
        return {
            ...state,
            wsConnected: true,
            feedLoading: false,
            feedSuccess: true,
            feedRequest: false,
        };

    case WS_CONNECTION_ERROR:
        return {
            ...state,
            feedLoading: false,
            feedSuccess: false,
            feedRequest: false,
            wsConnected: false,
        };

    case WS_CONNECTION_CLOSED:
        return {
            ...state,
            feedLoading: false,
            feedSuccess: false,
            feedRequest: false,
            wsConnected: false,
            feed: {} as TFeedOrders,
            userFeed: {} as TFeedOrders,
        };

    case WS_GET_ORDERS:
        return {
            ...state,
            feed: action.data,
        };
    case WS_GET_USER_ORDERS:
        return {
            ...state,
            userFeed: action.data,
        };
    default:
        return state;
    }
};