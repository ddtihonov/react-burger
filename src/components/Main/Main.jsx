import React from 'react';
import main from './main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import PropTypes from "prop-types";

export default function Main({onCardClick}) {

    return (
    <main className={main.main} >
        <BurgerIngredients
        onCardClick ={onCardClick}
        />
        <BurgerConstructor/>
    </main>
    
);
}

Main.propTypes = {
    onCardClick: PropTypes.func,   
}