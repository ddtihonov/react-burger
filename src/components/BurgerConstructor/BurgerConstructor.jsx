import React, { useCallback} from 'react';
import {getOrderNumber} from '../../services/actions/actions'
import burger_constructor from './BurgerConstructor.module.css';
import ConstructorList from '../ConstructorList/ConstructorList';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';


export default function BurgerConstructor({onAddOrder}) {

        const ingredientsList = useSelector(state => state.ingredientsState.ingredients);
        const dispatch = useDispatch();

        const bun = ingredientsList[1];
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

        const handleOrder = useCallback(() =>{

          let iDingredients = ingredients.map(item => item._id).concat([bun._id]);
          dispatch(getOrderNumber(iDingredients));
          onAddOrder();
        }, [onAddOrder, ingredients, bun, dispatch]);


    return (
      <section className={burger_constructor.container}>
        {bun && <ConstructorList
          bun ={bun}
          ingredients={ingredients}
        />}
        <div className={burger_constructor.box}>
          <p className={burger_constructor.price}>{orderAmount()}</p>
          <div className={burger_constructor.item}>
            <CurrencyIcon type="primary"/>
          </div>
          <div className={burger_constructor.cell}>
            <Button size='large' onClick={handleOrder}>Оформить заказ</Button>
          </div>
        </div>
      </section>
    );
  };

  BurgerConstructor.propTypes = {
    onAddOrder: PropTypes.func,  
};