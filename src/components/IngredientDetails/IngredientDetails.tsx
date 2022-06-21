import React, {useMemo, FC} from 'react';
import ingredient_detals from './IngredientDetails.module.css'
import { useSelector} from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {TIngredientsCard} from '../../utils/tupes'


export const IngredientDetails: FC = () => {

    const { state } = useLocation();

    const ingredientModal = useSelector((state:any) => state.ingredientState.selectedIngredient);

    if (ingredientModal){
    localStorage.setItem('ingredient', JSON.stringify(ingredientModal))
    }

    const ingredientItem = JSON.parse(localStorage.getItem('ingredient') || '');

    const ingredients = useSelector((state:any) => state.ingredientsState.ingredients);
    
    const { id } = useParams()
    const ingredient = useMemo(() => {
        return ingredients.find((ingredient:TIngredientsCard) => ingredient._id === id)
        }, [ingredients, id]
    )

    if (!ingredient) return (null)

    return(
            <div className={ingredient_detals.box} >
                {state ? (
                <>
                    <img className={ingredient_detals.image} src={ingredientItem.image} alt={ingredient.name}></img>
                    <h3 className={ingredient_detals.subtitle}>{ingredientItem.name}</h3>
                    <ul className={ingredient_detals.list} >
                        <li className={ingredient_detals.item} >
                            <p className={ingredient_detals.text}>Калории,ккал</p>
                            <p className={ingredient_detals.number}>{ingredientItem.calories}</p>
                        </li>
                        <li className={ingredient_detals.item}>
                            <p className={ingredient_detals.text} >Белки, г</p>
                            <p className={ingredient_detals.number}>{ingredientItem.proteins}</p>
                        </li>
                        <li className={ingredient_detals.item}>
                            <p className={ingredient_detals.text}>Жиры, г</p>
                            <p className={ingredient_detals.number}>{ingredientItem.fat}</p>
                        </li>
                        <li className={ingredient_detals.item}>
                            <p className={ingredient_detals.text}>Углеводы, г</p>
                            <p className={ingredient_detals.number}>{ingredientItem.carbohydrates}</p>
                        </li>
                    </ul>
                </>
                ) : (
                <>
                <img className={ingredient_detals.image} src={ingredient.image} alt={ingredient.name}></img>
                <h3 className={ingredient_detals.subtitle}>{ingredient.name}</h3>
                <ul className={ingredient_detals.list} >
                    <li className={ingredient_detals.item} >
                        <p className={ingredient_detals.text}>Калории,ккал</p>
                        <p className={ingredient_detals.number}>{ingredient.calories}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text} >Белки, г</p>
                        <p className={ingredient_detals.number}>{ingredient.proteins}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text}>Жиры, г</p>
                        <p className={ingredient_detals.number}>{ingredient.fat}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text}>Углеводы, г</p>
                        <p className={ingredient_detals.number}>{ingredient.carbohydrates}</p>
                    </li>
                </ul>
                </>
                )
                }
                
            </div>
    );
};