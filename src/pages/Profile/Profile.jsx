import React, { useEffect, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.css';
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
    
const [userEmail, setUserEmail] = useState();
const [password, setPassword] = useState('');
const [userName, setUserName] = useState();
const [isInputChange, setIsInputChange] = useState(false);

const handleChangeEmail = useCallback((e) =>{
    setUserEmail(e.target.value);
}, []);

const handleChangePassword = useCallback((e) =>{
    setPassword(e.target.value);
}, []);

const handleChangeName = useCallback((e) => {
    setUserName(e.target.value);
}, []);

function onEditProfile(e) {

};


    
        return(
        <section className={styles.main}>
            <div className={styles.container}>
                <NavLink 
                to='/profile' 
                className={styles.link} 
                activeClassName={styles.link_active}
                >Профиль</NavLink>
                <NavLink 
                to='/profile' 
                className={styles.link} 
                activeClassName={styles.link_active}
                >История заказов</NavLink>
                <NavLink 
                to='/profile' 
                className={styles.link} 
                activeClassName={styles.link_active}
                >Выход</NavLink>
                <p className={styles.text}>
                В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <form className={styles.form} onSubmit={onEditProfile}>
                <div className={styles.input}>
                    <Input
                    value={userName}
                    onChange={handleChangeName}
                    type={'text'}
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
                    value={password} 
                    size={'default'}
                    />
                </div>
                </form>
        </section>
    )
}