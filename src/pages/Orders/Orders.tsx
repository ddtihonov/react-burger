import React, {FC, useEffect} from 'react';
import { useSelector, useDispatch } from '../../utils/hooks';
import styles from './Orders.module.css';
import {ProfileMenu} from '../../components/ProfileMnu/ProfileMenu';
import { OrderInformation } from '../../components/OrderInformation/OrderInformation';
import { TFeedOrder } from '../../utils/tupes';
import { wsConnectionStart, wsConnectionClosed } from '../../services/actions/wsOrders';


export const Orders: FC = () => {

    const orders = useSelector((state) => state.orderHistory.feed.orders);
    const hi = useSelector((state) => state.orderHistory);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed())
        }
    }, [dispatch]);

    return (
        <section className={styles.main}>
           
        </section>
        
    )
}

/*<ProfileMenu/>
<ul className={`${styles.list} ${styles.scrollbar}`}>
{orders !== undefined && orders
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
</ul>*/

