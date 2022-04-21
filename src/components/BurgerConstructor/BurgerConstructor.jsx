import React from 'react';
import burger_constructor from './BurgerConstructor.module.css'
import ConstructorList from '../ConstructorList/ConstructorList';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({arrayInitialization, onAddOrder}) {

    return (
      <section className={burger_constructor.container}>
        <ConstructorList
          arrayInitialization = {arrayInitialization}
        />
        <div className={burger_constructor.box}>
          <p className={burger_constructor.price}>610</p>
          <div className={burger_constructor.item}>
            <CurrencyIcon type="primary"/>
          </div>
          <div className={burger_constructor.cell}>
            <Button size='large' onClick={onAddOrder}>Оформить заказ</Button>
          </div>
        </div>
      </section>
    );
  }
  