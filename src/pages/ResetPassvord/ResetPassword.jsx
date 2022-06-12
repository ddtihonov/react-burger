import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import {onResetPassword} from '../../services/actions/resetPassword'
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';


export default function ResetPassword () {

    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleChangePassword = useCallback((e) =>{
        setPassword(e.target.value);
    }, []);

    const handleChangeCode = useCallback((e) =>{
        setToken(e.target.value);
    }, []);

    const onPasswordChange = useCallback((e) =>{
        e.preventDefault();
        dispatch(onResetPassword({password, token}));
        navigate('/login')
    }, [navigate, dispatch, password, token])
        
            return(
            <section className={styles.main}>
                <form className={styles.form} onSubmit={onPasswordChange}>
                    <h2 className={styles.title}>Восстановление пароля</h2>
                    <div className={styles.input}>
                        <Input
                        onChange={handleChangePassword} 
                        value={password} 
                        placeholder={'Введите новый пароль'}
                        icon={'EditIcon'}
                        size={'default'}
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                        value={token}
                        onChange={handleChangeCode}
                        placeholder={'Введите код из письма'}
                        icon={'EditIcon'}
                        size={'default'}
                        />
                    </div>
                    {token && password && <div className={styles.button}>
                    <Button type='primary' size='medium'>
                    Сохранить
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