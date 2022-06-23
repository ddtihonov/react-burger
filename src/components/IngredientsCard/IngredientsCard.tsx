import React, { useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import styles from './IngredientsCard.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import {SELECT_INGREDIENT} from '../../services/actions/actions';
import {TIngredient} from '../../utils/tupes';


export const IngredientsCard: FC<{card: TIngredient}> = ({card}) => {

    let counter = 0
    const bun = useSelector((state: any) => state.burgerConstructorIngredients.burgerBun);
    const ingredientsConstructorList = useSelector((state: any) => state.burgerConstructorIngredients.burgerIngredients);

    if(bun !== null) {
    const ingredientsTotal = ingredientsConstructorList.concat(bun);

    ingredientsTotal.map((item: {name: string, type: string}) => item.name === card.name && (item.type === 'bun' ? counter += 2 : counter += 1))
    };

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
        type: 'ingredient',
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
            {counter > 0 && <Counter count={counter} size="default" />}
            <img className={styles.image} src={card.image} alt={card.name}/>
            <div className={styles.box}>
                <p className={styles.price}>{card.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={styles.text}>{card.name}</p>
        </li>
    );
};