import React, { useState, useCallback, FC, FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import styles from './ForgotPassword.module.css';
import {onRecoveryPassword} from '../../services/actions/recoveryPassword'
import {
    EmailInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const ForgotPassword: FC = () => {

const navigate = useNavigate();
const dispatch: any = useDispatch();    
    
const [userEmail, setUserEmail] = useState<string>('');

const handleChangeEmail = useCallback((value: string) =>{
    setUserEmail(value);
}, []);


const passwordRecovery = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(onRecoveryPassword(userEmail));
    navigate('/reset-password')
}, [dispatch, navigate, userEmail]);

    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={passwordRecovery}>
            <h2 className={styles.title}>Восстановление пароля</h2>
                <div className={styles.input}>
                    <EmailInput
                        name='email'
                        onChange={(evt) => handleChangeEmail(evt.target.value)}
                        value={userEmail}
                        size='default'
                    />
                </div>
                {userEmail && 
                    <button className={styles.button} type='submit'>Восстановить</button>
                }
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
