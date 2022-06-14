import React, {useMemo} from 'react';
import ingredient_detals from './IngredientDetails.module.css'
import { useSelector} from 'react-redux';
import { useLocation, useParams } from "react-router-dom";


export default function IngredientDetails() {

    const { state } = useLocation();

    const ingredientModal = useSelector(state => state.ingredientState.selectedIngredient);
    console.log(ingredientModal)

    const ingredients = useSelector(state => state.ingredientsState.ingredients);
    
    const { id } = useParams()
    const ingredient = useMemo(() => {
        return ingredients.find(ingredient => ingredient._id === id)
        }, [ingredients, id]
    )

    if (!ingredient) return (null)

    return(
            <div className={ingredient_detals.box} >
                {state ? (
                <>
                    <img className={ingredient_detals.image} src={ingredientModal.image} alt={ingredient.name}></img>
                    <h3 className={ingredient_detals.subtitle}>{ingredientModal.name}</h3>
                    <ul className={ingredient_detals.list} >
                        <li className={ingredient_detals.item} >
                            <p className={ingredient_detals.text}>Калории,ккал</p>
                            <p className={ingredient_detals.number}>{ingredientModal.calories}</p>
                        </li>
                        <li className={ingredient_detals.item}>
                            <p className={ingredient_detals.text} >Белки, г</p>
                            <p className={ingredient_detals.number}>{ingredientModal.proteins}</p>
                        </li>
                        <li className={ingredient_detals.item}>
                            <p className={ingredient_detals.text}>Жиры, г</p>
                            <p className={ingredient_detals.number}>{ingredientModal.fat}</p>
                        </li>
                        <li className={ingredient_detals.item}>
                            <p className={ingredient_detals.text}>Углеводы, г</p>
                            <p className={ingredient_detals.number}>{ingredientModal.carbohydrates}</p>
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

/*<img className={ingredient_detals.image} src={ingredientModal.image} alt={ingredient.name}></img>
                <h3 className={ingredient_detals.subtitle}>{ingredientModal.name}</h3>
                <ul className={ingredient_detals.list} >
                    <li className={ingredient_detals.item} >
                        <p className={ingredient_detals.text}>Калории,ккал</p>
                        <p className={ingredient_detals.number}>{ingredientModal.calories}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text} >Белки, г</p>
                        <p className={ingredient_detals.number}>{ingredientModal.proteins}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text}>Жиры, г</p>
                        <p className={ingredient_detals.number}>{ingredientModal.fat}</p>
                    </li>
                    <li className={ingredient_detals.item}>
                        <p className={ingredient_detals.text}>Углеводы, г</p>
                        <p className={ingredient_detals.number}>{ingredientModal.carbohydrates}</p>
                    </li>
                </ul>
                ) : (
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
                </ul>*/