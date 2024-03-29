import React, { useEffect, useState, useCallback} from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from '../../utils/hooks';
import styles from './Login.module.css';
import {
    EmailInput,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {onLogin} from '../../services/actions/login';

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {state}: any = useLocation();
        
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loggedIn = useSelector((state) => state.authData.loggedIn);

    useEffect(() => {
        if(loggedIn === true) {
            navigate(state?.from || '/')
            setEmail('')
            setPassword('')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn, navigate, state?.path]);

    const handleChangeEmail = useCallback((value) =>{
        setEmail(value);
    }, []);
    
    const handleChangePassword = useCallback((value) =>{
        setPassword(value);
    }, []);
    
    const signIn = useCallback((evt) => {
        evt.preventDefault();
        dispatch(onLogin(email, password));
    }, [email, password, dispatch] );


    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={signIn}>
            <h2 className={styles.title}>Вход</h2>
                <div className={styles.input}>
                    <EmailInput 
                        name='email'
                        onChange={(evt) => handleChangeEmail(evt.target.value)} 
                        value={email}
                        size={'default'}
                        data-test="email"
                    />
                </div>
                <div className={styles.input}>
                    <PasswordInput
                        name='password' 
                        onChange={(evt) => handleChangePassword(evt.target.value)}  
                        value={password}
                        size={'default'}
                    />
                </div>
                <button className={styles.button} type='submit' data-test="login-button">Войти</button>
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