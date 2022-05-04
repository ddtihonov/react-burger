import React from 'react';
import main from './main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

export default function Main() {

    return (
    <main className={main.main} >
        <BurgerIngredients/>
        <BurgerConstructor/>
    </main>
    
);
}