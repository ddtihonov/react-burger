import React, { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Login.module.css';
import {
    EmailInput,
    PasswordInput,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {onLogin} from '../../services/actions/login';

export default function Login () {

    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const location = useLocation()   
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loggedIn = useSelector(state => state.authData.loggedIn);

    useEffect(() => {
        if(loggedIn === true) {
            navigate(location.state?.from || '/')
            setEmail('')
            setPassword('')
        }
    }, [loggedIn, navigate, location]);

    const handleChangeEmail = useCallback((e) =>{
        setEmail(e.target.value);
    }, []);
    
    const handleChangePassword = useCallback((e) =>{
        setPassword(e.target.value);
    }, []);
    
    const signIn = useCallback((e) => {
        e.preventDefault();
        dispatch(onLogin(email, password));
    }, [email, password, dispatch] );


    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={signIn}>
            <h2 className={styles.title}>Вход</h2>
                <div className={styles.input}>
                    <EmailInput 
                    onChange={handleChangeEmail} 
                    value={email}
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