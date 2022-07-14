import React, {useMemo, FC} from 'react';
import ingredient_detals from './IngredientDetails.module.css'
import { useSelector} from '../../utils/hooks';
import { useLocation, useParams } from 'react-router-dom';
import {TIngredient} from '../../utils/tupes'


export const IngredientDetails: FC = () => {

    const { state } = useLocation();

    const ingredientModal = useSelector((state) => state.ingredientState.selectedIngredient);

    const ingredients = useSelector((state:any) => state.ingredientsState.ingredients);
    
    const { id } = useParams()
    const ingredient = useMemo(() => {
        return ingredients.find((ingredient:TIngredient) => ingredient._id === id)
        }, [ingredients, id]
    )

    const ingredientItem = ingredientModal || ingredient;
    
    if (!ingredient) return (null)

    return(
            <div className={ingredient_detals.box} >
                {state ? (
                <>
                    <img className={ingredient_detals.image} src={ingredientItem.image} alt={ingredientItem.name}></img>
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