import React, {forwardRef, useCallback, Ref} from 'react';
import { useDispatch } from '../../utils/hooks';
import ingredients_list from './IngredientsList.module.css';
import {IngredientsCard} from '../IngredientsCard/IngredientsCard';
import { Link, useLocation }  from 'react-router-dom';
import {TIngredientsList, TIngredient } from '../../utils/tupes';
import {
    INGREDIENT_WINDOW_OPEN,
} from '../../services/actions/actions';



const IngredientsList = forwardRef(({ ingredients, title }: TIngredientsList, ref: Ref<HTMLHeadingElement>) => {

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
            {ingredients.map((item: TIngredient) => {
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
                        key={item._id} 
                        />
                </Link>
                )
            })}
        </ul>
        </>
);
});

export default IngredientsList