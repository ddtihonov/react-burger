import React, { useContext, useCallback } from 'react';
import burger_constructor from './BurgerConstructor.module.css';
import ConstructorList from '../ConstructorList/ConstructorList';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import { BurgerContext } from '../../utils/BurgerContext';

export default function BurgerConstructor({onAddOrder}) {

        const ingredientsList  = useContext(BurgerContext);

        const bun = ingredientsList[0];
        const ingredients = ingredientsList.filter(item => item.type !== 'bun');

        const orderAmount = useCallback(() =>{

          if (!bun) {
            return 0;
          }
            
          const amountIngredients = ingredients.reduce((sum, item) => {
              return sum + item.price
          }, 0)

            return amountIngredients + bun.price * 2
            
        }, [bun, ingredients]);


    return (
      <section className={burger_constructor.container}>
        <ConstructorList
          bun ={bun}
          ingredients={ingredients}
        />
        <div className={burger_constructor.box}>
          <p className={burger_constructor.price}>{orderAmount()}</p>
          <div className={burger_constructor.item}>
            <CurrencyIcon type="primary"/>
          </div>
          <div className={burger_constructor.cell}>
            <Button size='large' onClick={onAddOrder}>Оформить заказ</Button>
          </div>
        </div>
      </section>
    );
  };

  BurgerConstructor.propTypes = {
    onAddOrder: PropTypes.func,  
};