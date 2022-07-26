import {orderNumberReducer} from './order';
import * as orderTypes from '../actions/order';
import { TOrder } from '../../utils/tupes';

type TOrderInitialState = {
    order: TOrder,
    orderRequest: boolean,
    orderError: boolean,
    orderSuccess: boolean;
};


const orderInitialState: any = {
    order: {} as TOrder,
    orderRequest: false,
    orderError: false,
    orderSuccess: false,
};

describe('orderNumber reducer', () => {
    it('should return the initinal state', () => {
        expect(orderNumberReducer(orderInitialState, {} as any)).toEqual(orderInitialState);
    });
    it('handler orderRequest should run', () => {
        expect(
        
            orderNumberReducer(orderInitialState, { type: orderTypes.GET_ORDER_REQUEST })
        ).toEqual(
            expect.objectContaining({
                orderRequest: true,
            })
        );
    });
    /*it('handler orderSuccess should run', () => {
        expect(
            orderNumberReducer(orderInitialState, {
            type: orderTypes.GET_ORDER_SUCCESS,
            order: {},
        })
        ).toEqual(
        expect.objectContaining({
            orderSuccess: true,
            orderRequest: false,
            orderError: false,
            order: {},
        })
        );
    });*/
    it('handler orderError should run', () => {
        expect(
        
            orderNumberReducer(orderInitialState, { type: orderTypes.GET_ORDER_ERROR })
        ).toEqual(
        expect.objectContaining({
            orderRequest: false,
            orderError: true,
        })
        );
    });
    it('handler deleteOrder should run', () => {
        expect(
        
            orderNumberReducer(orderInitialState, { type: orderTypes.DELETE_ORDER_NUMBER })
        ).toEqual(
        expect.objectContaining({
            order: {},
            orderSuccess: false,
        })
        );
    });
}) 