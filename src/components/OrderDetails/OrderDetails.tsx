import React, {FC} from 'react';
import { useSelector } from '../../utils/hooks';
import order_detals from './OrderDetails.module.css';
import icon from '../../image/icon.svg';

export const OrderDetails: FC = () => {

    const orderNumber = useSelector((state) => state.orderState.order.order.number);

    return(
            <div className={order_detals.box} >
                <h2 className={order_detals.title}>{orderNumber}</h2>
                <h3 className={order_detals.subtitle}>идентификатор заказа</h3>
                <img src={icon} alt="Иконка"/>
                <p className={order_detals.text}>Ваш заказ уже готов</p>
                <p className={order_detals.text_purple}>Благодарим за посещение нашего ресторана</p>
            </div>
    );
};