import React, {FC} from 'react';
import style from './Feed.module.css';
import { useSelector } from '../../utils/hooks';
import { OrderInformation } from '../../components/OrderInformation/OrderInformation';
import { OrdersHistory } from '../../components/OrdersHistory/OrdersHistory';
import { TFeedOrder } from '../../utils/tupes';
import { Preloader } from '../../components/Preloader/Preolader';

export const Feed: FC = () => {

    const orders  = useSelector((state) => state.orderHistory.feed.orders) || [];
    const loading  = useSelector((state) => state.orderHistory.wsConnected);

    return (
        <section className={style.main}>
            <h2 className={style.title}>Лента заказов</h2>
            <div className={style.box}>
                <ul className={`${style.list} ${style.scrollbar}`}>
                {orders
                    .map((item: TFeedOrder) => {
                            return (
                                <OrderInformation
                                    key={item.number}
                                    name={item.name}
                                    date={item.createdAt}
                                    number={'#' + String(item.number)}
                                    ingredients={item.ingredients}
                                    status={item.status}
                                    id={item._id}
                                />
                            )
                    })}
                </ul>
                <OrdersHistory/>
            </div>
            {!loading &&
                <Preloader/>
            }
        </section>
    )
}