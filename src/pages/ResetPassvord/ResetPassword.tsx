import React, { useState, useCallback, FC, ChangeEvent, FormEvent} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import {onResetPassword} from '../../services/actions/resetPassword'
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.css'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';


export const ResetPassword: FC = () => {

    const navigate = useNavigate();
    const dispatch: any = useDispatch(); 

    const [password, setPassword] = useState<string>('');
    const [token, setToken] = useState<string>('');

    const handleChangePassword = useCallback((evt: ChangeEvent<HTMLInputElement>) =>{
        setPassword(evt.target.value);
    }, []);

    const handleChangeCode = useCallback((evt: ChangeEvent<HTMLInputElement>) =>{
        setToken(evt.target.value);
    }, []);

    const onPasswordChange = useCallback((evt: FormEvent<HTMLFormElement>) =>{
        evt.preventDefault();
        dispatch(onResetPassword(password, token));
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
                    {token && password && 
                    <button className={styles.button} type='submit'>Сохранить</button>}
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