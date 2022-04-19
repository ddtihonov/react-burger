import React, {useState} from 'react';
import burgerIngredients from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerIngredients() {

  const [current, setCurrent] = useState('Булки')

    return (

      <section className={burgerIngredients.container}>
        <h2 className={burgerIngredients.title}>Соберите бургер</h2>
        <div className={burgerIngredients.tab}>
                <Tab active={current === 'Булки'} value='Булки' onClick={setCurrent}>Булки</Tab>
                <Tab active={current === 'Соусы'} value='Соусы' onClick={setCurrent}>Соусы</Tab>
                <Tab active={current === 'Начинки'} value='Начинки' onClick={setCurrent}>Начинки</Tab>
            </div>
      </section>
      
    );
  }