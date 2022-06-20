import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import styles from './ForgotPassword.module.css';
import {onRecoveryPassword} from '../../services/actions/recoveryPassword'
import {
    EmailInput, Button
} from '@ya.praktikum/react-developer-burger-ui-components';

export default function ForgotPassword () {

const navigate = useNavigate();
const dispatch = useDispatch();    
    
const [userEmail, setUserEmail] = useState('');

const handleChangeEmail = useCallback((e) =>{
    setUserEmail(e.target.value);
}, []);


const passwordRecovery = useCallback((e) => {
    e.preventDefault()
    dispatch(onRecoveryPassword(userEmail));
    navigate('/reset-password')
}, [dispatch, navigate, userEmail]);

    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={passwordRecovery}>
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