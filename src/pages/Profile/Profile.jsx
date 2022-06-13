import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.css';
import ProfileMenu from '../../components/ProfileMnu/ProfileMenu';
import {onEditProfile} from '../../services/actions/updateUserInfo';
import {
    EmailInput,
    PasswordInput,
    Input,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';



export default function Profile () {

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

const editProfile = useCallback((e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    dispatch(onEditProfile({token, userEmail, userPassword, userName }));
    setUserEmail(email)
    setUserName(name)
    setUserPassword('')
}, [dispatch, userEmail, userPassword, userName, email, name]);
    
        return(
        <section className={styles.main}>
            <ProfileMenu/>
            <form className={styles.form} onSubmit={editProfile}>
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
                        <button
                            onClick={onReset}
                            type='button'
                            className={styles.button_reset}
                        >
                            Отмена
                        </button>
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