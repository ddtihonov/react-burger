import React, {FC} from 'react';
import styles from './Orders.module.css';
import {ProfileMenu} from '../../components/ProfileMnu/ProfileMenu';

export const Orders: FC = () => {


    return (
        <section className={styles.main}>
            <ProfileMenu/>
            <div className={styles.box}>
                <h3 className={styles.title}>Тут будет история заказов</h3>
                <p className={styles.text_order}>Страница в стадии разработки</p>
            </div>
        </section>
        
    )
}