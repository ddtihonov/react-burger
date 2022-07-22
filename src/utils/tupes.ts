import { ReactNode } from 'react';
import { TLoginAction } from '../services/actions/login';
import { TUserAction } from '../services/actions/userInfo';
import { TRecoveryPasswordAction } from '../services/actions/recoveryPassword';
import { TSignoutAction } from '../services/actions/singnOut';
import { TLoadingAction } from '../services/actions/loading';
import { TRefreshTokenAction } from '../services/actions/refreshToken';
import { TResetPasswordAction } from '../services/actions/resetPassword';
import { TRegisterAction } from '../services/actions/register';
import { TEditProfileAction } from '../services/actions/updateUserInfo';
import { TIngredientsAction } from '../services/actions/ingredients';
//import { TOrderAction } from '../services/actions/order';
import { TSelectIngredient } from '../services/actions/actions';
import { TModals } from '../services/actions/modal';

export type TModalOverlay = {
    children: ReactNode,
    onClick?: any,
}

export type TModal = {
    children: ReactNode,
    onClose: any,
    title?: string,
}

export type TIngredient = {
    fat: number
    carbohydrates: number
    calories: number
    price: number
    proteins: number
    __v: number
    _id: string
    name: string
    type: string
    image: string
    image_mobile: string
    image_large: string
    keyUid?: string 
    count?: number
}

export type TIngredientsList = {
    ingredients: Array<TIngredient>
    title: string
}

export type TConstructorIngredientData = {
    item: TIngredient
    index: number
    id: string
    deleteIngridient: any
}

export interface IBackgroundState {
    state: {
        background: Location
    }
}

export type TLogin = {
    accessToken: string;
    refreshToken: string;
    success: boolean;
    user: {
        name: string;
        email: string;
    }
}

export type TUser = {
    success: boolean;
    user: {
        name: string;
        email: string;
    }
}

export type TOrder = {
    name: string;
    order: { number: number };
    success: boolean;
};

export type TFeedOrder = {
    createdAt: string;
    ingredients: ReadonlyArray<string>;
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
};

export type TFeedOrders = {
    success: boolean;
    orders: Array< TFeedOrder>;
    total: number;
    totalToday: number;
};

export type TWsActions = {
    wsInit: string;
    wsUserInit: string;
    wsUserOrder: string;
    wsSendMessage: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
};

export type TApplicationActions =
| TLoginAction
| TUserAction
| TRecoveryPasswordAction
| TSignoutAction
| TLoadingAction
| TRefreshTokenAction
| TResetPasswordAction
| TRegisterAction
| TEditProfileAction
| TIngredientsAction
| TModals
| TSelectIngredient;