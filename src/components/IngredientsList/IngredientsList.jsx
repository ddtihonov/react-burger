import React, {forwardRef, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import ingredients_list from './IngredientsList.module.css';
import IngredientsCard from '../IngredientsCard/IngredientsCard';
import { Link, useLocation }  from 'react-router-dom';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/tupes';
import {
    INGREDIENT_WINDOW_OPEN,
} from '../../services/actions/actions';



const IngredientsList = forwardRef(({ ingredients, title }, ref) => {

    const dispatch = useDispatch();
    const location = useLocation();

    const windowOpen = useCallback(() =>{
        dispatch({
            type: INGREDIENT_WINDOW_OPEN,
        });
    }, [dispatch])

    return (
        <>
        <h3 className={ingredients_list.title} ref={ref}>{title}</h3>
        <ul className={ingredients_list.list}>
            {ingredients.map(item => {
                return (
                <Link
                    onClick={windowOpen}
                    className={ingredients_list.link}
                    to={`/ingredients/${item._id}`}
                    state={{ background: location.pathname }}
                    key={item._id}
                    >
                        
                    <IngredientsCard 
                        card={item} 
                        />
                </Link>
                )
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