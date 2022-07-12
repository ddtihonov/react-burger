import React, {FC} from 'react';
import style from './Feed.module.css';
import { OrdersInformation } from '../../components/OrdersInformation/OrdersInformation';
import { OrdersHistory } from '../../components/OrdersHistory/OrdersHistory';

export const Feed: FC = () => {

    return (
        <section className={style.main}>
            <h2 className={style.title}>Лента заказов</h2>
            <div className={style.box}>
                <OrdersInformation/>
                <OrdersHistory/>
            </div>
        </section>
        
    )
}