import React, { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';
import { useLocation } from 'react-router';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OrderInformation.module.css';
import { TIngredient } from '../../utils/tupes';


export const OrderInformation: FC<{
    number: string;
    date: string;
    name: string;
    ingredients: TIngredient[] | string[];
}> = ({ name, number, date, ingredients }) => {
    const location = useLocation();

    const ingredientsList = useSelector((state: any) => state.ingredientsState.ingredients);
    //console.log(ingredientsList)
    //console.log(ingredients)

    let orderIngredients = [];

    for (let i = 0; i < ingredients.length; i++) {
        orderIngredients.push(
            ingredientsList.find((item: TIngredient) => item._id === ingredients[i])
        );
    }

    console.log(orderIngredients)

    function parseDate(date: string) {
        const currentDate = new Date();
        const regex = /-/g;
        const orderDay = Number(date.replace(regex, '').split('T')[0].slice(-2));
        const orderTime = date.slice(11, -8);
        const term = currentDate.getDate() - orderDay;
        return term === 0
            ? `Ceгодня ${orderTime} i-GMT+3`
            : term === 1
            ? `Вчера, ${orderTime} i-GMT+3`
            : term < 5
            ? `${term} дня назад, ${orderTime} i-GMT+3`
            : `${term} дней назад, ${orderTime} i-GMT+3`;
    }

    return (
        <li className={style.main}>
            <div className={style.box}>
                <p className={style.number}>{number}</p>
                <p className={style.date}>{parseDate(date)}</p>
            </div>
            <h3 className={style.title}>{name}</h3>
            <div className={style.box_ingredient}>
                <ul className={style.list}>

                </ul>
                <div className={style.box_prise}>
                    <p className={style.price}>450</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </li>
    );
};