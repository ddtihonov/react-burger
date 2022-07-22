import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
} from '../actions/ingredients';


import { TApplicationActions, TIngredient } from '../../utils/tupes';

type TIngredientsInitialState = {
    ingredients: ReadonlyArray<TIngredient>,
    ingredientsRequest: boolean,
    ingredientsError: boolean,
}

// начальное состояние ingredients
const ingredientsInitialState: TIngredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
};

//редюсер загрузки ингредиентов
export const ingredientsReducer = (state = ingredientsInitialState, action: TApplicationActions) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsError: false,
                ingredientsRequest: true,
            };
        }

        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsError: false,
                ingredientsRequest: false,
                ingredients: action.payload.ingredients,
            };
        }

        case  GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                ingredientsError: true,
                ingredientsRequest: false,
            };
        }
        default: {
            return state;
        }
    }
};