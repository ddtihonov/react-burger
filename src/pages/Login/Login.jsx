import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Login.module.css';
import {
    EmailInput,
    PasswordInput,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function Login () {

const location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();    
    
const [userEmail, setUserEmail] = useState('');
const [password, setPassword] = useState('');

const handleChangeEmail = useCallback((e) =>{
    setUserEmail(e.target.value);
}, []);

const handleChangePassword = useCallback((e) =>{
    setPassword(e.target.value);
}, []);

function onEditProfile(e) {

};

    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={onEditProfile}>
            <h2 className={styles.title}>Вход</h2>
                <div className={styles.input}>
                    <EmailInput 
                    onChange={handleChangeEmail} 
                    value={userEmail}
                    size={'default'}
                    />
                </div>
                <div className={styles.input}>
                    <PasswordInput 
                    onChange={handleChangePassword} 
                    value={password}
                    size={'default'}
                    />
                </div>
                <div className={styles.button}>
                    <Button type='primary' size='medium'>
                        Войти
                    </Button>
                </div>
            </form>
            <div className={styles.box}>
            <p className={styles.caption}>
                Вы — новый пользователь?&nbsp;
                <Link to='/register' className={styles.link}>
                    Зарегистрироваться
                </Link>
            </p>
            <p className={styles.caption}>
            Забыли пароль?&nbsp;
            <Link to='/forgot-password' className={styles.link}>
                Восстановить пароль
            </Link>
            </p>
            </div>
        </section>
    )
}