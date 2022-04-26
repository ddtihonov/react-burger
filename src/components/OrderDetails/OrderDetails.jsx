import React from 'react';
import order_detals from './OrderDetails.module.css';
import icon from '../../image/icon.svg';

export default function OrderDetails() {


    return(
            <div className={order_detals.box} >
                <h2 className={order_detals.title}>070876</h2>
                <h3 className={order_detals.subtitle}>идентификатор заказа</h3>
                <img src={icon} alt="Иконка"/>
                <p className={order_detals.text}>Ваш заказ начали готовить</p>
                <p className={order_detals.text_purple}>Дождитесь готовности на орбитальной станции</p>
            </div>
    
    );
};