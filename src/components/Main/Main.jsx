import React from 'react';
import main from './main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import PropTypes from "prop-types";

export default function Main({onAddOrder,  onCardClick}) {

    return (
    <main className={main.main} >
        <BurgerIngredients
        onCardClick ={onCardClick}
        />
        <BurgerConstructor
        onAddOrder={onAddOrder}
        />
    </main>
    
);
}

Main.propTypes = {
    onAddOrder: PropTypes.func,
    onCardClick: PropTypes.func,   
}