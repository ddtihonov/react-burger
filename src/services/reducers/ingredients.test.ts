import {ingredientsReducer} from './ingredients';
import * as ingredientsTypes from '../actions/ingredients';
import { TIngredient } from '../../utils/tupes';

type TIngredientsInitialState = {
    ingredients: ReadonlyArray<TIngredient>,
    ingredientsRequest: boolean,
    ingredientsError: boolean,
}

const ingredientsInitialState: TIngredientsInitialState = {
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
    /*it('handler ingredientsSuccess should run', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
            type: ingredientsTypes.GET_INGREDIENTS_SUCCESS,
            data: [],
        })
        ).toEqual({
            orderRequest: false,
            orderError: false,
            ingredients: [],
        });
    });*/
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