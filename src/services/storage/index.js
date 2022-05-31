import { combineReducers } from 'redux';
import {ingredientsReducer, orderNumberReducer, selectedIngredientsReducer, burgerConstructorReducer} from '../reducers/reducers';
import {authReducer} from '../reducers/auth'

export const rootReducer = combineReducers({
    ingredientsState: ingredientsReducer,
    orderState: orderNumberReducer,
    ingredientState: selectedIngredientsReducer,
    burgerConstructorIngredients: burgerConstructorReducer,
    authData: authReducer,
})