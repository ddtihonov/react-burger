import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ForgotPassword.module.css';
import {
    EmailInput, Button
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function ForgotPassword () {

const location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();    
    
const [userEmail, setUserEmail] = useState('');

const handleChangeEmail = useCallback((e) =>{
    setUserEmail(e.target.value);
}, []);


function onEditProfile(e) {
    e.preventDefault()
    navigate('/reset-password')
};

    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={onEditProfile}>
            <h2 className={styles.title}>Восстановление пароля</h2>
                <div className={styles.input}>
                    <EmailInput 
                    onChange={handleChangeEmail} 
                    value={userEmail}
                    size={'default'}
                    />
                </div>
                {userEmail && <div className={styles.button}>
                    <Button type='primary' size='medium'>
                    Восстановить
                    </Button>
                </div>}
            </form>
            <div className={styles.box}>
            <p className={styles.caption}>
            Вспомнили пароль?&nbsp;
                <Link to='/login' className={styles.link}>
                Войти
                </Link>
            </p>
            </div>
        </section>
    )
}