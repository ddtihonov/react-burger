import {getIngredients} from '../../utils/IngredientsApi';
import { AppDispatch, AppThunk } from '../../utils';
import { TIngredient } from '../../utils/tupes';

//тиры по запросу ингредиентов
export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';// запрос получение ингредиентов
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';//успешный запрос
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';//неудачный запрос


export interface IIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: ReadonlyArray<TIngredient>;
}

export interface IIngredientsErrorAction {
    readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TIngredientsAction =
    | IIngredientsRequestAction
    | IIngredientsSuccessAction
    | IIngredientsErrorAction;

export const getIngredientsRequestAction = (): TIngredientsAction => ({
    type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccessAction = (data: ReadonlyArray<TIngredient>): TIngredientsAction => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: data,
});

export const getIngredientsErrorAction = (): TIngredientsAction => ({
    type: GET_INGREDIENTS_ERROR,
});

export const onGetIngredients: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch(getIngredientsRequestAction());
    getIngredients()
    .then((res) => {
            dispatch(getIngredientsSuccessAction(res.data));
        })
        .catch(() => {
            dispatch(getIngredientsErrorAction());
        }) 
    };
}