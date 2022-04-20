import React from 'react';
import styles from './IngredientsCard.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'



export default function IngredientsCard({card}) {
    return (
        <li className={styles.item}>
            <Counter count={0} size="default" />
            <img className={styles.image} src={card.image} alt={card.name}/>
            <div className={styles.box}>
                <p className={styles.price}>{card.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={styles.text}>{card.name}</p>
        </li>
    )
}