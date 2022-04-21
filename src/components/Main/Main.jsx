import React from 'react';
import main from './main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

export default function Main({arrayInitialization, onAddOrder}) {
    return (
    <section className={main.main} >
        <BurgerIngredients
        arrayInitialization = {arrayInitialization}
        />
        <BurgerConstructor
        arrayInitialization = {arrayInitialization}
        onAddOrder={onAddOrder}
        />
    </section>
    
);
}