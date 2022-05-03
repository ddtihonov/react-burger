import React, { useContext, useEffect } from 'react';
import ingredients_list from './IngredientsList.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import PropTypes from "prop-types";
import { BurgerContext } from '../../utils/BurgerContext';
import { useDispatch, useSelector } from 'react-redux';
import {getIngredients} from '../../services/actions/actions'


export default function IngredientsList({onCardClick }) {


    const store = useSelector(state => state);
    const dispatch = useDispatch(); 

    console.log(store)

    const ingredientsList  = useContext(BurgerContext);

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

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

