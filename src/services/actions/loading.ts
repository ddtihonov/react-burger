export const LOADING_START: 'LOADING_START' = 'LOADING_START';
export const LOADING_FINISH: 'LOADING_FINISH' = 'LOADING_FINISH';

export interface ILoadingStart {
    readonly type: typeof LOADING_START;
}

export interface ILoadingFinish {
    readonly type: typeof LOADING_FINISH;
}

export type TLoadingAction =
    | ILoadingStart
    | ILoadingFinish;