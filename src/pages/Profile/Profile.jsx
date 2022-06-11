import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.css';
import {onEditProfile} from '../../services/actions/updateUserInfo';
import {onSignOut} from '../../services/actions/singnOut';
import {
    EmailInput,
    PasswordInput,
    Input,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';



export default function Profile () {

const location = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch(); 

const {name, email} = useSelector((store) => store.authData);
    
const [userEmail, setUserEmail] = useState(email);
const [userPassword, setUserPassword] = useState('');
const [userName, setUserName] = useState(name);
const [isChange, setIsChange] = useState(false);

useEffect(() => {
        if (!(userEmail === email && userPassword === '' && userName === name)) {
            setIsChange(true);
        } else {
            setIsChange(false);
        }
}, [userEmail, userPassword, userName, email, name]);

const handleChangeEmail = useCallback((e) =>{
    setUserEmail(e.target.value);
}, []);

const handleChangePassword = useCallback((e) =>{
    setUserPassword(e.target.value);
}, []);

const handleChangeName = useCallback((e) => {
    setUserName(e.target.value);
}, []);

const onReset = useCallback(() => {
    setUserEmail(email)
    setUserName(name)
    setUserPassword('')
}, [email, name]);

const onEditProfile = useCallback((e) =>{
    e.preventDefault();
    const accessToken = localStorage.getItem('accessToken');
    dispatch(onEditProfile({accessToken, userEmail, userPassword, userName }));
}, [dispatch, userEmail, userPassword, userName]);

const signOut = useCallback(() =>{
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(onSignOut(refreshToken));
}, [dispatch]);

// смена цвета ссылки для 6 react-router в 5 работает activСlassName
const setActive =({isActive}) => isActive ? styles.link_active : styles.link
    
        return(
        <section className={styles.main}>
            <div className={styles.container}>
                <NavLink 
                to='/profile' 
                className={setActive} 
                >Профиль</NavLink>
                <NavLink 
                to='/profile' 
                className={styles.link} 
                >История заказов</NavLink>
                <button
                    type="button" 
                    onClick={signOut} 
                    className={styles.button} 
                >Выход</button>
                <p className={styles.text}>
                В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <form className={styles.form} onSubmit={onEditProfile}>
                <div className={styles.input}>
                    <Input
                    value={userName}
                    onChange={handleChangeName}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    size={'default'}
                    />
                </div>
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
                    value={userPassword} 
                    size={'default'}
                    />
                </div>
                    {isChange && (
                    <div className={styles.box_button}>
                        <Button
                            onClick={onReset}
                            type='primary'
                            size='medium'
                        >
                            Отмена
                        </Button>
                        <Button 
                            type='primary' 
                            size='medium'
                            >
                                Сохранить
                        </Button>
                    </div>
                )}
                </form>
        </section>
    )
}