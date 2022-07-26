import {selectedIngredientsReducer} from './reducers';
import * as actionsTypes from '../actions/actions';
import { TIngredient} from '../../utils/tupes';

export type TSelectedIngredientState = {
    selectedIngredient: TIngredient | null,
    ingredientWindowOpen: boolean
};

const selectedIngredientState: TSelectedIngredientState = {
    selectedIngredient: null,
    ingredientWindowOpen: false
};

describe('selectedIngredientsReducer reducer', () => {
    it('should return the initinal state', () => {
        expect(selectedIngredientsReducer(selectedIngredientState, {} as any)).toEqual(selectedIngredientState);
    });
    it('handler deleteSelectedIngredient should run', () => {
        expect(
            selectedIngredientsReducer(selectedIngredientState, { type: actionsTypes.DELETE_SELECTED_INGREDIENT })
        ).toEqual(
            expect.objectContaining({
                selectedIngredient: null
            })
        );
    });
    it('handler ingredientWindowOpen should run', () => {
        expect(
            selectedIngredientsReducer (selectedIngredientState, {type: actionsTypes.INGREDIENT_WINDOW_OPEN,})
        ).toEqual(
        expect.objectContaining({
            ingredientWindowOpen: true,
        })
        );
    });
    it('handler ingredientWindowClose should run', () => {
        expect(
            selectedIngredientsReducer (selectedIngredientState, {type: actionsTypes.INGREDIENT_WINDOW_CLOSE,})
        ).toEqual(
        expect.objectContaining({
            ingredientWindowOpen: false,
        })
        );
    });
    /*it('handler SelectIngredient should run', () => {
        expect(
            selectedIngredientsReducer (selectedIngredientState, {
                type: actionsTypes.SELECT_INGREDIENT,
                data: []
            })
        ).toEqual(
        expect.objectContaining({
            selectedIngredient: [],
        })
        );
    });*/
}) 