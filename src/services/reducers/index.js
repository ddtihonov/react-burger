import { combineReducers } from 'redux';
import {ingredientsReducer, orderNumberReducer, selectedIngredientsReducer} from './reducers'

export const rootReducer = combineReducers({
    ingredientsState: ingredientsReducer,
    orderState: orderNumberReducer,
    ingredientState: selectedIngredientsReducer
})