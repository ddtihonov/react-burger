import {burgerConstructorReducer} from './burgerConstructor';
import * as burgerConstructorTypes from '../actions/burgerConstructor';

const burgerConstructorState = {
    burgerIngredients: [],
    burgerBun: null,
};

describe('burgerConstructorReducer', () => {
    it('should return the initinal state', () => {
        expect(burgerConstructorReducer(burgerConstructorState, {} as any)).toEqual(burgerConstructorState);
    });
    it('handler ClearingredientOrder should run', () => {
        expect(
        
            burgerConstructorReducer(burgerConstructorState, { type: burgerConstructorTypes.CLEAR_INGREDIENT_ORDER })
        ).toEqual(
            expect.objectContaining({
                burgerBun: null,
                burgerIngredients: [],
            })
        );
    });
}) 