import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './ResetPassword.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';


export default function ResetPassword () {

    const [userPassword, setUserPassword] = useState('');
    const [code, setCode] = useState('');

    const handleChangePassword = useCallback((e) =>{
        setUserPassword(e.target.value);
    }, []);

    const handleChangeCode = useCallback((e) =>{
        setCode(e.target.value);
    }, []);

    const onPasswordChange = useCallback((e) =>{
        e.preventDefault();
    }, [])
        
            return(
            <section className={styles.main}>
                <form className={styles.form} onSubmit={onPasswordChange}>
                    <h2 className={styles.title}>Восстановление пароля</h2>
                    <div className={styles.input}>
                        <Input
                        onChange={handleChangePassword} 
                        value={userPassword} 
                        placeholder={'Введите новый пароль'}
                        icon={'EditIcon'}
                        size={'default'}
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                        value={code}
                        onChange={handleChangeCode}
                        placeholder={'Введите код из письма'}
                        icon={'EditIcon'}
                        size={'default'}
                        />
                    </div>
                    {code && userPassword && <div className={styles.button}>
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