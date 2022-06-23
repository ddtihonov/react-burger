import React, {FC} from 'react'
import styles from './Preloader.module.css'

export const Preloader: FC = () => {
    return (
        <section className={styles.main}>
            <div className={styles.preloader}>
                <div className={styles.preloader__container}>
                    <span className={styles.preloader__round}></span>
                </div>
            </div>
            <h2 className={styles.title}>STELLAR BURGERS</h2>
        </section>
    )
};