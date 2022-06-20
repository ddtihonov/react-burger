import React from 'react';
import styles from './Ingredient.module.css'
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails';


export default function Ingredient() {

    return(
            <div className={styles.box} >
                <h3 className={styles.title}>Детали ингредиента</h3>
                <IngredientDetails/>
            </div>
    );
};