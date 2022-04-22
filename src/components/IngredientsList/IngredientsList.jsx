import React from 'react';
import ingredients_list from './IngredientsList.module.css'
import IngredientsCard from '../IngredientsCard/IngredientsCard';


export default function IngredientsList({arrayInitialization, onCardClick }) {

    const buns = arrayInitialization.filter(item => item.type === 'bun');
    const sauce = arrayInitialization.filter(item => item.type === 'sauce');
    const main = arrayInitialization.filter(item => item.type === 'main');

    return (
    <section className={ingredients_list.box}>
        <h3 className={ingredients_list.title}>Булки</h3>
        <ul className={ingredients_list.list}>
            {buns.map((item, index) => {
                return <IngredientsCard 
                card={item} 
                key={index}
                onCardClick ={onCardClick}
                />
            })}
        </ul>
        <h3 className={ingredients_list.title}>Соусы</h3>
        <ul className={ingredients_list.list}>
            {sauce.map((item, index) => {
                return <IngredientsCard 
                card={item} 
                key={index}
                onCardClick ={onCardClick}
                />
            })}
        </ul>
        <h3 className={ingredients_list.title}>Начинки</h3>
        <ul className={ingredients_list.list}>
            {main.map((item, index) => {
                return <IngredientsCard 
                card={item} 
                key={index}
                onCardClick ={onCardClick}
                />
            })}
        </ul>
    </section>
    
);
}