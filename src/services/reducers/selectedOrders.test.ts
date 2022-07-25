import {selectedOrderReducer} from './selectedOrder';
import * as selectedOrderTypes from '../actions/selectedOrder';
import { TFeedOrder } from "../../utils/tupes";


export type TSelectedOrderState = {
    selectedOrder: TFeedOrder | null,
    orderWindowOpen: boolean
};

const selectedIngredientState: TSelectedOrderState = {
    selectedOrder: null,
    orderWindowOpen: false
};

describe('selectedOrderReducer reducer', () => {
    it('should return the initinal state', () => {
        expect(selectedOrderReducer(selectedIngredientState, {} as any)).toEqual(selectedIngredientState);
    });
    it('handler orderRequest should run', () => {
        expect(
        
            selectedOrderReducer(selectedIngredientState, { 
                type: selectedOrderTypes.SELECT_ORDER, 
                data: [],
            })
        ).toEqual(
            expect.objectContaining({
                selectedOrder: [],
            })
        );
    });
    it('handler DeleteSelectedorderData should run', () => {
        expect(
            selectedOrderReducer(selectedIngredientState, {
            type: selectedOrderTypes.DELETE_SELECTED_ORDER_DATA,
        })
        ).toEqual(
        expect.objectContaining({
            selectedOrder: null,
        })
        );
    });
    it('handler orderWindowOpen should run', () => {
        expect(
        
            selectedOrderReducer(selectedIngredientState, { type: selectedOrderTypes.ORDER_WINDOW_OPEN })
        ).toEqual(
        expect.objectContaining({
            orderWindowOpen: true,
        })
        );
    });
    it('handler orderWindowClose should run', () => {
        expect(
        
            selectedOrderReducer(selectedIngredientState, { 
                type: selectedOrderTypes.ORDER_WINDOW_CLOSE })
        ).toEqual(
        expect.objectContaining({
            orderWindowOpen: false,
        })
        );
    });
}) 