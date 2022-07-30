import {modalReducer} from './modal';
import * as modalTypes from '../actions/modal';

type TModalState = {
    isModalOpen: boolean;
    isIngredient: boolean;
    isOrder: boolean;
};

const initialState: TModalState = {
    isModalOpen: false,
    isIngredient: false,
    isOrder: false,
};

describe('modalReducer reducer', () => {
    it('should return the initinal state', () => {
        expect(modalReducer(initialState, {} as modalTypes.TModals)).toEqual(initialState);
    });
    it('handler openModalOrder should run', () => {
        expect(
        
            modalReducer(initialState, { type: modalTypes.OPEN_MODAL_ORDER })
        ).toEqual(
            expect.objectContaining({
                isModalOpen: true,
                isIngredient: false,
                isOrder: true,
            })
        );
    });
    it('handler closeModalOrder should run', () => {
        expect(
        
            modalReducer(initialState, { type: modalTypes.CLOSE_MODAL_ORDER })
        ).toEqual(
            expect.objectContaining({
                isModalOpen: false,
                isIngredient: false,
                isOrder: false,
            })
        );
    });
}) 