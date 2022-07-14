import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../utils/hooks';
import style from './OrdersHistory.module.css';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsOrders';
import { v4 as uuidv4 } from 'uuid';


export const OrdersHistory: FC = () => {

    const dispatch = useDispatch();
    const orders  = useSelector((state) => state.orderHistory.feed.orders) || [];
    const total  = useSelector((state) => state.orderHistory.feed.total);
    const totalToday = useSelector((state) => state.orderHistory.feed.totalToday);

    useEffect(() => {
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);

    return (
        <section className={style.main}>
            <div className={style.container}>
                <div className={style.box}>
                    <h3 className={style.text_list}>Готовы:</h3>
                    <ul className={style.list}>
                    {orders
                    .filter(item => item.status === 'done')
                    .slice(0, 25)
                    .map(item => {
                        const keyUid = uuidv4()
                            return (
                                <li className={style.item} key={keyUid}>{item.number}</li> 
                            )
                    })}
                    </ul>
                </div>
                <div className={style.box}>
                    <h3 className={style.text_list}>В работе:</h3>
                    <ul className={style.list}>
                    {orders
                    .filter(item => item.status === 'pending')
                    .slice(0, 25)
                    .map(item => {
                        const keyUid = uuidv4()
                            return (
                                <li className={style.item} key={keyUid}>{item.number}</li> 
                            )
                    })}
                    </ul>
                </div>
            </div>
            <div className={style.info}>
                <h3 className={style.text}>Выполнено за все время:</h3>
                <p className={style.price}>{total}</p>
            </div>
            <div className={style.info}>
                <h3 className={style.text}>Выполнено за сегодня:</h3>
                <p className={style.price}>{totalToday}</p>
            </div>
        </section>
    );
};