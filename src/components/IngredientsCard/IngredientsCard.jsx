import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
import styles from './IngredientsCard.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import {SELECT_INGREDIENT} from '../../services/actions/actions'



export default function IngredientsCard({card}) {

    const dispatch = useDispatch();

    const cardClick = useCallback(() => {
        dispatch({
            type: SELECT_INGREDIENT,
            payload: {
                ingredient: card,
            },
        });
    }, [card, dispatch]);

    const [{ opacity }, dragRef] = useDrag({
        type: card.type,
        item: card,
        collect: monitor => ({
            opacity: monitor.isDragging() ? .3 : 1,
        })
    });

    return (
        <li className={styles.item}
            onClick={cardClick}
            ref={dragRef}
            style={{ opacity }}
            >   
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
    card: PropTypes.object, 
};