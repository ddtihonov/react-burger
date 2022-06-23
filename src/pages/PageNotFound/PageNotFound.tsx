import React, {FC} from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router";
import styles from './PageNotFound.module.css'

export const PageNotFound: FC = () => {

    const navigate = useNavigate();
    
    const goBack = () => navigate(-1);

    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <h3 className={styles.title}>404</h3>
                <p className={styles.text}>Страница не найдена</p>
                <Link className={styles.link} to='' onClick={goBack}>Назад</Link>
            </div>
        </section>
        
    )
}