import React from 'react';
import styles from './BurgerConstructor.module.css'
import ConstructorList from '../ConstructorList/ConstructorList';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({arrayInitialization}) {

    return (
      <section className={styles.container}>
        <ConstructorList
          arrayInitialization = {arrayInitialization}
        />
        <div className={styles.box}>
          <p className={styles.price}>610</p>
          <div className={styles.item}>
            <CurrencyIcon type="primary"/>
          </div>
          <div className={styles.cell}>
            <Button size='large'>Оформить заказ</Button>
          </div>
        </div>
      </section>
    );
  }
  