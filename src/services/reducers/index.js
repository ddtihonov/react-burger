import { combineReducers } from 'redux';
import {ingredientsReducer, orderNumberReducer} from './reducers'

export const rootReducer = combineReducers({
    ingredientsState: ingredientsReducer,
    orderState: orderNumberReducer
})