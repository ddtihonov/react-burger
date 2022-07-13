import { combineReducers } from 'redux';
import { ingredientsReducer } from '../reducers/ingredients';
import { burgerConstructorReducer } from '../reducers/burgerConstructor';
import {selectedIngredientsReducer} from '../reducers/reducers';
import {orderNumberReducer} from '../reducers/order';
import {authReducer} from '../reducers/auth'

export const rootReducer = combineReducers({
    ingredientsState: ingredientsReducer,
    orderState: orderNumberReducer,
    ingredientState: selectedIngredientsReducer,
    burgerConstructorIngredients: burgerConstructorReducer,
    authData: authReducer,
})