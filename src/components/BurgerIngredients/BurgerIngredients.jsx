import React, {useState} from 'react';
import burger_ingredients from './BurgerIngredients.module.css';
import IngredientsList from '../IngredientsList/IngredientsList';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import {arrPropTypes} from '../../utils/tupes';

export default function BurgerIngredients({arrayInitialization, onCardClick }) {

  const [current, setCurrent] = useState('Булки')

  return (
      <section className={burger_ingredients.container}>
        <h2 className={burger_ingredients.title}>Соберите бургер</h2>
        <div className={burger_ingredients.tab}>
          <Tab active={current === 'Булки'} value='Булки' onClick={setCurrent}>Булки</Tab>
          <Tab active={current === 'Соусы'} value='Соусы' onClick={setCurrent}>Соусы</Tab>
          <Tab active={current === 'Начинки'} value='Начинки' onClick={setCurrent}>Начинки</Tab>
        </div>
        <div className={`${burger_ingredients.scrollbox} ${burger_ingredients.scrollbar}`}>
          <IngredientsList
                    arrayInitialization = {arrayInitialization}
                    onCardClick  = {onCardClick }
                  />
        </div>
      </section>
    );
  };

  BurgerIngredients.propTypes = {
    arrayInitialization: PropTypes.arrayOf(arrPropTypes).isRequired,
    onCardClick: PropTypes.func,  
};