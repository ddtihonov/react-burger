import React, { useEffect } from 'react';
import ingredients_list from './IngredientsList.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import { useDispatch, useSelector } from 'react-redux';
import {getIngredients} from '../../services/actions/actions'


export default function IngredientsList() {


    const ingredientsList = useSelector(state => state.ingredientsState.ingredients);
    const dispatch = useDispatch(); 


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
                />)
            })}
        </ul>
        <h3 className={ingredients_list.title}>Соусы</h3>
        <ul className={ingredients_list.list}>
            {sauce.map(item => {
                return (<IngredientsCard 
                card={item} 
                key={item._id}
                />)
            })}
        </ul>
        <h3 className={ingredients_list.title}>Начинки</h3>
        <ul className={ingredients_list.list}>
            {main.map(item => {
                return (<IngredientsCard 
                card={item} 
                key={item._id}
                />)
            })}
        </ul>
    </section>
    
);
};

