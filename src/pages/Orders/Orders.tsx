import React, {FC, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from '../../utils/hooks';
import { useLocation } from 'react-router';
import styles from './Orders.module.css';
import {ProfileMenu} from '../../components/ProfileMnu/ProfileMenu';
import { OrderInformation } from '../../components/OrderInformation/OrderInformation';
import { TFeedOrder } from '../../utils/tupes';
import { wsConnectionStartForUser, wsConnectionClosed } from '../../services/actions/wsOrders';
import { ORDER_WINDOW_OPEN } from '../../services/actions/selectedOrder';


export const Orders: FC = () => {

    const orders = useSelector((state) => state.orderHistory.feed.orders) || [];
    const hi = useSelector((state) => state.orderHistory);
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(hi)

    useEffect(() => {
        dispatch(wsConnectionStartForUser());
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);

    const windowOpen = useCallback(() =>{
        dispatch({
            type: ORDER_WINDOW_OPEN,
        });
    }, [dispatch])

    return (
        <section className={styles.main}>
            <ProfileMenu/>
            <ul className={`${styles.list} ${styles.scrollbar}`}>
                {orders !== undefined && orders
                        .map((item: TFeedOrder) => {
                                return (
                                    <Link
                                        onClick={windowOpen}
                                        key={item.number}
                                        className={styles.link}
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
        </section>
        
    )
}

