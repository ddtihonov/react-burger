import React from 'react';
import main from './main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import PropTypes from "prop-types";
import {arrPropTypes} from '../../utils/tupes'

export default function Main({arrayInitialization, onAddOrder,  onCardClick}) {

    return (
    <main className={main.main} >
        <BurgerIngredients
        arrayInitialization = {arrayInitialization}
        onCardClick ={onCardClick}
        />
        <BurgerConstructor
        arrayInitialization = {arrayInitialization}
        onAddOrder={onAddOrder}
        />
    </main>
    
);
}

Main.propTypes = {
    arrayInitialization: PropTypes.arrayOf(arrPropTypes).isRequired,
    onAddOrder: PropTypes.func,
    onCardClick: PropTypes.func,   
}