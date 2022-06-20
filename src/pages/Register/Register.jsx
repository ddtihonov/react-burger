import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Register.module.css';
import {
    EmailInput,
    PasswordInput,
    Input,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {onRegister} from '../../services/actions/register';

export default function Register () {

const navigate = useNavigate();
const dispatch = useDispatch(); 
    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

const loggedIn = useSelector(state => state.authData.loggedIn);

useEffect(() => {
    if(loggedIn) {
        navigate('/profile')
        setEmail('')
        setPassword('')
        setName('')
    }

}, [loggedIn, navigate]);

const handleChangeEmail = useCallback((e) =>{
    setEmail(e.target.value);
}, []);

const handleChangePassword = useCallback((e) =>{
    setPassword(e.target.value);
}, []);

const handleChangeName = useCallback((e) => {
    setName(e.target.value);
}, []);

const signUp = useCallback((e) => {
    e.preventDefault();
    dispatch(onRegister(name, email, password));
}, [name, email, password, dispatch] );

    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={signUp}>
                <h2 className={styles.title}>Регистрация</h2>
                <div className={styles.input}>
                    <Input
                    value={name}
                    onChange={handleChangeName}
                    size={'default'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    />
                </div>
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
                    Зарегистрироваться
                    </Button>
                </div>
            </form>
            <div className={styles.box}>
            <p className={styles.caption}>
            Уже зарегистрированы?&nbsp;
                <Link to='/login' className={styles.link}>
                Войти
                </Link>
            </p>
            </div>
        </section>
    )
}
