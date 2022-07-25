import {
    CLOSE_MODAL_ORDER,
    OPEN_MODAL_ORDER,
    TModals,
} from '../actions/modal';

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

export const modalReducer = (state = initialState, action: TModals) => {
    switch (action.type) {
        case OPEN_MODAL_ORDER: {
            return {
            ...state,
            isModalOpen: true,
            isIngredient: false,
            isOrder: true,
            };
        }
        case CLOSE_MODAL_ORDER: {
            return {
            ...state,
            isModalOpen: false,
            isIngredient: false,
            isOrder: false,
            };
        }
        default: {
            return state;
        }
    }
};