import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './OrdersInformation.module.css';


export const OrdersInformation: FC = () => {
    const location = useLocation();

    return (
        <section className={style.main}>
            <ul className={style.list}>

            </ul>

        </section>
    );
};