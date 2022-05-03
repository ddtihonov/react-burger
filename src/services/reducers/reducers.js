import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED
} from '../actions/actions';


const ingredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    selectedIngredient: null,
};

//редюсер ingredientsInitialState
export const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch(action.tupe) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsFailed: false,
                ingredientsRequest: true,
            };
        }

        case GET_INGREDIENTS_SUCCESS: {
            return {
            ...state,
            ingredientsFailed: false,
            ingredientsRequest: false,
            ingredients: action.payload.ingredients,
            };
        }

        case  GET_INGREDIENTS_FAILED: {
            return {
                ...ingredientsInitialState,
                ingredientsFailed: true,
            };
        }
        default: {
            return state;
        }
    }
} 