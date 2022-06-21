import React, {FC} from 'react';
import styles from './Ingredient.module.css'
import {IngredientDetails} from '../../components/IngredientDetails/IngredientDetails';


export const Ingredient: FC = () => {

    return(
            <div className={styles.box} >
                <h3 className={styles.title}>Детали ингредиента</h3>
                <IngredientDetails/>
            </div>
    );
};