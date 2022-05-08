import React from 'react';
import { useSelector } from 'react-redux';
import ingredient_detals from './IngredientDetails.module.css'


export default function IngredientDetails() {

    const ingredient = useSelector(state => state.ingredientState.selectedIngredient);

    return(
            <div className={ingredient_detals.box} >
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
            </div>
    );
};