import React, {FC} from 'react'
import styles from './PreloaderOrder.module.css'

export const PreloaderOrder: FC = () => {
    return (
        <section className={styles.main}>
            <div className={styles.preloader}>
                <div className={styles.preloader__container}>
                    <span className={styles.preloader__round}></span>
                </div>
            </div>
            <h2 className={styles.title}>ready order</h2>
        </section>
    )
};