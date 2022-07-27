import {wsFeedReducer} from './wsOrders';
import * as wsOrdersTypes from '../actions/wsOrders';
import { TFeedOrders } from '../../utils/tupes';

const initialState = {
    wsConnected: false,
    feed: {} as TFeedOrders,
    userFeed: {} as TFeedOrders,
    orderRequest: false,
    orderFailed: false,
    feedLoading: false,
    feedSuccess: false,
    feedRequest: false,
};

describe('wsFeedReducer reducer', () => {
    it('should return the initinal state', () => {
        expect(wsFeedReducer(initialState, {} as any)).toEqual(initialState);
    });
    it('handler wsConnecyionStart should run', () => {
        expect(
            wsFeedReducer(initialState, { type: wsOrdersTypes.WS_CONNECTION_START })
        ).toEqual(
            expect.objectContaining({
                wsConnected: false,
                feedLoading: true,
                feedSuccess: false,
                feedRequest: true,
            })
        );
    });
    it('handler wsConnectionSuccess should run', () => {
        expect(
            wsFeedReducer(initialState, { type: wsOrdersTypes.WS_CONNECTION_SUCCESS })
        ).toEqual(
            expect.objectContaining({
                wsConnected: true,
                feedLoading: false,
                feedSuccess: true,
                feedRequest: false,
            })
        );
    });
    it('handler wsConnectionError should run', () => {
        expect(
            wsFeedReducer(initialState, { type: wsOrdersTypes.WS_CONNECTION_ERROR })
        ).toEqual(
            expect.objectContaining({
                feedLoading: false,
                feedSuccess: false,
                feedRequest: false,
                wsConnected: false,
            })
        );
    });
    it('handler wsConnectionClosed should run', () => {
        expect(
        
            wsFeedReducer(initialState, { type: wsOrdersTypes.WS_CONNECTION_CLOSED })
        ).toEqual(
            expect.objectContaining({
                feedLoading: false,
                feedSuccess: false,
                feedRequest: false,
                wsConnected: false,
                feed: {},
                userFeed: {},
            })
        );
    });
    it('handler wsGetOrders should run', () => {
        expect(
            wsFeedReducer(initialState, { 
                type: wsOrdersTypes.WS_GET_ORDERS,
                data: {} as TFeedOrders
            })
        ).toEqual(
            expect.objectContaining({
                feed: {}
            })
        );
    });
    it('handler wsGetUserOrders should run', () => {
        expect(
            wsFeedReducer(initialState, { 
                type: wsOrdersTypes.WS_GET_USER_ORDERS,
                data: {} as TFeedOrders
            })
        ).toEqual(
            expect.objectContaining({
                userFeed: {}
            })
        );
    });
})