import {ingredientsReducer} from './ingredients';
import * as ingredientsTypes from '../actions/ingredients';

const ingredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
};

describe('ingredientsReducer reducer', () => {
    it('should return the initinal state', () => {
        expect(ingredientsReducer(ingredientsInitialState, {} as any)).toEqual(ingredientsInitialState);
    });
    it('handler ingredientsRequest should run', () => {
        expect(
        
            ingredientsReducer(ingredientsInitialState, { type: ingredientsTypes.GET_INGREDIENTS_REQUEST })
        ).toEqual(
            expect.objectContaining({
                ingredientsError: false,
                ingredientsRequest: true,
            })
        );
    });
    it('handler ingredientsError should run', () => {
        expect(
        
            ingredientsReducer(ingredientsInitialState, { type: ingredientsTypes.GET_INGREDIENTS_ERROR })
        ).toEqual(
        expect.objectContaining({
            ingredientsError: true,
            ingredientsRequest: false,
        })
        );
    });
}) 