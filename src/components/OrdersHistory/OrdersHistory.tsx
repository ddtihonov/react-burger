import React, { FC } from 'react';
import style from './OrdersHistory.module.css';


export const OrdersHistory: FC = () => {

    return (
        <section className={style.main}>
            <div className={style.container}>
                <div className={style.box}>
                    <h3 className={style.text_list}>Готовы:</h3>
                    <ul className={style.list}>
                        <li className={style.item}>034533</li>
                        <li className={style.item}>034533</li>
                        <li className={style.item}>034533</li>
                        <li className={style.item}>034533</li>
                        <li className={style.item}>034533</li>
                    </ul>
                </div>
                <div className={style.box}>
                    <h3 className={style.text_list}>В работе:</h3>
                    <ul className={style.list}>
                        <li className={style.item_white}>034533</li>
                        <li className={style.item_white}>034533</li>
                        <li className={style.item_white}>034533</li>
                    </ul>
                </div>
            </div>
            <div className={style.info}>
                <h3 className={style.text}>Выполнено за все время:</h3>
                <p className={style.price}>28 752</p>
            </div>
            <div className={style.info}>
                <h3 className={style.text}>Выполнено за сегодня:</h3>
                <p className={style.price}>150</p>
            </div>
        </section>
    );
};