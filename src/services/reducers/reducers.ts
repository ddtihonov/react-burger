import { Reducer } from "redux";

import {
    SELECT_INGREDIENT,
    DELETE_SELECTED_INGREDIENT,
    INGREDIENT_WINDOW_OPEN,
    INGREDIENT_WINDOW_CLOSE,
} from '../actions/actions';

import { TIngredient} from '../../utils/tupes';

export type TSelectedIngredientState = {
    selectedIngredient: TIngredient | null,
    ingredientWindowOpen: boolean
};

const selectedIngredientState: TSelectedIngredientState = {
    selectedIngredient: null,
    ingredientWindowOpen: false
};


export const selectedIngredientsReducer: Reducer<TSelectedIngredientState
> = (state = selectedIngredientState, action) => {
    switch(action.type) {
        case SELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.payload.ingredient,
            };
        }

        case DELETE_SELECTED_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: null,
            };
        }

        case  INGREDIENT_WINDOW_OPEN: {
            return {
                ...state,
                ingredientWindowOpen: true,
            };
        }

        case  INGREDIENT_WINDOW_CLOSE: {
            return {
                ...state,
                ingredientWindowOpen: false,
            };
        }

        default: {
            return state;
        }
    }
};

