import React, { useEffect, useState, useCallback, FC, FormEvent } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Register.module.css';
import {
    EmailInput,
    PasswordInput,
    Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {onRegister} from '../../services/actions/register';

export const Register: FC = () => {

const navigate = useNavigate();
const dispatch: any = useDispatch(); 
    
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [name, setName] = useState<string>('');

const loggedIn = useSelector((state: any) => state.authData.loggedIn);

useEffect(() => {
    if(loggedIn) {
        navigate('/profile')
        setEmail('')
        setPassword('')
        setName('')
    }

}, [loggedIn, navigate]);

const handleChangeEmail = useCallback((value : string) =>{
    setEmail(value);
}, []);

const handleChangePassword = useCallback((value : string) =>{
    setPassword(value);
}, []);

const handleChangeName = useCallback((value : string) => {
    setName(value);
}, []);

const signUp = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(onRegister(name, email, password));
}, [name, email, password, dispatch] );

    return (
        <section className={styles.main}>
            <form className={styles.form} onSubmit={signUp}>
                <h2 className={styles.title}>Регистрация</h2>
                <div className={styles.input}>
                    <Input
                    value={name}
                    onChange={(evt) => handleChangeName(evt.target.value)}
                    size={'default'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    />
                </div>
                <div className={styles.input}>
                    <EmailInput 
                    name='email'
                    onChange={(evt) => handleChangeEmail(evt.target.value)}   
                    value={email}
                    size={'default'}
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
                <button 
                    className={styles.button} 
                    type='submit'>Зарегистрироваться
                </button>
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