import React, {forwardRef} from 'react';
import ingredients_list from './IngredientsList.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/tupes'



const IngredientsList = forwardRef(({ ingredients, title }, ref) => {

    return (
        <>
        <h3 className={ingredients_list.title} ref={ref}>{title}</h3>
        <ul className={ingredients_list.list}>
            {ingredients.map(item => {
                return (<IngredientsCard 
                card={item} 
                key={item._id}
                />)
            })}
        </ul>
        </>
);
});

IngredientsList.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
    title: PropTypes.string.isRequired,
};

export default IngredientsList