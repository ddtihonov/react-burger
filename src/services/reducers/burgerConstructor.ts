import { Reducer } from "redux";
import {
    BURGER_INGREDIENT,
    DELETE_BURGER_INGREDIENT,
    CLEAR_INGREDIENT_ORDER,
    MOVE_CONSTRUCTOR_INGREDIENTS,
} from '../actions/burgerConstructor';

import { TIngredient } from '../../utils/tupes';

type TBurgerConstructorState = {
    burgerIngredients: TIngredient[],
    burgerBun: TIngredient | null,
};

const burgerConstructorState: TBurgerConstructorState = {
    burgerIngredients: [],
    burgerBun: null,
};

export const burgerConstructorReducer: Reducer<TBurgerConstructorState
> = (state = burgerConstructorState, action) => {
    switch (action.type) {

        case BURGER_INGREDIENT: {
            const { ingredient, keyUid} = action.payload;
            if (ingredient.type === 'bun') {
            return {
                ...state,
                burgerBun: ingredient,
            };
            } else return {
            ...state,
            burgerIngredients: [...state.burgerIngredients, ingredient],
            keyUid: keyUid,
            };
        }

        case DELETE_BURGER_INGREDIENT: {
            return {
                ...state,
                burgerIngredients: state.burgerIngredients.filter(
                    (item, index) => index !== action.Index
                ),
            };
        }

        case MOVE_CONSTRUCTOR_INGREDIENTS: {
            let moveIngridients = [...state.burgerIngredients];
            let otherIngredientsMove = moveIngridients.splice(action.dragIndex, 1);
            moveIngridients.splice(action.hoverIndex, 0, ...otherIngredientsMove);
            return {
                ...state,
                burgerIngredients: moveIngridients
            };
        }

        case CLEAR_INGREDIENT_ORDER: {
            return {
                ...state,
                burgerBun: null,
                burgerIngredients: [],
            };   
        }

        
        
        default: {
            return state;
        }
    }
    };