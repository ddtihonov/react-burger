import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
    GET_ORDER_NUMBER_REQUEST,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_ERROR,
    DELETE_ORDER_NUMBER,
    SELECT_INGREDIENT,
    DELETE_SELECTED_INGREDIENT,
    BURGER_INGREDIENT,
    DELETE_BURGER_INGREDIENT,
    DELETE_ORDER,
    MOVE_CONSTRUCTOR_INGREDIENTS,
} from '../actions/actions';

// начальное состояние ingredients
const ingredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
};

//редюсер загрузки ингредиентов
export const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch(action.type) {
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

        case  GET_INGREDIENTS_ERROR: {
            return {
                ...ingredientsInitialState,
                ingredientsFailed: true,
            };
        }
        default: {
            return state;
        }
    }
};

// начальное состояние popap заказа
const orderInitialState = {
    orderNumber: null,
    orderNumberRequest: false,
    orderNumberError: false,
};

//редюсер popap заказа
export const orderNumberReducer = (state = orderInitialState, action) => {
    switch (action.type) {
        case GET_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                orderNumberRequest: true,
            };
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                orderNumberRequest: false,
                orderNumberError: false,
                orderNumber: action.payload.order,
            };
        }
        case GET_ORDER_NUMBER_ERROR: {
            return {
                ...orderInitialState,
                orderNumberError: true,
            };
        }
        case DELETE_ORDER_NUMBER: {
            return {
                ...state,
                orderNumber: null,
            }
        }
        default:
            return state;
        }
};

// начальное состояние ingredients
const selectedIngredientState = {
    selectedIngredient: null,
};

//редюсер загрузки ингредиентов
export const selectedIngredientsReducer = (state = selectedIngredientState, action) => {
    switch(action.type) {
        case SELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.payload.ingredient,
            };
        }

        case DELETE_SELECTED_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: null,
            };
        }

        default: {
            return state;
        }
    }
};

const burgerConstructorState = {
    burgerIngredients: [],
    burgerBun: null,
};

export const burgerConstructorReducer = (state = burgerConstructorState, action) => {
    switch (action.type) {

        case BURGER_INGREDIENT: {
            const { ingredient } = action.payload;
            if (ingredient.type === 'bun') {
            return {
                ...state,
                burgerBun: ingredient,
            };
            } else return {
            ...state,
            burgerIngredients: [...state.burgerIngredients, ingredient],
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

        case DELETE_ORDER: {
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