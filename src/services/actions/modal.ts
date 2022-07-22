export const OPEN_MODAL_ORDER: 'OPEN_MODAL_ORDER' = 'OPEN_MODAL_ORDER';
export const CLOSE_MODAL_ORDER: 'CLOSE_MODAL_ORDER' = 'CLOSE_MODAL_ORDER';

export interface IOpenOrderModalAction {
    readonly type: typeof OPEN_MODAL_ORDER;
}

export interface ICloseOrderModalAction {
    readonly type: typeof CLOSE_MODAL_ORDER;
}

export type TModals =
| IOpenOrderModalAction
| ICloseOrderModalAction;


export const getOpenOrderModalAction = (): TModals => ({
    type: OPEN_MODAL_ORDER,
});
export const getCloseOrderModalAction = (): TModals => ({
    type: CLOSE_MODAL_ORDER,
});
