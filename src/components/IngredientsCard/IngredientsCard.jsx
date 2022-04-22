import React, { useCallback } from 'react';
import styles from './IngredientsCard.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";



export default function IngredientsCard({card, onCardClick}) {

    const cardClick = useCallback(() => {
        onCardClick (card)
    }, [onCardClick , card]);

    return (
        <li className={styles.item} onClick={cardClick}>
            <Counter count={0} size="default" />
            <img className={styles.image} src={card.image} alt={card.name}/>
            <div className={styles.box}>
                <p className={styles.price}>{card.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={styles.text}>{card.name}</p>
        </li>
    );
};

IngredientsCard.propTypes = {
    onCardClick: PropTypes.func,
    card: PropTypes.object, 
};