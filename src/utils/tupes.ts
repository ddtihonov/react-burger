import { ReactNode } from 'react';

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