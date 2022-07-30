import { TIngredient } from "../../utils/tupes";
//типы выбранного тнгртдтента
export const SELECT_INGREDIENT: 'SELECT_INGREDIENT' = 'SELECT_INGREDIENT';
export const DELETE_SELECTED_INGREDIENT: 'DELETE_SELECTED_INGREDIENT' = 'DELETE_SELECTED_INGREDIENT';

//тип страницы ингредиента
export const INGREDIENT_WINDOW_OPEN: 'INGREDIENT_WINDOW_OPEN' = 'INGREDIENT_WINDOW_OPEN';
export const INGREDIENT_WINDOW_CLOSE: 'INGREDIENT_WINDOW_CLOSE' = 'INGREDIENT_WINDOW_CLOSE';


export interface ISelectIngredientAction {
    readonly type: typeof SELECT_INGREDIENT;
    readonly ingredient: TIngredient;
    }
    export interface IDeleteSelectIngredientAction {
        readonly type: typeof DELETE_SELECTED_INGREDIENT;
    }
    export interface IIngredientOpenAction {
        readonly type: typeof INGREDIENT_WINDOW_OPEN;
    }
    export interface IIngredientCloseAction {
        readonly type: typeof INGREDIENT_WINDOW_CLOSE;
    }
    export type TSelectIngredient =
        | ISelectIngredientAction
        | IDeleteSelectIngredientAction
        | IIngredientOpenAction
        | IIngredientCloseAction;
