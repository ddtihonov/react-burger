import { combineReducers } from 'redux';
import {ingredientsReducer, orderNumberReducer, selectedIngredientsReducer, burgerConstructorReducer} from './reducers'

export const rootReducer = combineReducers({
    ingredientsState: ingredientsReducer,
    orderState: orderNumberReducer,
    ingredientState: selectedIngredientsReducer,
    burgerConstructorIngredients: burgerConstructorReducer
})