import React, { useContext } from 'react';
import ingredients_list from './IngredientsList.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import PropTypes from "prop-types";
import { BurgerContext } from '../../utils/BurgerContext';


export default function IngredientsList({onCardClick }) {

    const ingredientsList  = useContext(BurgerContext);

    const buns = ingredientsList.filter(item => item.type === 'bun');
    const sauce = ingredientsList.filter(item => item.type === 'sauce');
    const main = ingredientsList.filter(item => item.type === 'main');

    return (
    <section className={ingredients_list.box}>
        <h3 className={ingredients_list.title}>Булки</h3>
        <ul className={ingredients_list.list}>
            {buns.map(item => {
                return (<IngredientsCard 
                card={item} 
                key={item._id}
                onCardClick ={onCardClick}
                />)
            })}
        </ul>
        <h3 className={ingredients_list.title}>Соусы</h3>
        <ul className={ingredients_list.list}>
            {sauce.map(item => {
                return (<IngredientsCard 
                card={item} 
                key={item._id}
                onCardClick ={onCardClick}
                />)
            })}
        </ul>
        <h3 className={ingredients_list.title}>Начинки</h3>
        <ul className={ingredients_list.list}>
            {main.map(item => {
                return (<IngredientsCard 
                card={item} 
                key={item._id}
                onCardClick ={onCardClick}
                />)
            })}
        </ul>
    </section>
    
);
};

IngredientsList.propTypes = {
    onCardClick: PropTypes.func,
};

