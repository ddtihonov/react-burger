import React, {FC, useCallback} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import style from './Feed.module.css';
import { useSelector, useDispatch } from '../../utils/hooks';
import { OrderInformation } from '../../components/OrderInformation/OrderInformation';
import { OrdersHistory } from '../../components/OrdersHistory/OrdersHistory';
import { TFeedOrder } from '../../utils/tupes';
import { Preloader } from '../../components/Preloader/Preolader';
import { ORDER_WINDOW_OPEN } from '../../services/actions/selectedOrder';

export const Feed: FC = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const orders  = useSelector((state) => state.orderHistory.feed.orders);
    const loading  = useSelector((state) => state.orderHistory.wsConnected);


    const windowOpen = useCallback(() =>{
        dispatch({
            type: ORDER_WINDOW_OPEN,
        });
    }, [dispatch])

    return (
        <section className={style.main}>
            <h2 className={style.title}>Лента заказов</h2>
            <div className={style.box}>
                <ul className={`${style.list} ${style.scrollbar}`}>
                {orders !== undefined && orders
                    .map((item: TFeedOrder) => {
                            return (
                                <Link
                                    onClick={windowOpen}
                                    key={item.number}
                                    className={style.link}
                                    to={`${location.pathname}/${item._id}`}
                                    state={{ background: location.pathname }}
                                >
                                <OrderInformation
                                    order={item}
                                />
                                </Link>
                                
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