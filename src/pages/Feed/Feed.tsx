import React, {FC} from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router";
import styles from './Feed.module.css'

export const Feed: FC = () => {

    const navigate = useNavigate();
    
    const goBack = () => navigate(-1);

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <h3 className={styles.title}>Страница заказов</h3>
                <p className={styles.text}>Страница заказов</p>
                <Link className={styles.link} to='' onClick={goBack}>Назад</Link>
            </div>
        </section>
        
    )
}